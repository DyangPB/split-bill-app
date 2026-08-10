import Groq from 'groq-sdk'
import { buildScanResult, RECEIPT_SCHEMA, SCAN_PROMPT, type RawScanPayload } from '@/lib/receiptScan'

/**
 * Klien dibuat saat request, bukan saat modul dimuat.
 *
 * Dua alasan. Konstruktor Groq melempar kalau apiKey kosong, jadi memanggilnya
 * di level modul membuat `next build` ikut gagal di mesin yang tidak memegang
 * kunci — dan memaksa kunci ikut terbundel ke artefak deploy. Selain itu di
 * Cloudflare Workers, process.env baru diisi dari binding saat fetch handler
 * berjalan, sehingga pembacaan di level modul selalu meleset.
 */
let client: Groq | undefined

function getGroq(apiKey: string): Groq {
  client ??= new Groq({ apiKey })
  return client
}

/**
 * Model vision di Groq bisa dipensiunkan sewaktu-waktu (llama-4-scout dulu
 * dipakai di sini, sekarang sudah hilang). Disimpan di env supaya penggantian
 * cukup lewat konfigurasi, bukan deploy ulang kode.
 */
const DEFAULT_MODEL = 'qwen/qwen3.6-27b'

/** Batas aman payload gambar sebelum provider menolak dengan error mentah. */
const MAX_IMAGE_BYTES = 4 * 1024 * 1024

type ScanErrorCode = 'config' | 'busy' | 'unreadable' | 'too_large' | 'unknown'

const MESSAGES: Record<ScanErrorCode, string> = {
  config: 'The scanning service is having trouble. Try entering items manually.',
  busy: 'The AI service is busy right now. Wait a moment, then try again.',
  unreadable: "Couldn't read that receipt. Try again with brighter, steadier light.",
  too_large: 'That photo is too large. Try again at a smaller resolution.',
  unknown: 'Could not read the receipt. Try again, or enter items manually.',
}

function fail(code: ScanErrorCode, status: number) {
  return Response.json({ error: MESSAGES[code], code }, { status })
}

/**
 * Pesan mentah dari provider tidak pernah sampai ke pengguna — sebelumnya
 * "The model ... does not exist" muncul apa adanya di layar.
 */
function classify(err: unknown): { code: ScanErrorCode; status: number } {
  const status = typeof (err as { status?: unknown })?.status === 'number'
    ? (err as { status: number }).status
    : 0

  if (status === 401 || status === 403 || status === 404) return { code: 'config', status: 503 }
  if (status === 413) return { code: 'too_large', status: 413 }
  if (status === 429 || status === 503) return { code: 'busy', status: 503 }
  if (status >= 500) return { code: 'busy', status: 503 }

  return { code: 'unknown', status: 500 }
}

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY
  const model = process.env.GROQ_MODEL ?? DEFAULT_MODEL

  if (!apiKey) {
    console.error('[scan-receipt] GROQ_API_KEY tidak diset')
    return fail('config', 503)
  }

  let base64: string
  let mimeType: string

  try {
    const formData = await request.formData()
    const file = formData.get('image')

    if (!(file instanceof File)) {
      return Response.json({ error: 'No image was uploaded', code: 'unknown' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    if (bytes.byteLength > MAX_IMAGE_BYTES) return fail('too_large', 413)

    base64 = Buffer.from(bytes).toString('base64')
    mimeType = file.type || 'image/jpeg'
  } catch (err) {
    console.error('[scan-receipt] gagal membaca upload:', err)
    return fail('unknown', 400)
  }

  let raw: string

  try {
    const completion = await getGroq(apiKey).chat.completions.create({
      model,
      // Qwen3 adalah reasoning model; tanpa ini jawaban diawali blok <think>.
      reasoning_effort: 'none',
      response_format: {
        type: 'json_schema',
        json_schema: { name: 'receipt', strict: true, schema: RECEIPT_SCHEMA },
      },
      max_completion_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: SCAN_PROMPT },
            { type: 'image_url', image_url: { url: `data:${mimeType};base64,${base64}` } },
          ],
        },
      ],
    })

    raw = completion.choices[0]?.message?.content?.trim() ?? ''
  } catch (err) {
    const { code, status } = classify(err)
    console.error(`[scan-receipt] panggilan model "${model}" gagal (${code}):`, err)
    return fail(code, status)
  }

  let payload: RawScanPayload

  try {
    payload = JSON.parse(raw)
  } catch {
    console.error('[scan-receipt] respons bukan JSON valid:', raw.slice(0, 500))
    return fail('unreadable', 422)
  }

  const result = buildScanResult(payload)

  // Model tidak pernah mengembalikan daftar kosong saat gagal — ia mengarang
  // struk yang tampak wajar. Jadi pengakuannya sendiri yang dipakai sebagai
  // gerbang, bukan sekadar jumlah item.
  if (!result.isReceipt || result.items.length === 0) return fail('unreadable', 422)

  return Response.json(result)
}
