import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header/Header";
import "@/app/globals.css";
import { Providers } from "../providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer/Footer";

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
    <html lang={locale}>
      <body className="bg-background text-foreground min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            <main className="">
              {children}
              <SpeedInsights />
              <Analytics />
            </main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
