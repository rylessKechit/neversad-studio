import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Neversad Studio - Photography Miami Style',
  description: 'Studio photo premium avec aesthetic Miami Vice rose néon',
  keywords: ['photography', 'studio', 'miami', 'portrait', 'wedding'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="bg-miami-dark text-miami-white">
        {children}
      </body>
    </html>
  )
}