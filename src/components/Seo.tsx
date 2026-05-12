import { Helmet } from 'react-helmet-async'
import { useI18n } from '../i18n/useI18n'
import { absoluteUrl, getOgImageUrl, getSiteOrigin } from '../seo/site'

export type SeoProps = {
  /** Tiêu đề trang (chưa gồm suffix thương hiệu) */
  title: string
  description: string
  /** pathname + optional query, ví dụ / hoặc /projects */
  path: string
  /** Ghi đè og:image / twitter:image (URL tuyệt đối hoặc path /... đã có origin) */
  imageUrl?: string
  noIndex?: boolean
  /** JSON-LD (Person, WebSite, …) */
  jsonLd?: Record<string, unknown>
}

export function Seo({
  title,
  description,
  path,
  imageUrl,
  noIndex,
  jsonLd,
}: SeoProps) {
  const { t, locale } = useI18n()
  const suffix = t('seo.brandSuffix')
  const fullTitle = `${title}${suffix}`
  const canonical = absoluteUrl(path)
  const image = imageUrl?.startsWith('http')
    ? imageUrl
    : imageUrl
      ? absoluteUrl(imageUrl)
      : getOgImageUrl()
  const ogLocale = locale === 'vi' ? 'vi_VN' : 'en_US'
  const siteName = t('seo.siteName')
  const origin = getSiteOrigin()

  return (
    <Helmet>
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
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  )
}
