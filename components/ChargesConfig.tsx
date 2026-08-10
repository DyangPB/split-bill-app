'use client'

import { useRouter } from 'next/navigation'
import Icon from '@/components/Icon'
import { useReceiptStore } from '@/store/receiptStore'

const money = (n: number) => n.toLocaleString('id-ID')

/** Kelipatan pembulatan, dari receh sampai ribuan. DEFAULT_CHARGES.roundTo harus salah satunya. */
const ROUND_OPTIONS = [50, 100, 500, 1000]

/** Sakelar gaya Memphis — kotak tebal dengan knop hitam. */
function Toggle({ on, onToggle, label }: { on: boolean; onToggle: () => void; label: string }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onToggle}
      className={`relative w-14 h-8 rounded-full mp-outline shrink-0 transition-colors ${
        on ? 'bg-cyan' : 'bg-white'
      }`}
    >
      <span
        className={`absolute top-1 left-1 w-5 h-5 bg-ink rounded-full transition-transform ${
          on ? 'translate-x-6' : ''
        }`}
      />
    </button>
  )
}

function ChargeCard({
  title,
  hint,
  detected,
  enabled,
  onToggle,
  children,
}: {
  title: string
  hint: string
  detected?: boolean
  enabled: boolean
  onToggle: () => void
  children?: React.ReactNode
}) {
  return (
    <div className="bg-white mp-outline mp-shadow-md p-card-padding">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-headline text-xl font-black">{title}</h3>
            {detected && (
              <span className="font-headline text-[10px] tracking-[0.15em] bg-cyan px-2 py-1 mp-outline -rotate-3">
                DETECTED
              </span>
            )}
          </div>
          <p className="font-body text-sm text-on-surface-variant mt-1">{hint}</p>
        </div>
        <Toggle on={enabled} onToggle={onToggle} label={title} />
      </div>

      {enabled && children && <div className="mt-5 pt-5 border-t-[3px] border-dashed border-ink">{children}</div>}
    </div>
  )
}

function RateInput({
  value,
  onChange,
  amount,
}: {
  value: number
  onChange: (n: number) => void
  amount: number
}) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex items-center gap-2 bg-surface px-3 py-2 mp-outline mp-shadow-sm">
        <input
          type="number"
          min={0}
          max={100}
          value={value}
          onChange={(e) => onChange(Math.max(0, Math.min(100, Number(e.target.value))))}
          className="w-14 bg-transparent font-headline text-lg font-black text-right outline-none tabular-nums"
        />
        <span className="font-headline text-lg font-black">%</span>
      </div>
      <span className="font-body text-sm text-on-surface-variant">of subtotal</span>
      <span className="ml-auto font-headline text-base md:text-money tabular-nums">Rp {money(amount)}</span>
    </div>
  )
}

