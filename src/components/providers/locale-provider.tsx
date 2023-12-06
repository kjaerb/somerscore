import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

interface LocaleProviderProps {
  children: React.ReactNode;
  locale: string;
}
export async function LocaleProvider({
  children,
  locale,
}: LocaleProviderProps) {
  let messages;
  try {
    messages = (await import(`@/../public/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
  );
}
