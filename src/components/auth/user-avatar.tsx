import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initialsAvatar } from "@/lib/dicebear";
import { LoadingSpinner } from "@/components/ui/loading";
import React from "react";

interface UserAvatarProps {
  imgUrl?: string;
  name: string;
}

export const UserAvatar = React.forwardRef(
  ({ imgUrl, name }: UserAvatarProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Avatar className="dark:border dark:border-gray-500" ref={ref}>
        <AvatarImage
          src={imgUrl ? imgUrl : initialsAvatar(name)}
          alt="athlete-image"
          className="object-cover h-full w-full"
        />
        <AvatarFallback>
          <LoadingSpinner />
        </AvatarFallback>
      </Avatar>
    );
  }
);

UserAvatar.displayName = "UserAvatar";
