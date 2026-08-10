'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Icon from '@/components/Icon'
import { useReceiptStore } from '@/store/receiptStore'
import { getColor } from '@/lib/personColors'

const money = (n: number) => n.toLocaleString('id-ID')

function EmptyState({ emoji, text, href, cta }: { emoji: string; text: string; href: string; cta: string }) {
  return (
    <div className="bg-white mp-outline mp-shadow-md p-10 text-center">
      <p className="text-4xl mb-3">{emoji}</p>
      <p className="font-body text-body-lg text-on-surface-variant mb-6">{text}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 bg-blue text-white font-headline text-label-caps px-6 py-3 mp-outline mp-shadow-sm mp-press"
      >
        {cta}
        <Icon name="arrow_forward" className="w-4 h-4" />
      </Link>
    </div>
  )
}

export default function ItemAssignment() {
  const router = useRouter()
  const items = useReceiptStore((s) => s.items)
  const people = useReceiptStore((s) => s.people)
  const assignments = useReceiptStore((s) => s.assignments)
  const toggleAssignment = useReceiptStore((s) => s.toggleAssignment)

  if (items.length === 0) {
    return <EmptyState emoji="🧾" text="No items to assign yet." href="/items" cta="GO TO ITEMS" />
  }

  // Navbar bisa melompat langsung ke sini, jadi syarat dua orang ditegakkan di
  // halamannya juga — bukan hanya di tombol halaman sebelumnya.
  if (people.length < 2) {
    return (
      <EmptyState
        emoji="👥"
        text="A split needs at least two people. Add everyone first."
        href="/people"
        cta="ADD PEOPLE"
      />
    )
  }

  const unassigned = items.filter((_, i) => (assignments[i] ?? []).length === 0).length

  /** Isi satu baris ke semua orang; kalau sudah penuh, kosongkan lagi. */
  function toggleRow(itemIndex: number) {
    const assigned = assignments[itemIndex] ?? []
    const everyone = assigned.length === people.length

    for (const p of people) {
      const has = assigned.includes(p.id)
      if (everyone || !has) toggleAssignment(itemIndex, p.id)
    }
  }

  return (
    <div className="w-full">
      {unassigned > 0 && (
        <div className="inline-flex items-center gap-2 bg-error text-white font-headline text-label-caps px-4 py-2 rounded-full mp-outline mp-shadow-sm mb-8">
          <Icon name="warning" className="w-4 h-4" />
          {unassigned} {unassigned === 1 ? 'ITEM' : 'ITEMS'} UNASSIGNED
        </div>
      )}

      {/* Matriks — desktop */}
      <div className="hidden md:block bg-cream rounded-xl mp-outline mp-shadow-md p-card-padding overflow-x-auto">
        <table className="w-full min-w-[720px]">
          <thead>
            <tr>
              <th className="w-1/3 text-left pb-6 border-b-[3px] border-ink font-headline text-label-caps">
                ITEM
              </th>
              {people.map((p, pi) => {
                const c = getColor(pi)
                return (
                  <th key={p.id} className="pb-6 border-b-[3px] border-ink">
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className={`w-10 h-10 rounded-full mp-outline ${c.dot} ${c.on} flex items-center justify-center font-headline font-black`}
                      >
                        {p.name[0].toUpperCase()}
                      </span>
                      <span className="font-body text-sm font-bold max-w-[80px] truncate">{p.name}</span>
                    </div>
                  </th>
                )
              })}
              <th className="pb-6 border-b-[3px] border-ink font-headline text-label-caps">QUICK</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, i) => {
              const assigned = assignments[i] ?? []
              const isUnassigned = assigned.length === 0
              const itemTotal = item.price * item.qty

              return (
                <tr
                  key={i}
                  className={`border-b-[3px] border-ink last:border-b-0 hover:bg-surface-container ${
                    isUnassigned ? 'bg-error-container/40' : ''
                  }`}
                >
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-2">
                      {isUnassigned && (
                        <span className="w-3 h-3 bg-error rounded-full shrink-0" title="Unassigned" />
                      )}
                      <div>
                        <p className="font-body font-bold">
                          {item.name}
                          {item.qty > 1 && <span className="text-on-surface-variant"> ×{item.qty}</span>}
                        </p>
                        <p className="font-headline text-money text-secondary mt-1 tabular-nums">
                          {money(itemTotal)}
                        </p>
                        {assigned.length > 1 && (
                          <p className="font-body text-xs text-on-surface-variant mt-1">
                            Rp {money(Math.ceil(itemTotal / assigned.length))} each
                          </p>
                        )}
                      </div>
                    </div>
                  </td>

                  {people.map((p) => (
                    <td key={p.id} className="py-4 text-center">
                      <label className="inline-flex cursor-pointer">
                        <span className="sr-only">
                          Assign {item.name} to {p.name}
                        </span>
                        <input
                          type="checkbox"
                          className="mp-check"
                          checked={assigned.includes(p.id)}
                          onChange={() => toggleAssignment(i, p.id)}
                        />
                      </label>
                    </td>
                  ))}

                  <td className="py-4 text-center">
                    <button
                      onClick={() => toggleRow(i)}
                      className={`px-3 py-1 mp-outline rounded-full font-headline text-xs mp-shadow-sm hover:bg-yellow ${
                        assigned.length === people.length ? 'bg-yellow' : 'bg-white'
                      }`}
                    >
                      ALL
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Kartu — mobile. Matriks 720px tidak muat di layar HP. */}
      <div className="md:hidden flex flex-col gap-4">
        {items.map((item, i) => {
          const assigned = assignments[i] ?? []
          const itemTotal = item.price * item.qty

          return (
            <div
              key={i}
              className={`bg-white mp-outline mp-shadow-sm p-4 ${
                assigned.length === 0 ? 'border-l-8 border-l-error' : ''
              }`}
            >
              <div className="flex justify-between items-start gap-3 mb-3">
                <div className="min-w-0">
                  <p className="font-body font-bold truncate">{item.name}</p>
                  {item.qty > 1 && (
                    <p className="font-body text-xs text-on-surface-variant">×{item.qty}</p>
                  )}
                </div>
                <p className="font-headline text-money text-secondary tabular-nums shrink-0">
                  {money(itemTotal)}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {people.map((p, pi) => {
                  const c = getColor(pi)
                  const active = assigned.includes(p.id)

                  return (
                    <button
                      key={p.id}
                      onClick={() => toggleAssignment(i, p.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 font-headline text-xs mp-outline ${
                        active ? `${c.dot} ${c.on} mp-shadow-sm` : 'bg-white text-ink'
                      }`}
                    >
                      {active && <Icon name="check" className="w-3 h-3" strokeWidth={3} />}
                      {p.name}
                    </button>
                  )
                })}
                <button
                  onClick={() => toggleRow(i)}
                  className={`px-3 py-1.5 mp-outline rounded-full font-headline text-xs ${
                    assigned.length === people.length ? 'bg-yellow' : 'bg-white'
                  }`}
                >
                  ALL
                </button>
              </div>

              {assigned.length > 1 && (
                <p className="font-body text-xs text-on-surface-variant mt-3">
                  Rp {money(Math.ceil(itemTotal / assigned.length))} each
                </p>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-12 w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4">
        {unassigned > 0 && (
          <div className="bg-error-container mp-outline mp-shadow-sm p-4 flex items-start gap-3 sm:mr-auto">
            <Icon name="warning" className="w-6 h-6 text-error shrink-0 mt-0.5" />
            <p className="font-body text-sm font-bold">
              Every item needs an owner. {unassigned}{' '}
              {unassigned === 1 ? 'item is' : 'items are'} still unassigned.
            </p>
          </div>
        )}

        <button
          onClick={() => router.push('/summary')}
          disabled={unassigned > 0}
          title={unassigned > 0 ? 'Assign every item to continue' : undefined}
          className="bg-blue text-white font-headline text-body-lg px-8 py-4 rounded-xl mp-outline mp-shadow-lg mp-press flex items-center justify-center gap-4 disabled:opacity-40 disabled:pointer-events-none shrink-0"
        >
          See the bill
          <Icon name="arrow_forward" className="w-7 h-7" />
        </button>
      </div>
    </div>
  )
}
