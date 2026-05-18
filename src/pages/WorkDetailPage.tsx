import { Link, Navigate, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { CONTACT_EMAIL } from '../i18n/constants'
import { useI18n } from '../i18n/useI18n'
import { ShowcaseDemoGallery } from '../components/ShowcaseDemoGallery'
import { ShowcaseFeatureModules } from '../components/ShowcaseFeatureModules'
import { ShowcaseThumbnail } from '../components/ShowcaseThumbnail'
import {
  allStackTags,
  buildShowcaseProjectJsonLd,
  getProjectOgImageAlt,
  getProjectOgImageSrc,
  getProjectSeo,
  getShowcaseProject,
  pickLocalized,
  relatedShowcaseProjects,
} from '../lib/showcase'

function StackGroup({ label, tags }: { label: string; tags: string[] }) {
  if (!tags.length) return null
  return (
    <div>
      <p className="mb-xs font-label-caps text-label-caps text-on-surface-variant">{label}</p>
      <div className="flex flex-wrap gap-xs">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, locale } = useI18n()
  const project = slug ? getShowcaseProject(slug) : undefined

  if (!project) {
    return <Navigate to="/work" replace />
  }

  const title = pickLocalized(project.title, locale)
  const pitch = pickLocalized(project.pitch, locale)
  const pageSeo = getProjectSeo(project, locale)
  const related = relatedShowcaseProjects(project)
  const mailSubject = `${t('work.detailMailSubject')}: ${title}`
  const ogImageSrc = getProjectOgImageSrc(project)
  const ogImageAlt = getProjectOgImageAlt(project, locale) ?? title

  const projectJsonLd = buildShowcaseProjectJsonLd(project, locale, {
    home: t('seo.home.title'),
    workList: t('work.title'),
    siteName: t('seo.siteName'),
  })

  return (
    <div className="pb-xl pt-xl">
      <Seo
        title={pageSeo.title}
        description={pageSeo.description}
        path={`/work/${project.slug}`}
        imageUrl={ogImageSrc || undefined}
        imageAlt={ogImageAlt}
        ogType="article"
        jsonLd={projectJsonLd}
      />

      <article className="mx-auto max-w-max-width px-gutter py-xl">
        <Link
          to="/work"
          className="mb-lg inline-flex items-center gap-1 font-body-md text-secondary hover:underline"
        >
          <span className="material-symbols-outlined text-lg" aria-hidden>
            arrow_back
          </span>
          {t('work.backToList')}
        </Link>

        <header className="mb-xl border-l-4 border-secondary pl-md">
          <div className="mb-sm flex flex-wrap gap-xs">
            {project.featured ? (
              <span className="rounded bg-secondary/15 px-xs py-0.5 font-label-caps text-label-caps text-secondary">
                {t('work.featuredBadge')}
              </span>
            ) : null}
            <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
              {t(`work.domain.${project.domain}`)}
            </span>
            <span className="rounded bg-surface-container-high px-xs py-0.5 font-code-sm text-code-sm text-on-surface-variant">
              {t(`work.projectType.${project.projectType}`)}
            </span>
            <span className="rounded bg-surface-container-high px-xs py-0.5 font-code-sm text-code-sm text-on-surface-variant">
              {t(`work.status.${project.status}`)}
            </span>
            {project.roles.map((role) => (
              <span
                key={role}
                className="rounded border border-outline-variant px-xs py-0.5 font-code-sm text-code-sm text-on-surface"
              >
                {t(`work.role.${role}`)}
              </span>
            ))}
          </div>
          <h1 className="mb-sm font-display-lg text-display-lg text-on-surface">{title}</h1>
          <p className="max-w-3xl font-body-md text-on-surface-variant">{pitch}</p>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-md inline-flex items-center gap-1 font-label-caps text-label-caps text-secondary hover:underline"
            >
              {t('work.demoLink')}
              <span className="material-symbols-outlined text-sm" aria-hidden>
                open_in_new
              </span>
            </a>
          ) : null}
        </header>

        <div className="mb-xl">
          <ShowcaseThumbnail
            project={project}
            className="aspect-video w-full overflow-hidden rounded-lg border border-outline-variant bg-surface-container"
            imgClassName="h-full w-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-xl lg:grid-cols-12">
          <div className="space-y-lg lg:col-span-8">
            <section>
              <h2 className="mb-sm font-headline-lg text-headline-lg text-on-surface">
                {t('work.sectionProblem')}
              </h2>
              <p className="font-body-md leading-relaxed text-on-surface-variant">
                {pickLocalized(project.problem, locale)}
              </p>
            </section>
            <section>
              <h2 className="mb-sm font-headline-lg text-headline-lg text-on-surface">
                {t('work.sectionSolution')}
              </h2>
              <p className="font-body-md leading-relaxed text-on-surface-variant">
                {pickLocalized(project.solution, locale)}
              </p>
            </section>
            {project.featureModules?.length ? (
              <ShowcaseFeatureModules modules={project.featureModules} />
            ) : null}
            <section>
              <h2 className="mb-sm font-headline-lg text-headline-lg text-on-surface">
                {t('work.sectionRole')}
              </h2>
              <p className="font-body-md leading-relaxed text-on-surface-variant">
                {pickLocalized(project.roleDetail, locale)}
              </p>
            </section>
            <section>
              <h2 className="mb-sm font-headline-lg text-headline-lg text-on-surface">
                {t('work.sectionResults')}
              </h2>
              <ul className="list-none space-y-2 pl-0">
                {project.results.map((line, i) => (
                  <li key={i} className="flex gap-2.5 font-body-md text-on-surface-variant">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                      aria-hidden
                    />
                    <span>{pickLocalized(line, locale)}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="mb-sm font-headline-lg text-headline-lg text-on-surface">
                {t('work.sectionDeliverables')}
              </h2>
              <ul className="list-inside list-disc space-y-1 font-body-md text-on-surface-variant">
                {project.deliverables.map((line, i) => (
                  <li key={i}>{pickLocalized(line, locale)}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-md lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <ShowcaseDemoGallery project={project} />
            <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
              <h2 className="mb-md font-label-caps text-label-caps text-secondary">
                {t('work.sectionStack')}
              </h2>
              <div className="space-y-md">
                <StackGroup label={t('work.stackFe')} tags={project.stack.fe} />
                <StackGroup label={t('work.stackBe')} tags={project.stack.be} />
                <StackGroup label={t('work.stackInfra')} tags={project.stack.infra} />
              </div>
              <p className="mt-md border-t border-outline-variant/70 pt-md font-code-sm text-xs text-on-surface-variant">
                {allStackTags(project).join(' · ')}
              </p>
            </div>

            <div className="rounded-lg border border-outline-variant bg-primary-container p-md">
              <h3 className="mb-xs font-headline-lg text-lg text-on-primary-container">
                {t('work.ctaTitle')}
              </h3>
              <p className="mb-md font-body-md text-sm text-on-primary-container/90">
                {t('work.detailCtaBody')}
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}`}
                className="block w-full rounded-lg bg-secondary py-sm text-center font-label-caps text-label-caps text-on-secondary transition-all hover:brightness-110"
              >
                {t('work.ctaContact')}
              </a>
            </div>
          </aside>
        </div>

        {related.length > 0 ? (
          <section className="mt-xl border-t border-outline-variant pt-xl">
            <h2 className="mb-md font-headline-lg text-headline-lg text-on-surface">
              {t('work.related')}
            </h2>
            <div className="grid grid-cols-1 gap-md md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/work/${item.slug}`}
                  className="group overflow-hidden rounded-lg border border-outline-variant bg-surface-container transition-all hover:border-secondary/50"
                >
                  <ShowcaseThumbnail
                    project={item}
                    className="aspect-video overflow-hidden rounded-none border-0 bg-surface-container"
                    imgClassName="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="p-sm">
                    <h3 className="font-headline-lg text-base font-bold text-on-surface group-hover:text-secondary">
                      {pickLocalized(item.title, locale)}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </div>
  )
}
