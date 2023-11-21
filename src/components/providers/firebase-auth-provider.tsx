"use client";

import { fbAuth } from "@/lib/firebase";
import { signInWithCustomToken } from "firebase/auth";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

async function synFirebaseAuth(session: Session) {
  if (session && session.firebaseToken) {
    try {
      await signInWithCustomToken(fbAuth, session.firebaseToken);
    } catch (error) {
      console.error("Error signing in with custom token", error);
    }
  } else {
    fbAuth.signOut();
  }
}

interface FirebaseAuthProviderProps {
  children: React.ReactNode;
}

export default function FirebaseAuthProvider({
  children,
}: FirebaseAuthProviderProps) {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    synFirebaseAuth(session);
  }, [session]);

  return <>{children}</>;
}
