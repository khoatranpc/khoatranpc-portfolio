/** Chuẩn hóa link YouTube → URL iframe embed. Shorts: chỉ thay `/shorts/` → `/embed/`, giữ nguyên host. */

const ID_RE = /^[0-9A-Za-z_-]{11}$/

export function parseYouTubeVideoId(raw: string): string | null {
  const input = raw.trim()
  if (!input) return null

  try {
    const u = new URL(input.includes('://') ? input : `https://${input}`)

    const host = u.hostname.replace(/^www\./i, '')
    if (host === 'youtu.be') {
      const id = u.pathname.replace(/^\//, '').split('/')[0] ?? ''
      return ID_RE.test(id) ? id : null
    }

    if (host !== 'youtube.com' && host !== 'm.youtube.com') {
      return null
    }

    if (u.pathname.startsWith('/embed/')) {
      const id = u.pathname.slice('/embed/'.length).split('/')[0] ?? ''
      return ID_RE.test(id) ? id : null
    }

    if (u.pathname.startsWith('/shorts/')) {
      const id = u.pathname.slice('/shorts/'.length).split('/')[0] ?? ''
      return ID_RE.test(id) ? id : null
    }

    const v = u.searchParams.get('v')
    if (v && ID_RE.test(v)) return v

    return null
  } catch {
    return null
  }
}

/**
 * URL nhúng iframe.
 * Shorts: `https://youtube.com/shorts/ID` → `https://youtube.com/embed/ID` (chỉ đổi path).
 * Còn lại: `https://www.youtube.com/embed/{id}?rel=0`
 */
export function toYouTubeEmbedUrl(raw: string): string | null {
  const input = raw.trim()
  if (!input) return null

  try {
    const u = new URL(input.includes('://') ? input : `https://${input}`)
    const host = u.hostname.replace(/^www\./i, '')

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (u.pathname.includes('/shorts/')) {
        u.pathname = u.pathname.replace('/shorts/', '/embed/')
        u.protocol = 'https:'
        if (!u.searchParams.has('rel')) u.searchParams.set('rel', '0')
        return u.toString()
      }
    }

    const id = parseYouTubeVideoId(input)
    if (!id) return null
    return `https://www.youtube.com/embed/${id}?rel=0`
  } catch {
    return null
  }
}

export function isYouTubeUrl(raw: string): boolean {
  return toYouTubeEmbedUrl(raw) !== null
}

/** Link gốc là Shorts (dọc 9:16) — dùng để chọn tỷ lệ khung nhúng khác watch/embed ngang. */
export function isYouTubeShortsUrl(raw: string): boolean {
  const input = raw.trim()
  if (!input) return false
  try {
    const u = new URL(input.includes('://') ? input : `https://${input}`)
    const host = u.hostname.replace(/^www\./i, '')
    if (host !== 'youtube.com' && host !== 'm.youtube.com') return false
    return u.pathname.includes('/shorts/')
  } catch {
    return false
  }
}
