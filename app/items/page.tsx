'use client'

import { useRouter } from 'next/navigation'
import StepLayout from '@/components/StepLayout'
import ItemList from '@/components/ItemList'
import { useReceiptStore } from '@/store/receiptStore'

export default function ItemsPage() {
  const router = useRouter()
  const items = useReceiptStore((s) => s.items)

  return (
    <StepLayout
      step={2}
      title="Cek Item"
      subtitle="Pastikan semua item sudah benar"
      backHref="/scan"
      footer={
        <button
          onClick={() => router.push('/people')}
          disabled={items.length === 0}
          className="w-full py-4 bg-gray-950 text-white font-semibold rounded-2xl disabled:opacity-25 active:scale-[0.98] transition-all text-sm"
        >
          Lanjut — Tambah Orang
        </button>
      }
    >
      <ItemList />
    </StepLayout>
  )
}
