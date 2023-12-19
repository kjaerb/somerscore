import { SessionAvatar } from "@/components/avatar/session-avatar";
import { SessionName } from "@/components/label/session-name";
import { MobileSidebar } from "./mobile-sidebar";

interface HeaderProps {}

export async function Header({}: HeaderProps) {
  return (
    <div className="py-4 border-b dark:border-gray-600 shadow-md px-2 flex justify-between items-center">
      <div>
        <MobileSidebar />
      </div>
      <div className="flex items-center gap-2">
        <SessionAvatar />
        <SessionName />
      </div>
    </div>
  );
}
