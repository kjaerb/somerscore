import { AthleteInfo } from "@/components/competition/athlete-info";
import { JudgeInput } from "@/components/competition/judge-input";
import { ToggleMode } from "@/components/theme/toggle-mode";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center flex-col sm:flex-row">
        <AthleteInfo
          imgUrl={"https://www.gymnastics.sport/asset.php?id=bpic_37240"}
          name={"Benjamin Kjær"}
          sport={"TRAMPOLINE"}
        />
        <Badge variant={"success"} className="h-fit mt-4 sm:mt-0">
          Enter scores
        </Badge>
      </div>
      <div className="mt-4">
        <JudgeInput
          numSkills={10}
          skillsToScore={10}
          judgeType={"Execution"}
          landing={true}
        />
      </div>
    </div>
  );
}
