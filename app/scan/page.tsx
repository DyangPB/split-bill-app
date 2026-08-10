import PageShell from '@/components/PageShell'
import ReceiptUpload from '@/components/ReceiptUpload'

export default function ScanPage() {
  return (
    <PageShell
      title="Scan Receipt"
      subtitle="Drop a receipt, snap one, or type it in. We don't judge how you split."
      accent="yellow"
      backHref="/"
    >
      <ReceiptUpload />
    </PageShell>
  )
}
