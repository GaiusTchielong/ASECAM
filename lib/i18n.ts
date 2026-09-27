import { notFound } from 'next/navigation';
export const locales = ['fr','en','mg'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';
export async function getMessages(locale: string) {
  if (!locales.includes(locale as Locale)) notFound();
  const fallback = (await import('../messages/fr.json')).default;
  const selected = locale === 'fr' ? fallback : (await import(`../messages/${locale}.json`)).default;
  return { ...fallback, ...selected };
}
