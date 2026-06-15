'use client'

import { useState } from 'react'
import { useReceiptStore } from '@/store/receiptStore'
import { getColor } from '@/lib/personColors'
import { calcBill, type PersonBill } from '@/lib/calcBill'

function buildShareText(
  name: string,
  bill: PersonBill,
  charges: { taxEnabled: boolean; taxRate: number; serviceEnabled: boolean; serviceRate: number }
): string {
  const lines: string[] = []
  lines.push(`Hai ${name}! 👋`)
  lines.push(`Ini tagihan kamu:\n`)
  for (const it of bill.items) {
    lines.push(`• ${it.name}  Rp ${it.share.toLocaleString('id-ID')}`)
  }
  if (charges.taxEnabled && bill.taxShare > 0) {
    lines.push(`• Pajak ${charges.taxRate}%  Rp ${bill.taxShare.toLocaleString('id-ID')}`)
  }
  if (charges.serviceEnabled && bill.serviceShare > 0) {
    lines.push(`• Layanan ${charges.serviceRate}%  Rp ${bill.serviceShare.toLocaleString('id-ID')}`)
  }
  lines.push(`\nTotal: *Rp ${bill.total.toLocaleString('id-ID')}*`)
  return lines.join('\n')
}

function ShareButton({ name, bill, charges }: {
  name: string
  bill: PersonBill
  charges: { taxEnabled: boolean; taxRate: number; serviceEnabled: boolean; serviceRate: number }
}) {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    const text = buildShareText(name, bill, charges)
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ text })
        return
      } catch {
        // user dismissed, fall through
      }
    }
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-gray-700 transition-colors px-1 py-0.5"
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Tersalin!
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M8 1H3C2.45 1 2 1.45 2 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            <rect x="4" y="3" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          Salin tagihan
        </>
      )}
    </button>
  )
}

export default function BillSummary() {
  const items = useReceiptStore((s) => s.items)
  const people = useReceiptStore((s) => s.people)
  const assignments = useReceiptStore((s) => s.assignments)
  const charges = useReceiptStore((s) => s.charges)

  if (people.length === 0 || items.length === 0) {
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <p className="text-4xl mb-3">💸</p>
        <p className="text-gray-400 text-sm">Lengkapi step sebelumnya dulu.</p>
      </div>
    )
  }

  const bill = calcBill(items, people, assignments, charges)
  const grandTotal = people.reduce((sum, p) => sum + bill[p.id].total, 0)
  const unassignedCount = items.filter((_, i) => (assignments[i] ?? []).length === 0).length
  const hasTax = charges.taxEnabled
  const hasService = charges.serviceEnabled

  return (
    <div className="space-y-2">
      {people.map((p, pi) => {
        const b = bill[p.id]
        const c = getColor(pi)

        return (
          <div key={p.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {/* Person header */}
            <div className="px-4 pt-4 pb-3 flex items-center gap-3">
              <div className={`w-9 h-9 ${c.dot} rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                {p.name[0].toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{p.name}</p>
                <ShareButton name={p.name} bill={b} charges={charges} />
              </div>
              <p className="text-xl font-black text-gray-950 tabular-nums">
                Rp {b.total.toLocaleString('id-ID')}
              </p>
            </div>

            {/* Breakdown */}
            <div className={`${c.light} mx-3 mb-3 rounded-xl px-3 py-2.5 space-y-1.5`}>
              {b.items.map((it, j) => (
                <div key={j} className="flex justify-between text-xs">
                  <span className="text-gray-600 truncate mr-2">{it.name}</span>
                  <span className="font-medium text-gray-700 tabular-nums shrink-0">
                    Rp {it.share.toLocaleString('id-ID')}
                  </span>
                </div>
              ))}

              {(hasTax || hasService) && (
                <div className="border-t border-black/5 pt-1.5 mt-1 space-y-1">
                  {hasTax && b.taxShare > 0 && (
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Pajak {charges.taxRate}%</span>
                      <span className="font-medium text-gray-700 tabular-nums">
                        +Rp {b.taxShare.toLocaleString('id-ID')}
                      </span>
                    </div>
                  )}
                  {hasService && b.serviceShare > 0 && (
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Layanan {charges.serviceRate}%</span>
                      <span className="font-medium text-gray-700 tabular-nums">
                        +Rp {b.serviceShare.toLocaleString('id-ID')}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {charges.roundingEnabled && (
                <div className="border-t border-black/5 pt-1.5 mt-1 flex justify-between text-xs">
                  <span className="text-gray-500">Setelah pembulatan</span>
                  <span className={`font-bold tabular-nums ${c.text}`}>
                    Rp {b.total.toLocaleString('id-ID')}
                  </span>
                </div>
              )}
            </div>
          </div>
        )
      })}

      {/* Grand total */}
      <div className="px-1 py-3 flex justify-between items-center">
        <p className="text-sm text-gray-400">Total Keseluruhan</p>
        <p className="text-lg font-black text-gray-950 tabular-nums">
          Rp {grandTotal.toLocaleString('id-ID')}
        </p>
      </div>

      {unassignedCount > 0 && (
        <div className="bg-amber-50 border border-amber-100 rounded-2xl px-4 py-3 flex items-center gap-2">
          <span>⚠️</span>
          <p className="text-xs text-amber-700 font-medium">
            {unassignedCount} item belum di-assign — tidak dihitung
          </p>
        </div>
      )}
    </div>
  )
}
