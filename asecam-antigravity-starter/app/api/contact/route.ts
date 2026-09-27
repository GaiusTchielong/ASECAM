import { NextResponse } from "next/server";

// TODO implémenter l'envoi via Formspree ou EmailJS vers asecamtana@gmail.com
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    // Placeholder — sera remplacé par l'intégration Formspree/EmailJS
    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur interne" },
      { status: 500 }
    );
  }
}
