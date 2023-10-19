"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { toast } from "sonner";

import { z } from "zod";
import { Button } from "../ui/button";

type Judge = "Execution" | "Difficulity" | "HD" | "ToF";

type JudgeInputProps = {
  numSkills: number;
  skillsToScore: number;
  landing?: boolean;
  judgeType: Judge;
};

const judgeInputSchema = z
  .number()
  .min(0, { message: "Deduction cannot be lower than 0" })
  .max(5, { message: "Deduction cannot be higher than 5" });

export function JudgeInput({ numSkills, landing = true }: JudgeInputProps) {
  const [isScoringComplete, setIsScoringComplete] = useState<boolean>(false);

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
    <div>
      <div
        className={cn(
          "grid grid-cols-2 justify-between sm:flex sm:flex-nowrap space-x-2",
          isScoringComplete && "pointer-events-none opacity-50"
        )}
      >
        {Array?.from({ length: combinedNumSkills }, (_, index) => (
          <div key={index} className="flex flex-col items-center pb-2">
            <span>
              {landing
                ? index === combinedNumSkills - 1
                  ? "L"
                  : `S${index + 1}`
                : `S${index + 1}`}
            </span>
            <Input
              className="p-2 shadow-md border rounded-md dark:border-gray-300"
              type="number"
              ref={inputRef}
              onChange={(event) => handleJudgeInput(event.target.value)}
            />
          </div>
        ))}
      </div>
      <Button
        className="mt-4"
        onClick={() => setIsScoringComplete(!isScoringComplete)}
      >
        {isScoringComplete ? "Edit scores" : "Mark as completed"}
      </Button>
    </div>
  );
}
