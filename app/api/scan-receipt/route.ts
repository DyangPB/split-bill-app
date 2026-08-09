import Groq from 'groq-sdk'

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

function parsePrice(val: unknown): number {
  if (typeof val === 'number') return Math.round(Math.abs(val))
  if (typeof val === 'string') return parseInt(val.replace(/\D/g, ''), 10) || 0
  return 0
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('image') as File | null
    if (!file) return Response.json({ error: 'Tidak ada gambar yang dikirim' }, { status: 400 })

    const bytes = await file.arrayBuffer()
    const base64 = Buffer.from(bytes).toString('base64')
    const mimeType = file.type || 'image/jpeg'

    const prompt = `Kamu adalah AI spesialis pembaca struk belanja yang sangat teliti.

ATURAN WAJIB:

1. BACA SETIAP BARIS ITEM SECARA TERPISAH.
   - Item dengan nama SAMA tapi VARIAN/TIPE/CATATAN BERBEDA = item BERBEDA.
   - Contoh BENAR:
     {"name":"Es Teh Manis","price":8000,"qty":1}
     {"name":"Es Teh Tawar","price":7000,"qty":1}
   - Contoh SALAH (jangan lakukan ini):
     {"name":"Es Teh","price":7500,"qty":2}  ← SALAH karena harga berbeda!

2. Nama item harus PERSIS seperti di struk, termasuk varian, ukuran, topping, modifier.
   Contoh: "Latte (Iced)", "Nasi Goreng +Telur", "Paket A (Spesial)"

3. WAJIB VERIFIKASI sebelum mengembalikan:
   Hitung ulang: SUM(price × qty) untuk semua item.
   Hasil harus sama dengan subtotal yang tertulis di struk.
   Jika berbeda, cek ulang harga tiap item sampai cocok.

4. Kembalikan HANYA JSON murni tanpa markdown:
{
  "items": [
    {"name": "nama lengkap persis dari struk", "price": 12000, "qty": 1}
  ],
  "subtotal": 50000,
  "tax": 11,
  "service": 5
}

- price = harga SATUAN (integer rupiah)
- qty = jumlah item
- subtotal = total sebelum pajak/service, baca langsung dari struk
- tax = persentase pajak/PPN (null jika tidak ada)
- service = persentase biaya layanan (null jika tidak ada)
- PASTIKAN: SUM(price × qty) == subtotal`

    const completion = await groq.chat.completions.create({
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: prompt },
            { type: 'image_url', image_url: { url: `data:${mimeType};base64,${base64}` } },
          ],
        },
      ],
      max_tokens: 4096,
    })

    const raw = completion.choices[0]?.message?.content?.trim() ?? ''

    const jsonMatch = raw.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return Response.json(
        { error: `AI tidak mengembalikan JSON. Respons: ${raw.slice(0, 200)}` },
        { status: 500 }
      )
    }

    const parsed = JSON.parse(jsonMatch[0])
    if (!Array.isArray(parsed.items)) {
      return Response.json({ error: 'Format items tidak valid dari AI' }, { status: 500 })
    }

    // Normalisasi items
    let items = parsed.items
      .map((it: Record<string, unknown>) => ({
        name: String(it.name ?? it.nama ?? it.item ?? '').trim(),
        price: parsePrice(it.price ?? it.harga ?? it.harga_satuan ?? 0),
        qty: Math.max(1, Number(it.qty ?? it.jumlah ?? it.quantity ?? 1)),
      }))
      .filter((it: { name: string; price: number }) => it.name && it.price > 0)

    const subtotal = parsePrice(parsed.subtotal ?? parsed.total ?? 0)
    const itemsSum = items.reduce((s: number, it: { price: number; qty: number }) => s + it.price * it.qty, 0)

    // Koreksi jika selisih kecil (< 5%): sesuaikan item terbesar supaya sum = subtotal
    if (subtotal > 0 && itemsSum !== subtotal) {
      const diff = subtotal - itemsSum
      const diffPercent = Math.abs(diff) / subtotal

      if (diffPercent < 0.05 && items.length > 0) {
        // Cari item dengan total harga tertinggi (paling mungkin ada rounding error)
        let maxIdx = 0
        let maxTotal = 0
        items.forEach((it: { price: number; qty: number }, i: number) => {
          if (it.price * it.qty > maxTotal) { maxTotal = it.price * it.qty; maxIdx = i }
        })
        items[maxIdx] = {
          ...items[maxIdx],
          price: items[maxIdx].price + Math.round(diff / items[maxIdx].qty),
        }
      }
    }

    const tax = parsed.tax != null ? Math.round(Number(parsed.tax)) : null
    const service = parsed.service != null ? Math.round(Number(parsed.service)) : null

    return Response.json({ items, subtotal, tax, service })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return Response.json({ error: message }, { status: 500 })
  }
}
