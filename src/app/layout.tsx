import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { Toaster } from "sonner";
import { Metadata } from "next";
import AuthProvider from "../components/providers/auth-provider";
import FirebaseAuthProvider from "@/components/providers/firebase-auth-provider";

export const metadata: Metadata = {
  title: "Springer",
  viewport: "width=device-width, initial-scale=1",
  description: "A livescoring app for gymnasts by gymnasts",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <FirebaseAuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster richColors />
            </ThemeProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
