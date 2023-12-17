"use client";

import { Logo } from "@/components/ui/logo";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SelectTheme } from "@/components/selects/select-theme";
import { getDashboardLinks } from "@/lib/constants/navigation";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const pathname = usePathname();
  const links = useMemo(() => {
    return getDashboardLinks();
  }, [pathname]);
  return (
    <aside className="w-[300px] flex flex-col shadow-lg border-r p-4 dark:border-white">
      <Logo className="py-2" />
      <hr className="my-4 dark:border-white shadow-md" />
      <nav className="flex flex-col justify-between h-full">
        <div>
          <p className="px-4 py-2 text-gray-500 dark:text-gray-300">Overview</p>
          <div className="">
            <ul className="space-y-2">
              {links.map((link) => (
                <li
                  key={link.href}
                  className={cn(
                    "py-2 px-4 rounded-full transition-colors duration-200",
                    link.active &&
                      "bg-blue-500 text-white dark:bg-blue-500 shadow-md hover:bg-blue-500"
                  )}
                >
                  <Link
                    href={link.href}
                    className="hover:underline underline-offset-4 flex gap-2 justify-between items-center"
                  >
                    <span>{link.label}</span>
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="px-4 py-2 text-gray-500 dark:text-gray-300">Settings</p>
          <div></div>
          <div className="px-4">
            <SelectTheme />
          </div>
        </div>
      </nav>
    </aside>
  );
}
