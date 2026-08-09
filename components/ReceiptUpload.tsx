'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useReceiptStore } from '@/store/receiptStore'

export default function ReceiptUpload() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const setItems = useReceiptStore((s) => s.setItems)
  const setCharges = useReceiptStore((s) => s.setCharges)
  const router = useRouter()

  async function handleFile(file: File) {
    setPreview(URL.createObjectURL(file))
    setLoading(true)
    setError(null)

    const form = new FormData()
    form.append('image', file)

    const res = await fetch('/api/scan-receipt', { method: 'POST', body: form })
    const text = await res.text()
    setLoading(false)

    if (!text) { setError('Server tidak merespons'); return }

    let data: {
      error?: string
      items?: { name: string; price: number; qty: number }[]
      tax?: number | null
      service?: number | null
    }
    try { data = JSON.parse(text) } catch { setError('Respons server tidak valid'); return }

    if (!res.ok || data.error) { setError(data.error ?? 'Gagal membaca struk'); return }

    setItems(data.items ?? [])

    // Auto-apply pajak & service yang terdeteksi dari struk
    if (data.tax != null && data.tax > 0) {
      setCharges({ taxEnabled: true, taxRate: data.tax })
    }
    if (data.service != null && data.service > 0) {
      setCharges({ serviceEnabled: true, serviceRate: data.service })
    }

    router.push('/items')
  }

  function reset() {
    setPreview(null)
    setError(null)
    setItems([])
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className="space-y-3">
      {!preview ? (
        <button
          onClick={() => inputRef.current?.click()}
          className="w-full aspect-[4/3] border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center gap-4 bg-white hover:border-gray-400 transition-colors active:scale-[0.98]"
        >
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="3" y="7" width="22" height="16" rx="2" stroke="#666" strokeWidth="1.5"/>
              <circle cx="14" cy="15" r="4" stroke="#666" strokeWidth="1.5"/>
              <path d="M10 7L11.5 4.5H16.5L18 7" stroke="#666" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-700 text-sm">Foto Struk</p>
            <p className="text-xs text-gray-400 mt-0.5">Kamera atau galeri</p>
          </div>
        </button>
      ) : (
        <div className="relative rounded-3xl overflow-hidden bg-gray-100">
          <img src={preview} alt="Struk" className="w-full object-cover max-h-80" />
          {!loading && (
            <button
              onClick={reset}
              className="absolute top-3 right-3 bg-gray-950/70 backdrop-blur-sm text-white rounded-full w-8 h-8 flex items-center justify-center text-xs"
            >
              ✕
            </button>
          )}
          {loading && (
            <div className="absolute inset-0 bg-gray-950/50 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
              <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <p className="text-white text-sm font-medium">Membaca struk…</p>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-100 rounded-2xl px-4 py-3">
          <p className="text-sm font-medium text-red-600">{error}</p>
        </div>
      )}

      <input ref={inputRef} type="file" accept="image/*" capture="environment" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f) }} />
    </div>
  )
}
