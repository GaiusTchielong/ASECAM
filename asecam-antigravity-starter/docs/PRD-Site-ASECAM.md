# PRD — Site Web Officiel de l'ASECAM
### Association des Étudiants Camerounais de Madagascar

| | |
|---|---|
| **Version** | 1.0 |
| **Statut** | Brouillon pour validation |
| **Auteur / Product Owner** | Gaïus Tchielong |
| **Client** | ASECAM (Bureau exécutif) |
| **Date** | Septembre 2026 |
| **Déploiement cible** | Vercel |

---

## 1. Résumé exécutif

L'ASECAM ne dispose actuellement d'aucune présence web. Ce document définit les exigences produit pour la création d'un **site web vitrine et communautaire**, destiné à :

- présenter l'association et son histoire aux membres actuels, futurs étudiants camerounais et partenaires ;
- centraliser les services offerts aux membres (accueil, insertion pro, orientation, annuaire de compétences) ;
- diffuser les informations officielles (AG, activités) et les annonces pratiques (logement, opportunités) ;
- faciliter le contact et l'adhésion de nouveaux membres ;
- fonctionner en 3 langues (FR / EN / MG) ;
- être maintenu de façon autonome par le bureau exécutif via un CMS headless gratuit, sans compétence technique requise.

Le site devra avoir un niveau de finition **professionnel, moderne et soigné**, sans aucune trace visuelle ou textuelle évoquant une génération par IA.

---

## 2. Contexte et problème à résoudre

L'ASECAM regroupe les étudiants camerounais vivant à Madagascar autour d'une mission d'entraide : installation, adaptation, soutien, orientation et autonomisation mutuelle via la communauté et le partage de ressources.

Aujourd'hui :
- aucun canal centralisé et pérenne pour présenter l'association à un nouvel arrivant ou un partenaire ;
- les informations (AG, activités, annonces) circulent uniquement via des canaux informels (WhatsApp, Facebook), volatiles et peu structurés ;
- aucune vitrine ne valorise les compétences et activités économiques des membres ;
- aucun moyen simple d'adhérer ou de contacter l'association pour un tiers extérieur au réseau existant.

## 3. Objectifs

### 3.1 Objectifs produit
1. Offrir une vitrine crédible et professionnelle de l'ASECAM.
2. Réduire la friction d'intégration des nouveaux arrivants camerounais à Madagascar.
3. Valoriser l'entraide économique entre membres (annuaire de compétences/business).
4. Centraliser la communication officielle (informations et annonces).
5. Permettre une maintenance de contenu 100 % autonome par le bureau, sans développeur.
6. Maintenir un coût d'exploitation à 0 Ar / 0 € (hébergement, CMS, formulaire, diffusion mail).

### 3.2 Indicateurs de succès (KPIs)
| Indicateur | Cible indicative |
|---|---|
| Temps de chargement (LCP) | < 2,5 s sur mobile 3G/4G |
| Score Lighthouse (Perf/Access/SEO) | ≥ 90 sur chaque axe |
| Taux de complétion du formulaire de contact | À suivre dès mise en ligne |
| Nombre d'inscrits à la liste de diffusion à 3 mois | Objectif à définir avec le bureau |
| Autonomie du bureau sur le CMS | 0 sollicitation développeur pour une mise à jour de contenu courante |

## 4. Public cible

| Persona | Besoin principal |
|---|---|
| **Nouvel arrivant camerounais à Madagascar** | Comprendre l'association, la contacter, trouver de l'aide (logement, démarches) |
| **Membre actif de l'ASECAM** | Consulter les informations/annonces, mettre en avant son activité |
| **Membre du bureau exécutif** | Publier/modifier informations, annonces, membres, photos — sans coder |
| **Partenaire / institution / diaspora** | Comprendre la mission, contacter l'association, éventuellement soutenir |
| **Grand public malgache ou étranger** | Découvrir l'association (site accessible en 3 langues) |

## 5. Périmètre

### 5.1 Inclus (v1)
- Site vitrine **multipage, avec URL propre par section** (décision validée pour le SEO — voir §12) en FR (par défaut), EN, MG.
- Sections : Accueil / Histoire & Présentation / Services / Annuaire de compétences (membres & business) / Rejoignez-nous / Informations / Annonces / Contact.
- Formulaire de contact envoyant les messages vers `asecamtana@gmail.com`.
- Liens cliquables directs vers téléphone, WhatsApp, Facebook, email.
- Barre de navigation statique (sticky).
- CMS headless gratuit pour gérer informations, annonces, annuaire de membres/business, photos.
- Liste de diffusion gratuite avec notification automatique par email lors d'une nouvelle publication.
- Footer avec mention légale et signature développeur.
- Déploiement sur Vercel.

