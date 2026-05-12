/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Origin production, không dấu / cuối — ví dụ https://khoatran.dev (cho OG URL & canonical) */
  readonly VITE_SITE_URL?: string
  /** Ảnh Open Graph tuyệt đối (~1200×630). Nếu không set, dùng /favicon.svg */
  readonly VITE_OG_IMAGE_URL?: string
  /** URL file video (mp4/webm) hoặc link YouTube (watch / shorts / youtu.be) — demo nâng cao */
  readonly VITE_RUBIK_DEMO_ADVANCED_URL?: string
  /** URL file video hoặc link YouTube — demo cơ bản */
  readonly VITE_RUBIK_DEMO_BASIC_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
