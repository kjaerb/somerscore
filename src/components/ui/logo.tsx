import Link from "next/link";
import { HTMLAttributes } from "react";
import LogoImage from "public/logo.svg";
import Image from "next/image";

interface LogoProps extends HTMLAttributes<HTMLHeadElement> {
  route?: string;
}

export function Logo({ route = "/", ...props }: LogoProps) {
  return (
    <Link href={route}>
      <div className="flex items-center gap-2">
        {/* <Image src={LogoImage} alt="somerscore logo" height={48} /> */}
        <h2 {...props}>Somerscore</h2>
      </div>
    </Link>
  );
}
