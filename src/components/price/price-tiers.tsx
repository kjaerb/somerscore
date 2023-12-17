import { type PriceTier as PriceTierType } from "@/lib/constants/price-tiers";
import { PriceTier } from "./price-tier";

interface PriceTiersProps {
  tiers: PriceTierType[];
}

export function PriceTiers({ tiers }: PriceTiersProps) {
  return (
    <div className="flex flex-wrap max-w-5xl mx-auto gap-4 mt-4">
      {tiers.map((tier) => (
        <PriceTier key={tier.id} tier={tier} className="mx-auto" />
      ))}
    </div>
  );
}
