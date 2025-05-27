import { date, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  url: text("url"),
  startedAt: date("started_at").notNull(),
  finishedAt: date("finished_at"),
});

export const projectImages = pgTable("project_images", {
  id: uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id")
    .references(() => projects.id)
    .notNull(),
  url: text("url").notNull(),
  order: integer("order").default(0),
});

export const projectContributions = pgTable("project_contributions", {
  id: uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id")
    .references(() => projects.id)
    .notNull(),
  contribution: text("contribution").notNull(),
});

export const techStacks = pgTable("tech_stacks", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  logoUrl: text("logo_url"),
});

export const projectTechStacks = pgTable("project_tech_stacks", {
  id: uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id")
    .references(() => projects.id)
    .notNull(),
  techStackId: uuid("tech_stack_id")
    .references(() => techStacks.id)
    .notNull(),
});
