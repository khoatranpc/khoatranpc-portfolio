/**
 * SEO / Open Graph — cần URL tuyệt đối cho og:url, og:image, Twitter Card.
 * Đặt VITE_SITE_URL=https://domain-của-bạn (không dấu / cuối) khi build & deploy.
 */
export function getSiteOrigin(): string {
  const raw = import.meta.env.VITE_SITE_URL?.trim() ?? ''
  const noSlash = raw.replace(/\/$/, '')
  if (noSlash) return noSlash
  if (typeof window !== 'undefined') return window.location.origin
  return ''
}

/** Đường dẫn bắt đầu bằng /, có thể kèm query — ví dụ /rubik?btype=tieu_hoc */
export function absoluteUrl(path: string): string {
  const origin = getSiteOrigin()
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (!origin) return normalized
  return `${origin}${normalized}`
}

/**
 * Ảnh preview (Open Graph / Twitter).
 * Nên đặt `VITE_OG_IMAGE_URL` trỏ tới ảnh ~1200×630 (PNG/JPG) khi deploy.
 * Mặc định dùng favicon (SVG) — nhiều nền tảng chấp nhận; có thể đổi sau.
 */
export function getOgImageUrl(): string {
  const full = import.meta.env.VITE_OG_IMAGE_URL?.trim()
  if (full) return full
  return absoluteUrl('/favicon.svg')
}
