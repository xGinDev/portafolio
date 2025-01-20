import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("Languajes");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("title")}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          Hola
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
