import { Outlet } from 'react-router-dom'
import { FixedCtaDock } from '../components/FixedCtaDock'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-background font-body-md text-on-surface selection:bg-secondary selection:text-on-secondary">
      <SiteHeader />
      <main className="flex-1 pb-40 md:pb-36">
        <Outlet />
      </main>
      <SiteFooter />
      <FixedCtaDock />
    </div>
  )
}
