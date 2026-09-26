export const membersQuery='*[_type == "memberBusiness" && defined(name)] | order(name asc){_id,name,activity,description,contact,poster}';
export const informationQuery='*[_type == "information"] | order(date desc){_id,title,date,body,status}';
export const announcementsQuery='*[_type == "announcement"] | order(date desc){_id,title,date,body}';
