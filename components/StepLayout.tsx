'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const STEPS = ['Scan', 'Item', 'Orang', 'Assign', 'Biaya', 'Tagihan']

type Props = {
  step: number
  title: string
  subtitle?: string
  children: React.ReactNode
  footer?: React.ReactNode
  backHref?: string
}

export default function StepLayout({ step, title, subtitle, children, footer, backHref }: Props) {
  const router = useRouter()
  const progress = (step / STEPS.length) * 100

  return (
    <div className="min-h-screen bg-[#F6F6F6] flex flex-col">
      {/* Progress line */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gray-200">
        <div
          className="h-full bg-gray-900 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className="px-6 pt-10 pb-6">
        {backHref && (
          <button
            onClick={() => router.push(backHref)}
            className="flex items-center gap-1.5 text-gray-400 text-sm mb-5 -ml-0.5 hover:text-gray-700 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Kembali
          </button>
        )}
        <p className="text-[11px] font-semibold tracking-widest text-gray-400 mb-2 uppercase">
          {step} / {STEPS.length} — {STEPS[step - 1]}
        </p>
        <h1 className="text-[28px] font-bold text-gray-950 leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-sm text-gray-400 mt-1.5">{subtitle}</p>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 px-5 pb-4">{children}</div>

      {/* Footer */}
      {footer && (
        <div className="sticky bottom-0 px-5 py-4 bg-[#F6F6F6]/95 backdrop-blur-md border-t border-gray-100">
          {footer}
        </div>
      )}
    </div>
  )
}
