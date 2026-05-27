import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'EILEN Electric Service | Energía Solar & Servicios Eléctricos',
    template: '%s | EILEN Electric Service',
  },
  description:
    'Especialistas en energía solar fotovoltaica, instalaciones eléctricas y aire acondicionado en Santiago, República Dominicana.',
  keywords: [
    'paneles solares Santiago',
    'energía solar República Dominicana',
    'instalaciones eléctricas',
    'aire acondicionado',
    'EILEN Electric Service',
  ],
  openGraph: {
    siteName: 'EILEN Electric Service',
    locale: 'es_DO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
