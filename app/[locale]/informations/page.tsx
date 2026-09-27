import { PageIntro } from '../../../components/ui/PageIntro';
import { PostCard } from '../../../components/sections/PostCard';
import { getMessages } from '../../../lib/i18n';
import { getInformation } from '../../../lib/content';
export default async function Information({params}:{params:Promise<{locale:string}>}){const {locale}=await params;const [m,posts]=await Promise.all([getMessages(locale),getInformation()]);return <main><PageIntro eyebrow={m.information.eyebrow} title={m.information.heading} description={m.information.description}/><section className="container-shell grid gap-5 py-20 md:grid-cols-2">{posts.map(post=><PostCard key={post._id} post={post} kind="information" labels={m.card} locale={locale}/>)}</section></main>}
