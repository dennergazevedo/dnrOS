import './globals.css'
import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import Head from './head'

const presStart = Press_Start_2P({
  weight: "400",
  subsets: ['latin'],
  preload: true
})

export const metadata: Metadata = {
  title: 'dnrOS',
  description: 'Simulated Operating System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head />
      <body className={`${presStart.className} w-screen h-screen overflow-hidden`}>{children}</body>
    </html>
  )
}
