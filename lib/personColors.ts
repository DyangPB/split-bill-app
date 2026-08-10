/**
 * Palet per-orang dalam bahasa visual Memphis.
 *
 * - dot   : latar avatar / chip aktif
 * - on    : warna teks di atas `dot` (kontras)
 * - light : latar lembut untuk panel rincian
 * - text  : warna teks beraksen di atas `light`
 */
export const PERSON_COLORS = [
  { dot: 'bg-cyan',      on: 'text-ink',   light: 'bg-[#d6fbfd]', text: 'text-[#00767a]' },
  { dot: 'bg-pink',      on: 'text-white', light: 'bg-[#ffd9e3]', text: 'text-secondary' },
  { dot: 'bg-yellow',    on: 'text-ink',   light: 'bg-[#ffe177]', text: 'text-[#6b5800]' },
  { dot: 'bg-blue',      on: 'text-white', light: 'bg-[#dfe0ff]', text: 'text-primary'   },
  { dot: 'bg-tomato',    on: 'text-white', light: 'bg-[#ffdad6]', text: 'text-[#b03000]' },
  { dot: 'bg-secondary', on: 'text-white', light: 'bg-[#ffd9e3]', text: 'text-secondary' },
]

export function getColor(index: number) {
  return PERSON_COLORS[index % PERSON_COLORS.length]
}
