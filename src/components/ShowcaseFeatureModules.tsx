import { useI18n } from '../i18n/useI18n'
import { pickLocalized } from '../lib/showcase'
import type { ShowcaseFeatureItem, ShowcaseFeatureModule } from '../types/showcase'

function FeatureItemList({
  items,
  depth = 0,
}: {
  items: ShowcaseFeatureItem[]
  depth?: number
}) {
  const { locale } = useI18n()

  return (
    <ul
      className={[
        'space-y-1.5',
        depth > 0 ? 'mt-1.5 border-l border-outline-variant/80 pl-sm' : 'list-none pl-0',
      ].join(' ')}
    >
      {items.map((item, i) => (
        <li key={i} className="font-body-md text-sm leading-snug text-on-surface-variant">
          <div className="flex gap-2">
            {depth === 0 ? (
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                aria-hidden
              />
            ) : null}
            <div className="min-w-0 flex-1">
              <span>{pickLocalized(item.label, locale)}</span>
              {item.note ? (
                <p className="mt-0.5 font-code-sm text-xs text-on-tertiary-container">
                  {pickLocalized(item.note, locale)}
                </p>
              ) : null}
              {item.children?.length ? (
                <FeatureItemList items={item.children} depth={depth + 1} />
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function ShowcaseFeatureModules({ modules }: { modules: ShowcaseFeatureModule[] }) {
  const { t, locale } = useI18n()

  if (!modules.length) return null

  return (
    <section>
      <h2 className="mb-xs font-headline-lg text-headline-lg text-on-surface">
        {t('work.sectionFeatures')}
      </h2>
      <p className="mb-md max-w-prose font-body-md text-on-surface-variant">
        {t('work.sectionFeaturesIntro')}
      </p>
      <div className="grid grid-cols-1 gap-md md:grid-cols-2">
        {modules.map((module, i) => (
          <article
            key={i}
            className="rounded-lg border border-outline-variant bg-surface-container-low p-md transition-colors hover:border-secondary/40"
          >
            <h3 className="mb-sm font-headline-lg text-base font-bold text-on-surface">
              <span className="mr-1 text-secondary">{i + 1}.</span>
              {pickLocalized(module.title, locale)}
            </h3>
            {module.summary ? (
              <p className="mb-sm font-body-md text-xs text-on-surface-variant">
                {pickLocalized(module.summary, locale)}
              </p>
            ) : null}
            <FeatureItemList items={module.items} />
          </article>
        ))}
      </div>
    </section>
  )
}
