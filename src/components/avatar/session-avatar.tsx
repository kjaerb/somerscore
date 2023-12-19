import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initialsAvatar } from "@/lib/dicebear";
import { AvatarSkeleton } from "@/components/skeletons/avatar-skeleton";

export async function SessionAvatar() {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  const {
    user: { name, image },
  } = session;

  return (
    <Avatar className="">
      <AvatarImage
        src={image ? image : initialsAvatar(name || "?")}
        alt="athlete-image"
        className="object-cover h-full w-full"
      />
      <AvatarFallback>
        <AvatarSkeleton />
      </AvatarFallback>
    </Avatar>
  );
}
