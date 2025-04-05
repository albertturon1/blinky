"use client";

import { signup } from "@/app/signup/actions";
import type { SignupSchema } from "@/app/signup/schema";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { AlertCircle, CheckCircle } from "lucide-react";
import { useActionState } from "react";

export type SignupFormState = {
  values: SignupSchema;
  formErrors?: Partial<Record<keyof SignupSchema, string[]>>;
  errorMessage?: string;
};

const initialState: SignupFormState = {
  values: {
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  },
  formErrors: {},
  errorMessage: undefined,
};

export function SignupForm() {
  const [state, formAction, pending] = useActionState(signup, initialState);

  return (
    <div className="space-y-4">
      <Alert
        variant="destructive"
        className={state.errorMessage && !pending ? "" : "opacity-0"}
      >
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{state.errorMessage}</AlertDescription>
      </Alert>

      <form action={formAction} className="space-y-4" autoComplete="off">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            placeholder="username"
            defaultValue={state.values.username} // Use state.values
            className={state.formErrors?.username ? "border-destructive" : ""}
          />
          {state.formErrors?.username && (
            <p className="text-sm text-destructive">
              {state.formErrors.username[0]}
            </p>
          )}
          <p className="text-xs text-muted-foreground">
            {"This will be your unique LinkHub URL: "}
            <span className="font-bold">{`linkhub.com/${state.values.username}`}</span>
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            defaultValue={state.values.email}
            className={state.formErrors?.email ? "border-destructive" : ""}
          />
          {state.formErrors?.email && (
            <p className="text-sm text-destructive">
              {state.formErrors.email[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            defaultValue={state.values.password}
            className={state.formErrors?.password ? "border-destructive" : ""}
          />
          {state.formErrors?.password && (
            <p className="text-sm text-destructive">
              {state.formErrors.password[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            defaultValue={state.values.confirmPassword}
            className={
              state.formErrors?.confirmPassword ? "border-destructive" : ""
            }
          />
          {state.formErrors?.confirmPassword && (
            <p className="text-sm text-destructive">
              {state.formErrors.confirmPassword[0]}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full mt-5" size="lg">
          {pending ? "Creating..." : "Create Account"}
        </Button>
        <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
          <CheckCircle className="h-4 w-4 text-primary" />
          <span>No credit card required</span>
        </div>
      </form>
    </div>
  );
}
