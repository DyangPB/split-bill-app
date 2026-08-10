/**
 * Lapisan deterministik untuk hasil scan struk.
 *
 * Pembagian tugas yang disengaja: model AI hanya MEMBACA (segmentasi baris,
 * salin angka apa adanya). Semua interpretasi angka dilakukan di sini, di kode
 * biasa yang bisa diuji. Model tidak boleh menghitung apa pun.
 */

export type ChargeKind = 'percent' | 'amount'

/** Nilai pajak/service seperti tercetak di struk — bisa persen ATAU rupiah. */
export type RawCharge = {
  kind: ChargeKind
  value_text: string
} | null

export type RawScanPayload = {
  is_receipt?: unknown
  merchant?: unknown
  items?: unknown
  subtotal_text?: unknown
  tax?: unknown
  service?: unknown
}

export type ScannedItem = {
  name: string
  /** Harga SATUAN dalam rupiah, diturunkan dari total baris ÷ qty. */
  price: number
  qty: number
}

/**
 * Selisih antara jumlah baris item dengan subtotal yang tertulis di struk.
 * Dilaporkan apa adanya — item TIDAK pernah diubah diam-diam agar cocok.
 */
export type Reconciliation = {
  itemsSum: number
  statedSubtotal: number
  difference: number
  matches: boolean
}

export type ScanResult = {
  /**
   * Apakah gambar ini benar-benar struk. WAJIB ditanyakan eksplisit: diberi
   * gambar kosong, model tetap mengarang daftar item lengkap yang konsisten
   * secara internal, jadi tidak bisa dideteksi dari items kosong maupun dari
   * kecocokan subtotal.
   */
  isReceipt: boolean
  /** Nama restoran/toko dari kepala struk, atau null kalau tidak terbaca. */
  merchant: string | null
  items: ScannedItem[]
  subtotal: number
  /** Persentase 0–100, atau null kalau tidak terbaca / tidak masuk akal. */
  taxRate: number | null
  serviceRate: number | null
  reconciliation: Reconciliation | null
}

/**
 * Struk Indonesia memakai '.' sebagai pemisah ribuan ("8.000" = 8000).
 * Model bahasa cenderung membacanya sebagai desimal dan mengembalikan 8, jadi
 * angka selalu diminta sebagai STRING lalu di-parse di sini.
 */
export function parseIdr(text: unknown): number | null {
  if (typeof text === 'number' && Number.isFinite(text)) return Math.round(Math.abs(text))
  if (typeof text !== 'string') return null

  let s = text.trim()
  if (!s) return null

  // Buang bagian sen ("1.234.567,89" → "1.234.567") hanya bila memang ada
  // pemisah lain sebelumnya, supaya "32.500" tidak ikut terpotong.
  if (/[.,]\d{2}$/.test(s) && /[.,].*[.,]/.test(s)) {
    s = s.slice(0, -3)
  }

  const digits = s.replace(/\D/g, '')
  if (!digits) return null

  const n = parseInt(digits, 10)
  return Number.isFinite(n) ? n : null
}

/** Persentase dari teks seperti "11%", "11", "11,0". */
export function parsePercent(text: unknown): number | null {
  if (typeof text === 'number' && Number.isFinite(text)) return text
  if (typeof text !== 'string') return null

  const m = text.replace(',', '.').match(/-?\d+(\.\d+)?/)
  if (!m) return null

  const n = parseFloat(m[0])
  return Number.isFinite(n) ? n : null
}

/**
 * Domain memakai SATU representasi: persentase. Struk yang hanya mencantumkan
 * nominal rupiah dikonversi memakai subtotal. Nilai di luar 0–100 dibuang —
 * pajak 3630% jauh lebih berbahaya daripada tidak ada pajak sama sekali.
 */
export function toRate(charge: unknown, subtotal: number): number | null {
  if (!charge || typeof charge !== 'object') return null

  const { kind, value_text: valueText } = charge as { kind?: unknown; value_text?: unknown }

  let rate: number | null = null

  if (kind === 'percent') {
    rate = parsePercent(valueText)
  } else if (kind === 'amount') {
    const amount = parseIdr(valueText)
    if (amount == null || subtotal <= 0) return null
    rate = (amount / subtotal) * 100
  }

  if (rate == null || !Number.isFinite(rate)) return null

  const rounded = Math.round(rate * 100) / 100
  if (rounded <= 0 || rounded > 100) return null

  return rounded
}

/**
 * Yang tercetak di struk adalah TOTAL BARIS; harga satuan sering tidak ada.
 * Jadi total baris yang dibaca, harga satuan yang diturunkan.
 */
export function toItems(rawItems: unknown): ScannedItem[] {
  if (!Array.isArray(rawItems)) return []

  const items: ScannedItem[] = []

  for (const raw of rawItems) {
    if (!raw || typeof raw !== 'object') continue

    const r = raw as Record<string, unknown>

    const name = String(r.name ?? '').trim()
    if (!name) continue

    const qtyRaw = Number(r.qty ?? 1)
    const qty = Number.isFinite(qtyRaw) ? Math.max(1, Math.round(qtyRaw)) : 1

    const lineTotal = parseIdr(r.line_total_text)
    if (lineTotal == null || lineTotal <= 0) continue

    items.push({ name, price: Math.round(lineTotal / qty), qty })
  }

  return items
}

