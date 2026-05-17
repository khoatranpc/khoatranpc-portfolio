import type { Locale } from '../i18n/messages'

export type LocalizedString = Record<Locale, string>

export type ShowcaseDomain = 'edtech' | 'fintech' | 'saas' | 'erp'
export type ShowcaseProjectType = 'web' | 'api' | 'ai' | 'realtime'
export type ShowcaseRole = 'fullstack' | 'backend' | 'frontend'
export type ShowcaseStatus = 'live' | 'demo' | 'nda'

/** Mục trong JSON — `file` là tên file trong `src/assets/showcase/{imageFolder}/`. */
export type ShowcaseImageEntry = {
  file: string
  alt: LocalizedString
  caption?: LocalizedString
}

export type ResolvedShowcaseImage = ShowcaseImageEntry & {
  src: string
}

export type ShowcaseStack = {
  fe: string[]
  be: string[]
  infra: string[]
}

export type ShowcaseFeatureItem = {
  label: LocalizedString
  note?: LocalizedString
  children?: ShowcaseFeatureItem[]
}

export type ShowcaseFeatureModule = {
  title: LocalizedString
  summary?: LocalizedString
  items: ShowcaseFeatureItem[]
}

export type ShowcaseProject = {
  slug: string
  featured: boolean
  publishedAt: string
  domain: ShowcaseDomain
  projectType: ShowcaseProjectType
  roles: ShowcaseRole[]
  status: ShowcaseStatus
  stack: ShowcaseStack
  /** Thư mục con trong `src/assets/showcase/` (vd. `fpt-lms-online-exams`). */
  imageFolder: string
  /** File thumbnail trong cùng thư mục (vd. `thumbnail.png`, `image1.png`). Để trống nếu chưa có. */
  thumbnailFile?: string
  /** `file`: img1.png, img2.png, … — để [] nếu chưa có ảnh. */
  demoImages: ShowcaseImageEntry[]
  demoUrl?: string
  title: LocalizedString
  pitch: LocalizedString
  problem: LocalizedString
  solution: LocalizedString
  roleDetail: LocalizedString
  results: LocalizedString[]
  deliverables: LocalizedString[]
  /** Phạm vi tính năng (quảng bá) — tùy chọn, theo module nghiệp vụ. */
  featureModules?: ShowcaseFeatureModule[]
}

export type ShowcaseData = {
  projects: ShowcaseProject[]
}
