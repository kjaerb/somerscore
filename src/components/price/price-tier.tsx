import { type PriceTier } from "@/config/price-tiers";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface PriceTierProps extends HTMLAttributes<HTMLDivElement> {
  tier: PriceTier;
}

export function PriceTier({ tier, ...props }: PriceTierProps) {
  const t = useTranslations("Buttons.PriceTier");

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
          <p className="text-gray-700">{tier.priceSuffix}</p>
        </div>
        <p>{tier.description}</p>
        <ul className="space-y-2 text-sm">
          {tier.features.map((feature, i) => (
            <li className="flex items-center space-x-3" key={i}>
              <Check height={18} width={18} className="text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button>{t("get-started")}</Button>
    </div>
  );
}
