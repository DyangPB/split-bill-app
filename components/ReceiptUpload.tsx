'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import CameraCapture from '@/components/CameraCapture'
import Icon from '@/components/Icon'
import { useReceiptStore, type ReceiptItem } from '@/store/receiptStore'
import type { Reconciliation } from '@/lib/receiptScan'

/** Ikon tips — file PNG di public/, dirujuk lewat path URL-nya. */
const TIPS: { icon: string; tile: string; title: string; body: string; rot: string }[] = [
  { icon: '/readable_lines.png', tile: 'bg-tertiary-fixed', title: 'Readable Lines', body: 'Ensure prices and items are clear.', rot: '-rotate-2' },
  { icon: '/blurred.png', tile: 'bg-yellow', title: 'No Blurry Photos', body: "Hold steady. We can't read magic eye puzzles.", rot: 'rotate-3' },
  { icon: '/folds.png', tile: 'bg-secondary-fixed', title: 'Flatten Folds', body: 'Smooth out the paper before snapping.', rot: '-rotate-1' },
  { icon: '/spotlight.png', tile: 'bg-primary-fixed', title: 'Good Lighting', body: 'Avoid harsh shadows over the totals.', rot: 'rotate-2' },
]

/** Ukuran render ikon tips, dalam piksel CSS (setara kelas w-7/h-7). */
const TIP_ICON_SIZE = 28

const CHECKLIST = [
  'Scanning image quality',
  'Extracting line items & prices',
  'Identifying tax & service',
  'Preparing your split sheet',
]

/**
 * Jeda antar langkah checklist. Scan biasanya 3–6 detik, jadi tiga langkah
 * pertama habis kira-kira bersamaan dengan datangnya respons.
 */
const STEP_MS = 1300

/** Waktu langkah terakhir terlihat centang penuh sebelum pindah halaman. */
const FINISH_MS = 650

