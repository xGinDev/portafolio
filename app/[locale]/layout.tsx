import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import dynamic from "next/dynamic";
import "@/app/globals.css";
import { Providers } from "../providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: true,
});

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: true,
});

const ButtonsFloating = dynamic(() => import("@/components/Global/ButtonsFloating"));

export const metadata: Metadata = {
  title: "John Correa (Gin) — Frontend Developer",
  description: "Portafolio de John Correa (Gin) — Frontend Developer",
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'preconnect': 'https://fonts.googleapis.com,https://fonts.gstatic.com',
  },
};

const popins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const [messages, resolvedParams] = await Promise.all([
    getMessages(),
    Promise.resolve(params),
  ]);

  const locale = resolvedParams.locale;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning className={popins.className}>
      <body className="bg-background text-muted-foreground min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            <main className="">
              {children}
              <SpeedInsights />
              <Analytics />
            </main>
            <ButtonsFloating />
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
