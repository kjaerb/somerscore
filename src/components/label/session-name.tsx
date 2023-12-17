import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Label } from "@/components/ui/label";

export async function SessionName() {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  return <Label className="text-base font-normal">{session.user.name}</Label>;
}
