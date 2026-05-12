import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'
import type { Locale } from '../i18n/messages'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'font-body-md transition-colors',
    isActive
      ? 'border-b-2 border-secondary pb-1 font-bold text-secondary'
      : 'text-on-surface-variant hover:text-secondary',
  ].join(' ')

function LangButton({
  code,
  active,
  onSelect,
}: {
  code: Locale
  active: boolean
  onSelect: (l: Locale) => void
}) {
  const { t } = useI18n()
  const label = code === 'vi' ? t('lang.vi') : t('lang.en')
  return (
    <button
      type="button"
      onClick={() => onSelect(code)}
      className={[
        'rounded px-xs py-0.5 font-label-caps text-label-caps transition-colors',
        active
          ? 'bg-secondary text-on-secondary'
          : 'text-on-surface-variant hover:text-on-surface',
      ].join(' ')}
      aria-pressed={active}
      aria-label={`${t('lang.switch')}: ${label}`}
    >
      {label}
    </button>
  )
}

export function SiteHeader() {
  const { locale, setLocale, t } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-surface">
      <div className="mx-auto flex h-16 w-full max-w-max-width items-center justify-between gap-sm px-gutter">
        <Link
          to="/"
          className="shrink-0 font-headline-lg text-headline-lg font-bold tracking-tighter text-on-surface"
          onClick={() => setMenuOpen(false)}
        >
          TRẦN ĐĂNG KHOA
        </Link>

        <nav className="hidden items-center gap-md md:flex">
          <NavLink to="/projects" className={navLinkClass}>
            {t('nav.projects')}
          </NavLink>
          <NavLink to="/experience" className={navLinkClass}>
            {t('nav.experience')}
          </NavLink>
          <NavLink to="/teaching" className={navLinkClass}>
            {t('nav.teaching')}
          </NavLink>
          <NavLink to="/" end className={navLinkClass}>
            {t('nav.about')}
          </NavLink>
          <div
            className="ml-xs flex items-center gap-0.5 rounded border border-outline-variant bg-surface-container-low p-0.5"
            role="group"
            aria-label={t('lang.switch')}
          >
            <LangButton code="vi" active={locale === 'vi'} onSelect={setLocale} />
            <LangButton code="en" active={locale === 'en'} onSelect={setLocale} />
          </div>
          <button
            type="button"
            className="rounded bg-secondary px-sm py-xs font-label-caps text-label-caps text-on-secondary transition-all duration-150 ease-in-out hover:brightness-110 active:scale-95"
          >
            {t('nav.resume')}
          </button>
        </nav>

        <div className="flex items-center gap-xs md:hidden">
          <div className="flex items-center gap-0.5 rounded border border-outline-variant bg-surface-container-low p-0.5">
            <LangButton code="vi" active={locale === 'vi'} onSelect={setLocale} />
            <LangButton code="en" active={locale === 'en'} onSelect={setLocale} />
          </div>
          <button
            type="button"
            className="p-xs text-on-surface"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-outline-variant bg-surface px-gutter py-md md:hidden">
          <div className="flex flex-col gap-sm">
            <NavLink
              to="/projects"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.projects')}
            </NavLink>
            <NavLink
              to="/experience"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.experience')}
            </NavLink>
            <NavLink
              to="/teaching"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.teaching')}
            </NavLink>
            <NavLink
              to="/"
              end
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.about')}
            </NavLink>
            <button
              type="button"
              className="mt-xs w-full rounded bg-secondary py-xs font-label-caps text-label-caps text-on-secondary"
            >
              {t('nav.resume')}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
