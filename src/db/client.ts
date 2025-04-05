import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { config } from "dotenv";

config({ path: ".env" });

if (!process.env.TURSO_CONNECTION_URL || !process.env.TURSO_AUTH_TOKEN) {
  throw new Error("TURSO_CONNECTION_URL and TURSO_AUTH_TOKEN must be set");
}

const turso = createClient({
  //   url: process.env.TURSO_CONNECTION_URL,
  //   authToken: process.env.TURSO_AUTH_TOKEN,
  url: "file:./local.db",
  authToken: "local",
});

export const db = drizzle(turso);
