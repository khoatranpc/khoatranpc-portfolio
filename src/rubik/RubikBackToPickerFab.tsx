import { Link } from 'react-router-dom'

/** Nút quay về màn chọn Tiểu học / Trung học (`/rubik`). */
export function RubikBackToPickerFab() {
  return (
    <Link
      to="/rubik"
      className="fixed bottom-24 right-4 z-[60] flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-2.5 text-sm font-semibold text-primary shadow-lg transition-colors hover:bg-surface-container md:bottom-8 md:right-6 md:px-5"
      aria-label="Quay lại chọn cấp học"
    >
      <span className="material-symbols-outlined text-xl leading-none">
        arrow_back
      </span>
      <span className="font-rubik max-w-[9rem] leading-tight md:max-w-none">
        Chọn lại cấp học
      </span>
    </Link>
  )
}
