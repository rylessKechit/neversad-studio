import type { Metadata } from 'next'
import { Inter, Playfair_Display, Montserrat } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Neversad Studio - Photographie Élégante | Paris 15ème',
  description: 'Studio photo premium spécialisé dans le portrait, les événements et la photographie corporate. Approche artistique moderne dans le 15ème arrondissement de Paris.',
  keywords: [
    'studio photo paris',
    'photographe portrait paris',
    'photo corporate paris',
    'photographie élégante',
    'studio photo 15ème',
    'photographe professionnel',
    'photo événement paris',
    'séance photo artistique'
  ],
  authors: [{ name: 'Neversad Studio' }],
  creator: 'Neversad Studio',
  publisher: 'Neversad Studio',
  openGraph: {
    title: 'Neversad Studio - Photographie Élégante',
    description: 'Studio photo premium avec une approche artistique moderne. Capturez vos moments avec élégance.',
    url: 'http://localhost:3000',
    siteName: 'Neversad Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Neversad Studio - Photographie Élégante',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neversad Studio - Photographie Élégante',
    description: 'Studio photo premium avec une approche artistique moderne',
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
    <html lang="fr" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FF6B9D" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}