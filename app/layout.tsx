import { GeistSans } from 'geist/font/sans'
import './globals.css'
import {Providers} from "@/app/providers";
import Header from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

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
          <main>
              <div className="flex flex-row h-screen">
                  {/*<div className="absolute p-8 lg:relative w-0 -left-[280px] lg:w-[420px] !lg:left-0 lg:left-0 transition-all top-0 h-screen flex flex-col items-center ml-0 bg-secondary">*/}
                  {/*    <Image*/}
                  {/*        isZoomed*/}
                  {/*        width={240}*/}
                  {/*        alt="NextUI Fruit Image with Zoom"*/}
                  {/*        src={`${Profile.src}`}*/}
                  {/*        radius='full'*/}
                  {/*        className='aspect-square'*/}
                  {/*    />*/}
                  {/*    /!*<h1 className={'flex items-center gap-2 text-sm transition-all duration-150 text-foreground-light hover:text-foreground hover:cursor-pointer '}>John Correa (xGinDev)</h1>*!/*/}
                  {/*</div>*/}
                  <div className="w-full min-h-screen transition-all ease-out overflow-auto lg:ml-0">
                      <Header/>
                      <div className="min-h-screen pt-24 px-8 lg:px-0">
                          {children}
                          <SpeedInsights />
                          <Analytics />
                      </div>
                      {/*<Footer/>*/}
                  </div>
              </div>
          </main>
      </Providers>
      </body>
    </html>
  )
}
