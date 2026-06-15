'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import StepLayout from '@/components/StepLayout'
import BillSummary from '@/components/BillSummary'
import { useReceiptStore } from '@/store/receiptStore'
import { calcBill } from '@/lib/calcBill'

export default function SummaryPage() {
  const router = useRouter()
  const [pdfLoading, setPdfLoading] = useState(false)

  const people = useReceiptStore((s) => s.people)
  const items = useReceiptStore((s) => s.items)
  const assignments = useReceiptStore((s) => s.assignments)
  const charges = useReceiptStore((s) => s.charges)

  async function handleDownloadPDF() {
    setPdfLoading(true)
    try {
      const bill = calcBill(items, people, assignments, charges)
      const { generatePDF } = await import('@/lib/generatePdf')
      await generatePDF(people, bill, charges)
    } finally {
      setPdfLoading(false)
    }
  }

  function handleReset() {
    useReceiptStore.setState({
      items: [],
      people: [],
      assignments: {},
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

  return (
    <StepLayout
      step={6}
      title="Tagihan 💸"
      subtitle="Tap 'Salin tagihan' untuk bagikan ke masing-masing"
      backHref="/charges"
      footer={
        <div className="space-y-2">
          {/* PDF Download */}
          <button
            onClick={handleDownloadPDF}
            disabled={pdfLoading || people.length === 0}
            className="w-full py-4 bg-gray-950 text-white font-semibold rounded-2xl disabled:opacity-30 active:scale-[0.98] transition-all text-sm flex items-center justify-center gap-2"
          >
            {pdfLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Membuat PDF…
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Download PDF
              </>
            )}
          </button>

          {/* Reset */}
          <button
            onClick={handleReset}
            className="w-full py-3.5 bg-white border border-gray-200 text-gray-500 font-medium rounded-2xl active:scale-[0.98] transition-all text-sm"
          >
            Mulai Split Bill Baru
          </button>
        </div>
      }
    >
      <BillSummary />
    </StepLayout>
  )
}
