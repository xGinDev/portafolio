import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

type Props = {
  params: { locale: string };
};

export default async function About({ params: { locale } }: Props) {
  setRequestLocale(locale); // Server-side logic

  return (
    <div className="w-full flex">
      <div className="animate-in flex flex-col gap-20 opacity-0 px-3">
        <AboutContent />
      </div>
    </div>
  );
}

// Client-side component that uses `useTranslations`
function AboutContent() {
  const t = useTranslations("AboutPage");

  return <h1>{t("title")}</h1>;
}
