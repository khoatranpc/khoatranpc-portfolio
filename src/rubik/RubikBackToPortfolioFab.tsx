import { Link } from 'react-router-dom'

/** Nút cố định quay về trang portfolio chính (`/`). */
export function RubikBackToPortfolioFab() {
  return (
    <Link
      to="/"
      className="fixed bottom-24 left-[max(1rem,env(safe-area-inset-left,0px))] z-[60] flex max-w-[min(18rem,calc(100vw-2rem))] items-center gap-2 rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-2.5 text-sm font-semibold text-on-surface shadow-lg transition-colors hover:bg-surface-container md:bottom-8 md:left-6 md:max-w-none md:px-5"
      aria-label="Quay về portfolio"
    >
      <span className="material-symbols-outlined shrink-0 text-xl leading-none text-primary">
        home
      </span>
      <span className="font-rubik leading-tight">Về portfolio</span>
    </Link>
  )
}
