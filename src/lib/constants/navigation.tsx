import { ActiveLinkType } from "@/components/navigation/active-link";
import {
  CalendarDays,
  HelpCircle,
  LayoutIcon,
  LogOutIcon,
  Settings,
  Users2,
} from "lucide-react";
import { signOut } from "next-auth/react";

export const headerLinks: ActiveLinkType[] = [
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

export const dashboardAccountLinks: ActiveLinkType[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutIcon />,
  },
  {
    label: "Athletes",
    href: "/dashboard/athletes",
    icon: <Users2 />,
  },
  {
    label: "Calendar",
    href: "/dashboard/calendar",
    icon: <CalendarDays />,
  },
  {
    label: "Club",
    href: "/dashboard/club",
    icon: <HelpCircle />,
  },
] as const;

export const dashboardSettingsLinks: ActiveLinkType[] = [
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: <Settings />,
  },
  {
    label: "Sign out",
    href: "/",
    icon: <LogOutIcon />,
    onClick: signOut,
  },
] as const;
