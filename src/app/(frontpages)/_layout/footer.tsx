import { SelectTheme } from "@/components/selects/select-theme";
import { Logo } from "@/components/ui/logo";

export function PublicFooter() {
  return (
    <footer className="mx-auto w-full max-w-5xl border-t flex justify-between py-4 px-4 lg:px-0">
      <div className="flex space-x-2 items-center">
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()}
        </p>
        <Logo />
      </div>
      <div className="flex items-center space-x-4">
        <SelectTheme />
      </div>
    </footer>
  );
}
