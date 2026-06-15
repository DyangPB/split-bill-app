'use client'

import { useRouter } from 'next/navigation'
import StepLayout from '@/components/StepLayout'
import ChargesConfig from '@/components/ChargesConfig'

export default function ChargesPage() {
  const router = useRouter()

  return (
    <StepLayout
      step={5}
      title="Biaya Tambahan"
      subtitle="Atur pajak, layanan, dan pembulatan"
      backHref="/assign"
      footer={
        <button
          onClick={() => router.push('/summary')}
          className="w-full py-4 bg-gray-950 text-white font-semibold rounded-2xl active:scale-[0.98] transition-all text-sm"
        >
          Lihat Tagihan
        </button>
      }
    >
      <ChargesConfig />
    </StepLayout>
  )
}
