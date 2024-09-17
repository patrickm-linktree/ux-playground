import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LT Tray Proto',
  description: 'Tray system for managing blocks on moweb.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
