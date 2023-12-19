"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { themes } from "@/lib/constants/theme";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function SelectTheme() {
  const { setTheme } = useTheme();

  function onSelectChange(newTheme: string) {
    setTheme(newTheme);
  }

  return (
    <Select onValueChange={onSelectChange}>
      <SelectTrigger className="max-w-fit gap-2 ">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </SelectTrigger>
      <SelectContent>
        {themes.map((theme) => (
          <SelectItem value={theme.toLocaleLowerCase()} key={theme}>
            {theme}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
