"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { useSignOut } from "@/hooks/useAuth";
import { VariantProps } from "class-variance-authority";

interface SignOutProps {
  btnVariant: VariantProps<typeof buttonVariants>["variant"];
}

export function SignOut({ btnVariant }: SignOutProps) {
  const { signOutCallback, isLoading } = useSignOut();

  async function handleSignOut() {
    await signOutCallback();
  }

  return (
    <Button variant={btnVariant} disabled={isLoading} onClick={handleSignOut}>
      Sign out
    </Button>
  );
}
