import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("services");

  const services = [
    { key: "arrival" as const },
    { key: "networking" as const },
    { key: "academic" as const },
    { key: "directory" as const },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
        {t("title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.key}
            className="bg-surface rounded-xl p-6 border border-gray-100"
          >
            <h3 className="text-xl font-heading font-semibold text-ink mb-3">
              {t(`${service.key}_title`)}
            </h3>
            <p className="text-ink-secondary leading-relaxed">
              {t(`${service.key}_desc`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
