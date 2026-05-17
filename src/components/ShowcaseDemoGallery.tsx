import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../i18n/useI18n'
import { getDemoImages, pickLocalized } from '../lib/showcase'
import type { ResolvedShowcaseImage, ShowcaseProject } from '../types/showcase'

const PREVIEW_COUNT = 4

function DemoLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: ResolvedShowcaseImage[]
  index: number
  onClose: () => void
  onNavigate: (next: number) => void
}) {
  const { t, locale } = useI18n()
  const image = images[index]

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate(index - 1)
      if (e.key === 'ArrowRight') onNavigate(index + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, onClose, onNavigate])

  if (!image) return null

  const hasPrev = index > 0
  const hasNext = index < images.length - 1

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-gutter"
      role="dialog"
      aria-modal="true"
      aria-label={pickLocalized(image.alt, locale)}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label={t('work.lightboxClose')}
      />

      <div className="relative z-10 flex max-h-[min(92vh,720px)] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-high text-on-surface shadow-2xl">
        <div className="flex items-center justify-between gap-sm border-b border-outline-variant px-md py-sm">
          <p className="font-label-caps text-label-caps text-on-surface-variant">
            {index + 1} / {images.length}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
            aria-label={t('work.lightboxClose')}
          >
            <span className="material-symbols-outlined" aria-hidden>
              close
            </span>
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col">
          {hasPrev ? (
            <button
              type="button"
              onClick={() => onNavigate(index - 1)}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-outline-variant bg-surface/95 text-on-surface shadow-md backdrop-blur-sm transition-colors hover:border-secondary"
              aria-label={t('work.lightboxPrev')}
            >
              <span className="material-symbols-outlined" aria-hidden>
                chevron_left
              </span>
            </button>
          ) : null}
          {hasNext ? (
            <button
              type="button"
              onClick={() => onNavigate(index + 1)}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-outline-variant bg-surface/95 text-on-surface shadow-md backdrop-blur-sm transition-colors hover:border-secondary"
              aria-label={t('work.lightboxNext')}
            >
              <span className="material-symbols-outlined" aria-hidden>
                chevron_right
              </span>
            </button>
          ) : null}

          <div className="flex max-h-[min(70vh,560px)] min-h-[12rem] items-center justify-center overflow-auto bg-surface-container-lowest p-md">
            <img
              src={image.src}
              alt={pickLocalized(image.alt, locale)}
              className="max-h-[min(70vh,560px)] w-full object-contain"
            />
          </div>

          {image.caption ? (
            <p className="border-t border-outline-variant px-md py-sm font-body-md text-sm text-on-surface-variant">
              {pickLocalized(image.caption, locale)}
            </p>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  )
}

export function ShowcaseDemoGallery({ project }: { project: ShowcaseProject }) {
  const { t, locale } = useI18n()
  const images = getDemoImages(project)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const preview = images.slice(0, PREVIEW_COUNT)
  const extraCount = images.length > PREVIEW_COUNT ? images.length - PREVIEW_COUNT : 0

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const navigateLightbox = useCallback(
    (next: number) => {
      if (next < 0 || next >= images.length) return
      setLightboxIndex(next)
    },
    [images.length],
  )

  return (
    <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
      <h2 className="mb-sm font-label-caps text-label-caps text-secondary">
        {t('work.sectionDemoImages')}
      </h2>

      {images.length === 0 ? (
        <div className="flex min-h-[5.5rem] items-center justify-center rounded-md border border-dashed border-outline-variant bg-surface-container px-sm py-md text-center">
          <p className="font-body-md text-xs leading-snug text-on-surface-variant">
            {t('work.demoImagesEmpty')}
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-1">
            {preview.map((image, i) => {
              const isLastWithMore = i === PREVIEW_COUNT - 1 && extraCount > 0
              return (
                <button
                  key={`${image.src}-${i}`}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-md border border-outline-variant/80 bg-surface-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                  aria-label={pickLocalized(image.alt, locale)}
                >
                  <img
                    src={image.src}
                    alt=""
                    className="pointer-events-none h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {isLastWithMore ? (
                    <span
                      className="pointer-events-none absolute inset-0 flex items-center justify-center bg-surface/75 font-headline-lg text-xl font-bold text-on-surface backdrop-blur-[2px]"
                      aria-hidden
                    >
                      +{extraCount}
                    </span>
                  ) : (
                    <span
                      className="pointer-events-none absolute inset-0 bg-surface/0 transition-colors group-hover:bg-surface/15"
                      aria-hidden
                    />
                  )}
                </button>
              )
            })}
          </div>
          <p className="mt-xs font-code-sm text-xs text-on-surface-variant">
            {images.length} {t('work.demoImagesCountLabel')}
          </p>
        </>
      )}

      {lightboxIndex !== null ? (
        <DemoLightbox
          images={images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      ) : null}
    </div>
  )
}
