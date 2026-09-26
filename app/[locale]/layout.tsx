import { locales } from '../../lib/i18n';
export default function LocaleLayout({children}:{children:React.ReactNode}){return <>{children}</>}
export function generateStaticParams(){return locales.map(locale=>({locale}))}
