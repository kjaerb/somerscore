import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  sheetVariants,
} from "@/components/ui/sheet";
import { DialogTriggerProps } from "@radix-ui/react-dialog";
import { VariantProps } from "class-variance-authority";
import { MenuIcon } from "lucide-react";

interface MobileSidebarProps
  extends DialogTriggerProps,
    VariantProps<typeof sheetVariants> {}

export function MobileSidebar({ side = "left", ...props }: MobileSidebarProps) {
  return (
    <Sheet>
      <SheetTrigger {...props} className="block sm:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <SheetDescription className="space-y-4"></SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