### 5.2 Exclu (hors v1 — pistes d'évolution)
- Espace membre avec authentification/connexion individuelle.
- Paiement en ligne des cotisations.
- Application mobile native.
- Back-office de gestion des adhésions/cotisations.
- Modération avancée / commentaires publics.

*(Ces éléments pourront faire l'objet d'un PRD v2 si le bureau le souhaite.)*

## 6. Exigences fonctionnelles détaillées

### 6.1 Header & navigation globale
- Barre de navigation **sticky** (reste visible au scroll), fond qui se contracte légèrement au défilement.
- Logo ASECAM visible en permanence dans le header (version compacte pendant le scroll).
- Menu : Accueil · Qui sommes-nous · Services · Annuaire · Nous rejoindre · Informations · Annonces · Contact.
- Sélecteur de langue (FR / EN / MG) toujours accessible dans le header, sans rechargement de page perceptible.
- Menu mobile en tiroir ("hamburger") avec les mêmes items.

### 6.2 Accueil (Hero)
- Mise en avant forte et immédiate du **logo** de l'ASECAM (grand format à l'arrivée sur le site).
- Message d'accroche + mission résumée en une phrase.
- Appel à l'action principal vers "Nous rejoindre" et secondaire vers "Qui sommes-nous".
- Une des 3-4 photos autorisées peut être utilisée ici en arrière-plan ou visuel d'accompagnement.

### 6.3 Qui sommes-nous / Histoire
- Sous-section **Histoire** : récit de la création et de l'évolution de l'ASECAM (contenu géré via CMS, modifiable).
- Sous-section **Mission** : réunir les jeunes Camerounais vivant à Madagascar pour s'installer, s'adapter, se soutenir, se guider et s'autonomiser mutuellement grâce à la communauté et aux ressources partagées.
- Emplacement pour une photo illustrative (parmi le quota de 3-4 photos du site).

### 6.4 Services
Présentation en cartes/blocs des axes d'accompagnement :
1. **Assistance aux nouveaux arrivants**
2. **Réseautage et insertion professionnelle**
3. **Orientation académique**
4. **Répertoire de compétences** (renvoie/ancre vers la section Annuaire, §6.5)

Chaque service : titre, icône, description courte — tout modifiable via CMS.

### 6.5 Annuaire de compétences & business des membres
- Liste des membres ayant une activité/business à présenter.
- Pour chaque entrée : nom, activité/compétence, description courte, contact(s), **affiche/visuel du business si disponible**.
- Gérable entièrement via CMS : ajout, modification, **suppression** d'une fiche par le bureau.
- Affichage type grille de cartes, filtrable ou non selon le nombre d'entrées (simple liste si peu nombreuses au lancement).

### 6.6 "Rejoignez-nous / Soutenez-nous" (section médiane)
- Bloc visuel fort, positionné au milieu du parcours de page, invitant à rejoindre ou soutenir l'ASECAM.
- Clic sur l'appel à l'action → renvoi (ancre/scroll) vers la section Contact en bas de page.

### 6.7 Informations
- Fil d'actualités officielles : convocations d'AG, activités à venir, comptes-rendus.
- Chaque entrée : titre, date, corps de texte, statut (à venir / passé).
- Gérable via CMS (création, modification, suppression).

### 6.8 Annonces
- Fil distinct des Informations, dédié aux annonces pratiques (ex. logement disponible, petites annonces membres).
- Même logique de gestion CMS que les Informations, avec typage séparé pour un affichage/filtrage distinct.

