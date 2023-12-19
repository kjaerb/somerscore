import { TrustedBy } from "@/app/(frontpages)/_components/trusted-by";
import { PriceTiers } from "@/app/(frontpages)/_components/price-tiers";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { priceTiers } from "@/lib/constants/price-tiers";

export default function PricingPage() {
  return (
    <div className="py-4 mt-8 mx-auto max-w-5xl">
      <div className="flex flex-col items-center text-center space-y-2">
        <p className="font-bold">Pricing and Plans</p>
        <h1 className="text-3xl font-bold">Get the plan for your needs</h1>
        <p>
          We&apos;re sure we have a plan that matches exactly what you&apos;re
          looking for
        </p>
      </div>
      <PriceTiers tiers={priceTiers} className="mt-8" />
      <div className="mt-8">
        <Card>
          <CardHeader className="text-xl">Standard features</CardHeader>
          <CardContent>
            <CardDescription className="text-black dark:text-gray-100 text-base">
              We want to ensure everybody gets a lot gets the pleasure of using
              our features at every paid plan. Therefore, these features are
              standard for all plans:
            </CardDescription>
            <ul className="grid grid-cols-3 mt-2">
              <li>Unlimited projects</li>
              <li>Unlimited users</li>
              <li>Unlimited storage</li>
              <li>Unlimited bandwidth</li>
              <li>Unlimited support</li>
              <li>Unlimited happiness</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <TrustedBy />
    </div>
  );
}
