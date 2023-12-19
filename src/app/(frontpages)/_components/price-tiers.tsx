import { type PriceTier as PriceTierType } from "@/lib/constants/price-tiers";
import { PriceTier } from "./price-tier";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PriceTiersProps extends HTMLAttributes<HTMLDivElement> {
  tiers: PriceTierType[];
}

export function PriceTiers({ tiers, className, ...props }: PriceTiersProps) {
  return (
    <div
      {...props}
      className={cn("flex flex-wrap max-w-5xl mx-auto gap-4", className)}
    >
      {tiers.map((tier) => (
        <PriceTier key={tier.id} tier={tier} className="mx-auto" />
      ))}
    </div>
  );
}
