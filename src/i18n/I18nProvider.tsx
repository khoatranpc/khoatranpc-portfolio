import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { LOCALE_STORAGE_KEY } from './constants'
import { yearsSinceCareerStart } from './careerYears'
import { I18nContext } from './context'
import { type Locale, messages } from './messages'

function injectCareerYears(s: string): string {
  const y = String(yearsSinceCareerStart())
  return s.replaceAll('{{careerYears}}', y)
}

function getString(tree: unknown, path: string): string {
  const keys = path.split('.')
  let node: unknown = tree
  for (const k of keys) {
    if (node === null || typeof node !== 'object' || !(k in node)) {
      return path
    }
    node = (node as Record<string, unknown>)[k]
  }
  const raw = typeof node === 'string' ? node : path
  return injectCareerYears(raw)
}

function getStringArray(tree: unknown, path: string): string[] {
  const keys = path.split('.')
  let node: unknown = tree
  for (const k of keys) {
    if (node === null || typeof node !== 'object' || !(k in node)) {
      return []
    }
    node = (node as Record<string, unknown>)[k]
  }
  if (!Array.isArray(node)) return []
  return node
    .filter((item): item is string => typeof item === 'string')
    .map((item) => injectCareerYears(item))
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'vi'
    const s = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return s === 'en' || s === 'vi' ? s : 'vi'
  })

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'vi' ? 'vi' : 'en'
  }, [locale])

  const tree = messages[locale]

  const t = useCallback((path: string) => getString(tree, path), [tree])

  const tb = useCallback((path: string) => getStringArray(tree, path), [tree])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      tb,
    }),
    [locale, setLocale, t, tb],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
