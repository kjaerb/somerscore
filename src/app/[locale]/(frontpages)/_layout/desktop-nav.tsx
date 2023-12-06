import { UserDropdown } from "@/components/dropdowns/user-dropdown";
import { headerLinks } from "@/config/link";
import { authOptions } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface DesktopNavProps extends HTMLAttributes<HTMLUListElement> {}

export async function DesktopNav({ ...props }: DesktopNavProps) {
  const session = await getServerSession(authOptions);

  return (
    <ul {...props} className={cn("flex items-center gap-4", props.className)}>
      {headerLinks.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="underline-offset-4 hover:underline">
            {link.label}
          </Link>
        </li>
      ))}
      <li className="flex items-center">
        {session ? (
          <UserDropdown />
        ) : (
          <Link className="underline-offset-4 hover:underline" href={"/auth"}>
            Sign in
          </Link>
        )}
      </li>
    </ul>
  );
}
