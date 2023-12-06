import { getRequestConfig } from "next-intl/server";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "da"] as const;

export type Locale = (typeof locales)[number];

// type LocaleSwitch =
//   keyof typeof import("@/../public/locales/en.json")["Locales"];

// export const localeMap: Record<Locale, LocaleSwitch> = {
//   en: "english",
//   da: "danish",
// } as const;

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`@/../public/locales/${locale}.json`)).default,
}));

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
