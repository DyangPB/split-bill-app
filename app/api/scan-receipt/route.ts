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

    if (!file) {
      return Response.json({ error: 'Tidak ada gambar yang dikirim' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const base64 = Buffer.from(bytes).toString('base64')
    const mimeType = file.type || 'image/jpeg'

    const prompt = `Kamu adalah AI pembaca struk belanja.
Lihat gambar struk ini dan ekstrak SEMUA item beserta harganya.

Kembalikan HANYA JSON murni (tanpa markdown, tanpa penjelasan), format:
{"items":[{"name":"nama item","price":12000,"qty":1}],"total":12000}

Aturan:
- price dan total harus angka bulat (integer), bukan string
- qty adalah jumlah item (default 1 jika tidak tertulis)
- Jika ada harga satuan dan qty, kalkulasi sendiri
- Sertakan semua baris item yang ada di struk`

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
      max_tokens: 2048,
    })

    const raw = completion.choices[0]?.message?.content?.trim() ?? ''

    // Ekstrak JSON object dari mana saja dalam teks respons
    const jsonMatch = raw.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return Response.json(
        { error: `AI tidak mengembalikan format JSON. Respons: ${raw.slice(0, 200)}` },
        { status: 500 }
      )
    }

    const parsed = JSON.parse(jsonMatch[0])

    if (!Array.isArray(parsed.items)) {
      return Response.json({ error: 'Format items tidak valid dari AI' }, { status: 500 })
    }

    // Normalisasi tiap item — handle berbagai format yang mungkin dikembalikan model
    const items = parsed.items
      .map((it: Record<string, unknown>) => ({
        name: String(it.name ?? it.nama ?? it.item ?? '').trim(),
        price: parsePrice(it.price ?? it.harga ?? it.harga_satuan ?? 0),
        qty: Math.max(1, Number(it.qty ?? it.jumlah ?? it.quantity ?? 1)),
      }))
      .filter((it: { name: string; price: number }) => it.name && it.price > 0)

    return Response.json({ items, total: parsePrice(parsed.total ?? 0) })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return Response.json({ error: message }, { status: 500 })
  }
}
