'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Icon from '@/components/Icon'
import { useReceiptStore } from '@/store/receiptStore'
import { getColor } from '@/lib/personColors'
import { calcBill, type PersonBill } from '@/lib/calcBill'

const money = (n: number) => n.toLocaleString('id-ID')

type ChargeSummary = {
  taxEnabled: boolean
  taxRate: number
  serviceEnabled: boolean
  serviceRate: number
}

function buildShareText(
  name: string,
  bill: PersonBill,
  charges: ChargeSummary,
  payerName: string | null
): string {
  const lines: string[] = []
  lines.push(`Hi ${name}! 👋`)
  lines.push(`Here's your share:\n`)
  for (const it of bill.items) {
    lines.push(`• ${it.name}  Rp ${money(it.share)}`)
  }
  if (charges.taxEnabled && bill.taxShare > 0) {
    lines.push(`• Tax ${charges.taxRate}%  Rp ${money(bill.taxShare)}`)
  }
  if (charges.serviceEnabled && bill.serviceShare > 0) {
    lines.push(`• Service ${charges.serviceRate}%  Rp ${money(bill.serviceShare)}`)
  }
  lines.push(`\nTotal: *Rp ${money(bill.total)}*`)

  // Pesan ke penalang sendiri tidak masuk akal ("transfer ke dirimu"), jadi
  // baris ini hanya muncul untuk orang lain.
  if (payerName && payerName !== name) {
    lines.push(`Please send it to ${payerName} 🙏`)
  }

  return lines.join('\n')
}

function CopyButton({
  name,
  bill,
  charges,
  payerName,
}: {
  name: string
  bill: PersonBill
  charges: ChargeSummary
  payerName: string | null
}) {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    const text = buildShareText(name, bill, charges, payerName)

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ text })
        return
      } catch {
        // pengguna membatalkan — lanjut ke clipboard
      }
    }

    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleShare}
      className="mt-auto w-full bg-surface mp-outline py-3 font-headline text-label-caps mp-shadow-sm mp-press flex items-center justify-center gap-2 hover:bg-primary-fixed"
    >
      <Icon name={copied ? 'check' : 'content_copy'} className="w-4 h-4" strokeWidth={2.5} />
      {copied ? 'COPIED!' : 'COPY BILL'}
    </button>
  )
}

