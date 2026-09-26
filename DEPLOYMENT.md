# Mise en ligne ASECAM

## Variables Vercel

Créer ces variables dans **Project Settings → Environment Variables** pour les environnements Preview et Production :

| Variable | Usage | Obligatoire au lancement |
|---|---|---:|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Projet Sanity | Non, les données de démonstration sont utilisées sans cette variable |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset Sanity, généralement `production` | Non |
| `SANITY_API_TOKEN` | Lecture serveur Sanity si le dataset est privé | Selon la configuration Sanity |
| `SANITY_WEBHOOK_SECRET` | Vérification du webhook de publication | Oui si le webhook est activé |
| `FORMSPREE_FORM_ID` | Identifiant du formulaire Formspree | Oui pour recevoir le formulaire |
| `CONTACT_EMAIL_TO` | Adresse de réception, `asecamtana@gmail.com` | Oui |
| `EMAILOCTOPUS_API_KEY` | API newsletter | Oui pour les abonnements |
| `EMAILOCTOPUS_LIST_ID` | Liste EmailOctopus | Oui pour les abonnements |
| `NEXT_PUBLIC_SITE_URL` | URL canonique, `https://asecam.vercel.app` | Oui |
| `NEXT_PUBLIC_DEFAULT_LOCALE` | Langue par défaut, `fr` | Oui |

## Étapes restantes

1. Créer le projet Vercel et connecter le dépôt Git.
2. Renseigner les variables ci-dessus, puis lancer un déploiement Preview.
3. Créer le projet Sanity, le dataset `production`, les trois éditeurs et les documents correspondant aux schémas dans `lib/sanity/schemas`.
4. Configurer le webhook Sanity vers `https://asecam.vercel.app/api/webhooks/sanity` avec l’en-tête `x-sanity-webhook-secret`.
5. Créer le formulaire Formspree, configurer la destination `asecamtana@gmail.com`, puis renseigner son identifiant.
6. Créer la liste EmailOctopus, renseigner sa clé API et son identifiant, puis tester une inscription.
7. Tester sur mobile les liens téléphone, WhatsApp, Facebook et email, ainsi que les trois langues.
8. Remplacer les contenus provisoires marqués `TODO contenu réel` dans le code et publier les contenus définitifs dans Sanity.
9. Vérifier les scores Lighthouse sur `/fr`, `/fr/contact` et les pages éditoriales avant l’annonce publique.

Le projet est prêt pour `asecam.vercel.app`; aucune clé secrète n’est stockée dans le dépôt.
