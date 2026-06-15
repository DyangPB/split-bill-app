'use client'

import { useRouter } from 'next/navigation'
import StepLayout from '@/components/StepLayout'
import ItemAssignment from '@/components/ItemAssignment'
import { useReceiptStore } from '@/store/receiptStore'

export default function AssignPage() {
  const router = useRouter()
  const items = useReceiptStore((s) => s.items)
  const assignments = useReceiptStore((s) => s.assignments)

  const assignedCount = items.filter((_, i) => (assignments[i] ?? []).length > 0).length
  const allAssigned = assignedCount === items.length && items.length > 0

  return (
    <StepLayout
      step={4}
      title="Siapa Pesan Apa?"
      subtitle="Tap nama untuk assign item ke orang"
      backHref="/people"
      footer={
        <div className="space-y-2">
          <button
            onClick={() => router.push('/charges')}
            disabled={!allAssigned}
            className="w-full py-4 bg-gray-950 text-white font-semibold rounded-2xl disabled:opacity-25 active:scale-[0.98] transition-all text-sm"
          >
            Lanjut — Biaya Tambahan
          </button>
          {!allAssigned && items.length > 0 && (
            <p className="text-center text-xs text-gray-400">
              {assignedCount} / {items.length} item sudah di-assign
            </p>
          )}
        </div>
      }
    >
      <ItemAssignment />
    </StepLayout>
  )
}
