import PageShell from '@/components/PageShell'
import PeopleManager from '@/components/PeopleManager'

export default function PeoplePage() {
  return (
    <PageShell
      title="Who's In?"
      subtitle="Add everyone splitting this bill"
      accent="cyan"
      backHref="/charges"
    >
      <PeopleManager />
    </PageShell>
  )
}
