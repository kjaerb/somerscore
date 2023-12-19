import { authOptions } from "@/lib/auth";
import { adminDb } from "@/lib/firebase-admin";
import { stripe } from "@/lib/stripe";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const host = request.headers.get("host");

    if (!session?.user.id) {
      throw new Error("Not signed in");
    }

    const returnUrl =
      process.env.NODE_ENV === "development"
        ? `http://${host}/plans`
        : `https://${host}/plans`;

    const doc = await adminDb
      .collection("customers")
      .doc(session.user.id)
      .get();

    if (!doc.data()) {
      throw new Error("No customer found");
    }

    const stripeId = doc.data()?.stripeId;

    if (!stripeId) {
      throw new Error("No stripeId found");
    }

    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: stripeId,
      return_url: returnUrl,
    });

    return NextResponse.json(new URL(stripeSession.url));
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}
