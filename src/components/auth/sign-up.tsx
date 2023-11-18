import { SignUpForm } from "@/components/forms/auth/sign-up-form";
import { HTMLAttributes } from "react";

interface SignUpProps extends HTMLAttributes<HTMLDivElement> {}

export function SignUp({ ...props }: SignUpProps) {
  return (
    <div {...props}>
      <SignUpForm />
    </div>
  );
}
