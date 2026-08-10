import Link from 'next/link'
import Icon, { type IconName } from '@/components/Icon'
import Navbar from '@/components/Navbar'

/*
 * `hover` mewarnai kartu saat disentuh kursor, `hoverText` menjaga kontras
 * teks di atas warna itu — jadi keduanya harus diganti berpasangan.
 */
const STEPS: {
  n: string
  title: string
  body: string
  icon: IconName
  color: string
  hover: string
  hoverText: string
}[] = [
  {
    n: '1',
    title: 'Scan Receipt',
    body: 'Snap a photo. Our AI reads the line items and prices instantly.',
    icon: 'document_scanner',
    color: 'bg-blue',
    hover: 'group-hover:bg-cyan',
    hoverText: 'group-hover:text-ink',
  },
  {
    n: '2',
    title: 'Add People',
    body: 'Add everyone splitting this bill, right from your phone.',
    icon: 'groups',
    color: 'bg-pink',
    hover: 'group-hover:bg-pink',
    hoverText: 'group-hover:text-white',
  },
  {
    n: '3',
    title: 'Assign Items',
    body: 'Tap an item, tap a person. Shared plates split automatically.',
    icon: 'list_alt',
    color: 'bg-[#715d00]',
    hover: 'group-hover:bg-yellow',
    hoverText: 'group-hover:text-ink',
  },
  {
    n: '4',
    title: 'Settle Up',
    body: 'Copy each person’s total or export the whole bill as a PDF.',
    icon: 'payments',
    color: 'bg-blue',
    hover: 'group-hover:bg-blue',
    hoverText: 'group-hover:text-white',
  },
]

