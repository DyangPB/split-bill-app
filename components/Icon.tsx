/**
 * Pengganti Material Symbols.
 *
 * design.md memakai font ikon Material Symbols, tapi font itu tidak tersedia
 * lewat next/font/google (beda dengan Montserrat & Space Grotesk). Daripada
 * bergantung pada CDN saat runtime — dan sempat menampilkan teks mentah
 * "qr_code_scanner" sebelum font termuat — ikon digambar sebagai SVG inline.
 *
 * Semua path memakai stroke currentColor supaya ikut warna teks induknya.
 */

export type IconName =
  | 'qr_code_scanner'
  | 'list_alt'
  | 'groups'
  | 'handshake'
  | 'receipt_long'
  | 'photo_camera'
  | 'cameraswitch'
  | 'edit_square'
  | 'add_circle'
  | 'delete'
  | 'arrow_forward'
  | 'arrow_back'
  | 'content_copy'
  | 'drag_indicator'
  | 'warning'
  | 'lightbulb'
  | 'priority_high'
  | 'check'
  | 'close'
  | 'more_horiz'
  | 'sync'
  | 'hourglass_empty'
  | 'picture_as_pdf'
  | 'payments'
  | 'calculate'
  | 'checklist'
  | 'document_scanner'
  | 'person'
  | 'storefront'
  | 'image'
  | 'wallet'

const PATHS: Record<IconName, React.ReactNode> = {
  qr_code_scanner: (
    <>
      <path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M7 7h3v3H7zM14 7h3v3h-3zM7 14h3v3H7zM14 14h3v3h-3z" />
    </>
  ),
  list_alt: (
    <>
      <rect height="16" rx="2" width="18" x="3" y="4" />
      <path d="M7 9h2M7 13h2M7 17h2M12 9h5M12 13h5M12 17h5" />
    </>
  ),
  groups: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />
      <path d="M16 6.5a3 3 0 0 1 0 5.5M17 14a5 5 0 0 1 4 5v1" />
    </>
  ),
  handshake: (
    <>
      <path d="m9 12 2 2 2-2 2 2 3-3-4-4H8L4 11l3 3z" />
      <path d="M4 11 2 9l3-3 3 2M20 11l2-2-3-3-3 2" />
    </>
  ),
  receipt_long: (
    <>
      <path d="M5 3v18l2-1.5L9 21l2-1.5L13 21l2-1.5L17 21l2-1.5V3l-2 1.5L15 3l-2 1.5L11 3 9 4.5 7 3z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  photo_camera: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  cameraswitch: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 13a3 3 0 0 1 5-2.2M15 13a3 3 0 0 1-5 2.2" />
      <path d="M14 8.5h-1.5V10M10 17.5h1.5V16" />
    </>
  ),
  edit_square: (
    <>
      <path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7" />
      <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z" />
    </>
  ),
  add_circle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  delete: (
    <>
      <path d="M4 6h16M9 6V4h6v2M6 6l1 14h10l1-14" />
      <path d="M10 11v5M14 11v5" />
    </>
  ),
  arrow_forward: <path d="M4 12h16M14 6l6 6-6 6" />,
  arrow_back: <path d="M20 12H4M10 6l-6 6 6 6" />,
  content_copy: (
    <>
      <rect height="13" rx="2" width="11" x="9" y="8" />
      <path d="M5 15V5a2 2 0 0 1 2-2h8" />
    </>
  ),
  drag_indicator: (
    <>
      <circle cx="9" cy="6" r="1.4" />
      <circle cx="15" cy="6" r="1.4" />
      <circle cx="9" cy="12" r="1.4" />
      <circle cx="15" cy="12" r="1.4" />
      <circle cx="9" cy="18" r="1.4" />
      <circle cx="15" cy="18" r="1.4" />
    </>
  ),
  warning: (
    <>
      <path d="M12 3 2 20h20z" />
      <path d="M12 9v5M12 17h.01" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3" />
    </>
  ),
  priority_high: <path d="M12 4v10M12 19h.01" />,
  check: <path d="M4 12.5 9.5 18 20 6.5" />,
  close: <path d="M5 5l14 14M19 5L5 19" />,
  more_horiz: (
    <>
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </>
  ),
  sync: (
    <>
      <path d="M20 12a8 8 0 0 1-13.7 5.6M4 12a8 8 0 0 1 13.7-5.6" />
      <path d="M17 3v4h-4M7 21v-4h4" />
    </>
  ),
  hourglass_empty: (
    <>
      <path d="M7 3h10M7 21h10" />
      <path d="M7 3v4l5 5 5-5V3M7 21v-4l5-5 5 5v4" />
    </>
  ),
  picture_as_pdf: (
    <>
      <path d="M6 3h8l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5" />
      <path d="M8 17v-4h1.5a1.2 1.2 0 0 1 0 2.4H8M13 17v-4h1.6a2 2 0 0 1 0 4z" />
    </>
  ),
  payments: (
    <>
      <rect height="9" rx="2" width="16" x="2" y="7" />
      <circle cx="10" cy="11.5" r="2.5" />
      <path d="M6 20h12a4 4 0 0 0 4-4V9" />
    </>
  ),
  calculate: (
    <>
      <rect height="18" rx="2" width="16" x="4" y="3" />
      <path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2" />
    </>
  ),
  checklist: (
    <>
      <path d="M3 6.5 5 8.5 8.5 5M3 16.5 5 18.5 8.5 15" />
      <path d="M12 7h9M12 17h9" />
    </>
  ),
  document_scanner: (
    <>
      <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
      <path d="M8 9h8M8 12h8M8 15h5" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1" />
    </>
  ),
  storefront: (
    <>
      <path d="M4 4h16l1.5 5a3 3 0 0 1-5.75 1.6A3 3 0 0 1 12 11a3 3 0 0 1-3.75-.4A3 3 0 0 1 2.5 9z" />
      <path d="M4.5 11.5V20h15v-8.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  image: (
    <>
      <rect height="16" rx="2" width="18" x="3" y="4" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m4 17 5-5 4 4 2.5-2.5L20 17" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h11v4" />
      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H5a2 2 0 0 1-2-2z" />
      <circle cx="16.5" cy="13" r="1.2" />
    </>
  ),
}

type Props = {
  name: IconName
  className?: string
  strokeWidth?: number
}

export default function Icon({ name, className = 'w-6 h-6', strokeWidth = 2 }: Props) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
    >
      {PATHS[name]}
    </svg>
  )
}