export default function ChargesConfig() {
  const router = useRouter()
  const items = useReceiptStore((s) => s.items)
  const charges = useReceiptStore((s) => s.charges)
  const setCharges = useReceiptStore((s) => s.setCharges)

  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0)
  const taxAmount = charges.taxEnabled ? Math.round(subtotal * (charges.taxRate / 100)) : 0
  const serviceAmount = charges.serviceEnabled ? Math.round(subtotal * (charges.serviceRate / 100)) : 0
  const total = subtotal + taxAmount + serviceAmount

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-2/3 flex flex-col gap-6">
        <ChargeCard
          title="Tax"
          hint="Added to everyone in proportion to what they ordered."
          detected={charges.taxEnabled}
          enabled={charges.taxEnabled}
          onToggle={() => setCharges({ taxEnabled: !charges.taxEnabled })}
        >
          <RateInput
            value={charges.taxRate}
            onChange={(taxRate) => setCharges({ taxRate })}
            amount={taxAmount}
          />
        </ChargeCard>

        <ChargeCard
          title="Service"
          hint="Restaurant service charge, split the same way."
          detected={charges.serviceEnabled}
          enabled={charges.serviceEnabled}
          onToggle={() => setCharges({ serviceEnabled: !charges.serviceEnabled })}
        >
          <RateInput
            value={charges.serviceRate}
            onChange={(serviceRate) => setCharges({ serviceRate })}
            amount={serviceAmount}
          />
        </ChargeCard>

        <ChargeCard
          title="Round Up"
          hint="Round each person's total up, so nobody owes loose change."
          enabled={charges.roundingEnabled}
          onToggle={() => setCharges({ roundingEnabled: !charges.roundingEnabled })}
        >
          <div className="flex flex-wrap gap-3">
            {ROUND_OPTIONS.map((opt) => (
              <button
                key={opt}
                aria-pressed={charges.roundTo === opt}
                onClick={() => setCharges({ roundTo: opt })}
                className={`px-5 py-2.5 rounded-full mp-outline mp-shadow-sm font-headline text-xs mp-press tabular-nums ${
                  charges.roundTo === opt ? 'bg-yellow' : 'bg-white hover:bg-cyan'
                }`}
              >
                Rp {money(opt)}
              </button>
            ))}
          </div>
        </ChargeCard>

        {!charges.taxEnabled && !charges.serviceEnabled && !charges.roundingEnabled && (
          <p className="font-body text-on-surface-variant text-center">
            Nothing extra to add? Head straight to the bill.
          </p>
        )}
      </div>

      {/* Preview */}
      <div className="lg:w-1/3">
        <div className="lg:sticky lg:top-28">
          <div className="bg-white mp-outline mp-shadow-lg mp-rot-2 overflow-hidden">
            <div className="flex">
              <div className="w-1/3 h-4 bg-pink" />
              <div className="w-1/3 h-4 bg-cyan" />
              <div className="w-1/3 h-4 bg-blue" />
            </div>

            <div className="p-card-padding">
              <h2 className="font-headline text-2xl font-black border-b-4 border-ink inline-block mb-6">
                Preview
              </h2>

              <dl className="flex flex-col gap-3 font-body font-bold">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="tabular-nums">Rp {money(subtotal)}</dd>
                </div>
                {charges.taxEnabled && (
                  <div className="flex justify-between border-t-2 border-dashed border-outline-variant pt-3">
                    <dt>Tax {charges.taxRate}%</dt>
                    <dd className="tabular-nums">+Rp {money(taxAmount)}</dd>
                  </div>
                )}
                {charges.serviceEnabled && (
                  <div className="flex justify-between border-t-2 border-dashed border-outline-variant pt-3">
                    <dt>Service {charges.serviceRate}%</dt>
                    <dd className="tabular-nums">+Rp {money(serviceAmount)}</dd>
                  </div>
                )}
                {charges.roundingEnabled && (
                  <div className="flex justify-between border-t-2 border-dashed border-outline-variant pt-3">
                    <dt>Rounded up to</dt>
                    <dd className="tabular-nums">Rp {money(charges.roundTo)}</dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="bg-yellow p-card-padding border-t-4 border-ink flex justify-between items-center gap-3">
              <span className="font-headline text-label-caps shrink-0">TOTAL</span>
              <span className="font-headline text-lg md:text-headline-sm tracking-tighter tabular-nums text-right min-w-0">
                Rp {money(total)}
              </span>
            </div>
          </div>

          <button
            onClick={() => router.push('/people')}
            className="group w-full mt-8 bg-blue text-white font-headline text-label-caps py-4 px-6 mp-outline mp-shadow-md mp-press mp-rot-1 flex justify-between items-center"
          >
            NEXT — WHO&apos;S IN?
            <span className="bg-white text-blue rounded-full p-1 mp-outline group-hover:translate-x-2 transition-transform">
              <Icon name="arrow_forward" className="w-4 h-4" strokeWidth={3} />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
