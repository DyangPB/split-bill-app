import { create } from 'zustand'

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
  setItems: (items: ReceiptItem[]) => void
  clearItems: () => void
  addPerson: (name: string) => void
  removePerson: (id: string) => void
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

export const useReceiptStore = create<ReceiptStore>((set) => ({
  items: [],
  people: [],
  assignments: {},
  charges: DEFAULT_CHARGES,

  setItems: (items) => set({ items, assignments: {} }),
  clearItems: () => set({ items: [], assignments: {} }),

  addPerson: (name) =>
    set((s) => ({ people: [...s.people, { id: crypto.randomUUID(), name }] })),

  removePerson: (id) =>
    set((s) => {
      const assignments = { ...s.assignments }
      for (const key in assignments) {
        assignments[key] = assignments[key].filter((pid) => pid !== id)
      }
      return { people: s.people.filter((p) => p.id !== id), assignments }
    }),

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
