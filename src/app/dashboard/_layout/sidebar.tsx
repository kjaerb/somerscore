"use client";

import { Logo } from "@/components/ui/logo";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { SelectTheme } from "@/components/selects/select-theme";
import {
  dashboardAccountLinks,
  dashboardSettingsLinks,
} from "@/lib/constants/navigation";
import { ActiveLinks } from "@/components/navigation/active-links";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const pathname = usePathname();
  const [accountLinks, settingsLinks] = useMemo(() => {
    return [dashboardAccountLinks, dashboardSettingsLinks];
  }, [pathname]);

  return (
    <aside className="w-[300px] flex-col shadow-lg border-r dark:border-gray-600 p-4 hidden sm:flex">
      <Logo className="py-2" />
      <div className="flex flex-col justify-between h-full mt-4">
        <ActiveLinks title={"Overview"} links={accountLinks} />
        <div className="space-y-2">
          <ActiveLinks title={"Settings"} links={settingsLinks} />
          <SelectTheme />
        </div>
      </div>
    </aside>
  );
}