const FEATURES: { title: string; body: string; icon: IconName; tile: string; iconColor: string }[] = [
  {
    title: 'AI Scanning',
    body: 'Instantly reads any receipt format, extracting items and prices perfectly.',
    icon: 'document_scanner',
    tile: 'bg-cyan',
    iconColor: 'text-ink',
  },
  {
    title: 'Assign Items',
    body: 'Tap an item, tap a person. Splitting shared apps is just as easy.',
    icon: 'checklist',
    tile: 'bg-pink',
    iconColor: 'text-white',
  },
  {
    title: 'Tax/Service',
    body: "Automatically prorates tax and service based on each person's subtotal.",
    icon: 'calculate',
    tile: 'bg-yellow',
    iconColor: 'text-ink',
  },
  {
    title: 'Export PDF',
    body: 'Generate clean, detailed breakdowns to send via chat or email.',
    icon: 'picture_as_pdf',
    tile: 'bg-blue',
    iconColor: 'text-white',
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-gutter py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative overflow-hidden w-full">
        <div className="relative z-10 flex flex-col items-start gap-8">
          <h1 className="font-headline text-headline-sm md:text-headline-xl text-ink">
            Split the bill <br />
            <span className="text-pink relative inline-block">
              together.
              <svg
                aria-hidden="true"
                className="absolute -bottom-3 left-0 w-full"
                height="12"
                preserveAspectRatio="none"
                viewBox="0 0 100 12"
              >
                <path d="M0 6 Q 25 0, 50 6 T 100 6" fill="none" stroke="#00D9E1" strokeWidth="4" />
              </svg>
            </span>
          </h1>

          <p className="font-body text-body-lg text-on-surface-variant max-w-md">
            Snap the receipt, let AI read it, assign to anyone, done.
          </p>

          <Link
            href="/scan"
            className="bg-pink text-white font-headline text-label-caps px-8 py-4 mp-outline mp-shadow-lg mp-press -rotate-1 flex items-center gap-2"
          >
            Start Splitting
            <Icon name="arrow_forward" className="w-5 h-5" />
          </Link>
        </div>

        {/* Collage */}
        <div className="relative min-h-[420px] md:min-h-[500px] hidden sm:block">
          <div className="absolute top-10 right-10 w-16 h-16 bg-yellow rounded-full mp-outline mp-shadow-md" />
          <div className="absolute bottom-20 left-0 w-20 h-20 border-t-8 border-l-8 border-cyan rounded-tl-full rotate-45" />
          <svg aria-hidden="true" className="absolute top-1/2 right-0 w-24 h-24" viewBox="0 0 100 100">
            <path
              d="M10 50 L30 10 L50 90 L70 10 L90 50"
              fill="none"
              stroke="#FF2D95"
              strokeLinecap="round"
              strokeWidth="8"
            />
          </svg>

          {/* Phone */}
          <div className="absolute right-8 lg:right-20 top-16 w-56 lg:w-64 h-[360px] lg:h-[400px] bg-white mp-outline mp-shadow-lg rounded-xl overflow-hidden rotate-2 z-20 flex flex-col">
            <div className="h-10 border-b-[3px] border-ink flex items-center px-4 justify-between bg-yellow shrink-0">
              <span className="font-headline text-[11px] tracking-[0.15em] font-bold">TOTAL</span>
              <span className="font-headline text-lg font-black">Rp 181.500</span>
            </div>
            {/* Isi struk mengikuti nota.md — 8 item + tax/service = Rp 181.500. */}
            <div className="p-4 flex-1 space-y-1.5">
              {[
                ['Nasi Goreng', 'Rp 25.000'],
                ['Es Teh Manis', 'Rp 10.000'],
                ['Thai Tea', 'Rp 22.000'],
                ['Sate Padang', 'Rp 35.000'],
                ['Soto Betawi', 'Rp 40.000'],
                ['Nasi Uduk', 'Rp 13.000'],
                ['Ketoprak', 'Rp 15.000'],
                ['Emping', 'Rp 5.000'],
                ['Tax & Service', 'Rp 16.500'],
              ].map(([name, price]) => (
                <div
                  key={name}
                  className="flex justify-between items-center border-b-2 border-dashed border-ink pb-1.5 font-body text-xs font-bold"
                >
                  <span>{name}</span>
                  <span>{price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="absolute left-0 lg:left-10 bottom-10 w-52 h-40 bg-cyan mp-outline mp-shadow-lg rounded-lg -rotate-3 z-30 p-4 flex flex-col justify-between">
            <div className="w-10 h-10 bg-white rounded-full border-[3px] border-ink flex items-center justify-center">
              <Icon name="person" className="w-5 h-5" />
            </div>
            <div>
              <p className="font-headline text-[11px] tracking-[0.15em] font-bold text-ink">SHADY</p>
              <p className="font-headline text-2xl font-black text-ink">Rp 44.000</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="w-full py-20 md:py-24 px-gutter border-y-4 border-ink mp-dots bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-yellow mp-outline mp-shadow-md px-6 py-2 mb-12 md:mb-16 mp-rot-1">
            <h2 className="font-headline text-headline-sm md:text-headline-lg text-ink">How it works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {STEPS.map((s) => (
              <div key={s.n} className="group relative pt-8">
                {/* Badge jadi putih saat hover — badge & kartu bisa sewarna. */}
                <div
                  className={`absolute top-0 left-4 w-12 h-12 ${s.color} text-white rounded-full flex items-center justify-center font-headline text-xl font-black mp-outline z-20 transition-colors group-hover:bg-white group-hover:text-ink`}
                >
                  {s.n}
                </div>
                <div
                  className={`bg-white ${s.hover} p-6 mp-outline mp-shadow-lg mp-lift rounded-xl flex flex-col gap-4 min-h-[260px]`}
                >
                  <Icon name={s.icon} className={`w-10 h-10 text-primary transition-colors ${s.hoverText}`} />
                  <h3 className={`font-headline text-2xl font-black text-ink transition-colors ${s.hoverText}`}>
                    {s.title}
                  </h3>
                  <p className={`font-body text-on-surface-variant transition-colors ${s.hoverText}`}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-gutter py-20 md:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`bg-white p-8 mp-outline mp-shadow-lg flex items-start gap-6 ${
                i % 2 === 0 ? 'mp-rot-1' : 'mp-rot-2'
              }`}
            >
              <div className={`p-4 ${f.tile} mp-outline rounded-xl shrink-0`}>
                <Icon name={f.icon} className={`w-9 h-9 ${f.iconColor}`} />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-black mb-2">{f.title}</h3>
                <p className="font-body text-on-surface-variant">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer — versi hitam khusus landing, sesuai design.md */}
      <footer className="bg-black text-cream border-t-4 border-ink relative overflow-hidden mt-auto">
        <svg aria-hidden="true" className="absolute top-10 left-10 w-20 h-20 opacity-20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="none" r="40" stroke="#FFD400" strokeDasharray="10 10" strokeWidth="8" />
        </svg>
        <svg aria-hidden="true" className="absolute bottom-10 right-10 w-32 h-32 opacity-20" viewBox="0 0 100 100">
          <path d="M10 90 L50 10 L90 90 Z" fill="none" stroke="#FF2D95" strokeWidth="8" />
        </svg>
        <div className="w-full py-8 px-gutter flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto relative z-10">
          <p className="font-headline text-label-caps">© 2026 SPLIT BILL SHADY PROJECT</p>
          <div className="flex gap-6">
            {['Terms', 'Privacy', 'Support'].map((l) => (
              <a key={l} href="#" className="font-body text-body-md hover:text-cyan hover:italic transition-all">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
