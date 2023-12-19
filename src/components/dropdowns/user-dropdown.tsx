import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/avatar/user-avatar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { SignOut } from "@/components/auth/sign-out";
import { LayoutIcon, LogOutIcon, UserIcon } from "lucide-react";
import { Tier } from "@/components/label/tier";

interface UserDropdownProps {}

export async function UserDropdown({}: UserDropdownProps) {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          imgUrl={session.user.image || ""}
          name={session.user.name || session.user.email || "Avatar"}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-sm m-2">
        <DropdownMenuItem className="">
          <UserIcon height={18} />
          <span>{session.user.name || session.user.email}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="">
          <Tier className="mx-auto py-2" />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link
            className="hover:underline underline-offset-4"
            href={"/dashboard"}
          >
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <LayoutIcon height={18} />
              Dashboard
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <LogOutIcon height={18} />
          <SignOut variant={"link"} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
