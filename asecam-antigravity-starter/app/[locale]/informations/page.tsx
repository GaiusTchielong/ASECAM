import { useTranslations } from "next-intl";

export default function NewsPage() {
  const t = useTranslations("news");

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
        {t("title")}
      </h1>
      {/* // TODO contenu réel — les informations seront chargées depuis Sanity */}
      <p className="text-ink-secondary text-center">
        Contenu provisoire — les informations seront alimentées via le CMS.
      </p>
    </div>
  );
}
