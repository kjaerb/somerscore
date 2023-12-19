import { type PriceTier } from "@/lib/constants/price-tiers";
import { CheckCircle2, XCircle } from "lucide-react";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CheckoutButton } from "@/components/stripe/checkout-button";

interface PriceTierProps extends HTMLAttributes<HTMLDivElement> {
  tier: PriceTier;
}

export function PriceTier({ tier, className, ...props }: PriceTierProps) {
  return (
    <Card
      {...props}
      className={cn(
        "p-4 rounded-lg shadow-md flex flex-col justify-between border max-w-screen w-full sm:w-[20rem]",
        className
      )}
    >
      <CardHeader className="font-bold self-start text-lg py-2 text-blue-500 dark:text-blue-400">
        {tier.name}
      </CardHeader>
      <CardContent>
        <div className="flex items-end space-x-2">
          <p className="text-3xl font-bold">{tier.price}</p>
          <p className="text-gray-700 text-sm dark:text-gray-300">
            {tier.priceSuffix}
          </p>
        </div>
        <CardDescription className="min-h-[3rem] text-black dark:text-gray-100 mt-2">
          {tier.description}
        </CardDescription>
        <hr className="my-4" />
        <ul className="space-y-2 text-sm">
          {tier.features.map((feature, i) => (
            <li className="flex items-center space-x-3" key={i}>
              <CheckCircle2
                height={18}
                width={18}
                className="text-green-500 "
              />
              <span>{feature}</span>
            </li>
          ))}
          {tier.missingFeatures?.map((feature, i) => (
            <li className="flex items-center space-x-3" key={i}>
              <XCircle height={18} width={18} className="text-red-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <CheckoutButton className="w-full" stripeId={tier.stripeId} />
      </CardFooter>
    </Card>
  );
}
