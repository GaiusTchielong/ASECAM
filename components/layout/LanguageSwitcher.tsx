'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '../../lib/i18n';
export function LanguageSwitcher({locale}:{locale:Locale}){const pathname=usePathname(); const rest=pathname.replace(/^\/(fr|en|mg)/,'')||'/'; return <nav aria-label="Choisir la langue" className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1 text-xs font-semibold"><span className="sr-only">Langue</span>{(['fr','en','mg'] as const).map(item=><Link key={item} href={`/${item}${rest}`} className={`rounded-full px-2 py-1 uppercase transition ${item===locale?'bg-white text-primary':'text-white/80 hover:bg-white/15 hover:text-white'}`}>{item}</Link>)}</nav>}
