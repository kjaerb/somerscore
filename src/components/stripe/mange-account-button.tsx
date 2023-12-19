"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, useState } from "react";
import { toast } from "sonner";
import { LoadingSpinner } from "../ui/loading";

interface ManageAccountButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ManageAccountButton({ ...props }: ManageAccountButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function createStripeManageSession() {
    try {
      setIsLoading(true);
      const res = await fetch("api/stripe/manage").then((res) => res.json());
      router.push(res);
    } catch (ex) {
      toast.error("An error occured. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button {...props} onClick={createStripeManageSession} disabled={isLoading}>
      {isLoading ? <LoadingSpinner /> : <>Manage account</>}
    </Button>
  );
}
