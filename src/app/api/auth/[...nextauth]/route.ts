import { authOptions } from "@/lib/auth";
import NextAuth, { NextAuthOptions } from "next-auth";

const handler: NextAuthOptions = NextAuth(authOptions);

// @ts-ignore
export { handler as POST, handler as GET };
