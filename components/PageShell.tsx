'use client'

import Link from 'next/link'
import React from 'react'
import Footer from './Footer'
import Icon from './Icon'
import MobileNav from './MobileNav'
import Navbar from './Navbar'

type Props = {
  title: string
  subtitle?: string
  /** Warna sorotan di belakang judul — dibedakan per halaman. */
  accent?: 'cyan' | 'yellow' | 'pink' | 'primary-fixed'
  backHref?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

const ACCENT: Record<NonNullable<Props['accent']>, string> = {
  cyan: 'bg-cyan',
  yellow: 'bg-yellow',
  pink: 'bg-pink text-white',
  'primary-fixed': 'bg-primary-fixed',
}

/**
 * Kerangka halaman step. Menggantikan StepLayout: indikator progress dan label
 * "1 / 6" dibuang karena navbar sudah menandai posisi lewat item aktifnya,
 * tombol Kembali tetap dipertahankan.
 */
export default function PageShell({
  title,
  subtitle,
  accent = 'cyan',
  backHref,
  children,
  footer,
}: Props) {
  return (
    <div className="min-h-screen flex flex-col mp-dots">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-gutter pt-8 md:pt-12 pb-32 md:pb-16">
        {backHref && (
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 font-headline text-label-caps bg-white text-ink px-3 py-2 mp-outline mp-shadow-sm mp-press mb-8 hover:bg-yellow"
          >
            <Icon name="arrow_back" className="w-4 h-4" />
            BACK
          </Link>
        )}

        <header className="mb-10 md:mb-12">
          <div className="inline-block mp-rot-2">
            <h1
              className={`font-headline text-headline-sm md:text-headline-lg px-4 py-2 mp-outline mp-shadow-md ${ACCENT[accent]}`}
            >
              {title}
            </h1>
          </div>
          {subtitle && (
            <div className="block mt-4">
              <p className="inline-block font-body text-body-lg font-bold bg-white px-3 py-1 mp-outline mp-shadow-sm mp-rot-1">
                {subtitle}
              </p>
            </div>
          )}
        </header>

        {children}

        {footer && <div className="mt-12 flex justify-end">{footer}</div>}
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}
