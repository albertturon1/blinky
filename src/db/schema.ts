import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

// Users table (authentication)
export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  email: text("email").unique().notNull(),
  passwordHash: text("password_hash"), // Optional for OAuth users
  createdAt: integer("created_at").notNull(), // Store as UNIX timestamp
});

// Profiles table (public bio pages)
export const profiles = sqliteTable("profiles", {
  id: integer("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  username: text("username").unique().notNull(),
  bio: text("bio"),
  avatarUrl: text("avatar_url"),
  themeId: integer("theme_id").references(() => themes.id, {
    onDelete: "set null",
  }),
});

// Links table (user-defined links)
export const links = sqliteTable("links", {
  id: integer("id").primaryKey(),
  profileId: integer("profile_id")
    .notNull()
    .references(() => profiles.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  url: text("url").notNull(),
  thumbnailUrl: text("thumbnail_url"),
  position: integer("position").notNull(), // Determines link order
  isActive: integer("is_active", { mode: "boolean" }).default(true).notNull(), // Toggle visibility
});

// Themes table (for profile customization)
export const themes = sqliteTable("themes", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  backgroundColor: text("background_color", { length: 7 }).notNull(), // HEX format
  textColor: text("text_color", { length: 7 }).notNull(),
  buttonColor: text("button_color", { length: 7 }).notNull(),
});

// Relations
export const usersRelations = relations(users, ({ one }) => ({
  profile: one(profiles, { fields: [users.id], references: [profiles.userId] }),
}));

export const profilesRelations = relations(profiles, ({ one, many }) => ({
  user: one(users, { fields: [profiles.userId], references: [users.id] }),
  links: many(links),
  theme: one(themes, { fields: [profiles.themeId], references: [themes.id] }),
}));

export const linksRelations = relations(links, ({ one }) => ({
  profile: one(profiles, {
    fields: [links.profileId],
    references: [profiles.id],
  }),
}));

export const themesRelations = relations(themes, ({ many }) => ({
  profiles: many(profiles),
}));
