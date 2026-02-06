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
        {/* Venue Location Pin */}
        <div className="w-full flex flex-col items-center mt-12 mb-4">
          <a
            href="https://maps.app.goo.gl/cRgQCvtgcjnsuMuG8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1b1b1b] hover:bg-[#232323] text-white/90 shadow-md transition-colors text-sm font-medium border border-white/10"
            style={{ textDecoration: 'none' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.11 10.36 8.09 11.07.34.24.81.24 1.15 0C13.89 21.36 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 18.54C9.14 18.07 5 14.39 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.39-4.14 7.07-7 9.54Zm0-13.04A4 4 0 0 0 8 11c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/></svg>
            <span>
              <span className="font-semibold">Venue:</span> Etihad Club, Rahim Yar Khan
            </span>
          </a>
          <span className="text-xs text-white/40 mt-1">Tap to open in Google Maps</span>
        </div>
      </body>
    </html>
  )
}
