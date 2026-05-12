import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { yearsSinceCareerStartPlus } from '../i18n/careerYears'
import { useI18n } from '../i18n/useI18n'

export function HomePage() {
  const { t } = useI18n()

  const stackColumns = useMemo(
    () => [
      {
        title: t('home.stackCol1'),
        rows: [
          { label: t('home.stackC1R1Label'), years: t('home.stackC1R1Years') },
          { label: t('home.stackC1R2Label'), years: t('home.stackC1R2Years') },
        ],
      },
      {
        title: t('home.stackCol2'),
        rows: [
          { label: t('home.stackC2R1Label'), years: t('home.stackC2R1Years') },
          { label: t('home.stackC2R2Label'), years: t('home.stackC2R2Years') },
        ],
      },
      {
        title: t('home.stackCol3'),
        rows: [
          { label: t('home.stackC3R1Label'), years: t('home.stackC3R1Years') },
          { label: t('home.stackC3R2Label'), years: t('home.stackC3R2Years') },
        ],
      },
    ],
    [t],
  )

  return (
    <>
      <section className="relative mx-auto flex max-w-max-width flex-col items-center gap-lg overflow-hidden px-gutter pb-lg pt-xl md:flex-row">
        <div className="z-10 flex-1 space-y-md">
          <div className="inline-flex items-center gap-xs rounded-full border border-outline-variant bg-surface-container-high px-xs py-1">
            <span
              className="material-symbols-outlined text-[14px] text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bolt
            </span>
            <span className="font-label-caps text-label-caps text-secondary">{t('home.badge')}</span>
          </div>
          <h1 className="max-w-[600px] font-display-lg text-display-lg text-on-surface">
            {t('home.h1Before')} <span className="text-secondary">{t('home.h1Highlight')}</span>{' '}
            {t('home.h1After')}
          </h1>
          <p className="max-w-[500px] font-body-md text-on-surface-variant">
            {t('home.intro')}{' '}
            <span className="font-bold text-on-surface">{t('home.motto')}</span>
          </p>
          <div className="flex gap-md pt-md">
            <Link
              to="/projects"
              className="flex items-center gap-xs bg-secondary px-lg py-sm font-label-caps text-label-caps text-on-primary transition-all hover:bg-secondary/90"
            >
              {t('home.viewProjects')} <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              to="/teaching#contact"
              className="border border-outline px-lg py-sm font-label-caps text-label-caps text-on-surface transition-all hover:bg-surface-container-low"
            >
              {t('home.contactNow')}
            </Link>
          </div>
          <div className="flex max-w-md gap-lg border-t border-outline-variant pt-lg">
            <div>
              <div className="font-headline-lg text-on-surface">{yearsSinceCareerStartPlus()}</div>
              <div className="font-label-caps text-on-surface-variant">{t('home.yearsExp')}</div>
            </div>
            <div>
              <div className="font-headline-lg text-on-surface">10K+</div>
              <div className="font-label-caps text-on-surface-variant">{t('home.activeUsers')}</div>
            </div>
            <div>
              <div className="font-headline-lg text-on-surface">AI</div>
              <div className="font-label-caps text-on-surface-variant">{t('home.powered')}</div>
            </div>
          </div>
        </div>
        <div className="relative aspect-square h-[500px] w-full flex-1 md:aspect-auto">
          <div className="absolute inset-0 rounded-full bg-secondary/10 blur-[120px]" />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden border border-outline-variant bg-surface-container-low p-4">
            <img
              className="h-full w-full object-cover opacity-80 grayscale transition-all duration-500 hover:grayscale-0"
              alt={t('home.heroImgAlt')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsf-VJnMbVhLOFveF3HEdnpmbJP5oeOWMP_TnzTxnqLbjItepzP0ar_9DOAIS_e4uIuS0JMZ7rNbq-7HL-VvefxYlCbNjDLNcyXCPq2xJ7PcWcOuSQvKqY0-wP2NoteeOgozY2y0kGgtu1sSJGnQPfbbWlvY4Bs4ImBBLWzei3ZN0Quu9_Cp0NluTHA7QYvJYIrM3ToBXRktHEBYHwk3sD2RkI91eHNK3wCdCCSgdKxJbc1NQqx3h7Nxwz1QyDAG88TGEEwbhQI6U"
            />
            <div className="absolute bottom-6 left-6 right-6 border border-outline-variant bg-surface-container/90 p-md backdrop-blur-md">
              <code className="mb-1 block font-code-sm text-code-sm text-secondary">{t('home.codeComment')}</code>
              <p className="font-body-md italic text-on-surface">&quot;{t('common.philosophy')}&quot;</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant bg-surface-container-lowest py-xl" id="about">
        <div className="mx-auto grid max-w-max-width grid-cols-1 gap-xl px-gutter md:grid-cols-12 md:gap-lg">
          <header className="flex flex-col md:col-span-4 md:border-r md:border-outline-variant/80 md:pr-lg">
            <p className="font-label-caps text-label-caps tracking-[0.08em] text-secondary">
              {t('home.aboutEyebrow')}
            </p>
            <h2 className="mt-3 font-display-lg text-display-lg leading-[1.08] tracking-tight text-on-surface md:mt-4">
              {t('home.aboutTitle')}
            </h2>
            <div
              className="mt-5 h-1 w-14 shrink-0 bg-secondary md:mt-6"
              aria-hidden
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-on-surface-variant md:max-w-[17rem]">
              {t('home.aboutLead')}
            </p>
          </header>
          <div className="space-y-md md:col-span-8 md:pl-2">
            <div className="relative border border-outline-variant bg-surface p-lg">
              <div className="absolute -left-4 -top-4 h-12 w-12 border-l-2 border-t-2 border-secondary" />
              <p className="mb-md font-headline-lg text-on-surface">&quot;{t('home.quote')}&quot;</p>
              <p className="space-y-4 font-body-md leading-relaxed text-on-surface-variant">
                {t('home.aboutP1Part1')}
                <strong className="text-on-surface">{t('home.legalName')}</strong>
                {t('home.aboutP1Part2')}
              </p>
              <div className="mt-lg grid grid-cols-1 gap-md border-t border-outline-variant pt-lg md:grid-cols-2">
                <div className="flex gap-sm">
                  <span className="material-symbols-outlined text-secondary">trending_up</span>
                  <div>
                    <h4 className="mb-1 font-bold text-on-surface">{t('home.seTitle')}</h4>
                    <p className="font-body-md text-sm text-on-surface-variant">{t('home.seDesc')}</p>
                  </div>
                </div>
                <div className="flex gap-sm">
                  <span className="material-symbols-outlined text-secondary">psychology</span>
                  <div>
                    <h4 className="mb-1 font-bold text-on-surface">{t('home.aiTitle')}</h4>
                    <p className="font-body-md text-sm text-on-surface-variant">{t('home.aiDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-md md:grid-cols-2">
              <div className="border border-outline-variant bg-surface-container-low p-md transition-colors hover:border-secondary/50">
                <h4 className="mb-xs font-label-caps text-label-caps text-on-primary-container">
                  {t('home.engTitle')}
                </h4>
                <p className="font-body-md text-on-surface-variant">{t('home.engBody')}</p>
              </div>
              <div className="border border-outline-variant bg-surface-container-low p-md transition-colors hover:border-secondary/50">
                <h4 className="mb-xs font-label-caps text-label-caps text-on-primary-container">
                  {t('home.eduTitle')}
                </h4>
                <p className="font-body-md text-on-surface-variant">{t('home.eduBody')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-max-width px-gutter py-xl">
        <div className="mb-lg text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">{t('home.stackTitle')}</h2>
          <div className="mx-auto mt-xs h-1 w-16 bg-secondary" />
        </div>
        <div className="grid grid-cols-1 gap-lg md:grid-cols-3">
          {stackColumns.map((col) => (
            <div key={col.title} className="space-y-md">
              <h3 className="font-label-caps text-on-surface-variant">{col.title}</h3>
              <div className="space-y-sm">
                {col.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-wrap items-baseline justify-between gap-x-sm border-b border-outline-variant/70 pb-sm last:border-b-0"
                  >
                    <span className="font-code-sm text-on-surface">{row.label}</span>
                    <span className="shrink-0 font-label-caps text-[11px] text-secondary sm:text-label-caps">
                      {row.years}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
