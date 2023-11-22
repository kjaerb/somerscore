import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { Toaster } from "sonner";
import { Metadata, Viewport } from "next";
import AuthProvider from "../components/providers/auth-provider";
import FirebaseAuthProvider from "@/components/providers/firebase-auth-provider";

export const metadata: Metadata = {
  title: "Springer",
  description: "A livescoring app for gymnasts by gymnasts",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
