import type { FormEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import { TEACHING_LOGIC_DETAIL_URL } from '../i18n/constants'
import { yearsSinceCareerStartPlus } from '../i18n/careerYears'
import { useI18n } from '../i18n/useI18n'

const detailBtnClass =
  'inline-flex items-center gap-xs rounded-lg border border-outline-variant bg-surface-container-high px-md py-sm font-label-caps text-label-caps text-on-surface transition-colors hover:border-secondary/50 hover:bg-surface-container'

export function TeachingPage() {
  const { t } = useI18n()
  const [codeDetailToast, setCodeDetailToast] = useState(false)
  const toastHideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (toastHideTimer.current) window.clearTimeout(toastHideTimer.current)
    }
  }, [])

  function showCodeDetailUpdating() {
    if (toastHideTimer.current) window.clearTimeout(toastHideTimer.current)
    setCodeDetailToast(true)
    toastHideTimer.current = window.setTimeout(() => {
      setCodeDetailToast(false)
      toastHideTimer.current = null
    }, 4000)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div className="mx-auto max-w-max-width px-gutter py-xl">
      {codeDetailToast ? (
        <div
          role="status"
          className="fixed bottom-[max(5.5rem,env(safe-area-inset-bottom))] left-1/2 z-[70] max-w-[min(calc(100vw-2rem),24rem)] -translate-x-1/2 rounded-lg border border-secondary/40 bg-surface-container-highest px-md py-sm text-center font-body-md text-sm text-on-surface shadow-lg"
        >
          {t('teaching.codeDetailToast')}
        </div>
      ) : null}
      <section className="mb-xl">
        <div className="mb-lg flex flex-col">
          <span className="mb-xs font-label-caps text-label-caps text-secondary">{t('teaching.kicker')}</span>
          <h2 className="mb-md font-display-lg text-display-lg text-on-surface">{t('teaching.title')}</h2>
          <p className="max-w-2xl text-body-md text-on-surface-variant">{t('teaching.intro')}</p>
        </div>

        <div className="bento-grid">
          <div className="glass-card group col-span-12 flex flex-col gap-md overflow-hidden rounded-xl p-md md:col-span-8 md:flex-row">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-outline-variant bg-surface-container md:w-1/2">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={t('teaching.codeImgAlt')}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHjkgG3WM9E15WeEnDcFwzM9Bf5OAB9buA6uWE3TODhdqxKpjSuDkzHQS0sgoYgkCTmFaDeGO-CaoibedvvpbV_aHE6Fggmdb6-fXhsCR2ND3xdK-Mv18VHjm_RGMnYw8lTwqUZBVmmc98hNlkOpzY_GIVIXlUIkRLfyEBSwwg5eQ9HBHbQ78qMNwen_GmN5SiURoPqtSExO7yXXtX3VB_HQ41N4TNKiyIKxhAOly7vRM32M9CF9saPGBCYtOcMMV_NXqPZ4mpRDQ"
              />
            </div>
            <div className="flex w-full flex-col justify-center md:w-1/2">
              <span className="material-symbols-outlined mb-xs text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                code
              </span>
              <h3 className="mb-xs font-headline-lg text-headline-lg text-on-surface">{t('teaching.codeTitle')}</h3>
              <p className="mb-md text-body-md text-on-surface-variant">{t('teaching.codeBody')}</p>
              <div className="mb-md flex flex-wrap items-center gap-sm">
                <span className="rounded bg-surface-container-high px-xs py-[2px] font-code-sm text-code-sm text-secondary">
                  {t('teaching.tagFullstack')}
                </span>
                <span className="rounded bg-surface-container-high px-xs py-[2px] font-code-sm text-code-sm text-secondary">
                  {t('teaching.tagScale')}
                </span>
                <button type="button" onClick={showCodeDetailUpdating} className={detailBtnClass}>
                  {t('teaching.detailCta')}
                  <span className="material-symbols-outlined text-[18px]" aria-hidden>
                    hourglass_empty
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="glass-card group col-span-12 flex flex-col justify-between rounded-xl p-md md:col-span-4">
            <div className="mb-md">
              <span className="material-symbols-outlined mb-xs text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                extension
              </span>
              <h3 className="mb-xs font-headline-lg text-headline-lg text-on-surface">{t('teaching.logicTitle')}</h3>
              <p className="mb-md text-body-md text-on-surface-variant">{t('teaching.logicBody')}</p>
              <a
                href={TEACHING_LOGIC_DETAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={detailBtnClass}
                aria-label={t('teaching.logicDetailExternalAria')}
              >
                {t('teaching.detailCta')}
                <span className="material-symbols-outlined text-[18px]" aria-hidden>
                  open_in_new
                </span>
              </a>
            </div>
            <div className="flex h-32 items-center justify-center rounded-lg border border-outline-variant bg-surface-container-lowest">
              <div className="grid grid-cols-3 gap-1">
                <div className="h-4 w-4 bg-secondary" />
                <div className="h-4 w-4 bg-primary" />
                <div className="h-4 w-4 bg-tertiary" />
                <div className="h-4 w-4 bg-primary" />
                <div className="h-4 w-4 bg-secondary" />
                <div className="h-4 w-4 bg-secondary" />
                <div className="h-4 w-4 bg-tertiary" />
                <div className="h-4 w-4 bg-primary" />
                <div className="h-4 w-4 bg-secondary" />
              </div>
            </div>
          </div>

          <div className="glass-card group col-span-12 flex flex-col gap-md overflow-hidden rounded-xl border-l-4 border-l-tertiary p-md md:flex-row md:items-stretch">
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <span className="material-symbols-outlined mb-xs text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                menu_book
              </span>
              <h3 className="mb-xs font-headline-lg text-headline-lg text-on-surface">{t('teaching.rdTitle')}</h3>
              <p className="mb-md text-body-md text-on-surface-variant">{t('teaching.rdBody')}</p>
              <div className="flex flex-wrap gap-xs">
                <span className="rounded bg-surface-container-high px-xs py-[2px] font-code-sm text-code-sm text-secondary">
                  {t('teaching.tagRdCurriculum')}
                </span>
                <span className="rounded bg-surface-container-high px-xs py-[2px] font-code-sm text-code-sm text-secondary">
                  {t('teaching.tagRdLabs')}
                </span>
                <span className="rounded bg-surface-container-high px-xs py-[2px] font-code-sm text-code-sm text-secondary">
                  {t('teaching.tagRdPath')}
                </span>
              </div>
            </div>
            <div
              className="relative hidden min-h-[7rem] shrink-0 flex-col justify-center gap-sm rounded-lg border border-outline-variant bg-surface-container-lowest p-md md:flex md:w-[11.5rem] lg:w-[13rem]"
              aria-hidden
            >
              <div className="h-2 w-full rounded-sm bg-secondary/35 transition-transform duration-300 group-hover:scale-x-[1.02]" />
              <div className="h-2 w-[82%] rounded-sm bg-outline-variant/90" />
              <div className="h-2 w-full rounded-sm bg-primary/30" />
              <div className="h-2 w-[58%] rounded-sm bg-outline-variant/90" />
              <div className="h-2 w-[92%] rounded-sm bg-secondary/20" />
            </div>
          </div>

          <div className="glass-card group col-span-12 flex flex-col justify-between rounded-xl p-md md:col-span-4">
            <div className="mb-md">
              <span className="material-symbols-outlined mb-xs text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
              <h3 className="mb-xs font-headline-lg text-headline-lg text-on-surface">{t('teaching.aiTitle')}</h3>
              <p className="text-body-md text-on-surface-variant">{t('teaching.aiBody')}</p>
            </div>
            <div className="rounded-lg border border-outline-variant bg-primary-container p-sm">
              <div className="mb-xs flex items-center gap-xs">
                <div className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
                <span className="font-code-sm text-code-sm text-on-primary-container">{t('teaching.aiBadge')}</span>
              </div>
              <div className="h-1 w-full rounded-full bg-surface-variant">
                <div className="h-full w-[85%] rounded-full bg-secondary" />
              </div>
            </div>
          </div>

          <div className="glass-card col-span-12 rounded-xl border-l-4 border-l-secondary p-md md:col-span-8">
            <div className="grid h-full grid-cols-1 items-center gap-md text-center sm:grid-cols-3">
              <div>
                <div className="font-display-lg text-display-lg text-secondary">{yearsSinceCareerStartPlus()}</div>
                <div className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                  {t('teaching.statYears')}
                </div>
              </div>
              <div>
                <div className="font-display-lg text-display-lg text-secondary">500+</div>
                <div className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                  {t('teaching.statStudents')}
                </div>
              </div>
              <div>
                <div className="font-display-lg text-display-lg text-secondary">10+</div>
                <div className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                  {t('teaching.statCourses')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl" id="contact">
        <div className="mb-lg flex flex-col items-center text-center">
          <span className="mb-xs font-label-caps text-label-caps text-secondary">{t('teaching.contactKicker')}</span>
          <h2 className="font-display-lg text-display-lg text-on-surface">{t('teaching.contactTitle')}</h2>
          <div className="mt-md h-1 w-24 bg-secondary" />
        </div>
        <div className="grid grid-cols-1 items-start gap-xl lg:grid-cols-12">
          <div className="lg:col-span-7">
            <form className="space-y-md" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-md md:grid-cols-2">
                <div>
                  <label className="mb-xs block font-label-caps text-label-caps text-on-surface-variant" htmlFor="name">
                    {t('teaching.name')}
                  </label>
                  <input
                    id="name"
                    className="w-full rounded-lg border border-outline-variant bg-surface-container px-md py-sm text-on-surface outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary"
                    placeholder={t('teaching.phName')}
                    type="text"
                  />
                </div>
                <div>
                  <label className="mb-xs block font-label-caps text-label-caps text-on-surface-variant" htmlFor="email">
                    {t('teaching.email')}
                  </label>
                  <input
                    id="email"
                    className="w-full rounded-lg border border-outline-variant bg-surface-container px-md py-sm text-on-surface outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary"
                    placeholder="example@gmail.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="mb-xs block font-label-caps text-label-caps text-on-surface-variant" htmlFor="subject">
                  {t('teaching.subject')}
                </label>
                <input
                  id="subject"
                  className="w-full rounded-lg border border-outline-variant bg-surface-container px-md py-sm text-on-surface outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary"
                  placeholder={t('teaching.phSubject')}
                  type="text"
                />
              </div>
              <div>
                <label className="mb-xs block font-label-caps text-label-caps text-on-surface-variant" htmlFor="message">
                  {t('teaching.message')}
                </label>
                <textarea
                  id="message"
                  className="w-full rounded-lg border border-outline-variant bg-surface-container px-md py-sm text-on-surface outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary"
                  placeholder={t('teaching.phMessage')}
                  rows={6}
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-xs rounded-lg bg-secondary px-xl py-md font-label-caps text-label-caps text-on-primary transition-all hover:bg-secondary-container md:w-max"
              >
                {t('teaching.submit')}
                <span className="material-symbols-outlined text-md">send</span>
              </button>
            </form>
          </div>

          <div className="space-y-lg lg:col-span-5">
            <div className="glass-card rounded-xl p-lg">
              <h4 className="mb-md font-headline-lg text-headline-lg text-on-surface">{t('teaching.direct')}</h4>
              <div className="space-y-md">
                <div className="flex items-start gap-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-container-high text-secondary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">{t('teaching.phoneLabel')}</p>
                    <p className="text-body-md font-bold text-on-surface">+84 353 923 603</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-container-high text-secondary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">{t('teaching.email')}</p>
                    <p className="text-body-md font-bold text-on-surface">khoatranpc603@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-container-high text-secondary">
                    <span className="material-symbols-outlined">terminal</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">GitHub</p>
                    <p className="text-body-md font-bold text-on-surface">github.com/khoatranpc</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-container-high text-secondary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">{t('teaching.addrLabel')}</p>
                    <p className="text-body-md font-bold text-on-surface">{t('footer.location')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-48 overflow-hidden rounded-xl border border-outline-variant">
              <img
                className="h-full w-full object-cover opacity-50 grayscale"
                alt={t('teaching.mapAlt')}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAApz57j8eTxXyg6uT8MekARthIMD5YWAJsxBvVC3q8OtJXzs4ICHqbGj3vf1htKqs7G3t3euT0epMdOTLBYCFXKb1EZpjZQugWA9RMChM3zoDSTZiuxIYQ6LMIR89A1RGNfjdEqwKRQQGHhLutJxg8Wg8_DytUrfp233QxXIvdghdv44rLFjA56EodIkeKX1Ltn63MSdAfMgD6ehiEm2LwTVxyvJoNTPURokOzUW5QAhItWO_AWK-hLp2c18i7JgxiNy0gErx-iEg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-secondary px-md py-xs font-label-caps text-label-caps text-on-primary shadow-lg">
                  {t('teaching.mapBadge')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
