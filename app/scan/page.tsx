import StepLayout from '@/components/StepLayout'
import ReceiptUpload from '@/components/ReceiptUpload'

export default function ScanPage() {
  return (
    <StepLayout
      step={1}
      title="Scan Struk"
      subtitle="Foto struk belanjaan kamu"
      backHref="/"
    >
      <ReceiptUpload />
    </StepLayout>
  )
}
