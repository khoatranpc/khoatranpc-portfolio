import { Helmet } from 'react-helmet-async'
import { useI18n } from '../i18n/useI18n'
import { absoluteUrl, getOgImageUrl, getSiteOrigin, resolveAssetUrl } from '../seo/site'

export type SeoProps = {
  /** Tiêu đề trang (chưa gồm suffix thương hiệu) */
  title: string
  description: string
  /** pathname + optional query, ví dụ / hoặc /projects */
  path: string
  /** Ghi đè og:image / twitter:image (URL tuyệt đối hoặc path /... đã có origin) */
  imageUrl?: string
  /** Mô tả ảnh preview (og:image:alt, accessibility) */
  imageAlt?: string
  /** Open Graph type — trang chi tiết nên dùng article */
  ogType?: 'website' | 'article'
  noIndex?: boolean
  /** JSON-LD (Person, WebSite, …) */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

function resolveSeoImage(imageUrl?: string): string {
  if (!imageUrl) return getOgImageUrl()
  return resolveAssetUrl(imageUrl)
}

export function Seo({
  title,
  description,
  path,
  imageUrl,
  imageAlt,
  ogType = 'website',
  noIndex,
  jsonLd,
}: SeoProps) {
  const { t, locale } = useI18n()
  const suffix = t('seo.brandSuffix')
  const fullTitle = `${title}${suffix}`
  const canonical = absoluteUrl(path)
  const image = resolveSeoImage(imageUrl)
  const ogLocale = locale === 'vi' ? 'vi_VN' : 'en_US'
  const siteName = t('seo.siteName')
  const origin = getSiteOrigin()
  const jsonLdBlocks = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : []

  return (
    <Helmet>
      <html lang={locale === 'vi' ? 'vi' : 'en'} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}
      {origin ? <link rel="canonical" href={canonical} /> : null}

      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      {imageAlt ? <meta property="og:image:alt" content={imageAlt} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {imageAlt ? <meta name="twitter:image:alt" content={imageAlt} /> : null}

      {jsonLdBlocks.map((block, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  )
}