export default function ReceiptUpload() {
  const fileRef = useRef<HTMLInputElement>(null)
  const cameraRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [stage, setStage] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [cameraOpen, setCameraOpen] = useState(false)
  const setItems = useReceiptStore((s) => s.setItems)
  const setCharges = useReceiptStore((s) => s.setCharges)
  const router = useRouter()

  /**
   * Checklist berjalan sendiri selama menunggu, tapi berhenti di langkah
   * terakhir — supaya animasi tidak pernah mengaku selesai mendahului server.
   */
  useEffect(() => {
    if (!loading) return

    // Penjaga `s >= CHECKLIST.length` penting: begitu scan selesai, stage
    // dilompatkan ke akhir sementara loading masih true — tanpa ini tick
    // berikutnya akan menariknya balik dan centang terakhir berkedip hilang.
    const timer = setInterval(
      () =>
        setStage((s) => (s >= CHECKLIST.length ? s : Math.min(s + 1, CHECKLIST.length - 1))),
      STEP_MS
    )

    return () => clearInterval(timer)
  }, [loading])

  async function handleFile(file: File) {
    setPreview(URL.createObjectURL(file))
    setError(null)
    setStage(0)
    setLoading(true)

    const form = new FormData()
    form.append('image', file)

    let data: {
      error?: string
      items?: ReceiptItem[]
      merchant?: string | null
      taxRate?: number | null
      serviceRate?: number | null
      reconciliation?: Reconciliation | null
    }

    /** Satu-satunya jalan keluar dari layar scan, supaya animasi tak menggantung. */
    function abort(message: string) {
      setError(message)
      setLoading(false)
    }

    try {
      const res = await fetch('/api/scan-receipt', { method: 'POST', body: form })
      const text = await res.text()

      if (!text) { abort('The server did not respond. Please try again.'); return }

      try { data = JSON.parse(text) } catch { abort('The server sent an invalid response.'); return }

      if (!res.ok || data.error) {
        abort(data.error ?? 'Could not read the receipt.')
        return
      }
    } catch {
      abort('Could not reach the server. Check your internet connection.')
      return
    }

    setItems(data.items ?? [], data.reconciliation ?? null, data.merchant ?? null)

    // Pajak & service dari struk sudah divalidasi 0–100 di server.
    if (data.taxRate != null && data.taxRate > 0) {
      setCharges({ taxEnabled: true, taxRate: data.taxRate })
    }
    if (data.serviceRate != null && data.serviceRate > 0) {
      setCharges({ serviceEnabled: true, serviceRate: data.serviceRate })
    }

    // Hasil scan sudah masuk store, jadi jeda penutup ini murni visual: semua
    // langkah dicentang dulu supaya "Preparing your split sheet" ikut terlihat.
    setStage(CHECKLIST.length)
    await new Promise((resolve) => setTimeout(resolve, FINISH_MS))

    router.push('/items')
  }

  /**
   * Kamera live butuh getUserMedia dan konteks aman. Kalau salah satunya tidak
   * ada, langsung jatuh ke input file `capture` — di ponsel itu tetap membuka
   * aplikasi kamera bawaan.
   */
  function openCamera() {
    const supported =
      typeof navigator !== 'undefined' &&
      !!navigator.mediaDevices?.getUserMedia &&
      window.isSecureContext !== false

    if (supported) setCameraOpen(true)
    else cameraRef.current?.click()
  }

  /** Scan gagal tidak boleh jadi jalan buntu — selalu ada jalan ke input manual. */
  function goManual() {
    setItems([], null)
    router.push('/items')
  }

  function reset() {
    setPreview(null)
    setError(null)
    if (fileRef.current) fileRef.current.value = ''
    if (cameraRef.current) cameraRef.current.value = ''
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragging(false)
    const f = e.dataTransfer.files?.[0]
    if (f) handleFile(f)
  }

  // Layar "Reading your receipt" — mengambil alih seluruh area saat memindai.
  if (loading) {
    const finished = stage >= CHECKLIST.length

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="flex justify-center">
          <div className="bg-cream mp-outline mp-shadow-lg p-6 mp-rot-1 w-full max-w-sm relative">
            <div className="absolute -top-6 -left-6 -z-10 text-secondary">
              <svg aria-hidden="true" height="60" viewBox="0 0 100 100" width="60">
                <path d="M10,50 Q25,20 40,50 T70,50 T100,50" fill="none" stroke="currentColor" strokeWidth="8" />
              </svg>
            </div>
            {preview ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img alt="Receipt" src={preview} className="w-full h-72 object-cover mp-outline" />
            ) : (
              <div className="w-full h-72 mp-outline bg-white flex items-center justify-center">
                <Icon name="receipt_long" className="w-16 h-16 text-outline" />
              </div>
            )}
            <div className="mt-4 flex justify-between items-center border-t-[3px] border-ink pt-4">
              <span className="font-headline text-label-caps bg-yellow px-2 py-1 mp-outline mp-shadow-sm -rotate-3">
                SCAN 001
              </span>
              <Icon name="receipt_long" className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-headline text-headline-sm md:text-headline-lg mb-2">
            {finished ? 'All set!' : 'Reading your receipt…'}
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mb-8">
            {finished ? 'Taking you to your items.' : 'This usually takes a few seconds.'}
          </p>

          <div className="flex flex-col gap-5">
            {CHECKLIST.map((label, i) => {
              const done = i < stage
              const active = i === stage

              return (
                <div
                  key={label}
                  className={`flex items-center gap-4 p-4 mp-outline transition-all duration-300 ${
                    done
                      ? 'bg-surface-container mp-shadow-md mp-rot-2'
                      : active
                        ? 'bg-white mp-shadow-md mp-rot-1 relative z-10'
                        : 'bg-surface-container-low mp-shadow-sm mp-rot-2 opacity-60'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full mp-outline flex items-center justify-center shrink-0 transition-colors ${
                      done ? 'bg-pink text-white' : active ? 'bg-cyan text-ink animate-spin' : 'bg-surface text-outline'
                    }`}
                  >
                    <Icon
                      name={done ? 'check' : active ? 'sync' : 'hourglass_empty'}
                      className="w-5 h-5"
                      strokeWidth={2.5}
                    />
                  </div>
                  <p
                    className={`font-headline text-base font-bold transition-opacity ${
                      done ? 'line-through opacity-70' : ''
                    }`}
                  >
                    {label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      <div className="lg:col-span-8 flex flex-col gap-6">
        <button
          onClick={() => fileRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          className={`group w-full h-72 md:h-80 rounded-xl flex flex-col items-center justify-center gap-4 relative overflow-hidden transition-all ${
            dragging
              ? 'border-[4px] border-solid border-ink bg-yellow scale-[1.02]'
              : 'border-[4px] border-dashed border-ink bg-yellow/10'
          }`}
        >
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary opacity-20 blur-xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary opacity-20 blur-xl rounded-full pointer-events-none" />

          <Icon
            name="receipt_long"
            className="w-20 h-20 text-primary drop-shadow-[3px_3px_0px_rgba(27,27,27,1)] group-hover:scale-110 transition-transform"
            strokeWidth={1.6}
          />
          <h2 className="font-headline text-2xl md:text-3xl font-black">Drag your receipt here</h2>
          <p className="font-body text-on-surface-variant">JPG or PNG, up to 4MB</p>
        </button>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-[3px] bg-ink" />
          <span className="font-headline text-label-caps bg-surface-variant px-3 py-1 rounded-full border-2 border-ink">
            OR
          </span>
          <div className="flex-1 h-[3px] bg-ink" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            onClick={openCamera}
            className="flex items-center justify-center gap-3 bg-blue text-white font-headline text-label-caps py-4 px-6 mp-outline mp-shadow-md mp-press"
          >
            <Icon name="photo_camera" className="w-5 h-5" />
            TAKE A PHOTO
          </button>
          <button
            onClick={goManual}
            className="flex items-center justify-center gap-3 bg-surface font-headline text-label-caps py-4 px-6 mp-outline mp-shadow-md mp-press hover:bg-cyan"
          >
            <Icon name="edit_square" className="w-5 h-5" />
            ENTER MANUALLY
          </button>
        </div>

        {error && (
          <div className="bg-error-container mp-outline mp-shadow-md p-4 flex items-start gap-3">
            <Icon name="warning" className="w-6 h-6 text-error shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-body font-bold text-ink">{error}</p>
              <div className="flex flex-wrap gap-4 mt-3">
                <button
                  onClick={reset}
                  className="font-headline text-[12px] tracking-[0.15em] font-bold underline underline-offset-4 hover:text-secondary"
                >
                  TRY ANOTHER PHOTO
                </button>
                <button
                  onClick={goManual}
                  className="font-headline text-[12px] tracking-[0.15em] font-bold underline underline-offset-4 hover:text-secondary"
                >
                  ENTER MANUALLY
                </button>
              </div>
            </div>
          </div>
        )}

        {preview && !error && (
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Receipt preview" src={preview} className="w-16 h-16 object-cover mp-outline" />
            <button onClick={reset} className="font-headline text-label-caps underline underline-offset-4">
              REMOVE
            </button>
          </div>
        )}
      </div>

      <aside className="lg:col-span-4">
        <div className="bg-cream p-6 rounded-xl mp-outline mp-shadow-md mp-rot-2 relative">
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full mp-outline" />

          <span className="inline-flex items-center gap-2 font-headline text-label-caps bg-cyan px-3 py-1.5 rounded-full mp-outline mp-shadow-sm -rotate-3 mb-6">
            <Icon name="lightbulb" className="w-4 h-4" />
            PRO TIPS
          </span>

          <ul className="flex flex-col gap-5">
            {TIPS.map((t) => (
              <li key={t.title} className="flex items-start gap-4">
                <span
                  className={`w-10 h-10 rounded-lg ${t.tile} ${t.rot} mp-outline mp-shadow-sm flex items-center justify-center shrink-0`}
                >
                  {/* Dekoratif — judul & isi tips di sebelahnya sudah menjelaskan. */}
                  <Image
                    alt=""
                    src={t.icon}
                    width={TIP_ICON_SIZE}
                    height={TIP_ICON_SIZE}
                    className="w-7 h-7 object-contain"
                  />
                </span>
                <div>
                  <p className="font-headline text-base font-bold leading-tight">{t.title}</p>
                  <p className="font-body text-sm text-on-surface-variant mt-0.5">{t.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
      />
      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
      />

      {cameraOpen && (
        <CameraCapture
          onCapture={(file) => { setCameraOpen(false); handleFile(file) }}
          onClose={() => setCameraOpen(false)}
          onFallback={() => { setCameraOpen(false); fileRef.current?.click() }}
        />
      )}
    </div>
  )
}
