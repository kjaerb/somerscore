"use client";

import { Logo } from "@/components/ui/logo";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
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
    <aside className="w-[300px] flex-col shadow-lg border-r p-4 hidden sm:flex">
      <Logo className="py-2" />
      <div className="flex flex-col justify-between h-full mt-5">
        <ActiveLinks
          title={"Overview"}
          links={accountLinks}
          activeLink={{
            active: "default",
          }}
        />
        <ActiveLinks
          title={"Settings"}
          links={settingsLinks}
          activeLink={{
            active: "default",
          }}
        />
      </div>
    </aside>
  );
}
