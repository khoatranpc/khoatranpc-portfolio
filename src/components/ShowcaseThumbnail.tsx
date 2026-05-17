import { useI18n } from '../i18n/useI18n'
import { getProjectThumbnailSrc, pickLocalized } from '../lib/showcase'
import type { ShowcaseProject } from '../types/showcase'

type ShowcaseThumbnailProps = {
  project: ShowcaseProject
  className?: string
  imgClassName?: string
}

export function ShowcaseThumbnail({
  project,
  className = 'aspect-video w-full overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low',
  imgClassName = 'h-full w-full object-cover',
}: ShowcaseThumbnailProps) {
  const { t, locale } = useI18n()
  const src = getProjectThumbnailSrc(project)
  const title = pickLocalized(project.title, locale)

  if (!src) {
    return (
      <div
        className={`flex min-h-[8rem] flex-col items-center justify-center gap-1 px-sm py-md text-center ${className}`}
      >
        <span
          className="material-symbols-outlined text-3xl text-on-surface-variant/50"
          aria-hidden
        >
          image_not_supported
        </span>
        <span className="font-label-caps text-label-caps text-on-surface-variant">
          {t('work.noThumbnail')}
        </span>
      </div>
    )
  }

  return (
    <div className={className}>
      <img src={src} alt={title} className={imgClassName} loading="lazy" />
    </div>
  )
}
