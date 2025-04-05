CREATE TABLE `links` (
	`id` integer PRIMARY KEY NOT NULL,
	`profile_id` integer NOT NULL,
	`title` text NOT NULL,
	`url` text NOT NULL,
	`thumbnail_url` text,
	`position` integer NOT NULL,
	`is_active` integer DEFAULT true NOT NULL,
	FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `profiles` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`username` text NOT NULL,
	`bio` text,
	`avatar_url` text,
	`theme_id` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`theme_id`) REFERENCES `themes`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `profiles_username_unique` ON `profiles` (`username`);--> statement-breakpoint
CREATE TABLE `themes` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`background_color` text(7) NOT NULL,
	`text_color` text(7) NOT NULL,
	`button_color` text(7) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`password_hash` text,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);