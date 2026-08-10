import type { Person, Charges } from '@/store/receiptStore'
import type { PersonBill } from '@/lib/calcBill'

/**
 * Render tagihan ke PNG lewat <canvas>.
 *
 * Sengaja tidak memakai html-to-image/html2canvas: palet aplikasi ditulis dalam
 * oklch() dan library snapshot masih tersandung di situ. Menggambar sendiri juga
 * berarti hasilnya berukuran tetap dan enak dikirim di chat, bukan potret layar
 * yang ikut berubah mengikuti lebar browser.
 */

const money = (n: number) => 'Rp ' + n.toLocaleString('id-ID')

const W = 1080
const PAD = 56

const INK = '#1b1b1b'
const CREAM = '#fffdf5'
const WHITE = '#ffffff'
const YELLOW = '#ffd400'
const MUTED = '#6b6b6b'

const HEAD = '"Segoe UI", "Helvetica Neue", Arial, sans-serif'

// Tinggi tiap bagian dihitung dulu supaya kanvas tidak perlu diubah ukurannya
// di tengah menggambar — mengubah width/height akan menghapus isinya.
const H_HEADER = 230
const H_PERSON_HEAD = 92
const H_LINE = 46
const H_NOTE = 52
const H_GAP = 36
const H_TOTAL_BAR = 132
const H_PAYER = 76
const H_FOOTER = 96

type Options = {
  merchant?: string | null
  payer?: Person | null
}

function personHeight(bill: PersonBill, charges: Charges): number {
  let h = H_PERSON_HEAD
  h += Math.max(bill.items.length, 1) * H_LINE
  if (charges.taxEnabled && bill.taxShare > 0) h += H_LINE
  if (charges.serviceEnabled && bill.serviceShare > 0) h += H_LINE
  if (charges.roundingEnabled) h += H_NOTE
  return h + H_GAP
}

/** Kotak bergaya Memphis: bayangan pejal yang digeser, lalu kotak bergaris tebal. */
function card(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  fill: string
) {
  ctx.fillStyle = INK
  ctx.fillRect(x + 8, y + 8, w, h)

  ctx.fillStyle = fill
  ctx.fillRect(x, y, w, h)

  ctx.strokeStyle = INK
  ctx.lineWidth = 4
  ctx.strokeRect(x + 2, y + 2, w - 4, h - 4)
}

/** Memotong teks yang kepanjangan supaya tidak menabrak kolom nominal. */
function clip(ctx: CanvasRenderingContext2D, text: string, max: number): string {
  if (ctx.measureText(text).width <= max) return text

  let cut = text
  while (cut.length > 1 && ctx.measureText(cut + '…').width > max) {
    cut = cut.slice(0, -1)
  }
  return cut + '…'
}

