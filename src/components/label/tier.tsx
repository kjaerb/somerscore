"use client";

import useSubscriptionStore from "@/stores/subscription-store";
import { Label } from "../ui/label";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TierProps extends HTMLAttributes<HTMLLabelElement> {}

export function Tier({ className, ...props }: TierProps) {
  const { subscription } = useSubscriptionStore();

  return (
    <Label {...props} className={cn("uppercase font-bold", className)}>
      {subscription?.role}
    </Label>
  );
}
