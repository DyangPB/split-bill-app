'use client'

import { useReceiptStore } from '@/store/receiptStore'

export default function ItemList() {
  const items = useReceiptStore((s) => s.items)

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-4xl mb-3">🧾</p>
        <p className="text-gray-400 text-sm">Belum ada item.</p>
      </div>
    )
  }

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="space-y-1.5">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-2xl px-4 py-3.5 flex items-center justify-between border border-gray-100">
          <div>
            <p className="text-sm font-medium text-gray-800">{item.name}</p>
            {item.qty > 1 && (
              <p className="text-xs text-gray-400 mt-0.5">{item.qty} × Rp {item.price.toLocaleString('id-ID')}</p>
            )}
          </div>
          <p className="text-sm font-semibold text-gray-900 tabular-nums">
            Rp {(item.price * item.qty).toLocaleString('id-ID')}
          </p>
        </div>
      ))}

      <div className="mt-3 px-4 py-3.5 flex justify-between items-center">
        <p className="text-sm text-gray-500">Subtotal</p>
        <p className="text-base font-bold text-gray-950 tabular-nums">Rp {total.toLocaleString('id-ID')}</p>
      </div>
    </div>
  )
}
