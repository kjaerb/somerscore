import { ToggleTheme } from "@/components/theme/toggle-mode";
import { AthleteInfo } from "@/components/competition/athlete-info";
import { JudgeInput } from "@/components/competition/judge-input";
import { StatusBadge } from "@/components/competition/status-badge";
import { Logo } from "@/components/ui/logo";

export function Judge() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="p-4">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <AthleteInfo
            imgUrl={"https://www.gymnastics.sport/asset.php?id=bpic_37240"}
            name={"Benjamin Kjær"}
            sport={"TRAMPOLINE"}
          />
          <StatusBadge />
        </div>
        <div className="mt-4">
          <JudgeInput
            numSkills={10}
            skillsToScore={10}
            judge={"Execution"}
            landing={true}
          />
        </div>
      </div>
      <div className="border-t flex justify-between items-center p-4">
        <p>EXECUTION 1</p>
        <Logo />
        <ToggleTheme />
      </div>
    </div>
  );
}
