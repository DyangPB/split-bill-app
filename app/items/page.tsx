import PageShell from '@/components/PageShell'
import ItemList from '@/components/ItemList'

export default function ItemsPage() {
  return (
    <PageShell
      title="Check Items"
      subtitle="Fix anything the AI got wrong, then set your charges"
      accent="cyan"
      backHref="/scan"
    >
      <ItemList />
    </PageShell>
  )
}
