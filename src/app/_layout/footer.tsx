import { ToggleTheme } from "@/components/ui/toggle-mode";

export function PublicFooter() {
  return (
    <footer className="flex justify-between py-4 w-full items-center max-w-5xl mx-auto border-t">
      <p className="text-sm text-center text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Springer
      </p>
      <ToggleTheme />
    </footer>
  );
}
