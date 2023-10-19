import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import { Toaster } from "sonner";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>{children}</main>
            <Toaster richColors />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
