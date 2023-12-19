import { SignIn } from "@/components/auth/sign-in";
import { UserAvatar } from "@/components/avatar/user-avatar";
import { Logo } from "@/components/ui/logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authOptions } from "@/lib/auth";
import { headerLinks } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";
import { DialogTriggerProps } from "@radix-ui/react-dialog";
import { MenuIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

interface MobileNavProps extends DialogTriggerProps {}

export async function MobileNav({ className, ...props }: MobileNavProps) {
  const session = await getServerSession(authOptions);

  return (
    <Sheet>
      <SheetTrigger {...props} className={cn("block sm:hidden", className)}>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="space-y-4">
          <ul className="mt-4">
            {headerLinks.map((link) => (
              <li
                key={link.href}
                className="font-normal text-lg text-black text-right border-b py-4"
              >
                <Link
                  href={link.href}
                  className="underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </SheetDescription>
        <SheetDescription>
          {session ? (
            <ul className="flex flex-col items-end">
              <li className="flex gap-2 items-center py-4 border-b w-full justify-end">
                <p className="font-normal text-lg text-black">
                  {session.user.name}
                </p>
                <UserAvatar
                  name={session.user.name || ""}
                  imgUrl={session.user.image || ""}
                />
              </li>
              {/* {dashboardLinks.map((dashboardLink) => (
                <li
                  key={dashboardLink.href}
                  className={cn(
                    "flex items-center justify-end text-black py-4 text-lg border-b w-full",
                    dashboardLink.icon ? "gap-2" : ""
                  )}
                >
                  <Link href={dashboardLink.href}>{dashboardLink.label}</Link>
                  {dashboardLink.icon}
                </li>
              ))} */}
            </ul>
          ) : (
            <SignIn />
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
