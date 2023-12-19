import { HtmlHTMLAttributes } from "react";
import { ActiveLink, ActiveLinkType } from "./active-link";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const activeLinkVariant = cva("shadow-md border rounded-md", {
  variants: {
    variant: {
      default: "bg-gray-100 dark:bg-slate-800 dark:border-gray-600",
    },
    size: {
      default: "p-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ActiveLinksProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof activeLinkVariant> {
  title: string;
  links: ActiveLinkType[];
}

export function ActiveLinks({
  title,
  links,
  variant,
  size,
  className,
  ...props
}: ActiveLinksProps) {
  return (
    <nav
      {...props}
      className={cn(activeLinkVariant({ variant, size }), className)}
    >
      <p className="px-4 py-2 text-gray-500 dark:text-gray-300 uppercase text-sm">
        {title}
      </p>
      <div className="">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <ActiveLink {...link} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