export default function BillSummary() {
  const router = useRouter()
  const [pdfLoading, setPdfLoading] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)
  const [exportError, setExportError] = useState<string | null>(null)

  const items = useReceiptStore((s) => s.items)
  const people = useReceiptStore((s) => s.people)
  const assignments = useReceiptStore((s) => s.assignments)
  const charges = useReceiptStore((s) => s.charges)
  const merchant = useReceiptStore((s) => s.merchant)
  const payerId = useReceiptStore((s) => s.payerId)

  const payer = people.find((p) => p.id === payerId) ?? null

  async function handleDownloadPDF() {
    setPdfLoading(true)
    setExportError(null)
    try {
      const bill = calcBill(items, people, assignments, charges)
      const { generatePDF } = await import('@/lib/generatePdf')
      await generatePDF(people, bill, charges, { merchant, payer })
    } catch {
      setExportError('Could not build the PDF. Try again.')
    } finally {
      setPdfLoading(false)
    }
  }

  async function handleDownloadImage() {
    setImageLoading(true)
    setExportError(null)
    try {
      const bill = calcBill(items, people, assignments, charges)
      const { generateImage } = await import('@/lib/generateImage')
      await generateImage(people, bill, charges, { merchant, payer })
    } catch {
      setExportError('Could not build the image. Try again.')
    } finally {
      setImageLoading(false)
    }
  }

  function handleReset() {
    useReceiptStore.setState({
      items: [],
      people: [],
      assignments: {},
      reconciliation: null,
      merchant: null,
      payerId: null,
      charges: {
        taxEnabled: false,
        taxRate: 11,
        serviceEnabled: false,
        serviceRate: 5,
        roundingEnabled: false,
        roundTo: 1000,
      },
    })
    router.push('/')
  }

  if (people.length === 0 || items.length === 0) {
    return (
      <div className="bg-white mp-outline mp-shadow-md p-10 text-center mp-rot-2">
        <p className="text-4xl mb-3">💸</p>
        <p className="font-body text-body-lg text-on-surface-variant">
          Finish the earlier steps to see the bill.
        </p>
      </div>
    )
  }

  const bill = calcBill(items, people, assignments, charges)
  const grandTotal = people.reduce((sum, p) => sum + bill[p.id].total, 0)
  const unassigned = items.filter((_, i) => (assignments[i] ?? []).length === 0).length
  const feeRate = (charges.taxEnabled ? charges.taxRate : 0) + (charges.serviceEnabled ? charges.serviceRate : 0)

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
      {/* Kartu per orang */}
      <div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {people.map((p, pi) => {
          const b = bill[p.id]
          const c = getColor(pi)
          const fees = b.taxShare + b.serviceShare

          return (
            <article
              key={p.id}
              className={`bg-surface mp-outline mp-shadow-md p-card-padding flex flex-col h-full relative transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(27,27,27,1)] ${
                pi % 2 === 0 ? '-rotate-1' : 'rotate-1'
              }`}
            >
              <span
                className={`absolute -top-3 ${pi % 2 === 0 ? '-right-3' : '-left-3'} w-8 h-8 rounded-full mp-outline shadow-[2px_2px_0px_0px_rgba(27,27,27,1)] ${c.dot}`}
              />

              <header className="flex items-center gap-4 mb-6 border-b-[3px] border-ink pb-4">
                <div
                  className={`w-16 h-16 rounded-full mp-outline ${c.dot} ${c.on} shadow-[3px_3px_0px_0px_rgba(27,27,27,1)] flex items-center justify-center shrink-0`}
                >
                  <span className="font-headline text-headline-sm">{p.name[0].toUpperCase()}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-headline text-headline-sm uppercase tracking-tight truncate">
                    {p.name}
                  </h3>
                  {payer?.id === p.id && (
                    <span className="inline-flex items-center gap-1.5 mt-1 font-headline text-[10px] tracking-[0.15em] bg-yellow px-2 py-1 mp-outline">
                      <Icon name="wallet" className="w-3 h-3" strokeWidth={2.5} />
                      PAID THE BILL
                    </span>
                  )}
                </div>
              </header>

              <ul className="flex flex-col flex-1 mb-6 font-body font-bold">
                {b.items.length === 0 && (
                  <li className="py-3 text-on-surface-variant font-normal">Nothing assigned yet.</li>
                )}
                {b.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex justify-between items-center gap-3 py-3 border-b-[3px] border-dashed border-ink"
                  >
                    <span className="truncate">{it.name}</span>
                    <span className="font-headline text-base md:text-money tabular-nums shrink-0">
                      {money(it.share)}
                    </span>
                  </li>
                ))}
                {fees > 0 && (
                  <li className="flex justify-between items-center gap-3 py-3 border-b-[3px] border-dashed border-ink text-on-surface-variant">
                    <span>Tax &amp; Service ({feeRate}%)</span>
                    <span className="font-headline text-base md:text-money tabular-nums shrink-0">{money(fees)}</span>
                  </li>
                )}
              </ul>

              <div
                className={`bg-tertiary-fixed mp-outline p-4 flex justify-between items-center mb-6 shadow-[3px_3px_0px_0px_rgba(27,27,27,1)] ${
                  pi % 2 === 0 ? 'rotate-2' : '-rotate-1'
                }`}
              >
                <span className="font-headline text-label-caps">TOTAL</span>
                <span className="font-headline text-[28px] font-black tracking-tighter tabular-nums">
                  {money(b.total)}
                </span>
              </div>

              <CopyButton name={p.name} bill={b} charges={charges} payerName={payer?.name ?? null} />
            </article>
          )
        })}
      </div>

      {/* Rail kanan — tidak ada di design.md (file terpotong), disusun mengikuti gaya yang sama. */}
      <aside className="xl:col-span-4 xl:sticky xl:top-28 flex flex-col gap-6">
        {unassigned > 0 && (
          <div className="bg-error-container mp-outline mp-shadow-sm p-4 flex items-start gap-3 mp-rot-1">
            <Icon name="warning" className="w-6 h-6 text-error shrink-0 mt-0.5" />
            <p className="font-body text-sm font-bold">
              {unassigned} {unassigned === 1 ? 'item is' : 'items are'} still unassigned and{' '}
              {unassigned === 1 ? "isn't" : "aren't"} counted in these totals.
            </p>
          </div>
        )}

        <div className="bg-white mp-outline mp-shadow-lg mp-rot-2 overflow-hidden">
          <div className="flex">
            <div className="w-1/3 h-4 bg-pink" />
            <div className="w-1/3 h-4 bg-cyan" />
            <div className="w-1/3 h-4 bg-blue" />
          </div>

          <div className="p-card-padding">
            <h2 className="font-headline text-2xl font-black border-b-4 border-ink inline-block mb-6">
              Everyone
            </h2>
            <dl className="flex flex-col gap-3 font-body font-bold">
              {people.map((p) => (
                <div key={p.id} className="flex justify-between gap-3">
                  <dt className="truncate">{p.name}</dt>
                  <dd className="tabular-nums shrink-0">Rp {money(bill[p.id].total)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-yellow p-card-padding border-t-4 border-ink flex justify-between items-center gap-3">
            <span className="font-headline text-label-caps shrink-0">GRAND TOTAL</span>
            <span className="font-headline text-lg md:text-headline-sm tracking-tighter tabular-nums text-right min-w-0">
              Rp {money(grandTotal)}
            </span>
          </div>

          {payer && (
            <div className="bg-white border-t-4 border-ink px-card-padding py-4 flex items-center gap-3">
              <Icon name="wallet" className="w-5 h-5 shrink-0" />
              <p className="font-body text-sm font-bold">
                {payer.name} paid — everyone else settles up with them.
              </p>
            </div>
          )}
        </div>

        <button
          onClick={handleDownloadPDF}
          disabled={pdfLoading || imageLoading}
          className="w-full bg-blue text-white font-headline text-label-caps py-4 px-6 mp-outline mp-shadow-md mp-press flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {pdfLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              BUILDING PDF…
            </>
          ) : (
            <>
              <Icon name="picture_as_pdf" className="w-5 h-5" />
              EXPORT PDF
            </>
          )}
        </button>

        <button
          onClick={handleDownloadImage}
          disabled={pdfLoading || imageLoading}
          className="w-full bg-pink text-white font-headline text-label-caps py-4 px-6 mp-outline mp-shadow-md mp-press flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {imageLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              BUILDING IMAGE…
            </>
          ) : (
            <>
              <Icon name="image" className="w-5 h-5" />
              EXPORT IMAGE
            </>
          )}
        </button>

        {exportError && (
          <div className="bg-error-container mp-outline mp-shadow-sm p-4 flex items-start gap-3">
            <Icon name="warning" className="w-6 h-6 text-error shrink-0 mt-0.5" />
            <p className="font-body text-sm font-bold">{exportError}</p>
          </div>
        )}

        <button
          onClick={handleReset}
          className="w-full bg-white font-headline text-label-caps py-4 px-6 mp-outline mp-shadow-sm mp-press hover:bg-tomato hover:text-white"
        >
          START A NEW SPLIT
        </button>
      </aside>
    </div>
  )
}
