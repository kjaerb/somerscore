"use client";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const activeLinkVariant = cva(
  "rounded-full transition-colors duration-200 hover:underline underline-offset-4",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "py-2 px-4",
      },
      active: {
        default:
          "bg-blue-500 text-white dark:bg-blue-500 shadow-md hover:bg-blue-500",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
  variant = "default",
  size = "default",
  active = "default",
}: ActiveLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        activeLinkVariant({ variant, size }),
        icon && "flex justify-between items-center",
        pathname === href && activeLinkVariant({ active })
      )}
    >
      <span>{label}</span>
      {icon}
    </Link>
  );
}
