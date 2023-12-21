import useSubscriptionStore from "@/stores/subscription-store";
import { Subscription } from "@invertase/firestore-stripe-payments";
import { useEffect, useState } from "react";

export function useSubscription() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [localSubscription, setSubscription] = useState<
    Subscription | null | undefined
  >(null);

  const { subscription } = useSubscriptionStore();

  useEffect(() => {
    if (!subscription) return;
    setSubscription(subscription);
    setIsLoading(false);
  }, [setIsLoading, subscription, setSubscription]);

  return {
    isLoading,
    subscription: localSubscription,
  };
}
