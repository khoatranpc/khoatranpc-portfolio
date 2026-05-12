import { useLocation, useSearchParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { useI18n } from '../i18n/useI18n'
import { parseBtype } from './constants/btype'
import { RubikBackToPortfolioFab } from './RubikBackToPortfolioFab'
import { RubikPage } from './RubikPage'
import { SplashPage } from './SplashPage'
import './rubik-scope.css'

/** Standalone Cube Mastery hub + course views (merged from rubik-landingpage). */
export function RubikEntry() {
  const { t } = useI18n()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const btype = parseBtype(searchParams.get('btype'))
  const path = `${location.pathname}${location.search}`
  const isCourse = Boolean(btype)

  return (
    <div className="rubik-scope flex min-h-svh w-full min-w-0 max-w-full flex-col bg-surface text-on-surface-variant antialiased">
      <Seo
        title={t(isCourse ? 'seo.rubikCourse.title' : 'seo.rubikSplash.title')}
        description={t(isCourse ? 'seo.rubikCourse.description' : 'seo.rubikSplash.description')}
        path={path || '/rubik'}
      />
      {btype ? <RubikPage /> : <SplashPage />}
      <RubikBackToPortfolioFab />
    </div>
  )
}
