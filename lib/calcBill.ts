import type { ReceiptItem, Person, Charges } from '@/store/receiptStore'

export type PersonBill = {
  subtotal: number
  taxShare: number
  serviceShare: number
  total: number
  items: { name: string; share: number }[]
}

export function calcBill(
  items: ReceiptItem[],
  people: Person[],
  assignments: Record<number, string[]>,
  charges: Charges
): Record<string, PersonBill> {
  const result: Record<string, PersonBill> = {}
  for (const p of people) {
    result[p.id] = { subtotal: 0, taxShare: 0, serviceShare: 0, total: 0, items: [] }
  }

  for (let i = 0; i < items.length; i++) {
    const assigned = assignments[i] ?? []
    if (assigned.length === 0) continue
    const share = (items[i].price * items[i].qty) / assigned.length
    for (const pid of assigned) {
      result[pid].subtotal += share
      result[pid].items.push({ name: items[i].name, share: Math.round(share) })
    }
  }

  const globalSubtotal = people.reduce((sum, p) => sum + result[p.id].subtotal, 0)

  for (const p of people) {
    const sub = result[p.id].subtotal
    const ratio = globalSubtotal > 0 ? sub / globalSubtotal : 0

    const taxShare = charges.taxEnabled ? globalSubtotal * (charges.taxRate / 100) * ratio : 0
    const serviceShare = charges.serviceEnabled ? globalSubtotal * (charges.serviceRate / 100) * ratio : 0

    let total = sub + taxShare + serviceShare

    if (charges.roundingEnabled && charges.roundTo > 0) {
      total = Math.ceil(total / charges.roundTo) * charges.roundTo
    } else {
      total = Math.round(total)
    }

    result[p.id].taxShare = Math.round(taxShare)
    result[p.id].serviceShare = Math.round(serviceShare)
    result[p.id].total = total
  }

  return result
}
