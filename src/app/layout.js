import { Poppins, Nunito_Sans } from 'next/font/google'
import ClientLayout from './ClientLayout'
import { Metadata } from 'next'

// Styles
import './globals.scss'

// Layout

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '900'], variable: "--font-poppins" })
const nunito_sans = Nunito_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '900'], variable: "--font-nunitosans" })

export const metadata = {
  title: 'MetaLab',
  description: 'MetaLab - Innovation and Technology Solutions',
  keywords: 'metalab, technology, innovation, solutions',
  authors: [{ name: 'MetaLab' }],
  openGraph: {
    title: 'MetaLab',
    description: 'MetaLab - Innovation and Technology Solutions',
    url: 'https://metalab.az',
    siteName: 'MetaLab',
    images: [
      {
        url: 'https://metalab.az/assets/img/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'az_AZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetaLab',
    description: 'MetaLab - Innovation and Technology Solutions',
    images: ['https://metalab.az/assets/img/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
  },
  other: {
    'facebook-domain-verification': 'your-facebook-domain-verification',
    'fb:app_id': '744482201382927',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${poppins.variable} ${nunito_sans.variable}`}>
        <ClientLayout poppins={poppins} nunito_sans={nunito_sans}>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
