import { SelectItem } from "@/components/ui/select";
import { locales } from "@/lib/i18n";
import { useLocale, useTranslations } from "next-intl";
import { LocaleSwitcher } from "./locale-switcher";

interface SelectLocaleProps {}

export function SelectLocale({}: SelectLocaleProps) {
  const t = useTranslations("Locales");
  const currentLocale = useLocale();

  return (
    <LocaleSwitcher defaultValue={currentLocale}>
      {locales.map((cur) => (
        <SelectItem value={cur} key={cur}>
          {t(cur)}
        </SelectItem>
      ))}
    </LocaleSwitcher>
  );
}
