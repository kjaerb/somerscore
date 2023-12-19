import { Logo } from "@/components/ui/logo";
import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";

export function PublicHeader() {
  return (
    <header className="mx-auto w-full max-w-5xl z-50 text-white">
      <nav className="px-4 lg:px-0 py-4 flex items-center gap-4">
        <Logo />
        <div className="flex justify-end sm:justify-start w-full">
          <DesktopNav className="hidden sm:flex pl-4" />
          <MobileNav className="block sm:hidden" />
        </div>
      </nav>
    </header>
  );
}
