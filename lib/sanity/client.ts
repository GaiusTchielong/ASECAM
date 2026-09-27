import { createClient } from '@sanity/client';
export const sanityConfigured=Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
export const sanityClient=sanityConfigured?createClient({projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,dataset:process.env.NEXT_PUBLIC_SANITY_DATASET||'production',apiVersion:'2026-01-01',useCdn:true}):null;
export async function sanityFetch<T>(query:string,fallback:T){if(!sanityClient)return fallback;try{return await sanityClient.fetch<T>(query)}catch{return fallback}}
