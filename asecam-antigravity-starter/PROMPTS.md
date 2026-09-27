# Séquence de prompts pour Google Antigravity

À utiliser dans l'ordre, un par un, dans une conversation Antigravity ouverte sur ce dossier. Après chaque prompt : laisser l'agent proposer son **plan**, le relire, puis valider avant exécution. Ne pas enchaîner deux prompts sans avoir vérifié le résultat du précédent.

---

### Prompt 1 — Initialisation du projet
> Initialise un projet Next.js (App Router, TypeScript) conforme à AGENTS.md : Tailwind CSS configuré avec les tokens de couleur et polices définis dans AGENTS.md §4, structure de dossiers exacte de AGENTS.md §3, et internationalisation next-intl avec les locales fr (défaut), en, mg. Vérifie que le site démarre correctement avant de continuer.

### Prompt 2 — Layout global
> Crée le layout global : header sticky avec logo ASECAM (grand à l'arrivée sur l'accueil, compact ensuite), menu de navigation vers toutes les pages listées dans AGENTS.md §3, sélecteur de langue fr/en/mg, menu mobile en tiroir, et footer avec les mentions exactes définies dans AGENTS.md §6.

### Prompt 3 — Page d'accueil
> Crée la page d'accueil (Hero) : mise en avant du logo, accroche + mission résumée, CTA principal vers "Nous rejoindre" (page contact) et secondaire vers "Qui sommes-nous". Utilise un contenu provisoire cohérent avec AGENTS.md §5 en attendant le contenu réel.

### Prompt 4 — Qui sommes-nous
> Crée la page "Qui sommes-nous" avec les sous-sections Histoire et Mission (PRD §6.3), en contenu provisoire conforme à AGENTS.md §5.

### Prompt 5 — Services
> Crée la page Services avec les 4 blocs définis dans le PRD §6.4 (assistance nouveaux arrivants, réseautage/insertion pro, orientation académique, répertoire de compétences), reliés à la page Annuaire.

### Prompt 6 — Annuaire (Sanity)
> Modélise dans Sanity le type de contenu "Membre/Business" (PRD §10), puis construis la page Annuaire qui l'affiche en grille de cartes (nom, activité, description, contact, affiche optionnelle), avec 2-3 entrées fictives cohérentes pour la démonstration.

### Prompt 7 — Informations & Annonces (Sanity)
> Modélise dans Sanity les types "Information" et "Annonce" (PRD §10), construis les deux pages correspondantes avec quelques entrées fictives cohérentes (AGENTS.md §5).

### Prompt 8 — Contact + formulaire + bandeau "Rejoignez-nous"
> Crée la page Contact : bloc de coordonnées avec les 4 modes de contact cliquables exacts (AGENTS.md §6), formulaire d'envoi vers asecamtana@gmail.com (Formspree ou EmailJS), et le bandeau médian "Rejoignez-nous" (PRD §6.6) qui renvoie vers cette page.

### Prompt 9 — Newsletter
> Ajoute le formulaire d'abonnement à la newsletter (email uniquement), l'intégration EmailOctopus pour l'ajout d'abonné, une route API de webhook Sanity qui déclenche l'envoi d'une campagne (titre, résumé, lien) à chaque nouvelle publication Information/Annonce, conformément à AGENTS.md §2 et PRD §8.5.

### Prompt 10 — SEO & performance
> Ajoute les métadonnées SEO (title, description, Open Graph) par page et par langue, un sitemap, et vérifie les images (formats modernes, lazy loading). Objectif : Lighthouse ≥ 90 sur Performance, Accessibilité, SEO (PRD §7).

### Prompt 11 — Revue finale avant déploiement
> Relis l'intégralité du site par rapport aux critères d'acceptation du PRD §15 et signale tout écart. Vérifie qu'aucune trace de génération par IA n'est visible nulle part (code, contenu, métadonnées).

### Prompt 12 — Déploiement
> Prépare le projet pour un déploiement Vercel sur le domaine asecam.vercel.app, liste les variables d'environnement à configurer (voir .env.example) et les étapes restantes côté Sanity/EmailOctopus/Formspree avant mise en ligne.
