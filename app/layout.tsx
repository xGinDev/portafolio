import { GeistSans } from 'geist/font/sans'
import './globals.css'
import {Providers} from "@/app/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'John Correa (xGinDev) | Programador de software',
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
      <Header/>
      <main className="min-h-screen p-20">
        {children}
      </main>
          <Footer/>
      </Providers>
      </body>
    </html>
  )
}
