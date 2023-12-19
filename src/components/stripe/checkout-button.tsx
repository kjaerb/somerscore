"use client";

import { ButtonHTMLAttributes, HTMLAttributes, useState } from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { LoadingSpinner } from "../ui/loading";
import useSubscriptionStore from "@/stores/subscription-store";
import { ManageAccountButton } from "./mange-account-button";
import { useCreateCheckoutSession } from "@/hooks/use-stripe";

interface CheckoutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  stripeId: string;
}

export function CheckoutButton({ stripeId, ...props }: CheckoutButtonProps) {
  const { subscription } = useSubscriptionStore();
  const { createStripeCheckoutSession, isLoading } =
    useCreateCheckoutSession(stripeId);

  return subscription ? (
    <ManageAccountButton {...props} />
  ) : (
    <Button
      {...props}
      onClick={createStripeCheckoutSession}
      disabled={isLoading}
    >
      {subscription ? (
        <>Manage subscription</>
      ) : isLoading ? (
        <LoadingSpinner />
      ) : (
        <>Get started</>
      )}
    </Button>
  );
}
