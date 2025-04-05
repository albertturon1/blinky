// import { db } from "@/db/db";
// import { profilesTable, usersTable } from "@/db/schema";
// import { z } from "zod";
// import { LibsqlError } from "@libsql/client";
// import bcrypt from "bcryptjs";

// const signupSchema = z.object({
//   password: z.string(),
//   email: z.string(),
//   username: z.string().min(3, "Username is required"),
// });

// export async function POST(request: Request) {
//   const body = await request.json();

//   const { email, password, username } = signupSchema.parse(body);

//   const createdAt = Date.now();

//   const passwordHash = await bcrypt.hash(password, 10);

//   try {
//     await db.transaction(async (tx) => {
//       const [user] = await tx
//         .insert(usersTable)
//         .values({ createdAt, email, passwordHash })
//         .returning();

//       if (!user) {
//         throw new Error("Failed to create user");
//       }

//       await tx
//         .insert(profilesTable)
//         .values({
//           userId: user.id,
//           username,
//         })
//         .returning();
//     });
//   } catch (error) {
//     if (error instanceof LibsqlError) {
//       if (error.message.includes("UNIQUE")) {
//         const errorMessage = error.message.toLowerCase();

//         if (errorMessage.includes("users.email")) {
//           return new Response(
//             JSON.stringify({
//               error: "This email is already registered",
//               field: "email",
//             }),
//             { status: 409 }
//           );
//         }

//         if (errorMessage.includes("profiles.username")) {
//           return new Response(
//             JSON.stringify({
//               error: "This username is already taken",
//               field: "username",
//             }),
//             { status: 409 }
//           );
//         }
//       }
//     }

//     return new Response(
//       JSON.stringify({
//         error: "Internal server error",
//       }),
//       { status: 500 }
//     );
//   }

//   return new Response(
//     JSON.stringify({
//       message: "User created successfully",
//     })
//   );
// }
