import { locales, getMessages, type Locale } from '../../lib/i18n';
import { SiteShell } from '../../components/layout/SiteShell';
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale:raw}=await params; if(!locales.includes(raw as Locale)) return null; const locale=raw as Locale; const messages=await getMessages(locale); return <SiteShell locale={locale} nav={messages.nav} rights={messages.footer.rights} developer={messages.footer.developer}>{children}</SiteShell>}
export function generateStaticParams(){return locales.map(locale=>({locale}))}
