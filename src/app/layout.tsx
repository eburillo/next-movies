import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Finder',
  description: 'Save your favorite movies'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`bg-gradient-to-t from-slate-700 to-slate-900 ${inter.className}`}
      >
        <div className='max-w-6xl flex flex-col min-h-screen m-auto'>
          <Header />
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}
