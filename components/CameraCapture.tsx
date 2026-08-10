'use client'

import { useEffect, useRef, useState } from 'react'
import Icon from '@/components/Icon'

type Props = {
  /** Dipanggil dengan foto yang sudah disetujui pengguna di layar review. */
  onCapture: (file: File) => void
  onClose: () => void
  /** Jalan keluar kalau kamera live tidak bisa dipakai — buka file picker. */
  onFallback: () => void
}

/**
 * Sisi terpanjang hasil jepretan. Kamera ponsel gampang menembus 4000px, dan
 * batas upload di /api/scan-receipt cuma 4MB — 1600px sudah lebih dari cukup
 * untuk membaca tulisan struk.
 */
const MAX_DIMENSION = 1600

const JPEG_QUALITY = 0.9

/** Pesan kegagalan getUserMedia, dipetakan dari nama error DOM-nya. */
function describeError(err: unknown): string {
  const name = (err as { name?: string } | null)?.name

  if (name === 'NotAllowedError' || name === 'SecurityError') {
    return 'Camera access was blocked. Allow the camera in your browser settings, or pick a photo from your device instead.'
  }
  if (name === 'NotFoundError' || name === 'OverconstrainedError') {
    return 'No camera was found on this device.'
  }
  if (name === 'NotReadableError' || name === 'AbortError') {
    return 'The camera is busy — another app or browser tab may be using it.'
  }

  return 'The camera could not be started. Pick a photo from your device instead.'
}

