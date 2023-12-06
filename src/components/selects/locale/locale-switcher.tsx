"use client";

import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/lib/i18n";
import { startTransition } from "react";

interface LocaleSwitcherProps {
  defaultValue: string;
  children: React.ReactNode;
}

export function LocaleSwitcher({
  children,
  defaultValue,
}: LocaleSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger>
        <Globe />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
}
