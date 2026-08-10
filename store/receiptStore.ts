import { create } from 'zustand'
import type { Reconciliation } from '@/lib/receiptScan'

export type ReceiptItem = {
  name: string
  price: number
  qty: number
}

export type Person = {
  id: string
  name: string
}

export type Charges = {
  taxEnabled: boolean
  taxRate: number
  serviceEnabled: boolean
  serviceRate: number
  roundingEnabled: boolean
  roundTo: number
}

type ReceiptStore = {
  items: ReceiptItem[]
  people: Person[]
  assignments: Record<number, string[]>
  charges: Charges
  /** Nama restoran hasil scan — dipakai sebagai judul tagihan. */
  merchant: string | null
  /** Siapa yang menalangi tagihan; sisanya membayar balik ke orang ini. */
  payerId: string | null
  /** Selisih hasil scan vs subtotal struk — ditampilkan, bukan dikoreksi diam-diam. */
  reconciliation: Reconciliation | null
  setItems: (
    items: ReceiptItem[],
    reconciliation?: Reconciliation | null,
    merchant?: string | null
  ) => void
  clearItems: () => void
  addItem: (item: ReceiptItem) => void
  updateItem: (index: number, update: Partial<ReceiptItem>) => void
  removeItem: (index: number) => void
  setMerchant: (name: string) => void
  addPerson: (name: string) => void
  removePerson: (id: string) => void
  setPayer: (id: string | null) => void
  toggleAssignment: (itemIndex: number, personId: string) => void
  setCharges: (update: Partial<Charges>) => void
}

const DEFAULT_CHARGES: Charges = {
  taxEnabled: false,
  taxRate: 11,
  serviceEnabled: false,
  serviceRate: 5,
  roundingEnabled: false,
  roundTo: 1000,
}

/**
 * Peringatan selisih harus ikut hidup saat pengguna membetulkan item, supaya
 * hilang sendiri begitu angkanya cocok — bukan bertahan sebagai info basi.
 */
function recompute(
  items: ReceiptItem[],
  previous: Reconciliation | null
): Reconciliation | null {
  if (!previous) return null

  const itemsSum = items.reduce((sum, it) => sum + it.price * it.qty, 0)
  const difference = itemsSum - previous.statedSubtotal
  const tolerance = items.reduce((t, it) => t + it.qty, 0)

  return {
    ...previous,
    itemsSum,
    difference,
    matches: Math.abs(difference) <= tolerance,
  }
}

export const useReceiptStore = create<ReceiptStore>((set) => ({
  items: [],
  people: [],
  assignments: {},
  charges: DEFAULT_CHARGES,
  merchant: null,
  payerId: null,
  reconciliation: null,

  setItems: (items, reconciliation = null, merchant = null) =>
    set({ items, assignments: {}, reconciliation, merchant }),
  clearItems: () =>
    set({ items: [], assignments: {}, reconciliation: null, merchant: null }),

  addItem: (item) =>
    set((s) => {
      const items = [...s.items, item]
      return { items, reconciliation: recompute(items, s.reconciliation) }
    }),

  updateItem: (index, update) =>
    set((s) => {
      const items = s.items.map((it, i) => (i === index ? { ...it, ...update } : it))
      return { items, reconciliation: recompute(items, s.reconciliation) }
    }),

  removeItem: (index) =>
    set((s) => {
      const items = s.items.filter((_, i) => i !== index)

      // assignments dikunci per indeks item, jadi indeks di atas yang dihapus
      // harus digeser turun — kalau tidak, tagihan menempel ke item yang salah.
      const assignments: Record<number, string[]> = {}
      for (const key of Object.keys(s.assignments)) {
        const i = Number(key)
        if (i === index) continue
        assignments[i > index ? i - 1 : i] = s.assignments[i]
      }

      return { items, assignments, reconciliation: recompute(items, s.reconciliation) }
    }),

  // Judul kosong disimpan sebagai null, bukan "", supaya seluruh aplikasi cukup
  // menguji satu keadaan "tidak ada judul".
  setMerchant: (name) => set({ merchant: name.trim() ? name : null }),

  addPerson: (name) =>
    set((s) => ({ people: [...s.people, { id: crypto.randomUUID(), name }] })),

  removePerson: (id) =>
    set((s) => {
      const assignments = { ...s.assignments }
      for (const key in assignments) {
        assignments[key] = assignments[key].filter((pid) => pid !== id)
      }
      // Penalang yang dihapus tidak boleh meninggalkan id yatim di store.
      return {
        people: s.people.filter((p) => p.id !== id),
        assignments,
        payerId: s.payerId === id ? null : s.payerId,
      }
    }),

  setPayer: (id) => set({ payerId: id }),

  toggleAssignment: (itemIndex, personId) =>
    set((s) => {
      const current = s.assignments[itemIndex] ?? []
      const updated = current.includes(personId)
        ? current.filter((id) => id !== personId)
        : [...current, personId]
      return { assignments: { ...s.assignments, [itemIndex]: updated } }
    }),

  setCharges: (update) =>
    set((s) => ({ charges: { ...s.charges, ...update } })),
}))
