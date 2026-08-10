'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from './Icon'
import { NAV_DESTINATIONS } from './Navbar'

/**
 * Navigasi bawah untuk layar kecil.
 *
 * Di design.md, bottom nav hanya muncul di halaman People & Check Items dan
 * sengaja ditiadakan di Manual Entry. Karena aplikasi ini dipakai di HP,
 * navigasinya diseragamkan ke semua halaman step.
 */
export default function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface border-t-4 border-ink shadow-[0px_-5px_0px_0px_rgba(27,27,27,1)] flex justify-around items-stretch py-2 px-1">
      {NAV_DESTINATIONS.map((d) => {
        const active = pathname === d.href

        return (
          <Link
            key={d.href}
            href={d.href}
            aria-current={active ? 'page' : undefined}
            className={
              active
                ? 'flex flex-col items-center px-2 py-1.5 text-white bg-primary mp-outline mp-shadow-sm -translate-y-2'
                : 'flex flex-col items-center px-2 py-1.5 text-ink'
            }
          >
            <Icon name={d.icon} className="w-6 h-6" />
            <span className="text-[10px] font-headline font-bold mt-1">{d.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
