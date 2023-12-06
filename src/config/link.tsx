// import { Paths } from "@/components/ui/text";
import { IndexIntoObjectType, KeyString } from "@/components/ui/text";
import { LayoutIcon } from "lucide-react";

// type HeaderNavKeys = Paths<IntlMessages>;

type LocaleKeys = KeyString<IndexIntoObjectType<Messages, "Locales">>;

export type LinkConfig = {
  key: LocaleKeys;
  href: string;
  icon?: React.ReactNode;
};

export const headerLinks: LinkConfig[] = [
  {
    key: "Navigation.Frontpage.competitions",
    href: "/competitions",
  },
  {
    key: "Navigation.Frontpage.plans",
    href: "/plans",
  },
] as const;

export const dashboardLinks: LinkConfig[] = [
  {
    key: "Navigation.Frontpage.competitions",
    href: "/dashboard",
    icon: <LayoutIcon />,
  },
];
