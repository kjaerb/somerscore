import { db } from "@/lib/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function useManageStripSession() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {}, [router]);

  async function createStripeManageSession() {
    try {
      setIsLoading(true);
      const res = await fetch("api/stripe/manage").then((res) => res.json());
      router.push(res);
    } catch (ex) {
      toast.error("An error occured. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    createStripeManageSession,
  };
}

export function useCreateCheckoutSession(stripeId: string) {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function createStripeCheckoutSession() {
    try {
      setIsLoading(true);
      if (!session?.user.id) return; // redirect to sign in

      const docRef = await addDoc(
        collection(db, "customers", session.user.id, "checkout_sessions"),
        {
          price: stripeId,
          success_url: `${window.location.origin}/dashboard`,
          cancel_url: window.location.origin,
        }
      );

      return onSnapshot(docRef, (snap) => {
        const data = snap.data();
        const url = data?.url;
        const error = data?.error;

        if (error) {
          console.error("Stripe checkout sesssion error", error);
          toast.error("An error occured. Please try again later.");
        }

        if (url) {
          window.location.assign(url);
        }
        setIsLoading(false);
      });
    } catch (ex) {
      console.error(ex);
      toast.error("An error occured. Please try again later.");
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    createStripeCheckoutSession,
  };
}
