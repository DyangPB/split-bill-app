'use client'

import { useRouter } from 'next/navigation'
import Icon from '@/components/Icon'
import { useReceiptStore, type ReceiptItem } from '@/store/receiptStore'

const money = (n: number) => n.toLocaleString('id-ID')

function digitsToInt(value: string): number {
  const n = parseInt(value.replace(/\D/g, ''), 10)
  return Number.isFinite(n) ? n : 0
}

/** Baris item — nama & harga bisa diedit langsung di tempat. */
function ItemRow({
  item,
  index,
  onUpdate,
  onRemove,
}: {
  item: ReceiptItem
  index: number
  onUpdate: (index: number, update: Partial<ReceiptItem>) => void
  onRemove: (index: number) => void
}) {
  return (
    <div className="grid grid-cols-12 gap-1.5 md:gap-4 items-center bg-white p-3 mb-4 mp-outline mp-shadow-sm relative group">
      <div className="col-span-1 hidden md:flex md:order-1 justify-center text-outline group-hover:text-secondary">
        <Icon name="drag_indicator" className="w-5 h-5" />
      </div>

      <input
        aria-label={`Item name ${index + 1}`}
        value={item.name}
        onChange={(e) => onUpdate(index, { name: e.target.value })}
        className="col-span-11 md:col-span-4 order-1 md:order-2 bg-transparent border-none outline-none font-body text-body-lg font-bold min-w-0"
      />

      {/* Kontrol qty dikecilkan di mobile supaya muat 4 kolom — sisanya
          dipakai harga satuan agar bisa bergeser mendekati qty. */}
      <div className="col-span-4 md:col-span-2 order-3 flex items-center justify-start md:justify-center gap-1 md:gap-2">
        <button
          aria-label="Decrease quantity"
          onClick={() => onUpdate(index, { qty: Math.max(1, item.qty - 1) })}
          className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-surface-container mp-outline flex items-center justify-center font-headline font-black hover:bg-secondary-fixed shrink-0"
        >
          −
        </button>
        <span className="font-headline font-black w-5 md:w-6 text-center tabular-nums">{item.qty}</span>
        <button
          aria-label="Increase quantity"
          onClick={() => onUpdate(index, { qty: item.qty + 1 })}
          className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-surface-container mp-outline flex items-center justify-center font-headline font-black hover:bg-secondary-fixed shrink-0"
        >
          +
        </button>
      </div>

      <input
        aria-label={`Unit price ${index + 1}`}
        inputMode="numeric"
        value={money(item.price)}
        onChange={(e) => onUpdate(index, { price: digitsToInt(e.target.value) })}
        className="col-span-4 md:col-span-2 order-4 bg-transparent border-none outline-none font-body text-sm md:text-body-md font-bold text-left md:text-right tabular-nums min-w-0"
      />

      {/*
       * text-money (24px) mati ukurannya. Kolom grid-cols-12 memakai
       * minmax(0,1fr) sehingga kolomnya ikut menyusut di layar sempit,
       * sementara angkanya tidak — itu yang bikin total meluber keluar kartu.
       */}
      <p className="col-span-4 md:col-span-2 order-5 font-headline text-sm md:text-money text-primary text-right tabular-nums min-w-0">
        {money(item.price * item.qty)}
      </p>

      <button
        aria-label={`Remove ${item.name}`}
        onClick={() => onRemove(index)}
        className="col-span-1 order-2 md:order-6 flex justify-center text-outline hover:text-error"
      >
        <Icon name="close" className="w-5 h-5" strokeWidth={2.5} />
      </button>
    </div>
  )
}

