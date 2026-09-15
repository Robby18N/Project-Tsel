// Shared "tone" -> Tailwind color mapping used by badges across the
// dashboard (NPS category tags, verbatim theme chips, etc).
export const TONE_CLASSES = {
  good: { bg: 'bg-[#05cd991a]', text: 'text-[#037759]' },
  warn: { bg: 'bg-[#fffbebff]', text: 'text-[#a77014]' },
  bad: { bg: 'bg-[#fef2f2ff]', text: 'text-[#c73326]' },
  neutral: { bg: 'bg-[#f4f7feff]', text: 'text-[#a3aed0]' },
}

export function toneClasses(tone) {
  return TONE_CLASSES[tone] ?? TONE_CLASSES.neutral
}