### 6.9 Contact
- Bloc récapitulatif des coordonnées officielles, chaque mode de contact affiché avec son **logo/icône dédiée**, cliquable pour ouvrir l'action correspondante :
  - **Téléphone** `+261 38 735 45 09` → lien `tel:`
  - **WhatsApp** `+261 38 735 45 09` → lien `wa.me` (ouverture directe d'une conversation)
  - **Facebook** → lien direct vers le profil, affichant le **nom du profil**
  - **Email** `asecamtana@gmail.com` → lien `mailto:`
- **Formulaire de contact** à côté du bloc de coordonnées : nom, email, sujet, message → envoi à `asecamtana@gmail.com` à la soumission (voir §8.4 pour la solution technique gratuite).
- Confirmation visuelle claire après envoi réussi (et message d'erreur clair en cas d'échec).

### 6.10 Inscription à la liste de diffusion (newsletter)
- Bouton/formulaire "S'abonner" (email uniquement) accessible depuis le site (footer et/ou section Informations/Annonces).
- À chaque nouvelle publication (Information ou Annonce) : envoi automatique aux abonnés d'un email contenant le **titre**, un **court résumé**, et un **lien direct** vers la publication sur le site.
- Fonctionnalité conditionnée à une solution strictement **gratuite** — voir §8.5 pour l'analyse des options et la recommandation.

### 6.11 Footer
- Mention légale en bas à gauche : **"ASECAM 2026. Tous droits réservés."**
- Signature développeur en bas à droite : **"développé par Gaïus TCHIELONG — +237 6 95 04 41 80 / +261 34 58 079 25 — tchielong@gmail.com"**
- Reprise des liens de contact et du sélecteur de langue (optionnel, en complément du header).

### 6.12 Multilinguisme (FR / EN / MG)
- Langue par défaut : **Français**.
- Bascule **Anglais** et **Malgache** disponible à tout moment, sans perte de contexte (l'utilisateur reste sur la même page/section après changement de langue).
- Tous les contenus statiques (UI) traduits dans les 3 langues.
- Tous les contenus dynamiques (Histoire, Services, Informations, Annonces, Annuaire) doivent être saisissables en 3 langues dans le CMS, avec possibilité de publier une traduction plus tard que l'original si besoin (pas de blocage si une langue n'est pas encore traduite — fallback vers le français).

### 6.13 Photos illustratives
- 3 à 4 photos maximum sur l'ensemble du site (pour rester sobre), positionnées aux endroits stratégiques (Accueil, Histoire, éventuellement Services ou Annuaire).
- Gérées comme un contenu média dans le CMS pour une mise à jour facile sans intervention développeur.

## 7. Exigences non-fonctionnelles

| Catégorie | Exigence |
|---|---|
| **Performance** | Site statique/pré-rendu, images optimisées (format moderne, lazy loading), LCP < 2,5s |
| **Responsive** | Mobile-first, testé sur mobile, tablette, desktop |
| **Accessibilité** | Contraste conforme AA, navigation clavier, alternatives textuelles sur images |
| **SEO** | Balises meta, Open Graph (partage réseaux sociaux), sitemap, plan d'URL propre par langue |
| **Sécurité** | Formulaire protégé anti-spam (honeypot/captcha léger), aucune donnée sensible exposée |
| **Maintenabilité** | Toute section dynamique éditable sans code via le CMS headless |
| **Coût** | 0 Ar de coût récurrent : hébergement, CMS et diffusion mail 100 % sur offres gratuites |
| **Discrétion IA** | Aucune mention, filigrane, commentaire de code ou artefact visuel évoquant une génération par IA |

## 8. Recommandations techniques (architecture proposée)

> Cette section propose une stack précise avec justification. Le bureau/Gaïus valide ou ajuste avant développement.

### 8.1 Stack front-end
- **Next.js** (React) — génération statique/hybride, excellent support Vercel natif, SEO solide.
- **Tailwind CSS** — cohérent avec les projets précédents déjà réalisés, permet une exécution rapide d'un design haut de gamme.
- Bibliothèque d'animation légère (ex. Framer Motion) pour des transitions soignées sans surcharger les performances.
- **next-intl** (ou équivalent) pour la gestion FR/EN/MG.

### 8.2 Hébergement
- **Vercel** (plan gratuit) — confirmé par la demande initiale. Compatible nativement avec Next.js.

### 8.3 CMS headless gratuit — options comparées

| Solution | Coût | Facilité pour non-technique | Limite notable |
|---|---|---|---|
| **Decap CMS** (ex-Netlify CMS) | Gratuit, illimité | Interface formulaire simple, connecté au dépôt Git ; chaque membre du bureau a juste besoin d'un compte GitHub | Workflow basé Git (transparent pour l'utilisateur, géré en coulisse) |
| **Sanity.io** (plan gratuit) | Gratuit jusqu'à 3 utilisateurs non-lecteurs | Interface d'édition très soignée, idéale pour du contenu riche | Limite de 3 comptes éditeurs sur le plan gratuit |
| **Directus** (self-hosted) | Gratuit (open source) | Interface complète type back-office | Nécessite un hébergement serveur séparé (pas 100% Vercel) |

