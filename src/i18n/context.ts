import { createContext } from 'react'
import type { Locale } from './messages'

export type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (path: string) => string
  /** Lấy mảng chuỗi từ messages (ví dụ đoạn tóm tắt từng dòng). */
  tb: (path: string) => string[]
}

export const I18nContext = createContext<I18nContextValue | null>(null)
