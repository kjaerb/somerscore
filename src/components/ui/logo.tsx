import Link from "next/link";
import { HTMLAttributes } from "react";

interface LogoProps extends HTMLAttributes<HTMLHeadElement> {
  route?: string;
}

export function Logo({ route = "/", ...props }: LogoProps) {
  return (
    <h2 {...props}>
      <Link href={route}>Somerscore</Link>
    </h2>
  );
}
