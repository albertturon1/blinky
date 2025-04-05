"use server";

import { redirect } from "next/navigation";
import type { SignupFormState } from "@/app/signup/signup-form";
import {
  signupBetterAuthErrorSchema,
  type SignupSchema,
  signupSchema,
} from "@/app/signup/schema";
import { auth } from "@/lib/auth";
import { ZodError } from "zod";
import { AUTH_CLIENT_ERROR_CODES } from "@/lib/auth-client";

export async function signup(
  _prevState: SignupFormState,
  formData: FormData,
): Promise<SignupFormState> {
  const rawData: SignupSchema = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    username: formData.get("username") as string,
  };

  try {
    const validatedFields = signupSchema.safeParse(rawData);

    if (!validatedFields.success) {
      return {
        values: rawData,
        formErrors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const userResponse = await auth.api.signUpEmail({
      body: {
        email: validatedFields.data.email,
        password: validatedFields.data.password,
        name: validatedFields.data.username,
      },
      asResponse: true,
    });

    const userResponseData = await userResponse.json();

    if (!userResponse.ok) {
      const userResponseDataError =
        signupBetterAuthErrorSchema.parse(userResponseData);

      switch (userResponseDataError.code) {
        case AUTH_CLIENT_ERROR_CODES.USER_ALREADY_EXISTS:
          return {
            values: validatedFields.data,
            errorMessage:
              "User already exists. Please use a different credentials.",
          };
        default:
          return {
            values: validatedFields.data,
            errorMessage: "Failed to create an account. Please try again.",
          };
      }
    }
  } catch (error) {
    if (error instanceof ZodError) {
      // usually here should be some reporting about changes zod schema or better-auth codes
      return {
        values: rawData,
        errorMessage: "Failed to create an account. Try again.",
      };
    }

    return {
      values: rawData,
      errorMessage: "Failed to create an account. Try again.",
    };
  }

  redirect("/admin");
}
