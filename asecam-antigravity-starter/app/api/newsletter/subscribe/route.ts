import { NextResponse } from "next/server";

// TODO implémenter l'ajout d'abonné via l'API EmailOctopus
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email requis" },
        { status: 400 }
      );
    }

    // Placeholder — sera remplacé par l'intégration EmailOctopus
    console.log("Newsletter subscription:", email);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur interne" },
      { status: 500 }
    );
  }
}
