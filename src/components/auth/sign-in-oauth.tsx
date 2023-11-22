"use client";

import { AuthProvider, GoogleAuthProvider } from "firebase/auth";
import { HTMLAttributes } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { SignInResponse, signIn } from "next-auth/react";

type OAuth = {
  provider: AuthProvider;
  icon: JSX.Element;
  callback: () => Promise<SignInResponse | undefined>;
  name: string;
  color: string;
};

const oauths: OAuth[] = [
  {
    provider: new GoogleAuthProvider(),
    icon: <Icons.Google className="h-full pr-4" />,
    callback: () => signIn("google"),
    name: "Google",
    color: "bg-black dark:bg-gray-500 dark:text-white",
  },
];

interface SignInOAuthProps extends HTMLAttributes<HTMLDivElement> {}

export function SignInOAuth({ ...props }: SignInOAuthProps) {
  return (
    <div {...props}>
      {oauths.map((oauth) => {
        return (
          <Button
            key={oauth.provider.providerId}
            onClick={oauth.callback}
            className={cn("w-full", oauth.color)}
          >
            {oauth.icon}
            {oauth.name}
          </Button>
        );
      })}
    </div>
  );
}
