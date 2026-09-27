import { PageIntro } from '../../../components/ui/PageIntro';
import { PostCard } from '../../../components/sections/PostCard';
import { getMessages } from '../../../lib/i18n';
import { getAnnouncements } from '../../../lib/content';
export default async function Announcements({params}:{params:Promise<{locale:string}>}){const {locale}=await params;const [m,posts]=await Promise.all([getMessages(locale),getAnnouncements()]);return <main><PageIntro eyebrow={m.announcements.eyebrow} title={m.announcements.heading} description={m.announcements.description}/><section className="container-shell grid gap-5 py-20 md:grid-cols-2">{posts.map(post=><PostCard key={post._id} post={post} kind="announcement" labels={m.card} locale={locale}/>)}</section></main>}
