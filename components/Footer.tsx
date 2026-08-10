const LINKS = ['Terms', 'Privacy', 'Support']

export default function Footer() {
  return (
    <footer className="bg-tertiary-fixed w-full mt-auto border-t-4 border-ink">
      <div className="w-full py-8 px-gutter flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <p className="font-headline text-label-caps text-on-tertiary-fixed">
          © 2026 SPLIT BILL SHADY PROJECT
        </p>
        <div className="flex gap-6">
          {LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="font-body text-body-md text-on-tertiary-fixed hover:text-secondary hover:italic transition-all"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
