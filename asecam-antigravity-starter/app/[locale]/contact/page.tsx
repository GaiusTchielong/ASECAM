import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
        {t("title")}
      </h1>
      {/* // TODO contenu réel — formulaire de contact + coordonnées cliquables */}
      <p className="text-ink-secondary text-center">
        Contenu provisoire — le formulaire de contact et les coordonnées seront ajoutés prochainement.
      </p>
    </div>
  );
}
