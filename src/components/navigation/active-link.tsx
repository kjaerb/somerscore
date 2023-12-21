"use client";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const activeLinkVariant = cva(
  "rounded-full transition-colors duration-200 hover:underline underline-offset-4",
  {
    variants: {
      size: {
        default: "py-2 px-4",
      },
      active: {
        default:
          "bg-blue-500 text-white dark:bg-blue-500 shadow-md hover:bg-blue-500",
        underline: "underline underline-offset-4 underline-blue-500",
      },
      textColor: {
        default: "",
      },
    },
    defaultVariants: {
      size: "default",
      textColor: "default",
    },
  }
);

export type ActiveLinkType = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

interface ActiveLinkProps
  extends VariantProps<typeof activeLinkVariant>,
    ActiveLinkType {}

export function ActiveLink({
  href,
  label,
  icon,
  size,
  active,
  textColor,
}: ActiveLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        activeLinkVariant({ size, textColor }),
        icon && "flex justify-between items-center",
        pathname === href && activeLinkVariant({ active })
      )}
    >
      <span>{label}</span>
      {icon}
    </Link>
  );
}
