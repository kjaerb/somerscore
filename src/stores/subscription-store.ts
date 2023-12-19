import { Subscription } from "@invertase/firestore-stripe-payments";
import { create } from "zustand";

interface SubscriptionStore {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

const useSubscriptionStore = create<SubscriptionStore>((set) => ({
  subscription: undefined,
  setSubscription: (subscription) => set({ subscription }),
}));

export default useSubscriptionStore;
