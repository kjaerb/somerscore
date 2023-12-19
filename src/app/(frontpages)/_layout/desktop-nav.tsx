import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Authentication } from "./authentication";
import Link from "next/link";
import { headerLinks } from "@/lib/constants/navigation";

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
            <Link
              href={link.href}
              className="underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Authentication />
    </div>
  );
}
