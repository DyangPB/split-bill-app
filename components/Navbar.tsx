'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon, { type IconName } from './Icon'

export type NavDestination = {
  href: string
  label: string
  icon: IconName
}

/** Urutan sama dengan alur aplikasi, dipakai bareng oleh navbar atas & bawah. */
export const NAV_DESTINATIONS: NavDestination[] = [
  { href: '/scan', label: 'SCAN', icon: 'qr_code_scanner' },
  { href: '/items', label: 'ITEMS', icon: 'list_alt' },
  { href: '/people', label: 'PEOPLE', icon: 'groups' },
  { href: '/assign', label: 'ASSIGN', icon: 'handshake' },
  { href: '/summary', label: 'BILL', icon: 'receipt_long' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-background sticky top-0 w-full z-50 border-b-4 border-ink shadow-[5px_5px_0px_0px_rgba(27,27,27,1)]">
      <div className="flex justify-between items-center px-gutter py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="font-headline text-[32px] font-black text-primary border-b-4 border-secondary leading-none shrink-0"
        >
          SPLIT BILL
        </Link>

        <div className="hidden md:flex items-center gap-6 flex-grow justify-center px-4">
          {NAV_DESTINATIONS.map((d) => {
            const active = pathname === d.href

            return (
              <Link
                key={d.href}
                href={d.href}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'flex items-center gap-2 font-headline text-label-caps bg-primary text-white px-4 py-2 mp-outline -rotate-1 mp-shadow-sm hover:skew-x-1 transition-transform'
                    : 'flex items-center gap-2 font-headline text-label-caps text-ink hover:text-primary transition-colors'
                }
              >
                <Icon name={d.icon} className="w-5 h-5" />
                {d.label}
              </Link>
            )
          })}
        </div>

        {/* Penyeimbang lebar supaya menu tengah benar-benar di tengah. */}
        <div className="hidden md:block w-[150px] shrink-0" />
      </div>
    </nav>
  )
}
