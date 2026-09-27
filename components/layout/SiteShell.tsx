import { Header } from './Header';
import { Footer } from './Footer';
import { PageFlow } from './PageFlow';
import type { Locale } from '../../lib/i18n';
export function SiteShell({children,locale,nav,common,footer,contact}:{children:React.ReactNode;locale:Locale;nav:Record<string,string>;common:Record<string,string>;footer:{rights:string;developer:string;address:string};contact:{newsletter:string;subscribe:string;emailPlaceholder:string;subscriptionConfirmed:string;subscriptionUnavailable:string;contact:string}}){return <><Header locale={locale} nav={nav} common={common as {language:string;menuOpen:string;menuClose:string;logoAlt:string}}/>{children}<PageFlow locale={locale} nav={nav} labels={common as {nextPage:string;previousPage:string;goToNext:string;goToPrevious:string}}/><Footer locale={locale} rights={footer.rights} developer={footer.developer} address={footer.address} labels={contact}/></>}
