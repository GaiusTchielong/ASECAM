import { PageIntro } from '../../../components/ui/PageIntro';
import { MemberCard } from '../../../components/sections/MemberCard';
import { getMessages } from '../../../lib/i18n';
import { getMembers } from '../../../lib/content';
export default async function Directory({params}:{params:Promise<{locale:string}>}){const {locale}=await params;const [m,members]=await Promise.all([getMessages(locale),getMembers()]);return <main><PageIntro eyebrow={m.directory.eyebrow} title={m.directory.heading} description={m.directory.description}/><section className="container-shell grid gap-5 py-20 md:grid-cols-3">{members.map(member=><MemberCard key={member._id} member={member} label={m.directory.member}/>)}</section></main>}
