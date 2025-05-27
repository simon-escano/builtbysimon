import { date, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  bio: text("bio").notNull(),
  avatarUrl: text("avatar_url"),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
})

export const hobbies = pgTable("hobbies", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  emoji: text("emoji").notNull(),
})

export const softSkills = pgTable("soft_skills", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
})

export const languages = pgTable("languages", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  proficiency: integer("proficiency").default(0).notNull(),
})

export const links = pgTable("links", {
  id: uuid("id").primaryKey().defaultRandom(),
  type: text("type").notNull(),
  value: text("value").notNull(),
  icon: text("icon").notNull(),
  url: text("url").notNull(),
})

export const workExperiences = pgTable("workExperiences", {
  id: uuid("id").primaryKey().defaultRandom(),
  company: text("company").notNull(),
  position: text("position").notNull(),
  description: text("description").notNull(),
  startedAt: date("started_at").notNull(),
  finishedAt: date("finished_at"),
})

export const educations = pgTable("educations", {
  id: uuid("id").primaryKey().defaultRandom(),
  school: text("school").notNull(),
  degree: text("degree").notNull(),
  description: text("description").notNull(),
  startedAt: date("started_at").notNull(),
  finishedAt: date("finished_at"),
})

export const involvements = pgTable("involvements", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  role: text("role"),
  description: text("description").notNull(),
  startedAt: date("started_at").notNull(),
  finishedAt: date("finished_at"),
})

export const achievements = pgTable("achievements", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  date: date("date").notNull(),
});

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
  proficiency: integer("proficiency").default(0).notNull(),
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
