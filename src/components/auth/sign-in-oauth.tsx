"use client";

import { AuthProvider, GoogleAuthProvider } from "firebase/auth";
import { HTMLAttributes } from "react";
import { Button } from "@/components/ui/button";
import { useSignInWithOAuth } from "@/hooks/useAuth";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type OAuth = {
  provider: AuthProvider;
  icon: JSX.Element;
  name: string;
  color: string;
};

const oauths: OAuth[] = [
  {
    provider: new GoogleAuthProvider(),
    icon: <Icons.Google className="h-full pr-4" />,
    name: "Google",
    color: "bg-black dark:bg-gray-500 dark:text-white",
  },
];

interface SignInOAuthProps extends HTMLAttributes<HTMLDivElement> {}

export function SignInOAuth({ ...props }: SignInOAuthProps) {
  const { isLoading, signInWithOAuthCallback } = useSignInWithOAuth();

  return (
    <div {...props}>
      {oauths.map((oauth) => {
        return (
          <Button
            key={oauth.provider.providerId}
            disabled={isLoading}
            onClick={() => signInWithOAuthCallback(oauth.provider)}
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
