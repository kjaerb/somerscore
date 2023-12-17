import { SessionAvatar } from "@/components/avatar/session-avatar";
import { SessionName } from "@/components/label/session-name";

interface HeaderProps {}

export async function Header({}: HeaderProps) {
  return (
    <div className="py-4 border-b shadow-md px-2 flex justify-between">
      <div></div>
      <div className="flex items-center gap-2">
        <SessionAvatar />
        <SessionName />
      </div>
    </div>
  );
}
