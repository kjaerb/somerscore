"use client";

import { subscriptionRef } from "@/lib/converters/subscription-converter";
import useSubscriptionStore from "@/stores/subscription-store";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

interface SubscriptionProviderProps {
  children: React.ReactNode;
}

export function SubscriptionProvider({ children }: SubscriptionProviderProps) {
  const { data: session } = useSession();
  const { setSubscription } = useSubscriptionStore();

  useEffect(() => {
    if (!session?.user.id) return;

    return onSnapshot(subscriptionRef(session.user.id), (snap) => {
      if (snap.empty) {
        setSubscription(null);
        return;
      }

      const subscription = snap.docs[0].data();
      setSubscription(subscription);
      // console.log("subscription", subscription);
    });
  }, [session, setSubscription]);

  return <>{children}</>;
}
