# Kit de démarrage — Site web ASECAM (pour Google Antigravity)

Ce dossier est un kit de démarrage prêt à ouvrir dans **Google Antigravity** pour développer le site web de l'ASECAM (Association des Étudiants Camerounais de Madagascar) de façon agentique.

## Contenu du kit

| Fichier | Rôle |
|---|---|
| `AGENTS.md` | Instructions maîtres du projet — lues automatiquement par Antigravity à l'ouverture du dossier. Contient la stack, l'architecture, la charte graphique et les contraintes non négociables. |
| `.gemini/GEMINI.md` | Pointeur de convention Antigravity vers `AGENTS.md` (ne rien y ajouter, tout se passe dans `AGENTS.md`). |
| `docs/PRD-Site-ASECAM.md` | Spécification produit complète (référence en cas de doute). |
| `PROMPTS.md` | Séquence de prompts prêts à coller dans Antigravity, dans l'ordre, pour construire le site étape par étape. |
| `.env.example` | Modèle des variables d'environnement à renseigner (Sanity, EmailOctopus, Formspree). |
| `package.json` | Dépendances de base conformes à la stack imposée. |

## Comment démarrer

1. **Ouvrir ce dossier** comme projet dans Google Antigravity (application de bureau ou CLI `agy`).
2. Vérifier dans les réglages d'Antigravity que le chargement des `AGENTS.md` imbriqués est activé si tu ajoutes plus tard des instructions par sous-dossier (optionnel, non nécessaire au démarrage).
3. Copier `.env.example` vers `.env.local` et renseigner les clés au fur et à mesure (Sanity, EmailOctopus, Formspree) — l'agent te dira quand il en a besoin.
4. Ouvrir une conversation avec l'agent et coller les prompts de `PROMPTS.md` **un par un**, en validant le plan proposé par l'agent (mode Plan) avant chaque exécution.
5. À chaque étape visuelle, demander une capture/aperçu avant de valider et de passer à l'étape suivante.

## Rappels importants

- Toute décision technique est déjà figée dans `AGENTS.md` (Sanity, EmailOctopus, Next.js, next-intl, Vercel) — l'agent ne doit pas en changer sans le signaler explicitement.
- Le contenu texte actuel (Histoire, Annuaire, Informations, Annonces) est **volontairement provisoire** ; il sera remplacé plus tard par un simple copier-coller dans le code une fois le contenu réel disponible (voir `AGENTS.md` §5).
- Aucune trace de génération par IA ne doit apparaître sur le site final (voir `AGENTS.md` §6).
