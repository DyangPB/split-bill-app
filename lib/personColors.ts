export const PERSON_COLORS = [
  { dot: 'bg-rose-400',    light: 'bg-rose-50',    text: 'text-rose-500'    },
  { dot: 'bg-sky-400',     light: 'bg-sky-50',     text: 'text-sky-500'     },
  { dot: 'bg-emerald-400', light: 'bg-emerald-50', text: 'text-emerald-500' },
  { dot: 'bg-amber-400',   light: 'bg-amber-50',   text: 'text-amber-500'   },
  { dot: 'bg-violet-400',  light: 'bg-violet-50',  text: 'text-violet-500'  },
  { dot: 'bg-pink-400',    light: 'bg-pink-50',    text: 'text-pink-500'    },
]

export function getColor(index: number) {
  return PERSON_COLORS[index % PERSON_COLORS.length]
}
