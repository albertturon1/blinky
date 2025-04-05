import { db } from "@/db/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import * as schema from "@/db/schema";

export const auth = betterAuth({
  rateLimit: {
    enabled: true,
    limit: 10,
  },
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema,
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()], // make sure `nextCookies` is the last plugin in the array. nextCookies plugin, which will automatically set cookies for you whenever a Set-Cookie header is present in the response
});
