import { auth } from "@/lib/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { SignIn, SignUp } from "@/schema/auth-schema";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  AuthProvider,
  AuthErrorCodes,
  getRedirectResult,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export function useSignOut() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  async function signOutCallback() {
    try {
      setIsLoading(true);
      await auth.signOut();
      router.push("/");
    } catch (err) {
      if (err instanceof FirebaseError) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {
    signOutCallback,
    isLoading,
  };
}

export function useSignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  async function signInCallback({ email, password }: SignIn) {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      if (err instanceof FirebaseError) {
        if (err.code === AuthErrorCodes.INVALID_PASSWORD) {
          toast.error("Invalid email or password");
        } else {
          toast.error(err.message);
        }
        return;
      }
      toast.error("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    signInCallback,
    isLoading,
  } as const;
}

export function useSignUp() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  async function signUpCallback({ email, password }: SignUp) {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      console.log(AuthErrorCodes);
      if (err instanceof FirebaseError) {
        if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
          toast.error("Email already exists");
        } else {
          toast.error(err.message);
        }
        return;
      }
      toast.error("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    signUpCallback,
    isLoading,
  } as const;
}

export function useSignInWithOAuth() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sign = useSignInWithGoogle(auth);

  async function signInWithOAuthCallback(provider: AuthProvider) {
    try {
      setIsLoading(true);
      await signInWithRedirect(auth, provider); // TODO redirect to "/"
    } catch (err) {
      if (err instanceof FirebaseError) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {
    signInWithOAuthCallback,
    isLoading,
  } as const;
}
