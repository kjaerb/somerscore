import { SignInForm } from "@/components/forms/auth/sign-in-form";
import { HTMLAttributes } from "react";

interface SignInProps extends HTMLAttributes<HTMLDivElement> {}

export function SignIn({ ...props }: SignInProps) {
  return (
    <div {...props}>
      <SignInForm />
    </div>
  );
}
