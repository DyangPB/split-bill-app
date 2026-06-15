import Link from 'next/link'

const FEATURES = [
  { icon: '📷', label: 'AI scan struk otomatis' },
  { icon: '👥', label: 'Assign item ke tiap orang' },
  { icon: '🧾', label: 'Hitung pajak & biaya layanan' },
  { icon: '📤', label: 'Bagikan tagihan & export PDF' },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col px-6 pt-16 pb-8">

      {/* Badge */}
      <p className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase mb-12">
        Split Bill App
      </p>

      {/* Hero */}
      <div className="flex-1">
        <h1 className="text-[52px] font-black leading-[1.05] text-white">
          Bagi<br />
          tagihan<br />
          <span className="text-gray-600">bareng.</span>
        </h1>

        <p className="mt-6 text-gray-400 text-base leading-relaxed">
          Foto struk, AI baca otomatis,<br />
          assign ke siapa aja, selesai.
        </p>

        {/* Features */}
        <div className="mt-10 space-y-3.5">
          {FEATURES.map((f) => (
            <div key={f.label} className="flex items-center gap-3.5">
              <div className="w-8 h-8 bg-gray-800 rounded-xl flex items-center justify-center text-base shrink-0">
                {f.icon}
              </div>
              <p className="text-gray-300 text-sm">{f.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 space-y-3">
        <Link
          href="/scan"
          className="block w-full py-4 bg-white text-gray-950 font-bold rounded-2xl text-center text-base active:scale-[0.98] transition-transform"
        >
          Mulai Split Bill →
        </Link>
        <p className="text-center text-xs text-gray-600">
          Gratis · Tidak perlu login
        </p>
      </div>

    </div>
  )
}
