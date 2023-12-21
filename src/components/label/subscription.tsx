"use client";

import { Label } from "../ui/label";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "@/components/ui/loading";
import { useSubscription } from "@/hooks/use-subscription";

interface SubscriptionLabelProps extends HTMLAttributes<HTMLLabelElement> {}

export function SubscriptionLabel({
  className,
  ...props
}: SubscriptionLabelProps) {
  const { isLoading, subscription } = useSubscription();

  if (!subscription)
    <Label {...props} className={cn("uppercase font-bold", className)}>
      Free
    </Label>;

  return (
    <Label {...props} className={cn("uppercase font-bold", className)}>
      {isLoading ? <LoadingSpinner className="h-5 w-5" /> : subscription?.role}
    </Label>
  );
}
