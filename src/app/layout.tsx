import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";
import { Metadata, Viewport } from "next";
import AuthProvider from "@/components/providers/auth-provider";
import FirebaseAuthProvider from "@/components/providers/firebase-auth-provider";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import { SubscriptionProvider } from "@/components/providers/subscription-provider";

export const metadata: Metadata = {
  title: "Somerscore",
  description: "A livescoring app for gymnasts by gymnasts",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <AuthProvider>
      <html>
        <head />
        <body className={cn("dark:dark", roboto.className)}>
          <FirebaseAuthProvider>
            <SubscriptionProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
                <Toaster richColors />
              </ThemeProvider>
            </SubscriptionProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
