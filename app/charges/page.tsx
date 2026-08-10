import PageShell from '@/components/PageShell'
import ChargesConfig from '@/components/ChargesConfig'

export default function ChargesPage() {
  return (
    <PageShell
      title="Extra Charges"
      subtitle="Set tax, service and rounding"
      accent="yellow"
      backHref="/items"
    >
      <ChargesConfig />
    </PageShell>
  )
}
