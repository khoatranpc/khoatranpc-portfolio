/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Origin production, không dấu / cuối — ví dụ https://khoatran.dev (cho OG URL & canonical) */
  readonly VITE_SITE_URL?: string
  /** Ảnh Open Graph tuyệt đối (~1200×630). Nếu không set, dùng /favicon.svg */
  readonly VITE_OG_IMAGE_URL?: string
  /** URL file video (mp4/webm) — solve nâng cao ~11s */
  readonly VITE_RUBIK_DEMO_ADVANCED_URL?: string
  /** URL file video — solve cơ bản ~25s */
  readonly VITE_RUBIK_DEMO_BASIC_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
