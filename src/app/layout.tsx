import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CS2 Pakistan Major 2026 - RYK Tryouts | Feb 15',
  description: 'Register for the biggest CS2 tournament in Rahim Yar Khan. $5,000 prize pool. Etihad Club, Feb 15, 2026. Individual registration - get drafted into teams!',
  keywords: 'CS2, Counter-Strike 2, Pakistan, RYK, Rahim Yar Khan, tournament, esports, gaming, major, Etihad Club',
  openGraph: {
    title: 'CS2 Pakistan Major 2026 - RYK Tryouts',
    description: 'Register for the biggest CS2 tournament in RYK. $5,000 prize pool. Feb 15 at Etihad Club.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">

        {children}
      </body>
    </html>
  )
}
