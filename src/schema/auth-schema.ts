import z from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password needs to be minimum 8 characters" })
    .max(100, { message: "Password can maximum be 100 characters" }),
});

export type SignIn = z.infer<typeof signInSchema>;

export const signUpSchema = signInSchema
  .extend({
    confirmPassword: signInSchema.shape.password,
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type SignUp = z.infer<typeof signUpSchema>;
