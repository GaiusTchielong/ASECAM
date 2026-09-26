import { Header } from './Header';
import { Footer } from './Footer';
import type { Locale } from '../../lib/i18n';
export function SiteShell({children,locale,nav,rights,developer}:{children:React.ReactNode;locale:Locale;nav:Record<string,string>;rights:string;developer:string}){return <><Header locale={locale} nav={nav}/>{children}<Footer locale={locale} rights={rights} developer={developer}/></>}
