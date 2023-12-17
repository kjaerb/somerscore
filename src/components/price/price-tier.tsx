import { type PriceTier } from "@/lib/constants/price-tiers";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PriceTierProps extends HTMLAttributes<HTMLDivElement> {
  tier: PriceTier;
}

export function PriceTier({ tier, ...props }: PriceTierProps) {
  return (
    <div
      {...props}
      className={cn(
        "p-4 space-y-4 rounded-md shadow-md flex flex-col justify-between border max-w-screen w-full sm:w-[20rem]",
        props.className
      )}
    >
      <div className="space-y-4">
        <h3 className="font-bold">{tier.name}</h3>
        <div className="flex items-end space-x-2">
          <p className="text-3xl font-bold">{tier.price}</p>
          <p className="text-gray-700 text-sm dark:text-gray-300">
            {tier.priceSuffix}
          </p>
        </div>
        <p className="min-h-[3rem]">{tier.description}</p>
        <hr />
        <ul className="space-y-2 text-sm">
          {tier.features.map((feature, i) => (
            <li className="flex items-center space-x-3" key={i}>
              <Check height={18} width={18} className="text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button>Get started</Button>
    </div>
  );
}
