import { db } from "@/db";
import {
  profiles,
  hobbies,
  softSkills,
  languages,
  links,
  workExperiences,
  educations,
  involvements,
  achievements,
  projects,
  projectImages,
  projectContributions,
  techStacks,
  projectTechStacks,
} from "@/db/schema";
import { eq } from "drizzle-orm";

export const getProfile = async () => {
  const result = await db.select().from(profiles).limit(1);
  return result[0] ?? null;
};

export const getAllHobbies = () => db.select().from(hobbies);

export const getAllSoftSkills = () => db.select().from(softSkills);

export const getAllLanguages = () => db.select().from(languages);

export const getAllLinks = () => db.select().from(links);

export const getAllWorkExperiences = () => db.select().from(workExperiences);

export const getAllEducations = () => db.select().from(educations);

export const getAllInvolvements = () => db.select().from(involvements);

export const getAllAchievements = () => db.select().from(achievements);

export const getAllProjects = () => db.select().from(projects);

export const getProjectBySlug = (slug: string) =>
  db.select().from(projects).where(eq(projects.slug, slug));

export const getProjectImagesByProjectId = (projectId: string) =>
  db
    .select()
    .from(projectImages)
    .where(eq(projectImages.projectId, projectId))
    .orderBy(projectImages.order);

export const getProjectContributionsByProjectId = (projectId: string) =>
  db
    .select()
    .from(projectContributions)
    .where(eq(projectContributions.projectId, projectId));

export const getAllTechStacks = () => db.select().from(techStacks);

export const getProjectTechStacksByProjectId = (projectId: string) =>
  db
    .select()
    .from(projectTechStacks)
    .where(eq(projectTechStacks.projectId, projectId));
