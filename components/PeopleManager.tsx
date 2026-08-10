'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Icon from '@/components/Icon'
import { useReceiptStore } from '@/store/receiptStore'
import { getColor } from '@/lib/personColors'

/** Membagi tagihan sendirian bukan "split" — minimal dua orang. */
const MIN_PEOPLE = 2

export default function PeopleManager() {
  const [input, setInput] = useState('')
  const router = useRouter()
  const people = useReceiptStore((s) => s.people)
  const payerId = useReceiptStore((s) => s.payerId)
  const addPerson = useReceiptStore((s) => s.addPerson)
  const removePerson = useReceiptStore((s) => s.removePerson)
  const setPayer = useReceiptStore((s) => s.setPayer)

  const enoughPeople = people.length >= MIN_PEOPLE
  const missing = MIN_PEOPLE - people.length

  function handleAdd() {
    const name = input.trim()
    if (!name) return
    addPerson(name)
    setInput('')
  }

  return (
    <div className="w-full">
      {/* Input */}
      <section className="max-w-2xl w-full mx-auto mb-14">
        <div className="flex flex-col sm:flex-row gap-4 items-end bg-white p-card-padding mp-outline mp-shadow-lg rounded-xl">
          <div className="flex-1 w-full">
            <label htmlFor="friend-name" className="block font-headline text-label-caps mb-2 pl-2">
              FRIEND NAME
            </label>
            <input
              id="friend-name"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
              placeholder="e.g. Alex"
              className="w-full h-14 px-4 font-body text-body-lg rounded-2xl mp-outline mp-shadow-sm mp-input bg-white"
            />
          </div>
          <button
            onClick={handleAdd}
            disabled={!input.trim()}
            className="h-14 px-8 font-headline text-label-caps bg-pink text-white rounded-2xl mp-outline mp-shadow-md mp-press whitespace-nowrap disabled:opacity-40 disabled:pointer-events-none"
          >
            ADD
          </button>
        </div>
      </section>

      {/* Grid */}
      <section className="w-full">
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-8">
          <h3 className="font-headline text-headline-sm">ADDED ({people.length})</h3>
          {people.length > 0 && (
            <p className="font-body text-sm text-on-surface-variant">
              Tap <span className="font-bold">Paid the bill</span> on whoever covered it.
            </p>
          )}
        </div>

        {people.length === 0 ? (
          <div className="bg-white mp-outline mp-shadow-md p-10 text-center">
            <p className="text-4xl mb-3">👥</p>
            <p className="font-body text-body-lg text-on-surface-variant">
              Nobody yet. Add everyone splitting this bill.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {people.map((p, i) => {
              const c = getColor(i)
              const isPayer = payerId === p.id

              return (
                <div
                  key={p.id}
                  className={`bg-white p-4 rounded-xl mp-outline flex flex-col gap-4 transition-shadow ${
                    isPayer ? 'mp-shadow-lg' : 'mp-shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-4 min-w-0">
                      <div
                        className={`w-16 h-16 rounded-full mp-outline ${c.dot} ${c.on} shadow-[3px_3px_0px_0px_rgba(27,27,27,1)] flex items-center justify-center shrink-0`}
                      >
                        <span className="font-headline text-headline-sm">
                          {p.name[0].toUpperCase()}
                        </span>
                      </div>
                      <p className="font-headline text-body-lg font-bold leading-none truncate">
                        {p.name}
                      </p>
                    </div>

                    <button
                      aria-label={`Remove ${p.name}`}
                      onClick={() => removePerson(p.id)}
                      className="w-10 h-10 rounded-full bg-tomato text-white mp-outline shadow-[2px_2px_0px_0px_rgba(27,27,27,1)] flex items-center justify-center mp-press shrink-0"
                    >
                      <Icon name="close" className="w-5 h-5" strokeWidth={3} />
                    </button>
                  </div>

                  {/* Penalang hanya satu orang, jadi memilih yang lain otomatis
                      memindahkan tanda — bukan menambah tanda kedua. */}
                  <button
                    onClick={() => setPayer(isPayer ? null : p.id)}
                    aria-pressed={isPayer}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 font-headline text-label-caps mp-outline mp-press rounded-lg ${
                      isPayer
                        ? 'bg-yellow mp-shadow-sm'
                        : 'bg-surface-container-low text-on-surface-variant hover:bg-cyan hover:text-ink'
                    }`}
                  >
                    <Icon name="wallet" className="w-4 h-4" strokeWidth={2.5} />
                    {isPayer ? 'PAID THE BILL' : 'PAID THE BILL?'}
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </section>

      <div className="mt-16 w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4">
        {!enoughPeople && (
          <div className="bg-error-container mp-outline mp-shadow-sm p-4 flex items-start gap-3 sm:mr-auto">
            <Icon name="warning" className="w-6 h-6 text-error shrink-0 mt-0.5" />
            <p className="font-body text-sm font-bold">
              Add {missing} more {missing === 1 ? 'person' : 'people'} — a split needs at least{' '}
              {MIN_PEOPLE}.
            </p>
          </div>
        )}

        <button
          onClick={() => router.push('/assign')}
          disabled={!enoughPeople}
          title={enoughPeople ? undefined : `Add at least ${MIN_PEOPLE} people to continue`}
          className="bg-blue text-white font-headline text-body-lg px-8 py-4 rounded-xl mp-outline mp-shadow-lg mp-press flex items-center justify-center gap-4 disabled:opacity-40 disabled:pointer-events-none shrink-0"
        >
          Next — Assign Items
          <Icon name="arrow_forward" className="w-7 h-7" />
        </button>
      </div>
    </div>
  )
}
