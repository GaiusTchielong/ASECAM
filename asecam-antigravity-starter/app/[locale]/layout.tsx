import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter, Sora } from "next/font/google";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate the locale
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Load messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <main className="flex-1">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
