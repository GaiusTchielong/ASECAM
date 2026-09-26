# AGENTS.md — Site web de l'ASECAM

Ce fichier est lu automatiquement au démarrage de chaque session par l'agent (Google Antigravity). Il contient les règles non négociables et l'architecture de référence du projet. La spécification complète et détaillée se trouve dans `docs/PRD-Site-ASECAM.md` — **toujours s'y référer en cas de doute** ; ce fichier n'en est qu'un résumé opérationnel.

## 1. Identité du projet

Site web officiel de l'**ASECAM** (Association des Étudiants Camerounais de Madagascar), basée à Antananarivo. Mission de l'association : réunir les jeunes Camerounais vivant à Madagascar pour s'installer, s'adapter, se soutenir, se guider et s'autonomiser mutuellement grâce à la communauté et aux ressources partagées.

## 2. Stack technique imposée

- **Framework** : Next.js (App Router, TypeScript).
- **Styles** : Tailwind CSS.
- **Animations** : Framer Motion (discret, jamais envahissant).
- **CMS headless** : Sanity.io (plan gratuit, 3 éditeurs) via `next-sanity`. Revalidation du site déclenchée par webhook Sanity → route API Next.js → Vercel.
- **Internationalisation** : `next-intl`. Langues : `fr` (défaut), `en`, `mg`. Fallback vers `fr` si une traduction manque — ne jamais bloquer l'affichage.
- **Formulaire de contact** : service gratuit sans backend dédié (Formspree ou EmailJS) → envoi vers `asecamtana@gmail.com`.
- **Newsletter** : EmailOctopus (plan gratuit, 2 500 abonnés / 10 000 emails/mois). Flux : formulaire d'abonnement → API EmailOctopus (ajout du contact) ; publication Sanity → webhook → fonction serverless Vercel → API EmailOctopus (envoi de la campagne : titre, résumé, lien).
- **Hébergement** : Vercel. Domaine de départ : `asecam.vercel.app`.

Ne jamais substituer une brique de cette stack sans en discuter explicitement — chaque choix a été validé pour rester à coût nul et adapté au niveau technique du bureau exécutif (non-développeurs).

## 3. Structure du site

Site **multi-pages** (URL propre par section, pas de one-page à ancres — décision validée pour le SEO) :

```
/[locale]/                → Accueil
/[locale]/qui-sommes-nous → Histoire + Mission
/[locale]/services        → 4 services
/[locale]/annuaire        → Compétences & business des membres
/[locale]/informations    → AG, activités
/[locale]/annonces        → Annonces pratiques (ex. logement)
/[locale]/contact         → Coordonnées + formulaire + lien "rejoindre"
```

Arborescence de code attendue (à ajuster à la marge si justifié) :

```
app/
  [locale]/
    page.tsx
    qui-sommes-nous/page.tsx
    services/page.tsx
    annuaire/page.tsx
    informations/page.tsx
    annonces/page.tsx
    contact/page.tsx
    layout.tsx
  api/
    contact/route.ts
    newsletter/subscribe/route.ts
    webhooks/sanity/route.ts
components/
  layout/ (Header sticky, Footer, LanguageSwitcher)
  sections/ (Hero, HistorySection, ServiceCard, MemberCard, InfoCard, AnnouncementCard, ContactBlock, JoinBanner)
  ui/ (boutons, icônes de contact, etc.)
lib/
  sanity/ (client.ts, queries.ts, schemas/)
  email/ (emailoctopus.ts)
messages/
  fr.json
  en.json
  mg.json
public/
  images/ (logo + 3-4 photos maximum, voir §7 du PRD)
```

## 4. Charte graphique (tokens de design — non négociables)

Couleurs extraites du logo de l'ASECAM (drapeaux Cameroun/Madagascar + silhouette du diplômé) :

| Token | Hex | Usage |
|---|---|---|
| `primary` (vert) | `#1E7A34` | Couleur de marque principale, header, CTA |
| `primary-dark` | `#155A26` | Hover, états actifs |
| `accent-red` | `#CE1126` | Accents, badges, éléments d'alerte douce |
| `accent-gold` | `#FCD116` | Accents secondaires, éléments décoratifs, focus |
| `ink` | `#1A1A1A` | Texte principal |
| `ink-secondary` | `#4B5563` | Texte secondaire |
| `background` | `#FFFFFF` | Fond principal |
| `surface` | `#F7F8F6` | Fonds de sections alternées |

Typographie recommandée : une police d'accroche géométrique et moderne pour les titres (ex. **Sora** ou **Poppins**), une police sobre et très lisible pour le corps de texte (ex. **Inter**). Charger via `next/font` (pas de FOUT/FOIT).

Principes obligatoires :
- Le logo ASECAM est visible en grand à l'arrivée sur la page d'accueil, puis en version compacte dans le header sticky sur toutes les pages.
- Micro-animations discrètes (fade-in / léger décalage à l'entrée de section), jamais de ralentissement perceptible.
- 3 à 4 photos maximum sur l'ensemble du site, gérées comme médias dans Sanity (facilement remplaçables).
- Aucun placeholder générique visible ("Lorem ipsum", images de stock hors contexte).

## 5. Contenu provisoire (à ne pas oublier)

Le contenu réel définitif (Histoire, membres de l'Annuaire, premières Informations/Annonces) n'est pas encore disponible. Générer un contenu fictif **cohérent et sobre** en attendant, sur ces hypothèses fixes (voir PRD §14) :
- ASECAM basée à **Antananarivo**.
- Existe depuis environ **5 ans**.
- Compte actuellement environ **200 membres actifs**.

Marquer clairement dans le code (commentaire `// TODO contenu réel` ou équivalent dans Sanity) chaque zone de contenu fictif, pour un remplacement rapide par copier-coller une fois le texte réel fourni.

## 6. Contraintes non négociables

- **Aucune trace de génération par IA** : aucun commentaire, mention, filigrane ou artefact visuel évoquant une IA, nulle part (code, contenu visible, métadonnées).
- Les 4 modes de contact doivent être cliquables et déclencher l'action native correspondante :
  - Téléphone `+261 38 735 45 09` → `tel:+261387354509`
  - WhatsApp `+261 38 735 45 09` → lien `wa.me/261387354509`
  - Facebook → lien direct vers le profil, **nom du profil affiché**
  - Email `asecamtana@gmail.com` → `mailto:asecamtana@gmail.com`
- Footer, mentions exactes :
  - Bas gauche : `ASECAM 2026. Tous droits réservés.`
  - Bas droite : `développé par Gaïus TCHIELONG — +237 6 95 04 41 80 / +261 34 58 079 25 — tchielong@gmail.com`
- Fallback systématique vers le français si une traduction EN/MG manque — jamais de page cassée ou vide.
- Cible Lighthouse ≥ 90 sur Performance, Accessibilité, SEO.

## 7. Méthode de travail attendue de l'agent

1. Toujours passer par le **mode Plan** pour toute tâche non triviale et attendre la validation de Gaïus avant d'exécuter.
2. Travailler par petites itérations livrables (voir `PROMPTS.md` pour la séquence recommandée), pas en un seul bloc monolithique.
3. À chaque étape UI, produire une capture/aperçu pour validation visuelle avant de passer à la suite.
4. Ne jamais introduire de dépendance hors de la stack définie en §2 sans le signaler explicitement dans le plan proposé.
5. Se référer au `docs/PRD-Site-ASECAM.md` pour tout détail fonctionnel non couvert ici (modèle de contenu exact, critères d'acceptation §15, etc.).
