import { z } from "zod";

export const signupSchema = z
  .object({
    username: z.string().min(3, "Username is required"),
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupSchema = z.infer<typeof signupSchema>;

export const signupBetterAuthErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
});
