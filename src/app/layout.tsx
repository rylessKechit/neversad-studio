import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Neversad Studio - Photography Miami Style | Paris 15ème',
  description: 'Studio photo premium avec aesthetic Miami Vice rose néon. Spécialisé dans le portrait, corporate et événements. Réservez votre séance photo à Paris.',
  keywords: [
    'studio photo paris',
    'photographe portrait paris',
    'photo corporate paris',
    'séance photo miami style',
    'studio photo 15ème',
    'photographe professionnel',
    'photo événement paris'
  ],
  authors: [{ name: 'Neversad Studio' }],
  creator: 'Neversad Studio',
  publisher: 'Neversad Studio',
  openGraph: {
    title: 'Neversad Studio - Photography Miami Style',
    description: 'Studio photo premium avec aesthetic Miami moderne. Capturez vos moments avec style.',
    url: 'http://localhost:3000',
    siteName: 'Neversad Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Neversad Studio - Photography Miami Style',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neversad Studio - Photography Miami Style',
    description: 'Studio photo premium avec aesthetic Miami moderne',
    images: ['/twitter-image.jpg'],
    creator: '@neversadstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${orbitron.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FF006E" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="bg-miami-dark text-miami-white antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}