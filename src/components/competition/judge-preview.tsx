import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { JudgeInput } from "./judge-input";
import { Judge } from "@/schemas/competition-schema";
import { cn } from "@/lib/utils";

interface JudgePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  judgeId: Judge;
  numSkills: number;
  judgeScores: string[];
}

export function JudgePreview({
  judgeId,
  judgeScores,
  numSkills,
  ...props
}: JudgePreviewProps) {
  return (
    <Card variant={"default"} {...props} className={cn(props.className)}>
      <CardHeader className="p-4">{judgeId}</CardHeader>
      <CardContent className="flex flex-wrap space-x-2 px-4 pb-4">
        <JudgeInput
          numSkills={numSkills}
          landing={true}
          skillsToScore={numSkills}
          judge={judgeId}
        />
      </CardContent>
    </Card>
  );
}
