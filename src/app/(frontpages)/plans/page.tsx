import { PriceTiers } from "@/components/price/price-tiers";
import { priceTiers } from "@/lib/constants/price-tiers";

export default function PricingPage() {
  return (
    <div className="p-4 mt-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold">Get the plan for your needs</h1>
        <p>
          We&apos;re sure we have a plan that matches exactly what you&apos;re
          looking for
        </p>
      </div>
      <PriceTiers tiers={priceTiers} />
    </div>
  );
}
