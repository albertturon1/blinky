import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

// Users table (authentication)
export const usersTable = sqliteTable("users", {
  id: integer("id").primaryKey(),
  email: text("email").unique().notNull(),
  passwordHash: text("password_hash"), // Optional for OAuth users
  createdAt: integer("created_at").notNull(), // Store as UNIX timestamp
});

// Profiles table (public bio pages)
export const profilesTable = sqliteTable("profiles", {
  id: integer("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  username: text("username").unique().notNull(),
  bio: text("bio"),
  avatarUrl: text("avatar_url"),
  themeId: integer("theme_id").references(() => themesTable.id, {
    onDelete: "set null",
  }),
});

// Links table (user-defined links)
export const linksTable = sqliteTable("links", {
  id: integer("id").primaryKey(),
  profileId: integer("profile_id")
    .notNull()
    .references(() => profilesTable.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  url: text("url").notNull(),
  thumbnailUrl: text("thumbnail_url"),
  position: integer("position").notNull(), // Determines link order
  isActive: integer("is_active", { mode: "boolean" }).default(true).notNull(), // Toggle visibility
});

// Themes table (for profile customization)
export const themesTable = sqliteTable("themes", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  backgroundColor: text("background_color", { length: 7 }).notNull(), // HEX format
  textColor: text("text_color", { length: 7 }).notNull(),
  buttonColor: text("button_color", { length: 7 }).notNull(),
});

// Relations
export const usersRelations = relations(usersTable, ({ one }) => ({
  profile: one(profilesTable, {
    fields: [usersTable.id],
    references: [profilesTable.userId],
  }),
}));

export const profilesRelations = relations(profilesTable, ({ one, many }) => ({
  user: one(usersTable, {
    fields: [profilesTable.userId],
    references: [usersTable.id],
  }),
  links: many(linksTable),
  theme: one(themesTable, {
    fields: [profilesTable.themeId],
    references: [themesTable.id],
  }),
}));

export const linksRelations = relations(linksTable, ({ one }) => ({
  profile: one(profilesTable, {
    fields: [linksTable.profileId],
    references: [profilesTable.id],
  }),
}));

export const themesRelations = relations(themesTable, ({ many }) => ({
  profiles: many(profilesTable),
}));
