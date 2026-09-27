import { useTranslations } from "next-intl";

export default function DirectoryPage() {
  const t = useTranslations("directory");

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
        {t("title")}
      </h1>
      {/* // TODO contenu réel — les fiches membres/business seront chargées depuis Sanity */}
      <p className="text-ink-secondary text-center">
        Contenu provisoire — l'annuaire sera alimenté via le CMS.
      </p>
    </div>
  );
}
