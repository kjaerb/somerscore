"use client";

import { SignOut } from "@/components/auth/sign-out";
import { UserAvatar } from "@/components/auth/user-avatar";
import { ToggleTheme } from "@/components/theme/toggle-mode";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoadingSpinner } from "@/components/ui/loading";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/lib/firebase";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

type HeaderLink = {
  label: string;
  href: string;
  btnVariant: VariantProps<typeof buttonVariants>["variant"];
};

const headerLinks: HeaderLink[] = [
  {
    label: "Competitions",
    href: "/competitions",
    btnVariant: "link",
  },
  {
    label: "Pricing",
    href: "/pricing",
    btnVariant: "link",
  },
];

export function PublicHeader() {
  const [user, isLoading] = useAuthState(auth);

  return (
    <header className="mx-auto w-full max-w-5xl border-b">
      <nav className="px-4 lg:px-0 py-4 flex justify-between items-center">
        <h2 className="text-bold uppercase">Springer</h2>
        <ul className="flex">
          {headerLinks.map((link) => (
            <li key={link.label}>
              <Button variant={"link"}>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            </li>
          ))}
          <li>
            <Button variant={"link"}>
              {isLoading ? (
                <LoadingSpinner />
              ) : user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <UserAvatar
                      imgUrl={user.photoURL || ""}
                      name={user.displayName || user.email || user.uid}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="text-sm m-2 text-center">
                    <p className="p-2">{user.displayName || user.email}</p>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <Button variant={"link"}>
                        <Link href={"/dashboard"}>Dashboard</Link>
                      </Button>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <SignOut btnVariant={"link"} />
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant={"link"}>
                  <Link href={"/auth"}>Sign in</Link>
                </Button>
              )}
            </Button>
          </li>
          <li className="pr-4">
            <Separator className="h-full" orientation="vertical" />
          </li>
          <li>
            <ToggleTheme />
          </li>
        </ul>
      </nav>
    </header>
  );
}
