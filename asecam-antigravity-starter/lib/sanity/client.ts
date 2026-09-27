import { createClient } from "@sanity/client";

// TODO renseigner les variables d'environnement Sanity dans .env.local
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export default client;
