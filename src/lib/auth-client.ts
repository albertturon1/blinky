import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** the base url of the server (optional if you're using the same domain) */
  baseURL: "http://localhost:3000",
});

// https://github.com/better-auth/better-auth/blob/main/packages/better-auth/src/error/codes.ts
// type ErrorTypes = Partial<Record<keyof typeof authClient.$ERROR_CODES, string>>;
type ErrorTypes = Partial<
  Record<
    keyof typeof authClient.$ERROR_CODES,
    keyof typeof authClient.$ERROR_CODES
  >
>;

export const AUTH_CLIENT_ERROR_CODES = {
  USER_ALREADY_EXISTS: "USER_ALREADY_EXISTS",
} satisfies ErrorTypes;