export async function generateImage(
  people: Person[],
  bill: Record<string, PersonBill>,
  charges: Charges,
  options: Options = {}
) {
  const { merchant = null, payer = null } = options

  const bodyHeight = people.reduce((sum, p) => sum + personHeight(bill[p.id], charges), 0)
  const H =
    H_HEADER + bodyHeight + H_TOTAL_BAR + (payer ? H_PAYER : 0) + H_FOOTER + PAD

  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H

  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas is not available in this browser')

  ctx.textBaseline = 'alphabetic'

  // Latar
  ctx.fillStyle = CREAM
  ctx.fillRect(0, 0, W, H)

  // Header hitam
  ctx.fillStyle = INK
  ctx.fillRect(0, 0, W, H_HEADER)

  ctx.fillStyle = WHITE
  ctx.font = `800 58px ${HEAD}`
  ctx.textAlign = 'left'
  ctx.fillText('SPLIT BILL', PAD, 92)

  if (merchant) {
    ctx.fillStyle = YELLOW
    ctx.font = `700 30px ${HEAD}`
    ctx.fillText(clip(ctx, merchant, W - PAD * 2), PAD, 138)
  }

  ctx.fillStyle = '#9a9a9a'
  ctx.font = `400 24px ${HEAD}`
  ctx.fillText(
    new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    PAD,
    merchant ? 180 : 148
  )

  const grandTotal = people.reduce((sum, p) => sum + bill[p.id].total, 0)

  ctx.textAlign = 'right'
  ctx.fillStyle = WHITE
  ctx.font = `800 44px ${HEAD}`
  ctx.fillText(money(grandTotal), W - PAD, 92)
  ctx.fillStyle = '#9a9a9a'
  ctx.font = `400 22px ${HEAD}`
  ctx.fillText('grand total', W - PAD, 126)

  // Kartu per orang
  let y = H_HEADER + 40

  for (const p of people) {
    const b = bill[p.id]
    const h = personHeight(b, charges) - H_GAP

    card(ctx, PAD, y, W - PAD * 2, h, WHITE)

    const left = PAD + 32
    const right = W - PAD - 32
    let ly = y + 58

    ctx.textAlign = 'left'
    ctx.fillStyle = INK
    ctx.font = `800 36px ${HEAD}`
    ctx.fillText(clip(ctx, p.name, 480), left, ly)

    ctx.textAlign = 'right'
    ctx.font = `800 36px ${HEAD}`
    ctx.fillText(money(b.total), right, ly)

    ly += 22
    ctx.strokeStyle = INK
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(left, ly)
    ctx.lineTo(right, ly)
    ctx.stroke()

    ly += 44

    ctx.font = `400 26px ${HEAD}`

    if (b.items.length === 0) {
      ctx.textAlign = 'left'
      ctx.fillStyle = MUTED
      ctx.fillText('Nothing assigned', left, ly)
      ly += H_LINE
    }

    for (const it of b.items) {
      ctx.textAlign = 'left'
      ctx.fillStyle = '#3d3d3d'
      ctx.fillText(clip(ctx, it.name, 560), left, ly)

      ctx.textAlign = 'right'
      ctx.fillStyle = INK
      ctx.fillText(money(it.share), right, ly)
      ly += H_LINE
    }

    ctx.fillStyle = MUTED

    if (charges.taxEnabled && b.taxShare > 0) {
      ctx.textAlign = 'left'
      ctx.fillText(`Tax ${charges.taxRate}%`, left, ly)
      ctx.textAlign = 'right'
      ctx.fillText('+' + money(b.taxShare), right, ly)
      ly += H_LINE
    }

    if (charges.serviceEnabled && b.serviceShare > 0) {
      ctx.textAlign = 'left'
      ctx.fillText(`Service ${charges.serviceRate}%`, left, ly)
      ctx.textAlign = 'right'
      ctx.fillText('+' + money(b.serviceShare), right, ly)
      ly += H_LINE
    }

    if (charges.roundingEnabled) {
      ctx.textAlign = 'left'
      ctx.font = `400 22px ${HEAD}`
      ctx.fillText(`(rounded up to ${money(charges.roundTo)})`, left, ly)
    }

    y += personHeight(b, charges)
  }

  // Palang total
  const barH = H_TOTAL_BAR - H_GAP
  card(ctx, PAD, y, W - PAD * 2, barH, YELLOW)

  ctx.fillStyle = INK
  ctx.textAlign = 'left'
  ctx.font = `800 32px ${HEAD}`
  ctx.fillText('GRAND TOTAL', PAD + 32, y + barH / 2 + 12)
  ctx.textAlign = 'right'
  ctx.font = `800 42px ${HEAD}`
  ctx.fillText(money(grandTotal), W - PAD - 32, y + barH / 2 + 14)

  y += H_TOTAL_BAR

  if (payer) {
    ctx.fillStyle = INK
    ctx.textAlign = 'center'
    ctx.font = `700 26px ${HEAD}`
    ctx.fillText(`${payer.name} paid — everyone else settles up with them.`, W / 2, y + 20)
    y += H_PAYER
  }

  ctx.fillStyle = '#b0b0b0'
  ctx.textAlign = 'center'
  ctx.font = `400 22px ${HEAD}`
  ctx.fillText('Made with Split Bill App', W / 2, y + 34)

  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'))
  if (!blob) throw new Error('Could not render the image')

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `split-bill-${Date.now()}.png`

  // Sebagian browser mengabaikan klik pada anchor yang tidak ada di dokumen.
  document.body.appendChild(link)
  link.click()
  link.remove()

  // Revoke ditunda: Safari membatalkan unduhan kalau URL-nya dicabut seketika.
  setTimeout(() => URL.revokeObjectURL(url), 10_000)
}
