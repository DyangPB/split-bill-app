'use client'

import PageShell from '@/components/PageShell'
import BillSummary from '@/components/BillSummary'
import { useReceiptStore } from '@/store/receiptStore'

export default function SummaryPage() {
  // Judulnya nama tempat kalau ada — "The Bill" hanya cadangan saat struk tidak
  // terbaca dan pengguna belum sempat mengetiknya sendiri.
  const merchant = useReceiptStore((s) => s.merchant)

  return (
    <PageShell
      title={merchant ?? 'The Bill'}
      subtitle="Share each person's total, or send the whole summary."
      accent="pink"
      backHref="/assign"
    >
      <BillSummary />
    </PageShell>
  )
}
