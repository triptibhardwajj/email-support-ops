import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { Navigation } from '@/components/layout/navigation'
import { Sidebar } from '@/components/layout/sidebar'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'ETRAV Admin Dashboard',
  description: 'Premium support operations management platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex h-screen bg-background">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Navigation />
              <main className="flex-1 overflow-auto bg-gradient-to-br from-background to-muted/5">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
