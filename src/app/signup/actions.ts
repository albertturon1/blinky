"use server";

import { redirect } from "next/navigation";

import type { SignupFormState } from "@/app/signup/signup-form";
import { type SignupSchema, signupSchema } from "./schema";

export async function signup(
  _prevState: SignupFormState,
  formData: FormData
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

    const userResponse = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify(validatedFields.data),
    });

    const userResponseData = await userResponse.json();

    if (
      userResponse.status === 409 &&
      userResponseData &&
      typeof userResponseData === "object" &&
      "error" in userResponseData &&
      typeof userResponseData.error === "string"
    ) {
      return {
        values: validatedFields.data,
        errorMessage: userResponseData.error,
      };
    }

    if (!userResponse.ok) {
      return {
        values: validatedFields.data,
        errorMessage: "Failed to create an account. Try again.",
      };
    }
  } catch (_error) {
    return {
      values: rawData,
      errorMessage: "Failed to create an account. Try again XXXX.",
    };
  }

  redirect("/admin");
}
