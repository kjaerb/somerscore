import { SelectItem } from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { ThemeSwitcher } from "./theme-switcher";
import { themes } from "@/config/theme";
// import { Text } from "@/components/ui/text";

interface SelectThemeProps {}

export function SelectTheme({}: SelectThemeProps) {
  const t = useTranslations("Global");

  return (
    <ThemeSwitcher>
      {themes.map((theme) => (
        <SelectItem value={theme} key={theme}>
          <>
            {t("theme", { theme })}
            {/* <Text namespace="Navigation" key="" /> */}
          </>
        </SelectItem>
      ))}
    </ThemeSwitcher>
  );
}
