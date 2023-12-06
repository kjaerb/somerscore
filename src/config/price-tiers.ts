export type PriceTier = {
  name: string;
  id: string;
  price: string;
  priceSuffix: string;
  description: string;
  features: string[];
  href: string;
};

export const priceTiers: PriceTier[] = [
  {
    name: "Free",
    id: "free",
    description: "For testing and small competitions",
    href: "#",
    price: "Free",
    priceSuffix: "",
    features: ["Up to 10 athletes per competition", "4 age groups"],
  },
  {
    name: "Clubs",
    id: "price_1OFNYsLWKlezRXd5KLM77XaO",
    description: "For small clubs getting started with competitions",
    href: "#",
    price: "$1.00",
    priceSuffix: "/athlete per competition",
    features: ["Unlimited competitions", "Unlimited athletes", "1 club"],
  },
  {
    name: "Federations",
    id: "federations",
    description:
      "For federations with that wants to allow multiple clubs to have competitions",
    href: "#",
    price: "$?",
    priceSuffix: "/month",
    features: [
      "Unlimited competitions",
      "Unlimited athletes",
      "Up to 20 clubs",
    ],
  },
] as const;