export default function ItemList() {
  const router = useRouter()
  const items = useReceiptStore((s) => s.items)
  const merchant = useReceiptStore((s) => s.merchant)
  const setMerchant = useReceiptStore((s) => s.setMerchant)
  const charges = useReceiptStore((s) => s.charges)
  const reconciliation = useReceiptStore((s) => s.reconciliation)
  const addItem = useReceiptStore((s) => s.addItem)
  const updateItem = useReceiptStore((s) => s.updateItem)
  const removeItem = useReceiptStore((s) => s.removeItem)

  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0)
  const taxAmount = charges.taxEnabled ? Math.round(subtotal * (charges.taxRate / 100)) : 0
  const serviceAmount = charges.serviceEnabled ? Math.round(subtotal * (charges.serviceRate / 100)) : 0
  const grandTotal = subtotal + taxAmount + serviceAmount

  const mismatch = reconciliation && !reconciliation.matches

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Editor */}
      <div className="lg:w-2/3">
        <div className="bg-white mp-outline mp-shadow-lg p-card-padding relative pt-8">
          <div className="absolute top-0 left-0 w-full h-4 bg-ink" />

          {/* Judul tagihan. Terisi sendiri dari hasil scan, tapi tetap sebuah
              input — kalau item diisi manual, di sinilah namanya diketik. */}
          <div className="flex items-center gap-3 mb-6 pb-5 border-b-4 border-dashed border-ink">
            <span className="w-11 h-11 rounded-full bg-cyan mp-outline flex items-center justify-center shrink-0">
              <Icon name="storefront" className="w-5 h-5" />
            </span>
            <div className="min-w-0 flex-1">
              <label
                htmlFor="bill-title"
                className="block font-headline text-[10px] tracking-[0.15em] font-bold text-on-surface-variant"
              >
                RESTAURANT NAME
              </label>
              <input
                id="bill-title"
                // Sama dengan batas hasil scan — judul panjang merusak header
                // halaman The Bill dan meluber di PNG hasil export.
                maxLength={60}
                value={merchant ?? ''}
                onChange={(e) => setMerchant(e.target.value)}
                onBlur={(e) => setMerchant(e.target.value.trim())}
                placeholder="e.g. Warung Padang Sederhana"
                className="w-full bg-transparent border-none outline-none font-headline text-base md:text-2xl font-black placeholder:text-outline placeholder:font-bold"
              />
            </div>
          </div>

          {mismatch && (
            <div className="bg-yellow mp-outline mp-shadow-sm p-4 mb-6 flex items-start gap-3">
              <Icon name="warning" className="w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <p className="font-headline font-bold">Items don&apos;t match the receipt</p>
                <p className="font-body text-sm mt-1 leading-relaxed">
                  The receipt says {money(reconciliation.statedSubtotal)}, but these items add up to{' '}
                  {money(reconciliation.itemsSum)} — a gap of{' '}
                  {money(Math.abs(reconciliation.difference))}. Check for a missed item or a
                  misread price.
                </p>
              </div>
            </div>
          )}

          <div className="hidden md:grid grid-cols-12 gap-4 border-b-4 border-ink pb-3 mb-4 font-headline text-label-caps">
            <span className="col-span-1" />
            <span className="col-span-4">Item Name</span>
            <span className="col-span-2 text-center">Qty</span>
            <span className="col-span-2 text-right">Unit (Rp)</span>
            <span className="col-span-2 text-right">Total</span>
            <span className="col-span-1" />
          </div>

          {items.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-4xl mb-3">🧾</p>
              <p className="font-body text-on-surface-variant">
                No items yet. Add them by hand, or scan a receipt.
              </p>
            </div>
          ) : (
            items.map((item, i) => (
              <ItemRow key={i} item={item} index={i} onUpdate={updateItem} onRemove={removeItem} />
            ))
          )}

          <button
            onClick={() => addItem({ name: 'New item', price: 0, qty: 1 })}
            className="group w-full mt-2 py-4 bg-surface border-4 border-dashed border-ink font-headline text-label-caps flex items-center justify-center gap-3 hover:bg-cyan transition-colors"
          >
            <Icon name="add_circle" className="w-6 h-6 group-hover:rotate-90 transition-transform" />
            ADD ITEM
          </button>
        </div>
      </div>

      {/* Summary */}
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
                Summary
              </h2>

              <dl className="flex flex-col gap-3 font-body font-bold">
                <div className="flex justify-between items-center">
                  <dt>Subtotal</dt>
                  <dd className="tabular-nums">Rp {money(subtotal)}</dd>
                </div>

                <div className="flex justify-between items-center border-t-2 border-dashed border-outline-variant pt-3">
                  <dt className="flex items-center gap-2">
                    Tax
                    {charges.taxEnabled && (
                      <span className="font-headline text-[10px] tracking-[0.15em] bg-cyan px-2 py-1 mp-outline -rotate-3">
                        DETECTED
                      </span>
                    )}
                  </dt>
                  <dd className="flex items-center gap-2">
                    <span className="font-headline text-xs bg-surface px-2 py-1 mp-outline">
                      {charges.taxEnabled ? `${charges.taxRate}%` : 'off'}
                    </span>
                    <span className="tabular-nums">Rp {money(taxAmount)}</span>
                  </dd>
                </div>

                <div className="flex justify-between items-center border-t-2 border-dashed border-outline-variant pt-3">
                  <dt className="flex items-center gap-2">
                    Service
                    {charges.serviceEnabled && (
                      <span className="font-headline text-[10px] tracking-[0.15em] bg-cyan px-2 py-1 mp-outline -rotate-3">
                        DETECTED
                      </span>
                    )}
                  </dt>
                  <dd className="flex items-center gap-2">
                    <span className="font-headline text-xs bg-surface px-2 py-1 mp-outline">
                      {charges.serviceEnabled ? `${charges.serviceRate}%` : 'off'}
                    </span>
                    <span className="tabular-nums">Rp {money(serviceAmount)}</span>
                  </dd>
                </div>
              </dl>

              <p className="font-body text-sm text-on-surface-variant mt-4 border-t-4 border-ink pt-4">
                Tax, service and rounding are configured on the next step.
              </p>
            </div>

            <div className="bg-yellow p-card-padding border-t-4 border-ink flex justify-between items-center gap-3">
              <span className="font-headline text-label-caps shrink-0">GRAND TOTAL</span>
              <span className="font-headline text-lg md:text-headline-sm tracking-tighter tabular-nums text-right min-w-0">
                Rp {money(grandTotal)}
              </span>
            </div>
          </div>

          <button
            onClick={() => router.push('/charges')}
            disabled={items.length === 0}
            className="group w-full mt-8 bg-blue text-white font-headline text-label-caps py-4 px-6 mp-outline mp-shadow-md mp-press mp-rot-1 flex justify-between items-center disabled:opacity-40 disabled:pointer-events-none"
          >
            NEXT — EXTRA CHARGES
            <span className="bg-white text-blue rounded-full p-1 mp-outline group-hover:translate-x-2 transition-transform">
              <Icon name="arrow_forward" className="w-4 h-4" strokeWidth={3} />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
