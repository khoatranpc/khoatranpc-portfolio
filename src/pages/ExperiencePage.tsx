import { useMemo } from 'react'
import { useI18n } from '../i18n/useI18n'

export function ExperiencePage() {
  const { t } = useI18n()

  const skillRows = useMemo(
    () => [
      { label: t('experience.skillMern'), tenure: t('experience.skillMernTenure') },
      { label: t('experience.skillMicroservices'), tenure: t('experience.skillMicroservicesTenure') },
      { label: t('experience.skillKafkaWs'), tenure: t('experience.skillKafkaWsTenure') },
      { label: t('experience.skillCleanDdd'), tenure: t('experience.skillCleanDddTenure') },
      { label: t('experience.skillPython'), tenure: t('experience.skillPythonTenure') },
      { label: t('experience.skillAwsDocker'), tenure: t('experience.skillAwsDockerTenure') },
    ],
    [t],
  )

  const devops = useMemo(
    () => [
      { icon: 'cloud' as const, title: t('experience.awsTitle'), sub: t('experience.awsSub') },
      { icon: 'view_in_ar' as const, title: t('experience.dockerTitle'), sub: t('experience.dockerSub') },
      { icon: 'terminal' as const, title: t('experience.linuxTitle'), sub: t('experience.linuxSub') },
    ],
    [t],
  )

  const tags = useMemo(
    () => ['Microservices', 'Clean Architecture', 'DDD', 'MongoDB', 'gRPC', 'Kafka', 'WebSockets'],
    [],
  )

  return (
    <div className="mx-auto max-w-max-width px-gutter py-xl">
      <div className="mb-xl">
        <h1 className="mb-xs font-display-lg text-display-lg text-on-surface">{t('experience.title')}</h1>
        <p className="max-w-2xl font-body-md text-on-surface-variant">{t('experience.intro')}</p>
      </div>

      <div className="grid grid-cols-1 items-start gap-xl lg:grid-cols-12">
        <div className="space-y-lg lg:col-span-7">
          <h2 className="flex items-center gap-xs font-headline-lg text-headline-lg text-on-surface">
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              work
            </span>
            {t('experience.career')}
          </h2>
          <div className="space-y-xl pt-md">
            <div className="experience-thread relative pl-xl">
              <div className="absolute left-0 top-1">
                <div className="experience-dot" />
              </div>
              <div className="rounded-lg border border-outline-variant bg-surface-container p-md shadow-sm">
                <div className="mb-xs flex items-start justify-between">
                  <div>
                    <h3 className="font-headline-lg text-xl font-bold text-on-surface">{t('experience.fptRole')}</h3>
                    <p className="font-body-md font-bold text-secondary">FPT IS</p>
                    <p className="mt-xs font-label-caps text-label-caps text-secondary">{t('experience.fptFocus')}</p>
                    <p className="mt-xs max-w-prose text-sm leading-snug text-on-surface-variant">{t('experience.fptLead')}</p>
                  </div>
                  <span className="rounded-full bg-surface-container-high px-sm py-xs font-label-caps text-label-caps text-on-surface-variant">
                    {t('experience.now')}
                  </span>
                </div>
                <ul className="list-inside list-disc space-y-xs font-body-md text-on-surface-variant">
                  <li>{t('experience.fpt1')}</li>
                  <li>{t('experience.fpt2')}</li>
                  <li>{t('experience.fpt3')}</li>
                </ul>
              </div>
            </div>

            <div className="experience-thread relative pl-xl">
              <div className="absolute left-0 top-1">
                <div className="experience-dot" />
              </div>
              <div className="rounded-lg border border-outline-variant bg-surface-container p-md shadow-sm">
                <div className="mb-xs flex items-start justify-between">
                  <div>
                    <h3 className="font-headline-lg text-xl font-bold text-on-surface">
                      {t('experience.mindxRole')}
                    </h3>
                    <p className="font-body-md font-bold text-secondary">MindX Technology School</p>
                    <p className="mt-xs font-label-caps text-label-caps text-secondary">{t('experience.mindxFocus')}</p>
                    <p className="mt-xs max-w-prose text-sm leading-snug text-on-surface-variant">{t('experience.mindxLead')}</p>
                  </div>
                  <span className="rounded-full bg-surface-container-high px-sm py-xs font-label-caps text-label-caps text-on-surface-variant">
                    {t('experience.mindxPeriod')}
                  </span>
                </div>
                <ul className="list-inside list-disc space-y-xs font-body-md text-on-surface-variant">
                  <li>{t('experience.mindx1')}</li>
                  <li>{t('experience.mindx2')}</li>
                  <li>{t('experience.mindx3')}</li>
                </ul>
              </div>
            </div>

            <div className="relative pl-xl">
              <div className="absolute left-0 top-1">
                <div className="experience-dot" />
              </div>
              <div className="rounded-lg border border-outline-variant bg-surface-container p-md shadow-sm">
                <div className="mb-xs flex items-start justify-between">
                  <div>
                    <h3 className="font-headline-lg text-xl font-bold text-on-surface">{t('experience.ftlRole')}</h3>
                    <p className="font-body-md font-bold text-secondary">FTL Vietnam</p>
                    <p className="mt-xs font-label-caps text-label-caps text-secondary">{t('experience.ftlFocus')}</p>
                    <p className="mt-xs max-w-prose text-sm leading-snug text-on-surface-variant">{t('experience.ftlLead')}</p>
                  </div>
                  <span className="rounded-full bg-surface-container-high px-sm py-xs font-label-caps text-label-caps text-on-surface-variant">
                    {t('experience.ftlPeriod')}
                  </span>
                </div>
                <ul className="list-inside list-disc space-y-xs font-body-md text-on-surface-variant">
                  <li>{t('experience.ftl1')}</li>
                  <li>{t('experience.ftl2')}</li>
                  <li>{t('experience.ftl3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-lg lg:sticky lg:top-24 lg:col-span-5">
          <h2 className="flex items-center gap-xs font-headline-lg text-headline-lg text-on-surface">
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              terminal
            </span>
            {t('experience.toolkit')}
          </h2>

          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <h3 className="mb-md flex items-center gap-xs font-label-caps text-label-caps text-on-tertiary-container">
              <span className="material-symbols-outlined text-sm">code</span>
              {t('experience.langFw')}
            </h3>
            <div className="space-y-md">
              {skillRows.map((row) => (
                <div
                  key={row.label}
                  className="border-b border-outline-variant/70 pb-md last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-sm gap-y-xs">
                    <span className="font-code-sm text-code-sm text-on-surface">{row.label}</span>
                    <span className="shrink-0 font-label-caps text-label-caps text-secondary">{row.tenure}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <h3 className="mb-md flex items-center gap-xs font-label-caps text-label-caps text-on-tertiary-container">
              <span className="material-symbols-outlined text-sm">account_tree</span>
              {t('experience.archData')}
            </h3>
            <div className="flex flex-wrap gap-xs">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-outline-variant bg-surface-container-high px-sm py-xs font-code-sm text-code-sm text-on-surface"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <h3 className="mb-md flex items-center gap-xs font-label-caps text-label-caps text-on-tertiary-container">
              <span className="material-symbols-outlined text-sm">settings_suggest</span>
              {t('experience.devops')}
            </h3>
            <div className="space-y-sm">
              {devops.map((item) => (
                <div key={item.title} className="flex items-center gap-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant bg-surface-container">
                    <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-body-md font-bold text-on-surface">{item.title}</p>
                    <p className="font-code-sm text-xs text-on-surface-variant">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg border border-outline-variant bg-primary-container p-md">
            <div className="relative z-10">
              <h4 className="mb-xs font-headline-lg text-lg text-secondary">{t('experience.designPhilosophy')}</h4>
              <p className="font-body-md italic text-on-primary-container">&quot;{t('common.philosophy')}&quot;</p>
            </div>
            <div className="absolute -bottom-4 -right-4 opacity-10 transition-opacity group-hover:opacity-20">
              <span className="material-symbols-outlined text-[100px]">psychology</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
