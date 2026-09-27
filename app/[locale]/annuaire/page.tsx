import { PageIntro } from '../../../components/ui/PageIntro';
import { MemberCard } from '../../../components/sections/MemberCard';
import { getMembers } from '../../../lib/content';
export default async function Directory(){const members=await getMembers();return <main><PageIntro eyebrow="Annuaire" title="Les compétences qui font vivre notre réseau." description="Découvrez quelques activités et savoir-faire partagés par les membres de l’ASECAM."/><section className="container-shell grid gap-5 py-20 md:grid-cols-3">{members.map(member=><MemberCard key={member._id} member={member}/>)}</section></main>}
