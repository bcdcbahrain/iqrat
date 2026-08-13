import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Newsreader } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader' })

export const metadata: Metadata = { title: 'IQRA Tamil | Learn, Reflect, Grow', description: 'A welcoming Islamic learning foundation for Tamil-speaking families and communities.' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f7f5ed', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ta" className="bg-background"><body className={`${geist.variable} ${geistMono.variable} ${newsreader.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
