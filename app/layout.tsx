import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { Providers } from "@/app/providers";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header/Header';

const defaultUrl = process.env.VERCEL_URL
  ? 'https://portafolio-xgindev.vercel.app/'
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'xGinDev | Portafolio',
  description: 'Embárquese en mi apasionante viaje de desarrollo. Acelera tu ritmo con nuestras herramientas innovadoras y sabiduría experta. Únete a mi comunidad vibrante. Tu viaje digital comienza aquí conmigo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <Providers>
          <Header />
          <div className="w-full min-h-screen transition-all ease-out overflow-auto lg:ml-0">
            <div className="min-h-screen">
              {children}
              <SpeedInsights />
              <Analytics />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