export default function CameraCapture({ onCapture, onClose, onFallback }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [facing, setFacing] = useState<'environment' | 'user'>('environment')
  /** Dinaikkan oleh "TRY AGAIN" — satu-satunya cara memaksa efek jalan ulang. */
  const [attempt, setAttempt] = useState(0)
  const [ready, setReady] = useState(false)
  const [canSwitch, setCanSwitch] = useState(false)
  const [error, setError] = useState<string | null>(null)
  /** Hasil jepretan yang sedang ditinjau. null = kamera masih live. */
  const [shot, setShot] = useState<{ file: File; url: string } | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // Kunci scroll halaman selama dialog terbuka. Dipisah dari listener Escape
  // supaya nilai overflow asli tidak ikut tersimpan ulang tiap render — kalau
  // itu terjadi, yang "dipulihkan" saat menutup justru 'hidden'.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => { document.body.style.overflow = previousOverflow }
  }, [])

  /**
   * Nyalakan kamera. Sengaja mati selama meninjau hasil (`shot` terisi) supaya
   * indikator kamera perangkat ikut padam saat tidak dipakai.
   *
   * Elemen <video> harus sudah ada di DOM setiap kali efek ini jalan — itu
   * sebabnya kehadirannya hanya bergantung pada `shot`, bukan pada `error`.
   */
  useEffect(() => {
    if (shot) return

    let cancelled = false
    let stream: MediaStream | null = null

    async function start() {
      setReady(false)
      setError(null)

      if (typeof window !== 'undefined' && window.isSecureContext === false) {
        setError('The live camera needs a secure connection (https or localhost). Pick a photo from your device instead.')
        return
      }

      if (!navigator.mediaDevices?.getUserMedia) {
        setError('This browser does not support the live camera. Pick a photo from your device instead.')
        return
      }

      try {
        // `ideal`, bukan `exact`: laptop cuma punya kamera depan dan permintaan
        // exact:'environment' akan langsung ditolak di sana.
        stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            facingMode: { ideal: facing },
            width: { ideal: 1920 },
            height: { ideal: 1920 },
          },
        })
      } catch (err) {
        if (!cancelled) setError(describeError(err))
        return
      }

      // Efek sudah dibersihkan sementara dialog izin menunggu jawaban — stream
      // yang telat datang tetap harus dimatikan, kalau tidak lampu kamera
      // menyala tanpa ada yang menampilkannya.
      if (cancelled) {
        stream.getTracks().forEach((t) => t.stop())
        return
      }

      const video = videoRef.current
      if (video) {
        video.srcObject = stream
        // Autoplay bisa ditolak; `ready` tetap ditunggu dari loadedmetadata.
        try { await video.play() } catch { /* diabaikan */ }
      }

      // Label device baru terisi setelah izin diberikan, tapi yang dibutuhkan
      // di sini hanya jumlahnya.
      try {
        const devices = await navigator.mediaDevices.enumerateDevices()
        if (!cancelled) {
          setCanSwitch(devices.filter((d) => d.kind === 'videoinput').length > 1)
        }
      } catch { /* daftar device sifatnya opsional */ }
    }

    start()

    return () => {
      cancelled = true
      stream?.getTracks().forEach((t) => t.stop())
    }
  }, [attempt, facing, shot])

  // URL preview dicabut begitu jepretan diganti atau dialog ditutup. File-nya
  // sendiri sudah dipegang induk, jadi mencabut URL di sini aman.
  useEffect(() => {
    if (!shot) return

    return () => URL.revokeObjectURL(shot.url)
  }, [shot])

  function capture() {
    const video = videoRef.current
    if (!video) return

    const { videoWidth: w, videoHeight: h } = video
    if (!w || !h) {
      setError('The camera has not sent a picture yet. Give it a second, then try again.')
      return
    }

    const scale = Math.min(1, MAX_DIMENSION / Math.max(w, h))
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(w * scale)
    canvas.height = Math.round(h * scale)

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      setError('This browser could not process the photo. Pick a photo from your device instead.')
      return
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    canvas.toBlob(
      (blob) => {
        if (!blob) {
          setError('The photo could not be saved. Try again.')
          return
        }

        const file = new File([blob], `receipt-${Date.now()}.jpg`, { type: 'image/jpeg' })

        // Kamera dimatikan begitu masuk review, jadi status siap ikut dicabut —
        // kalau tidak, tombol jepret sempat aktif lagi sesaat setelah RETAKE.
        setReady(false)
        setShot({ file, url: URL.createObjectURL(blob) })
      },
      'image/jpeg',
      JPEG_QUALITY
    )
  }

  const reviewing = shot != null

  return (
    <div
      aria-label="Take a photo of your receipt"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
      role="dialog"
    >
      <div className="bg-cream mp-outline mp-shadow-lg w-full max-w-md p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-headline text-label-caps bg-yellow px-3 py-1.5 mp-outline mp-shadow-sm -rotate-2">
            {reviewing ? 'LOOKS GOOD?' : 'TAKE A PHOTO'}
          </span>
          <button
            aria-label="Close camera"
            className="w-10 h-10 flex items-center justify-center bg-surface mp-outline mp-shadow-sm mp-press hover:bg-tomato hover:text-white"
            onClick={onClose}
          >
            <Icon name="close" className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>

        <div className="relative w-full aspect-[3/4] max-h-[50vh] mp-outline bg-ink overflow-hidden">
          {shot ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img alt="Captured receipt" src={shot.url} className="w-full h-full object-contain" />
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                className="w-full h-full object-cover"
                muted
                onLoadedMetadata={() => setReady(true)}
                playsInline
              />

              {/* Bingkai bantu — struk yang mengisi kotak ini terbaca paling baik. */}
              <div aria-hidden="true" className="absolute inset-5 pointer-events-none">
                <span className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-yellow" />
                <span className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-yellow" />
                <span className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-yellow" />
                <span className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-yellow" />
              </div>

              {!ready && !error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/70 text-white">
                  <Icon name="sync" className="w-8 h-8 animate-spin" />
                  <p className="font-headline text-label-caps">STARTING CAMERA…</p>
                </div>
              )}

              {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-ink/80 p-4">
                  <div className="bg-error-container mp-outline mp-shadow-md p-4 flex items-start gap-3">
                    <Icon name="warning" className="w-6 h-6 text-error shrink-0 mt-0.5" />
                    <p className="font-body font-bold text-ink">{error}</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="mt-5">
          {reviewing ? (
            <div className="grid grid-cols-2 gap-4">
              <button
                className="flex items-center justify-center gap-2 bg-surface font-headline text-label-caps py-4 px-4 mp-outline mp-shadow-md mp-press hover:bg-cyan"
                onClick={() => setShot(null)}
              >
                <Icon name="sync" className="w-5 h-5" />
                RETAKE
              </button>
              <button
                className="flex items-center justify-center gap-2 bg-blue text-white font-headline text-label-caps py-4 px-4 mp-outline mp-shadow-md mp-press"
                onClick={() => onCapture(shot.file)}
              >
                <Icon name="check" className="w-5 h-5" strokeWidth={2.5} />
                USE PHOTO
              </button>
            </div>
          ) : error ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                className="flex items-center justify-center gap-2 bg-blue text-white font-headline text-label-caps py-4 px-4 mp-outline mp-shadow-md mp-press"
                onClick={onFallback}
              >
                <Icon name="image" className="w-5 h-5" />
                PICK A PHOTO
              </button>
              <button
                className="flex items-center justify-center gap-2 bg-surface font-headline text-label-caps py-4 px-4 mp-outline mp-shadow-md mp-press hover:bg-cyan"
                onClick={() => setAttempt((n) => n + 1)}
              >
                <Icon name="sync" className="w-5 h-5" />
                TRY AGAIN
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-4">
              <button
                aria-label="Pick a photo from your device"
                className="w-12 h-12 flex items-center justify-center bg-surface mp-outline mp-shadow-sm mp-press hover:bg-cyan"
                onClick={onFallback}
              >
                <Icon name="image" className="w-5 h-5" />
              </button>

              <button
                aria-label="Capture photo"
                className="w-20 h-20 rounded-full bg-pink text-white flex items-center justify-center mp-outline mp-shadow-md mp-press disabled:opacity-50"
                disabled={!ready}
                onClick={capture}
              >
                <Icon name="photo_camera" className="w-9 h-9" strokeWidth={2.2} />
              </button>

              <button
                aria-label="Switch camera"
                className="w-12 h-12 flex items-center justify-center bg-surface mp-outline mp-shadow-sm mp-press hover:bg-cyan disabled:opacity-40"
                disabled={!canSwitch}
                onClick={() => setFacing((f) => (f === 'environment' ? 'user' : 'environment'))}
              >
                <Icon name="cameraswitch" className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
