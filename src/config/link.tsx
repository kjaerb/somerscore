import { LayoutIcon } from "lucide-react";

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
];

export const dashboardLinks: LinkConfig[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutIcon />,
  },
];
