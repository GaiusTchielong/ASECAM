import { NextResponse } from "next/server";

// TODO implémenter le webhook Sanity → revalidation + envoi campagne EmailOctopus
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Placeholder — sera remplacé par :
    // 1. Validation de la signature du webhook Sanity
    // 2. Revalidation des pages concernées
    // 3. Envoi de campagne EmailOctopus (titre, résumé, lien)
    console.log("Sanity webhook received:", body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur interne" },
      { status: 500 }
    );
  }
}
