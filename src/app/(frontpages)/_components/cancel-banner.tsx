"use client";

import { LoadingSpinner } from "@/components/ui/loading";
import { useManageStripSession } from "@/hooks/use-stripe";
import useSubscriptionStore from "@/stores/subscription-store";
import { Timestamp } from "firebase/firestore";

export function CancelBanner() {
  const { subscription } = useSubscriptionStore();
  const { isLoading, createStripeManageSession } = useManageStripSession();

  if (!subscription) return null;

  if (subscription.cancel_at !== null)
    return (
      <div className="px-4 py-2 bg-gray-700 shadow-md text-white text-center flex justify-center items-center gap-2">
        <span>
          Your plan will terminate on{" "}
          {(subscription.cancel_at as unknown as Timestamp)
            .toDate()
            .toDateString()}
          .
        </span>
        <div className="flex justify-center items-center">
          <span
            onClick={createStripeManageSession}
            className="hover:underline underline-offset-2 cursor-pointer"
          >
            Click here to active your plan again
          </span>
          {isLoading ? <LoadingSpinner className="h-4 w-4 fill-white" /> : null}
        </div>
      </div>
    );
}
