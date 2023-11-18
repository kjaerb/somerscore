"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Judge, judgeInputSchema } from "@/schema/competition-schema";
import { useCompetitionStore } from "@/stores/competition-store";

type AdminPreviewProps = {
  type: "AdminPreview";
};

type JudgeProps = {
  type: "Judge";
  judge: Judge;
  numSkills: number;
  skillsToScore: number;
};

type JudgeInputProps = {
  numSkills: number;
  skillsToScore: number;
  landing?: boolean;
  judge: Judge;
};

export function JudgeInput({
  numSkills,
  landing = true,
  skillsToScore,
}: JudgeInputProps) {
  // Two states to determine whether or not the inputs should be active
  const [isScoringComplete, setIsScoringComplete] = useState<boolean>(false);
  const { isFinished } = useCompetitionStore();

  const [canScore, setCanScore] = useState<boolean>(false);

  // Determines whether or not the judge can score an athlete
  useEffect(() => {
    if (isScoringComplete) {
      // If the judge has already scored the athlete, they can't score them again
      setCanScore(false);
      return;
    }
    if (isFinished) {
      setCanScore(true);
    } else {
      // If the athlete is finished, the judge can't score them
      setCanScore(false);
    }
  }, [isScoringComplete, isFinished]);

  const combinedNumSkills = landing ? numSkills + 1 : numSkills;
  const inputRef = useRef<HTMLInputElement>(null);

  function handleJudgeInput(event: string) {
    try {
      if (isNaN(parseInt(event))) return;

      const num = judgeInputSchema.parse(parseInt(event));
      console.log(num);
    } catch (ex) {
      if (ex instanceof z.ZodError) {
        toast.error(ex.issues[0].message);
      } else {
        toast.error("An unknown error occured");
      }
    }
  }

  return (
    <div className="w-full">
      <div
        className={cn(
          "grid grid-cols-2 justify-between sm:flex sm:flex-nowrap space-x-2",
          !canScore ? "pointer-events-none opacity-50" : ""
        )}
      >
        {Array?.from({ length: combinedNumSkills }, (_, index) => {
          const skillsOffset = index + 1;

          return (
            <div key={skillsOffset} className="flex flex-col items-center pb-2">
              <span>
                {landing
                  ? index === combinedNumSkills - 1
                    ? "L"
                    : `S${skillsOffset}`
                  : `S${skillsOffset}`}
              </span>
              <Input
                className="p-2 shadow-md border rounded-md dark:border-gray-300"
                type="number"
                // Disables the score input if the athlete hasn't done all skills
                disabled={!canScore || index > skillsToScore}
                ref={inputRef}
                onChange={(event) => handleJudgeInput(event.target.value)}
              />
            </div>
          );
        })}
      </div>
      <Button
        className="mt-4 w-full sm:w-fit"
        disabled={!isFinished}
        onClick={() => setIsScoringComplete(!isScoringComplete)}
      >
        {isScoringComplete ? "Edit scores" : "Mark as completed"}
      </Button>
    </div>
  );
}
