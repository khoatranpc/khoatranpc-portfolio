export type RubikDemoVideoId = 'advanced' | 'basic'

export type RubikDemoVideo = {
  id: RubikDemoVideoId
  /** Giao diện thẻ: tối (speed) hoặc sáng (story) */
  variant: 'speed' | 'story'
  durationLabel: string
  title: string
  /** Dòng phụ ngắn dưới tiêu đề */
  tagline: string
  /** Mục tiêu / lời hứa hiệu suất */
  promise: string
  /** URL file .mp4/.webm hoặc link YouTube (watch / shorts / youtu.be) — để trống thì placeholder */
  src: string
  matchLabel: string
  matchHref: '/rubik?btype=trung_hoc' | '/rubik?btype=tieu_hoc'
}

function envUrl(
  key: 'VITE_RUBIK_DEMO_ADVANCED_URL' | 'VITE_RUBIK_DEMO_BASIC_URL',
): string {
  const raw = import.meta.env[key]
  return typeof raw === 'string' && raw.trim().length > 0 ? raw.trim() : ''
}

/** Hai clip demo — gán URL qua .env (xem `src/vite-env.d.ts`). */
export const RUBIK_DEMO_VIDEOS: readonly RubikDemoVideo[] = [
  {
    id: 'advanced',
    variant: 'speed',
    durationLabel: '~11s',
    title: 'Nâng cao',
    tagline: 'Một nhịp solve ngắn — góc thi đấu',
    promise: 'Luyện đúng hướng, sub-10″ nằm trong tầm.',
    src: envUrl('VITE_RUBIK_DEMO_ADVANCED_URL'),
    matchLabel: 'Speed Mode · Trung học',
    matchHref: '/rubik?btype=trung_hoc',
  },
  {
    id: 'basic',
    variant: 'story',
    durationLabel: '~25s',
    title: 'Nền cơ bản',
    tagline: 'Đủ thời gian để cảm nhịp',
    promise: 'Nền vững sub ~25″ là mốc thực tế; từ đó mới bay cao hơn.',
    src: envUrl('VITE_RUBIK_DEMO_BASIC_URL'),
    matchLabel: 'Story Mode · Tiểu học',
    matchHref: '/rubik?btype=tieu_hoc',
  },
] as const
