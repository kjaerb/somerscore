import { Logo } from "@/components/ui/logo";
import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";

export function PublicHeader() {
  return (
    <header className="mx-auto w-full max-w-5xl border-b">
      <nav className="px-4 lg:px-0 py-4 flex justify-between items-center">
        <Logo />
        <div>
          <MobileNav className="block sm:hidden" />
          <DesktopNav className="hidden sm:flex" />
        </div>
      </nav>
    </header>
  );
}
