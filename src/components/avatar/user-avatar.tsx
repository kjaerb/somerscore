import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initialsAvatar } from "@/lib/dicebear";
import { LoadingSpinner } from "@/components/ui/loading";
import React from "react";
import Image from "next/image";

interface UserAvatarProps {
  imgUrl?: string;
  name: string;
}

export const UserAvatar = React.forwardRef(
  ({ imgUrl, name }: UserAvatarProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Avatar ref={ref}>
        <AvatarImage
          src={imgUrl ? imgUrl : initialsAvatar(name)}
          alt="athlete-image"
          className="object-cover h-full w-full"
        />
        <AvatarFallback>
          <LoadingSpinner />
          <Image
            src={initialsAvatar(name)}
            alt="user avatar"
            width={16}
            height={16}
            className="object-cover h-full w-full"
          />
        </AvatarFallback>
      </Avatar>
    );
  }
);

UserAvatar.displayName = "UserAvatar";
