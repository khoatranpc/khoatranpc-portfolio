import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CTA_MODAL_IMAGES } from '../data/ctaModalMedia'
import { CONTACT_EMAIL } from '../i18n/constants'
import { useI18n } from '../i18n/useI18n'

type CtaKind = 'work' | 'training'

function RubikMiniPreview() {
  return (
    <div className="mx-auto grid grid-cols-3 gap-1.5">
      <div className="h-5 w-5 bg-secondary sm:h-6 sm:w-6" />
      <div className="h-5 w-5 bg-primary sm:h-6 sm:w-6" />
      <div className="h-5 w-5 bg-tertiary sm:h-6 sm:w-6" />
      <div className="h-5 w-5 bg-primary sm:h-6 sm:w-6" />
      <div className="h-5 w-5 bg-secondary sm:h-6 sm:w-6" />
      <div className="h-5 w-5 bg-secondary sm:h-6 sm:w-6" />
      <div className="h-5 w-5 bg-tertiary sm:h-6 sm:w-6" />
      <div className="h-5 w-5 bg-primary sm:h-6 sm:w-6" />
      <div className="h-5 w-5 bg-secondary sm:h-6 sm:w-6" />
    </div>
  )
}

export function FixedCtaDock() {
  const { t } = useI18n()
  const [active, setActive] = useState<CtaKind | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (active) {
      d.showModal()
    } else if (d.open) {
      d.close()
    }
  }, [active])

  function closeModal() {
    dialogRef.current?.close()
  }

  const workMail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t('cta.fixed.work.subject'))}`
  const trainingMail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t('cta.fixed.training.subject'))}`

  const btnClass =
    'flex items-center gap-sm rounded-xl border border-outline-variant bg-surface-container-high/95 px-sm py-sm text-left shadow-lg backdrop-blur-sm transition-all hover:border-secondary/60 hover:bg-surface-container active:scale-[0.98]'

  const isWork = active === 'work'

  const figCaptionClass =
    'pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-sm pb-2 pt-10 font-label-caps text-[11px] font-semibold tracking-wide text-on-surface sm:text-label-caps'

  const modalImgClass =
    'h-44 w-full origin-center object-cover transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:h-52 group-hover:scale-[1.06]'

  return (
    <>
      <div
        role="complementary"
        aria-label={t('cta.fixed.ariaGroup')}
        className="pointer-events-none fixed bottom-0 right-0 z-[45] flex flex-col items-end gap-xs p-gutter pb-[max(1rem,env(safe-area-inset-bottom))] pl-0 pt-0 md:max-w-[min(100%,22rem)]"
      >
        <div className="pointer-events-auto flex w-full flex-col gap-xs sm:w-auto">
          <button type="button" onClick={() => setActive('work')} className={btnClass}>
            <span className="material-symbols-outlined shrink-0 text-secondary" aria-hidden>
              terminal
            </span>
            <span className="min-w-0 text-left">
              <span className="block font-label-caps text-label-caps text-on-surface">
                {t('cta.fixed.work.title')}
              </span>
              <span className="block font-body-md text-xs leading-snug text-on-surface-variant">
                {t('cta.fixed.work.subtitle')}
              </span>
            </span>
          </button>
          <button type="button" onClick={() => setActive('training')} className={btnClass}>
            <span className="material-symbols-outlined shrink-0 text-secondary" aria-hidden>
              school
            </span>
            <span className="min-w-0 text-left">
              <span className="block font-label-caps text-label-caps text-on-surface">
                {t('cta.fixed.training.title')}
              </span>
              <span className="block font-body-md text-xs leading-snug text-on-surface-variant">
                {t('cta.fixed.training.subtitle')}
              </span>
            </span>
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        className="cta-dialog fixed left-1/2 top-1/2 z-[60] w-[min(calc(100vw-1.5rem),40rem)] max-h-[min(90vh,720px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-high text-on-surface shadow-2xl open:flex"
        aria-labelledby="cta-modal-title"
      >
        {active ? (
          <>
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-2 top-2 z-20 rounded-full border border-outline-variant/80 bg-surface-container/95 p-1.5 text-on-surface shadow-md backdrop-blur-sm transition-colors hover:bg-surface-container-high hover:text-secondary"
              aria-label={t('cta.modal.close')}
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>

            {isWork ? (
              <div className="grid shrink-0 grid-cols-1 border-b border-outline-variant sm:grid-cols-2">
                <figure className="group relative min-h-[10rem] overflow-hidden border-outline-variant sm:min-h-[12rem] sm:border-r">
                  <img
                    src={CTA_MODAL_IMAGES.workLms}
                    alt={t('cta.modal.work.imgLmsAlt')}
                    className={modalImgClass}
                  />
                  <figcaption className={figCaptionClass}>{t('cta.modal.work.captionLms')}</figcaption>
                </figure>
                <figure className="group relative min-h-[10rem] overflow-hidden sm:min-h-[12rem]">
                  <img
                    src={CTA_MODAL_IMAGES.workTrading}
                    alt={t('cta.modal.work.imgTradeAlt')}
                    className={modalImgClass}
                  />
                  <figcaption className={figCaptionClass}>{t('cta.modal.work.captionTrade')}</figcaption>
                </figure>
              </div>
            ) : (
              <div className="grid shrink-0 grid-cols-1 border-b border-outline-variant sm:grid-cols-2">
                <figure className="group relative min-h-[10rem] overflow-hidden border-outline-variant sm:min-h-[12rem] sm:border-r">
                  <img
                    src={CTA_MODAL_IMAGES.trainingCode}
                    alt={t('cta.modal.training.imgCodeAlt')}
                    className={modalImgClass}
                  />
                  <figcaption className={figCaptionClass}>{t('cta.modal.training.captionCode')}</figcaption>
                </figure>
                <div
                  className="group/rubik flex min-h-[10rem] flex-col overflow-hidden bg-surface-container-lowest sm:min-h-[12rem]"
                  aria-label={t('cta.modal.training.rubikAria')}
                >
                  <div className="flex flex-1 items-center justify-center overflow-hidden p-md">
                    <div className="transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none motion-reduce:group-hover/rubik:scale-100 group-hover/rubik:scale-[1.06]">
                      <RubikMiniPreview />
                    </div>
                  </div>
                  <div className="border-t border-outline-variant bg-surface-container-low px-sm py-2 text-center font-label-caps text-[11px] text-on-surface-variant sm:text-label-caps">
                    {t('cta.modal.training.captionRubik')}
                  </div>
                </div>
              </div>
            )}

            <div className="flex max-h-[min(42vh,22rem)] flex-col gap-md overflow-y-auto p-lg sm:max-h-none">
              <h2 id="cta-modal-title" className="pr-10 font-headline-lg text-headline-lg">
                {isWork ? t('cta.fixed.work.title') : t('cta.fixed.training.title')}
              </h2>
              <p className="font-body-md text-on-surface-variant">{isWork ? t('cta.modal.work.body') : t('cta.modal.training.body')}</p>
              <div className="flex flex-col gap-sm pt-xs">
                <a
                  href={isWork ? workMail : trainingMail}
                  onClick={closeModal}
                  className="flex items-center justify-center gap-xs rounded-lg bg-secondary px-md py-sm font-label-caps text-label-caps text-on-secondary transition-all hover:brightness-110"
                >
                  <span className="material-symbols-outlined text-[18px]" aria-hidden>
                    mail
                  </span>
                  {isWork ? t('cta.modal.work.emailCta') : t('cta.modal.training.emailCta')}
                </a>
                {isWork ? (
                  <Link
                    to="/projects"
                    onClick={closeModal}
                    className="flex items-center justify-center rounded-lg border border-outline px-md py-sm font-label-caps text-label-caps text-on-surface transition-colors hover:bg-surface-container-low"
                  >
                    {t('cta.modal.work.routeCta')}
                  </Link>
                ) : (
                  <Link
                    to="/teaching#contact"
                    onClick={closeModal}
                    className="flex items-center justify-center rounded-lg border border-outline px-md py-sm font-label-caps text-label-caps text-on-surface transition-colors hover:bg-surface-container-low"
                  >
                    {t('cta.modal.training.routeCta')}
                  </Link>
                )}
              </div>
            </div>
          </>
        ) : null}
      </dialog>
    </>
  )
}
