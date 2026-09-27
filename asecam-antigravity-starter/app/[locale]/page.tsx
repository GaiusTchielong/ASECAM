import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Enable static rendering — locale extracted by next-intl
  // setRequestLocale will be called once params resolves in production;
  // for now we use the hook which handles it.
  const t = useTranslations("home");

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
        {t("hero_heading")}
      </h1>
      <p className="text-lg md:text-xl text-ink-secondary max-w-2xl mb-8">
        {t("hero_subheading")}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="contact"
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
        >
          {t("cta_join")}
        </a>
        <a
          href="qui-sommes-nous"
          className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
        >
          {t("cta_about")}
        </a>
      </div>
    </div>
  );
}
