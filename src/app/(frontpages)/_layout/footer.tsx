import { Logo } from "@/components/ui/logo";
import { ToggleTheme } from "@/components/ui/toggle-mode";

export function PublicFooter() {
  return (
    <footer className="flex justify-between p-4 w-full items-center max-w-5xl mx-auto border-t">
      <div className="flex space-x-2 items-center">
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()}
        </p>
        <Logo />
      </div>
      <ToggleTheme />
    </footer>
  );
}
