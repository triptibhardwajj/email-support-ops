import { Sidebar } from '@/components/layout/sidebar'
import { Navigation } from '@/components/layout/navigation'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navigation />
        <main className="flex-1 overflow-auto bg-gradient-to-br from-background to-muted/5">
          {children}
        </main>
      </div>
    </div>
  )
}
