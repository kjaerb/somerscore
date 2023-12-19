import { getStripePayments } from "@invertase/firestore-stripe-payments";
import { app } from "./firebase";
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export const payments = getStripePayments(app, {
  productsCollection: "products",
  customersCollection: "customers",
});
