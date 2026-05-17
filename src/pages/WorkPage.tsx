import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { ShowcaseThumbnail } from '../components/ShowcaseThumbnail'
import { CONTACT_EMAIL } from '../i18n/constants'
import { useI18n } from '../i18n/useI18n'
import {
  allStackTags,
  filterShowcaseProjects,
  pickLocalized,
  showcaseDomains,
  showcaseProjectTypes,
  showcaseProjects,
  showcaseRoles,
  showcaseStatuses,
  type ShowcaseFilters,
  type ShowcaseSort,
} from '../lib/showcase'
import type {
  ShowcaseDomain,
  ShowcaseProjectType,
  ShowcaseRole,
  ShowcaseStatus,
} from '../types/showcase'

function readFilters(params: URLSearchParams): ShowcaseFilters {
  const sort = params.get('sort')
  return {
    q: params.get('q') ?? '',
    domain: (params.get('domain') as ShowcaseDomain | null) ?? '',
    projectType: (params.get('type') as ShowcaseProjectType | null) ?? '',
    role: (params.get('role') as ShowcaseRole | null) ?? '',
    status: (params.get('status') as ShowcaseStatus | null) ?? '',
    sort: sort === 'newest' || sort === 'name' ? sort : 'featured',
  }
}

function FilterSelect<T extends string>({
  label,
  value,
  options,
  labelFor,
  onChange,
}: {
  label: string
  value: T | ''
  options: readonly T[]
  labelFor: (id: T) => string
  onChange: (next: T | '') => void
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange((e.target.value || '') as T | '')}
        className="rounded-lg border border-outline-variant bg-surface-container px-sm py-xs font-body-md text-on-surface"
      >
        <option value="">—</option>
        {options.map((id) => (
          <option key={id} value={id}>
            {labelFor(id)}
          </option>
        ))}
      </select>
    </label>
  )
}

