import z from "zod";

export const judgeInputSchema = z
  .number()
  .min(0, { message: "Deduction cannot be lower than 0" })
  .max(5, { message: "Deduction cannot be higher than 5" });

export type JudgeInput = z.infer<typeof judgeInputSchema>;

export const judgeSchema = z.enum(["Execution", "Difficulity"]);

export type Judge = z.infer<typeof judgeSchema>;
