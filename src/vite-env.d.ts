/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL file video (mp4/webm) — solve nâng cao ~11s */
  readonly VITE_RUBIK_DEMO_ADVANCED_URL?: string
  /** URL file video — solve cơ bản ~25s */
  readonly VITE_RUBIK_DEMO_BASIC_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
