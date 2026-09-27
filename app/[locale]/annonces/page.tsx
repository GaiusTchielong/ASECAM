import { PageIntro } from '../../../components/ui/PageIntro';
import { PostCard } from '../../../components/sections/PostCard';
import { getAnnouncements } from '../../../lib/content';
export default async function Announcements(){const posts=await getAnnouncements();return <main><PageIntro eyebrow="Entraide pratique" title="Les annonces utiles de notre réseau." description="Logement, opportunités et coups de main : un fil simple pour faire circuler les bonnes informations."/><section className="container-shell grid gap-5 py-20 md:grid-cols-2">{posts.map(post=><PostCard key={post._id} post={post} kind="announcement"/>)}</section></main>}
