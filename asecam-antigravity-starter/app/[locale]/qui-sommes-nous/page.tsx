import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
        {t("title")}
      </h1>
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-semibold text-ink mb-4">
          {t("history_title")}
        </h2>
        {/* // TODO contenu réel — texte provisoire */}
        <p className="text-ink-secondary leading-relaxed">
          Contenu provisoire — section Histoire.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-heading font-semibold text-ink mb-4">
          {t("mission_title")}
        </h2>
        {/* // TODO contenu réel — texte provisoire */}
        <p className="text-ink-secondary leading-relaxed">
          Contenu provisoire — section Mission.
        </p>
      </section>
    </div>
  );
}