export function WorkPage() {
  const { t, locale } = useI18n()
  const [searchParams, setSearchParams] = useSearchParams()
  const filters = useMemo(() => readFilters(searchParams), [searchParams])

  const filtered = useMemo(
    () => filterShowcaseProjects(showcaseProjects, filters, locale),
    [filters, locale],
  )

  function patchFilters(patch: Partial<ShowcaseFilters>) {
    const next = { ...filters, ...patch }
    const params = new URLSearchParams()
    if (next.q) params.set('q', next.q)
    if (next.domain) params.set('domain', next.domain)
    if (next.projectType) params.set('type', next.projectType)
    if (next.role) params.set('role', next.role)
    if (next.status) params.set('status', next.status)
    if (next.sort && next.sort !== 'featured') params.set('sort', next.sort)
    setSearchParams(params, { replace: true })
  }

  function clearFilters() {
    setSearchParams({}, { replace: true })
  }

  const hasActiveFilters =
    filters.q ||
    filters.domain ||
    filters.projectType ||
    filters.role ||
    filters.status ||
    filters.sort !== 'featured'

  return (
    <div className="pb-xl pt-xl">
      <Seo
        title={t('seo.work.title')}
        description={t('seo.work.description')}
        path="/work"
      />
      <section className="mx-auto max-w-max-width px-gutter py-xl">
        <div className="mb-lg flex flex-col gap-md border-l-4 border-secondary pl-md md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-xs font-label-caps text-label-caps text-secondary">{t('work.kicker')}</p>
            <h1 className="mb-xs font-display-lg text-display-lg text-on-surface">{t('work.title')}</h1>
            <p className="max-w-2xl font-body-md text-on-surface-variant">{t('work.intro')}</p>
          </div>
          <Link
            to="/projects"
            className="shrink-0 font-body-md text-secondary underline-offset-2 hover:underline"
          >
            {t('work.backFeatured')}
          </Link>
        </div>

        <div className="mb-lg space-y-md rounded-lg border border-outline-variant bg-surface-container-low p-md">
          <div className="grid grid-cols-1 gap-md lg:grid-cols-[1fr_auto]">
            <label className="flex flex-col gap-1">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                {t('work.searchLabel')}
              </span>
              <input
                type="search"
                value={filters.q}
                onChange={(e) => patchFilters({ q: e.target.value })}
                placeholder={t('work.searchPlaceholder')}
                className="w-full rounded-lg border border-outline-variant bg-surface px-sm py-xs font-body-md text-on-surface placeholder:text-on-surface-variant/70"
              />
            </label>
            <label className="flex flex-col gap-1 lg:min-w-[12rem]">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                {t('work.sortLabel')}
              </span>
              <select
                value={filters.sort}
                onChange={(e) => patchFilters({ sort: e.target.value as ShowcaseSort })}
                className="rounded-lg border border-outline-variant bg-surface-container px-sm py-xs font-body-md text-on-surface"
              >
                <option value="featured">{t('work.sortFeatured')}</option>
                <option value="newest">{t('work.sortNewest')}</option>
                <option value="name">{t('work.sortName')}</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
            <FilterSelect
              label={t('work.filterDomain')}
              value={filters.domain}
              options={showcaseDomains}
              labelFor={(id) => t(`work.domain.${id}`)}
              onChange={(domain) => patchFilters({ domain })}
            />
            <FilterSelect
              label={t('work.filterType')}
              value={filters.projectType}
              options={showcaseProjectTypes}
              labelFor={(id) => t(`work.projectType.${id}`)}
              onChange={(projectType) => patchFilters({ projectType })}
            />
            <FilterSelect
              label={t('work.filterRole')}
              value={filters.role}
              options={showcaseRoles}
              labelFor={(id) => t(`work.role.${id}`)}
              onChange={(role) => patchFilters({ role })}
            />
            <FilterSelect
              label={t('work.filterStatus')}
              value={filters.status}
              options={showcaseStatuses}
              labelFor={(id) => t(`work.status.${id}`)}
              onChange={(status) => patchFilters({ status })}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-sm">
            <p className="font-body-md text-on-surface-variant">
              {filtered.length} {t('work.resultUnit')}
            </p>
            {hasActiveFilters ? (
              <button
                type="button"
                onClick={clearFilters}
                className="font-label-caps text-label-caps text-secondary underline-offset-2 hover:underline"
              >
                {t('work.clearFilters')}
              </button>
            ) : null}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-lg border border-dashed border-outline-variant py-xl text-center font-body-md text-on-surface-variant">
            {t('work.noResults')}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="project-card group flex flex-col overflow-hidden rounded-lg border border-outline-variant bg-surface-container transition-all hover:border-secondary/50"
              >
                <ShowcaseThumbnail
                  project={project}
                  className="aspect-video overflow-hidden rounded-none border-0 bg-surface-container"
                  imgClassName="project-image h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-md">
                  <div className="mb-xs flex flex-wrap items-center gap-xs">
                    {project.featured ? (
                      <span className="rounded bg-secondary/15 px-xs py-0.5 font-label-caps text-label-caps text-secondary">
                        {t('work.featuredBadge')}
                      </span>
                    ) : null}
                    <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                      {t(`work.domain.${project.domain}`)}
                    </span>
                    <span className="rounded bg-surface-container-high px-xs py-0.5 font-code-sm text-code-sm text-on-surface-variant">
                      {t(`work.status.${project.status}`)}
                    </span>
                  </div>
                  <h2 className="mb-xs font-headline-lg text-lg font-bold text-on-surface group-hover:text-secondary">
                    {pickLocalized(project.title, locale)}
                  </h2>
                  <p className="mb-md line-clamp-2 flex-1 font-body-md text-sm text-on-surface-variant">
                    {pickLocalized(project.pitch, locale)}
                  </p>
                  <div className="mb-md flex flex-wrap gap-1">
                    {allStackTags(project)
                      .slice(0, 5)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-outline-variant/80 px-1.5 py-0.5 font-code-sm text-xs text-on-surface-variant"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                  <span className="font-label-caps text-label-caps text-secondary">
                    {t('work.viewDetail')} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-max-width px-gutter pb-xl">
        <div className="rounded-xl border border-outline-variant bg-surface-container-high p-lg text-center">
          <h2 className="mb-sm font-headline-lg text-headline-lg text-on-surface">{t('work.ctaTitle')}</h2>
          <p className="mx-auto mb-md font-body-md text-on-surface-variant">{t('work.ctaBody')}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t('work.ctaSubject'))}`}
            className="inline-block rounded-lg bg-secondary px-lg py-sm font-label-caps text-label-caps text-on-secondary transition-all hover:brightness-110 active:scale-95"
          >
            {t('work.ctaContact')}
          </a>
        </div>
      </section>
    </div>
  )
}
