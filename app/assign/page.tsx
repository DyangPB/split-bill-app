import PageShell from '@/components/PageShell'
import ItemAssignment from '@/components/ItemAssignment'

export default function AssignPage() {
  return (
    <PageShell
      title="Assign the Item"
      subtitle="Check off who ordered each item"
      accent="primary-fixed"
      backHref="/people"
    >
      <ItemAssignment />
    </PageShell>
  )
}
