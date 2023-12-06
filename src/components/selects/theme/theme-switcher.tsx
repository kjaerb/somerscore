"use client";

import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface ThemeSwitcherProps {
  children: React.ReactNode;
}

export function ThemeSwitcher({ children }: ThemeSwitcherProps) {
  const { setTheme, theme } = useTheme();

  function onSelectChange(newTheme: string) {
    setTheme(newTheme);
  }

  return (
    <Select defaultValue={theme} onValueChange={onSelectChange}>
      <SelectTrigger>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
}
