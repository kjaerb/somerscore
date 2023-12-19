import { UserDropdown } from "@/components/dropdowns/user-dropdown";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

interface AuthenticationProps {}

export async function Authentication({}: AuthenticationProps) {
  const session = await getServerSession(authOptions);

  return session ? (
    <UserDropdown />
  ) : (
    <Link href={"/login"}>
      <Button variant={"default"}>Sign in</Button>
    </Link>
  );
}
