"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { signOut } from "next-auth/react";

interface SignOutProps {
  variant: VariantProps<typeof buttonVariants>["variant"];
}

export function SignOut({ variant }: SignOutProps) {
  return (
    <Button
      variant={variant}
      className="p-0 font-normal"
      onClick={() => signOut()}
    >
      Sign out
    </Button>
  );
}
