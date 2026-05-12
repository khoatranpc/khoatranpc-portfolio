import { useI18n } from '../i18n/useI18n'

export function SiteFooter() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest">
      <div className="mx-auto flex max-w-max-width flex-col items-center justify-between gap-md px-gutter py-lg md:flex-row">
        <div className="text-center md:text-left">
          <span className="mb-2 block font-headline-lg text-headline-lg font-bold text-on-surface">
            TRẦN ĐĂNG KHOA
          </span>
          <p className="font-body-md text-on-surface-variant">
            © {new Date().getFullYear()} Trần Đăng Khoa. {t('footer.tagline')}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-md">
          <a
            className="font-code-sm text-code-sm text-on-surface-variant transition-colors hover:text-secondary"
            href="mailto:khoatranpc603@gmail.com"
          >
            {t('footer.email')}
          </a>
          <a
            className="font-code-sm text-code-sm text-on-surface-variant transition-colors hover:text-secondary"
            href="https://zalo.me/84353923603"
            target="_blank"
            rel="noreferrer"
          >
            {t('footer.zalo')}
          </a>
          <a
            className="font-code-sm text-code-sm text-on-surface-variant transition-colors hover:text-secondary"
            href="https://github.com/khoatranpc"
            target="_blank"
            rel="noreferrer"
          >
            {t('footer.github')}
          </a>
          <span className="font-code-sm text-code-sm text-on-surface-variant">
            {t('footer.location')}
          </span>
        </div>
      </div>
    </footer>
  )
}
