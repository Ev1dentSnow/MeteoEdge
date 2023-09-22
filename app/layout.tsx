import Navigation from '@/components/Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MeteoEdge',
  description: 'A cutting edge cybernetically enhanced METAR/TAF app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="black">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
