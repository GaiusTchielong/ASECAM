import { notFound } from 'next/navigation';
export const locales = ['fr','en','mg'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';
function deepMerge<T>(fallback:T, selected:Partial<T>):T{if(Array.isArray(fallback)||typeof fallback!=='object'||fallback===null)return (selected??fallback) as T;const result={...(fallback as Record<string,unknown>)};for(const [key,value] of Object.entries(selected as Record<string,unknown>)){const current=result[key];result[key]=current&&typeof current==='object'&&value&&typeof value==='object'&&!Array.isArray(value)?deepMerge(current,value):value}return result as T}
export async function getMessages(locale:string){if(!locales.includes(locale as Locale))notFound();const fallback=(await import('../messages/fr.json')).default;const selected=locale==='fr'?fallback:(await import(`../messages/${locale}.json`)).default;return deepMerge(fallback,selected)}
