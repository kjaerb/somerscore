import {
  CalendarDays,
  HelpCircle,
  Home,
  LayoutIcon,
  User2Icon,
} from "lucide-react";
import { usePathname } from "next/navigation";

export type LinkConfig = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const headerLinks: LinkConfig[] = [
  {
    label: "Competitions",
    href: "/competitions",
  },
  {
    label: "Plans",
    href: "/plans",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
] as const;

export const dashboardLinks: LinkConfig[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutIcon />,
  },
];

function createDashboardLink(
  pathname: string
): (label: string, href: string, icon: React.ReactNode) => SidebarLink {
  return (
    label: SidebarLink["label"],
    href: SidebarLink["href"],
    icon: SidebarLink["icon"]
  ) => ({
    label,
    active: pathname === href,
    href,
    icon,
  });
}

type SidebarLink = {
  label: string;
  active: boolean;
  href: string;
  icon: React.ReactNode;
};

export function getDashboardLinks(): SidebarLink[] {
  const pathname = usePathname();
  const cl = createDashboardLink(pathname);

  return [
    cl("Dashboard", "/dashboard", <LayoutIcon />),
    cl("Athletes", "/dashboard/athletes", <User2Icon />),
    cl("Calender", "/dashboard/calender", <CalendarDays />),
    cl("Club", "/dashboard/club", <HelpCircle />),
  ];
}