**Décision retenue : Sanity.io** (plan gratuit). Le nombre d'éditeurs nécessaires — Gaïus, le président et le secrétaire, soit 3 personnes — correspond exactement à la limite du plan gratuit de Sanity. En contrepartie, Sanity offre l'interface d'édition la plus aboutie du marché pour un non-technicien (Sanity Studio), une modélisation de contenu robuste parfaitement adaptée aux types définis en §10, un excellent support des champs multilingues (FR/EN/MG) et une image professionnelle plus sérieuse que Decap CMS. Intégration via `next-sanity` côté front, avec revalidation automatique du site (webhook Sanity → Vercel) à chaque publication.

### 8.4 Formulaire de contact
- Service gratuit d'envoi de formulaire vers email (ex. **Formspree**, déjà utilisé sur un projet précédent, ou **EmailJS**) — pas de backend à héberger, plan gratuit suffisant pour le volume attendu d'une association étudiante.
- Destination : `asecamtana@gmail.com`.

### 8.5 Liste de diffusion & notifications automatiques — solution gratuite pour 200 à 500 abonnés

Objectif : à chaque nouvelle Information/Annonce publiée dans le CMS → email automatique aux abonnés (titre + résumé + lien).

Volumétrie retenue pour le démarrage : **200 à 500 abonnés** (voir §12).

