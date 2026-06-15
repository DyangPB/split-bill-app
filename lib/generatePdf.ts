import type { Person, Charges } from '@/store/receiptStore'
import type { PersonBill } from '@/lib/calcBill'

const money = (n: number) => 'Rp ' + n.toLocaleString('id-ID')

export async function generatePDF(
  people: Person[],
  bill: Record<string, PersonBill>,
  charges: Charges
) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })

  const W = doc.internal.pageSize.getWidth()
  const M = 20 // margin

  // ── Header bar ──────────────────────────────────────────────
  doc.setFillColor(17, 17, 17)
  doc.rect(0, 0, W, 42, 'F')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(20)
  doc.setTextColor(255, 255, 255)
  doc.text('Split Bill', M, 20)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(150, 150, 150)
  doc.text(
    new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    M,
    30
  )

  const grandTotal = people.reduce((s, p) => s + bill[p.id].total, 0)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.setTextColor(200, 200, 200)
  doc.text(money(grandTotal), W - M, 20, { align: 'right' })
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.text('total keseluruhan', W - M, 28, { align: 'right' })

  let y = 58

  // ── Per person ───────────────────────────────────────────────
  for (const p of people) {
    const b = bill[p.id]

    if (y > 255) {
      doc.addPage()
      y = 20
    }

    // Name row
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.setTextColor(17, 17, 17)
    doc.text(p.name, M, y)
    doc.text(money(b.total), W - M, y, { align: 'right' })
    y += 5

    // Thin divider
    doc.setDrawColor(220, 220, 220)
    doc.setLineWidth(0.25)
    doc.line(M, y, W - M, y)
    y += 6

    // Items
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    for (const it of b.items) {
      if (y > 270) { doc.addPage(); y = 20 }
      doc.setTextColor(80, 80, 80)
      doc.text(it.name, M + 3, y)
      doc.setTextColor(60, 60, 60)
      doc.text(money(it.share), W - M, y, { align: 'right' })
      y += 5.5
    }

    // Tax
    if (charges.taxEnabled && b.taxShare > 0) {
      doc.setTextColor(130, 130, 130)
      doc.text(`Pajak ${charges.taxRate}%`, M + 3, y)
      doc.text(`+${money(b.taxShare)}`, W - M, y, { align: 'right' })
      y += 5.5
    }

    // Service
    if (charges.serviceEnabled && b.serviceShare > 0) {
      doc.setTextColor(130, 130, 130)
      doc.text(`Biaya Layanan ${charges.serviceRate}%`, M + 3, y)
      doc.text(`+${money(b.serviceShare)}`, W - M, y, { align: 'right' })
      y += 5.5
    }

    // Rounding note
    if (charges.roundingEnabled) {
      doc.setTextColor(160, 160, 160)
      doc.text(`(dibulatkan ke Rp ${charges.roundTo.toLocaleString('id-ID')})`, M + 3, y)
      y += 5.5
    }

    y += 10
  }

  // ── Grand total bar ──────────────────────────────────────────
  if (y > 265) { doc.addPage(); y = 20 }

  doc.setFillColor(245, 245, 245)
  doc.roundedRect(M, y, W - 2 * M, 14, 2, 2, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.setTextColor(17, 17, 17)
  doc.text('Total Keseluruhan', M + 5, y + 9)
  doc.text(money(grandTotal), W - M - 5, y + 9, { align: 'right' })
  y += 24

  // ── Footer ───────────────────────────────────────────────────
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(190, 190, 190)
  doc.text('Dibuat dengan Split Bill App', W / 2, y, { align: 'center' })

  doc.save(`split-bill-${Date.now()}.pdf`)
}
