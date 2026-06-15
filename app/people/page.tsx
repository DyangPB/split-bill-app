'use client'

import { useRouter } from 'next/navigation'
import StepLayout from '@/components/StepLayout'
import PeopleManager from '@/components/PeopleManager'
import { useReceiptStore } from '@/store/receiptStore'

export default function PeoplePage() {
  const router = useRouter()
  const people = useReceiptStore((s) => s.people)

  return (
    <StepLayout
      step={3}
      title="Siapa Aja?"
      subtitle="Tambahkan nama yang ikut patungan"
      backHref="/items"
      footer={
        <div className="space-y-2">
          <button
            onClick={() => router.push('/assign')}
            disabled={people.length < 2}
            className="w-full py-4 bg-gray-950 text-white font-semibold rounded-2xl disabled:opacity-25 active:scale-[0.98] transition-all text-sm"
          >
            Lanjut — Assign Item
          </button>
          {people.length < 2 && (
            <p className="text-center text-xs text-gray-400">Minimal 2 orang untuk split bill</p>
          )}
        </div>
      }
    >
      <PeopleManager />
    </StepLayout>
  )
}
