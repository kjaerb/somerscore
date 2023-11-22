import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/auth/user-avatar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { SignOut } from "@/components/auth/sign-out";
import { LayoutIcon, LogOutIcon, UserIcon } from "lucide-react";

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
        <DropdownMenuItem className="gap-2">
          <UserIcon height={18} />
          <span>{session.user.name || session.user.email}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-2">
            <LayoutIcon height={18} />
            <Link
              className="hover:underline underline-offset-4"
              href={"/dashboard"}
            >
              Dashboard
            </Link>
          </DropdownMenuItem>
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
