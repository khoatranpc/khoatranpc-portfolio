export const BTYPE_VALUES = ['tieu_hoc', 'trung_hoc'] as const

export type Btype = (typeof BTYPE_VALUES)[number]

export function parseBtype(value: string | null): Btype | null {
  if (value === 'tieu_hoc' || value === 'trung_hoc') return value
  return null
}
