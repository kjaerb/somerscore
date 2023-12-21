import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Authentication } from "./authentication";
import Link from "next/link";
import { headerLinks } from "@/lib/constants/navigation";
import { ActiveLink } from "@/components/navigation/active-link";

interface DesktopNavProps extends HTMLAttributes<HTMLDivElement> {}

export async function DesktopNav({ ...props }: DesktopNavProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex justify-between w-full font-semibold",
        props.className
      )}
    >
      <ul className={cn("flex items-center gap-4")}>
        {headerLinks.map((link) => (
          <li key={link.href}>
            <ActiveLink
              label={link.label}
              href={link.href}
              active="underline"
            ></ActiveLink>
          </li>
        ))}
      </ul>
      <Authentication />
    </div>
  );
}
