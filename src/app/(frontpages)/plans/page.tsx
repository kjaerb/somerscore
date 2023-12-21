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
        {/* <Card className="p-8">
          <CardContent className="grid grid-cols-2">
            <CardDescription className="text-black dark:text-gray-100 text-base pr-12">
              <h3 className="font-medium text-3xl mb-2">Standard features</h3>
              We want to ensure everybody gets a lot gets the pleasure of using
              our features at every paid plan. Therefore, these features are
              standard for all plans:
            </CardDescription>
            <CardDescription>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>Video streaming</CardHeader>
                  <CardContent>
                    <CardDescription className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae laudantium, vero iure nulla tenetur omnis aperiam
                      corporis amet soluta
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>Video streaming</CardHeader>
                  <CardContent>
                    <CardDescription className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae laudantium, vero iure nulla tenetur omnis aperiam
                      corporis amet soluta
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </CardDescription>
          </CardContent>
        </Card> */}
      </div>
      <TrustedBy />
    </div>
  );
}
