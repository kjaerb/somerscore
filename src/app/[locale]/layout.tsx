import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";
import { Metadata, Viewport } from "next";
import AuthProvider from "@/components/providers/auth-provider";
import FirebaseAuthProvider from "@/components/providers/firebase-auth-provider";
import { locales } from "@/lib/i18n";
import { LocaleProvider } from "@/components/providers/locale-provider";

export const metadata: Metadata = {
  title: "Somerscore",
  description: "A livescoring app for gymnasts by gymnasts",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <AuthProvider>
      <html lang={locale} suppressHydrationWarning>
        <head />
        <body>
          <FirebaseAuthProvider>
            <LocaleProvider locale={locale}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
                <Toaster richColors />
              </ThemeProvider>
            </LocaleProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