**Décision retenue : EmailOctopus** (plan gratuit : jusqu'à 2 500 abonnés et 10 000 emails/mois). Ce plafond mensuel couvre largement la volumétrie retenue même en cas de plusieurs publications rapprochées, contrairement à une solution plafonnée par jour (ex. Brevo, 300 emails/jour) qui obligerait à étaler l'envoi sur deux jours dès que la liste dépasse 300 abonnés actifs.

1. Formulaire "S'abonner" (email) → ajout automatique de l'abonné dans EmailOctopus via son API.
2. Publication dans Sanity → déclenchement d'un **webhook** vers une fonction serverless Vercel.
3. Cette fonction appelle l'API EmailOctopus pour envoyer une campagne (titre, résumé, lien) à la liste d'abonnés.

*Cette chaîne reste intégralement gratuite tant que la liste reste sous 2 500 abonnés. Si l'ASECAM dépasse largement ce seuil par la suite, une réévaluation (ex. vers Brevo ou un plan payant) sera nécessaire — non pertinent pour le lancement.*

### 8.6 Icônes de contact
- Utilisation d'icônes officielles reconnaissables (téléphone, WhatsApp, Facebook, email) via une bibliothèque d'icônes vectorielles libres, pour un rendu professionnel et immédiatement identifiable.

## 9. Direction artistique (UI/UX)

### 9.1 Palette de couleurs (issue du logo ASECAM)
- **Vert** (dominante de l'anneau du logo et du drapeau malgache/camerounais) — couleur principale de marque.
- **Rouge** — couleur d'accent (drapeaux Cameroun/Madagascar présents dans le logo).
- **Jaune/Or** — couleur d'accent secondaire (étoile, bande du drapeau camerounais).
- **Noir** — texte et silhouette (élément graphique du diplômé dans le logo).
- **Blanc** — fond principal, respiration visuelle.

### 9.2 Principes de design
- Design **moderne, épuré, chaleureux**, évitant tout aspect "template générique".
- Typographie soignée : une police d'accroche différenciante pour les titres, une police lisible et sobre pour le corps de texte.
- Micro-animations discrètes à l'arrivée sur les sections (fade-in, léger décalage), sans surcharge ni ralentissement perceptible.
- Le logo reste visible en permanence (version réduite dans le header) pendant toute la navigation.
- Hiérarchie visuelle claire, forte lisibilité, respiration généreuse entre les sections.
- Aucune trace de placeholder générique ("Lorem ipsum", images de stock non liées au contexte) dans le rendu final.

## 10. Modèle de contenu (types gérés dans le CMS)

| Type de contenu | Champs principaux | Actions bureau |
|---|---|---|
| Histoire / Présentation | Titre, texte (FR/EN/MG), photo | Modifier |
| Service | Titre, description, icône (FR/EN/MG) | Créer / Modifier / Supprimer |
| Membre / Business | Nom, activité, description, contact, affiche (FR/EN/MG) | Créer / Modifier / Supprimer |
| Information | Titre, date, corps de texte, statut (FR/EN/MG) | Créer / Modifier / Supprimer |
| Annonce | Titre, date, corps de texte (FR/EN/MG) | Créer / Modifier / Supprimer |
| Photo illustrative | Image, légende, emplacement | Modifier / Remplacer |
| Abonné newsletter | Email | Lecture (export possible) |

## 11. Plan de mise en œuvre (phases proposées)

| Phase | Contenu | Objectif |
|---|---|---|
| **1. Cadrage** | Validation de ce PRD, choix final du CMS, réception des textes définitifs (Histoire, Services, etc.) et de la charte exacte | Aligner avant développement |
| **2. Design** | Maquette des pages clés (Accueil, Contact, Annuaire) pour validation visuelle | Valider la direction artistique avant code |
| **3. Développement** | Intégration Next.js + CMS + i18n + formulaire + newsletter | Construire le site |
| **4. Contenu & tests** | Saisie des contenus réels dans le CMS, tests multi-appareils, tests des liens de contact | Fiabiliser avant lancement |
| **5. Déploiement** | Mise en ligne sur Vercel, formation du bureau au CMS | Lancement officiel |
| **6. Suivi** | Ajustements post-lancement, suivi des abonnés newsletter | Amélioration continue |

## 12. Décisions validées

1. **CMS retenu : Sanity.io** (plan gratuit, 3 éditeurs : Gaïus, président, secrétaire) — voir §8.3.
2. **Structure du site : multi-pages avec URL propre par section**, retenue pour optimiser le SEO et permettre le partage de liens individuels (ex. vers une annonce précise). L'option one-page à ancres est abandonnée.
3. **Volumétrie newsletter estimée : 200 à 500 abonnés** au démarrage — solution technique ajustée en conséquence (voir §8.5).
4. **Nom de domaine : `asecam.vercel.app`** (sous-domaine Vercel gratuit), pour rester à coût nul. Un nom de domaine personnalisé pourra être envisagé plus tard.

## 13. Point encore ouvert

- **Contenu réel définitif** : texte complet de l'Histoire de l'ASECAM, liste initiale des membres/business de l'Annuaire, premières Informations/Annonces à publier au lancement. En attendant, le développement démarre avec un contenu provisoire cohérent (voir §14), à remplacer ensuite dans le code par le contenu réel.

## 14. Contenu provisoire pour le développement (à remplacer ensuite)

En l'absence du contenu réel définitif, le développement démarre avec un texte de substitution cohérent et sobre (pas de placeholder générique type « Lorem ipsum »), afin de permettre une validation visuelle réaliste de la maquette. Ce texte sera ensuite remplacé par un simple copier-coller dans le code source une fois le contenu réel disponible.

Hypothèses à utiliser pour ce contenu fictif :
- L'ASECAM est présentée comme basée à **Antananarivo**.
- L'association existe depuis environ **5 ans**.
- Elle compte actuellement environ **200 membres actifs**.
- L'Histoire, les premiers exemples de l'Annuaire (membres/business) et les premières Informations/Annonces seront rédigés sur cette base par le développeur/l'IA en charge de l'implémentation, dans un style crédible et propre à une association étudiante.

## 15. Critères d'acceptation (Definition of Done)

- [ ] Toutes les sections listées en §6 sont fonctionnelles en FR, EN et MG.
- [ ] Les 4 modes de contact sont cliquables et ouvrent l'action attendue sur mobile et desktop.
- [ ] Le formulaire de contact envoie correctement les messages à `asecamtana@gmail.com`.
- [ ] L'inscription à la newsletter fonctionne et déclenche un email automatique lors d'une nouvelle publication (si retenue).
- [ ] Le bureau peut créer/modifier/supprimer un contenu de chaque type via le CMS sans aide technique.
- [ ] Le site est visuellement fidèle à la charte du logo, sans aucune trace de génération IA.
- [ ] Le site est déployé et accessible en ligne via Vercel.
- [ ] Score Lighthouse ≥ 90 sur Performance, Accessibilité, SEO.

---

*Document rédigé pour servir de base de validation avec le bureau exécutif de l'ASECAM avant le lancement du développement.*
