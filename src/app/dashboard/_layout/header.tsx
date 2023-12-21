import { SessionAvatar } from "@/components/avatar/session-avatar";
import { SessionName } from "@/components/label/session-name";
import { MobileSidebar } from "./mobile-sidebar";
import { SubscriptionLabel } from "@/components/label/subscription";
import { ThemeSelect } from "@/components/selects/theme-select";
import { ClubSelect } from "@/components/selects/club-select";

interface HeaderProps {}

export async function Header({}: HeaderProps) {
  return (
    <div className="py-4 border-b dark:border-gray-600 shadow-md px-2 flex justify-between items-center">
      <div>
        <MobileSidebar />
        <ClubSelect />
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden sm:block">
          <ThemeSelect />
        </div>
        <div className="flex items-center gap-2">
          <SessionAvatar />
          <div className="flex flex-col">
            <SessionName />
            <SubscriptionLabel className="font-normal text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
