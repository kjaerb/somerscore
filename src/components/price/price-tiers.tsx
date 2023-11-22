import { type PriceTier as PriceTierType } from "@/config/price-tiers";
import { PriceTier } from "./price-tier";

interface PriceTiersProps {
  tiers: PriceTierType[];
}

export function PriceTiers({ tiers }: PriceTiersProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {tiers.map((tier) => (
        <PriceTier key={tier.id} tier={tier} className="mx-auto" />
      ))}
    </div>
  );
}
