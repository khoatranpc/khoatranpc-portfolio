import { Navigate, useSearchParams } from 'react-router-dom'
import { RubikBackToPickerFab } from './RubikBackToPickerFab'
import { parseBtype } from './constants/btype'
import { ElementaryLanding } from './elementary/ElementaryLanding'
import { SecondaryLanding } from './secondary/SecondaryLanding'

export function RubikPage() {
  const [searchParams] = useSearchParams()
  const btype = parseBtype(searchParams.get('btype'))

  if (!btype) {
    return <Navigate to="/rubik" replace />
  }

  const isElementary = btype === 'tieu_hoc'

  return (
    <main className="relative flex w-full min-w-0 flex-1 flex-col p-0">
      <RubikBackToPickerFab />
      {isElementary ? <ElementaryLanding /> : <SecondaryLanding />}
    </main>
  )
}
