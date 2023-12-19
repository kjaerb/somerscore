export type PriceTier = {
  name: string;
  id: string;
  stripeId: string;
  price: string;
  priceSuffix: string;
  description: string;
  features: string[];
  missingFeatures: string[];
  href: string;
};

export const priceTiers: PriceTier[] = [
  {
    name: "Starter",
    id: "free",
    stripeId: "price_1OOz7WLWKlezRXd5Zr8HF91X",
    description:
      "For testing and small competitions. To ensure the app works as intended",
    href: "#",
    price: "Free",
    priceSuffix: "",
    features: ["Up to 5 athletes per competition", "2 age groups"],
    missingFeatures: ["Unlimited competitions", "Unlimited athletes"],
  },
  {
    name: "Clubs",
    id: "clubs",
    stripeId: "price_1OFNYsLWKlezRXd5KLM77XaO",
    description: "For small clubs getting started with competitions",
    href: "#",
    price: "$1.00",
    priceSuffix: "/athlete per competition",
    features: [
      "Unlimited competitions",
      "Unlimited athletes",
      "1 club",
      "Pay as you go",
    ],
    missingFeatures: [],
  },
  {
    name: "Federations",
    id: "federations",
    stripeId: "price_1OP08JLWKlezRXd5X7SEgCB7",
    description:
      "For federations with that wants to allow multiple clubs to have competitions",
    href: "#",
    price: "Contact us",
    priceSuffix: "",
    features: ["Same as Clubs tier", "Up to 20 clubs", "Fixed billing"],
    missingFeatures: [],
  },
] as const;