/**
 * Nama merchant dipakai sebagai judul, bukan sebagai angka — jadi cukup
 * dibersihkan seadanya. Placeholder yang sering dikarang model dibuang.
 */
export function toMerchant(raw: unknown): string | null {
  if (typeof raw !== 'string') return null

  const name = raw.trim().replace(/\s+/g, ' ')
  if (!name) return null
  if (/^(n\/a|-|unknown|tidak (ada|diketahui)|null)$/i.test(name)) return null

  return name.slice(0, 60)
}

export function reconcile(items: ScannedItem[], subtotal: number): Reconciliation | null {
  if (subtotal <= 0 || items.length === 0) return null

  const itemsSum = items.reduce((sum, it) => sum + it.price * it.qty, 0)
  const difference = itemsSum - subtotal

  // Toleransi kecil untuk pembulatan harga satuan (total baris ÷ qty).
  const tolerance = items.reduce((t, it) => t + it.qty, 0)

  return {
    itemsSum,
    statedSubtotal: subtotal,
    difference,
    matches: Math.abs(difference) <= tolerance,
  }
}

export function buildScanResult(payload: RawScanPayload): ScanResult {
  const items = toItems(payload.items)
  const subtotal = parseIdr(payload.subtotal_text) ?? 0

  return {
    isReceipt: payload.is_receipt === true,
    merchant: toMerchant(payload.merchant),
    items,
    subtotal,
    taxRate: toRate(payload.tax, subtotal),
    serviceRate: toRate(payload.service, subtotal),
    reconciliation: reconcile(items, subtotal),
  }
}

/** Skema structured output — dijamin cocok oleh Groq, bukan sekadar diminta. */
export const RECEIPT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['is_receipt', 'merchant', 'items', 'subtotal_text', 'tax', 'service'],
  properties: {
    is_receipt: { type: 'boolean' },
    merchant: { type: ['string', 'null'] },
    items: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'qty', 'line_total_text'],
        properties: {
          name: { type: 'string' },
          qty: { type: 'integer' },
          line_total_text: { type: 'string' },
        },
      },
    },
    subtotal_text: { type: 'string' },
    tax: {
      type: ['object', 'null'],
      additionalProperties: false,
      required: ['kind', 'value_text'],
      properties: {
        kind: { type: 'string', enum: ['percent', 'amount'] },
        value_text: { type: 'string' },
      },
    },
    service: {
      type: ['object', 'null'],
      additionalProperties: false,
      required: ['kind', 'value_text'],
      properties: {
        kind: { type: 'string', enum: ['percent', 'amount'] },
        value_text: { type: 'string' },
      },
    },
  },
} as const

export const SCAN_PROMPT = `Kamu membaca struk belanja Indonesia. Tugasmu hanya MENYALIN, bukan menghitung.

ATURAN:

0. PERTAMA, tentukan is_receipt. Isi true HANYA jika gambar ini benar-benar
   struk/nota belanja yang tulisannya bisa kamu baca.
   Isi false kalau gambar kosong, buram total, gelap, bukan struk, atau kamu
   tidak yakin. Kalau is_receipt false, kembalikan items sebagai array kosong,
   merchant null, subtotal_text "0", tax null, service null.
   JANGAN PERNAH mengarang item yang tidak terlihat jelas di gambar. Lebih baik
   menjawab false daripada menebak — tebakanmu akan dipakai membagi tagihan uang
   sungguhan.

1. Satu baris item di struk = satu entry. Item dengan nama sama tapi varian/harga
   berbeda tetap entry terpisah (contoh: "Es Teh Manis" dan "Es Teh Tawar").

2. name = nama item saja. Buang angka qty yang menempel di depan nama
   (tulis "Nasi Goreng", bukan "2x Nasi Goreng"). Pertahankan varian, ukuran,
   topping, dan catatan yang menempel pada nama.

3. qty = jumlah item pada baris tersebut. Kalau tidak tertulis, isi 1.

4. line_total_text = angka TOTAL untuk baris itu — angka paling kanan pada baris.
   BUKAN harga satuan. Kalau struk menulis "2 x 25.000    50.000",
   maka qty=2 dan line_total_text="50.000".

5. Salin SEMUA angka PERSIS seperti tercetak, termasuk titik pemisah ribuan.
   "8.000" ditulis "8.000" — JANGAN diubah jadi 8 atau 8000.

6. subtotal_text = subtotal yang tertulis di struk (sebelum pajak/service).

7. tax dan service: kalau struk menulis persen ("PPN 11%") pakai kind="percent"
   dan value_text="11". Kalau hanya nominal rupiah ("PPN 7.150") pakai
   kind="amount" dan value_text="7.150". Kalau tidak ada, isi null.

8. JANGAN menghitung ulang, menjumlahkan, atau memperbaiki angka apa pun.
   Salin apa yang terlihat. Selisih akan ditangani di luar.

9. merchant = nama restoran/toko yang tercetak di KEPALA struk, salin apa adanya
   (contoh: "Warung Padang Sederhana", "Kopi Kenangan").
   Jangan sertakan alamat, nomor telepon, NPWP, nomor meja, atau nama kasir.
   Kalau nama tempatnya tidak terlihat jelas, isi null — jangan menebak.`
