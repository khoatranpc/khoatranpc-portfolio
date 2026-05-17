import rentShopFeatureModules from '../data/rentShopFeatureModules.json'
import showcaseData from '../data/showcaseProjects.json'
import type { Locale } from '../i18n/messages'
import { resolveShowcaseAssetPath } from './showcaseAssets'
import type {
  LocalizedString,
  ResolvedShowcaseImage,
  ShowcaseData,
  ShowcaseDomain,
  ShowcaseFeatureModule,
  ShowcaseProject,
  ShowcaseProjectType,
  ShowcaseRole,
  ShowcaseStatus,
} from '../types/showcase'

const data = showcaseData as ShowcaseData

export const showcaseProjects: ShowcaseProject[] = data.projects.map((project) => {
  if (project.slug === 'rent-shop-erp') {
    return {
      ...project,
      featureModules: rentShopFeatureModules as ShowcaseFeatureModule[],
    }
  }
  return project
})

export function pickLocalized(value: LocalizedString, locale: Locale): string {
  return value[locale] ?? value.vi
}

export function getShowcaseProject(slug: string): ShowcaseProject | undefined {
  return showcaseProjects.find((p) => p.slug === slug)
}

export function allStackTags(project: ShowcaseProject): string[] {
  return [...project.stack.fe, ...project.stack.be, ...project.stack.infra]
}

export function getProjectThumbnailSrc(project: ShowcaseProject): string {
  const file = project.thumbnailFile?.trim() ?? ''
  if (!file) return ''
  return resolveShowcaseAssetPath(project.imageFolder, file)
}

/** Ảnh demo đã resolve từ `src/assets/showcase/{imageFolder}/` (bỏ mục thiếu file). */
export function getDemoImages(project: ShowcaseProject): ResolvedShowcaseImage[] {
  return (project.demoImages ?? [])
    .map((entry) => {
      const src = resolveShowcaseAssetPath(project.imageFolder, entry.file)
      return src ? { ...entry, src } : null
    })
    .filter((img): img is ResolvedShowcaseImage => img !== null)
}

export type ShowcaseSort = 'featured' | 'newest' | 'name'

export type ShowcaseFilters = {
  q: string
  domain: ShowcaseDomain | ''
  projectType: ShowcaseProjectType | ''
  role: ShowcaseRole | ''
  status: ShowcaseStatus | ''
  sort: ShowcaseSort
}

function matchesQuery(project: ShowcaseProject, q: string, locale: Locale): boolean {
  const needle = q.trim().toLowerCase()
  if (!needle) return true
  const haystack = [
    pickLocalized(project.title, locale),
    pickLocalized(project.pitch, locale),
    pickLocalized(project.problem, locale),
    pickLocalized(project.solution, locale),
    ...allStackTags(project),
    project.domain,
    project.projectType,
    ...project.roles,
  ]
    .join(' ')
    .toLowerCase()
  return haystack.includes(needle)
}

export function filterShowcaseProjects(
  projects: ShowcaseProject[],
  filters: ShowcaseFilters,
  locale: Locale,
): ShowcaseProject[] {
  let list = projects.filter((p) => {
    if (filters.domain && p.domain !== filters.domain) return false
    if (filters.projectType && p.projectType !== filters.projectType) return false
    if (filters.role && !p.roles.includes(filters.role)) return false
    if (filters.status && p.status !== filters.status) return false
    if (!matchesQuery(p, filters.q, locale)) return false
    return true
  })

  list = [...list]
  switch (filters.sort) {
    case 'newest':
      list.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
      break
    case 'name':
      list.sort((a, b) =>
        pickLocalized(a.title, locale).localeCompare(pickLocalized(b.title, locale)),
      )
      break
    case 'featured':
    default:
      list.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1
        return b.publishedAt.localeCompare(a.publishedAt)
      })
  }
  return list
}

export function relatedShowcaseProjects(
  project: ShowcaseProject,
  limit = 3,
): ShowcaseProject[] {
  return showcaseProjects
    .filter((p) => p.slug !== project.slug && p.domain === project.domain)
    .slice(0, limit)
}

export const showcaseDomains: ShowcaseDomain[] = ['edtech', 'fintech', 'saas', 'erp']
export const showcaseProjectTypes: ShowcaseProjectType[] = ['web', 'api', 'ai', 'realtime']
export const showcaseRoles: ShowcaseRole[] = ['fullstack', 'backend', 'frontend']
export const showcaseStatuses: ShowcaseStatus[] = ['live', 'demo', 'nda']
