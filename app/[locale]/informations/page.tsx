import { PageIntro } from '../../../components/ui/PageIntro';
import { PostCard } from '../../../components/sections/PostCard';
import { getInformation } from '../../../lib/content';
export default async function Information(){const posts=await getInformation();return <main><PageIntro eyebrow="Vie associative" title="Les informations officielles de l’ASECAM." description="Retrouvez les rendez-vous, bilans et nouvelles importantes de la communauté."/><section className="container-shell grid gap-5 py-20 md:grid-cols-2">{posts.map(post=><PostCard key={post._id} post={post} kind="information"/>)}</section></main>}
