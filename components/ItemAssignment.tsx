'use client'

import { useReceiptStore } from '@/store/receiptStore'
import { getColor } from '@/lib/personColors'

export default function ItemAssignment() {
  const items = useReceiptStore((s) => s.items)
  const people = useReceiptStore((s) => s.people)
  const assignments = useReceiptStore((s) => s.assignments)
  const toggleAssignment = useReceiptStore((s) => s.toggleAssignment)

  if (items.length === 0) return (
    <div className="flex flex-col items-center py-16 text-center">
      <p className="text-4xl mb-3">🧾</p>
      <p className="text-gray-400 text-sm">Scan struk dulu di step 1.</p>
    </div>
  )

  if (people.length === 0) return (
    <div className="flex flex-col items-center py-16 text-center">
      <p className="text-4xl mb-3">👥</p>
      <p className="text-gray-400 text-sm">Tambahkan orang dulu di step 3.</p>
    </div>
  )

  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const assigned = assignments[i] ?? []
        const itemTotal = item.price * item.qty

        return (
          <div key={i} className={`bg-white rounded-2xl border transition-colors ${assigned.length > 0 ? 'border-gray-200' : 'border-gray-100'}`}>
            {/* Item row */}
            <div className="px-4 py-3 flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-800">{item.name}</p>
                {item.qty > 1 && <p className="text-xs text-gray-400">{item.qty}×</p>}
              </div>
              <p className="text-sm font-semibold text-gray-900 tabular-nums ml-3 shrink-0">
                Rp {itemTotal.toLocaleString('id-ID')}
              </p>
            </div>

            {/* Person chips */}
            <div className="px-4 pb-3 flex flex-wrap gap-1.5">
              {people.map((p, pi) => {
                const active = assigned.includes(p.id)
                const c = getColor(pi)
                return (
                  <button
                    key={p.id}
                    onClick={() => toggleAssignment(i, p.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
                      active ? `${c.dot} text-white` : `${c.light} ${c.text}`
                    }`}
                  >
                    {active && <span className="text-[10px]">✓</span>}
                    {p.name}
                  </button>
                )
              })}
            </div>

            {assigned.length > 1 && (
              <p className="px-4 pb-3 text-xs text-gray-400">
                Rp {Math.ceil(itemTotal / assigned.length).toLocaleString('id-ID')} / orang
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
