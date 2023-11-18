import Image from "next/image";
import { JudgePreview } from "./judge-preview";
import { Select } from "@/components/ui/select";

export function Admin() {
  return (
    <div className="flex flex-col sm:flex-row p-4 space-x-0 sm:space-x-4">
      <div className="">
        <Image
          src={"https://www.gymnastics.sport/asset.php?id=bpic_37240"}
          alt={"athlete-image"}
          height={1920 / 2}
          width={1080 / 2}
          className="rounded-md shadow-md"
        />
        <div>
          <p className="text-2xl">Benjamin Kjær</p>
          <p className="text-xl text-gray-700">TRAMPOLINE</p>
        </div>
        <Select></Select>
      </div>
      <div className="space-y-4">
        <JudgePreview
          judgeId={"Execution"}
          judgeScores={["1", "2", "4"]}
          numSkills={10}
        />
        <JudgePreview
          judgeId="Execution"
          judgeScores={["1", "2", "4"]}
          numSkills={10}
        />
        <JudgePreview
          judgeId="Execution"
          judgeScores={["1", "2", "4"]}
          numSkills={10}
        />
      </div>
    </div>
  );
}
