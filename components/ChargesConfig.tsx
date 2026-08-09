'use client'

import { useReceiptStore } from '@/store/receiptStore'

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 ${on ? 'bg-gray-900' : 'bg-gray-200'}`}
    >
      <span
        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${on ? 'translate-x-6' : 'translate-x-1'}`}
      />
    </button>
  )
}

const ROUND_OPTIONS = [
  { label: 'Rp 1.000', value: 1000 },
  { label: 'Rp 5.000', value: 5000 },
  { label: 'Rp 10.000', value: 10000 },
]

export default function ChargesConfig() {
  const charges = useReceiptStore((s) => s.charges)
  const setCharges = useReceiptStore((s) => s.setCharges)

  return (
    <div className="space-y-2">
      {/* Tax */}
      <div className={`bg-white rounded-2xl border transition-colors ${charges.taxEnabled ? 'border-gray-200' : 'border-gray-100'}`}>
        <div className="px-4 py-4 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-gray-800">Pajak (PPN)</p>
              {charges.taxEnabled && (
                <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded-md">
                  Terdeteksi
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-0.5">Ditambahkan proporsional ke setiap orang</p>
          </div>
          <Toggle on={charges.taxEnabled} onToggle={() => setCharges({ taxEnabled: !charges.taxEnabled })} />
        </div>
        {charges.taxEnabled && (
          <div className="px-4 pb-4 flex items-center gap-2">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
              <input
                type="number"
                value={charges.taxRate}
                onChange={(e) => setCharges({ taxRate: Math.max(0, Math.min(100, Number(e.target.value))) })}
                className="w-12 bg-transparent text-sm font-semibold text-gray-900 text-right outline-none tabular-nums"
                min={0}
                max={100}
              />
              <span className="text-sm text-gray-400">%</span>
            </div>
            <p className="text-xs text-gray-400">dari subtotal</p>
          </div>
        )}
      </div>

      {/* Service */}
      <div className={`bg-white rounded-2xl border transition-colors ${charges.serviceEnabled ? 'border-gray-200' : 'border-gray-100'}`}>
        <div className="px-4 py-4 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-gray-800">Biaya Layanan</p>
              {charges.serviceEnabled && (
                <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded-md">
                  Terdeteksi
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-0.5">Service charge restoran</p>
          </div>
          <Toggle on={charges.serviceEnabled} onToggle={() => setCharges({ serviceEnabled: !charges.serviceEnabled })} />
        </div>
        {charges.serviceEnabled && (
          <div className="px-4 pb-4 flex items-center gap-2">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
              <input
                type="number"
                value={charges.serviceRate}
                onChange={(e) => setCharges({ serviceRate: Math.max(0, Math.min(100, Number(e.target.value))) })}
                className="w-12 bg-transparent text-sm font-semibold text-gray-900 text-right outline-none tabular-nums"
                min={0}
                max={100}
              />
              <span className="text-sm text-gray-400">%</span>
            </div>
            <p className="text-xs text-gray-400">dari subtotal</p>
          </div>
        )}
      </div>

      {/* Rounding */}
      <div className={`bg-white rounded-2xl border transition-colors ${charges.roundingEnabled ? 'border-gray-200' : 'border-gray-100'}`}>
        <div className="px-4 py-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-gray-800">Pembulatan ke Atas</p>
            <p className="text-xs text-gray-400 mt-0.5">Total tiap orang dibulatkan ke atas</p>
          </div>
          <Toggle on={charges.roundingEnabled} onToggle={() => setCharges({ roundingEnabled: !charges.roundingEnabled })} />
        </div>
        {charges.roundingEnabled && (
          <div className="px-4 pb-4 flex gap-2">
            {ROUND_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setCharges({ roundTo: opt.value })}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  charges.roundTo === opt.value
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* None active hint */}
      {!charges.taxEnabled && !charges.serviceEnabled && !charges.roundingEnabled && (
        <p className="text-xs text-gray-400 text-center pt-2">
          Aktifkan biaya tambahan jika diperlukan, atau langsung lanjut.
        </p>
      )}
    </div>
  )
}
