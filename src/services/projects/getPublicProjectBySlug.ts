import { ProjectModel } from "src/models";
import { publicProjectFilter, toPublicProject } from "./helpers";

/**
 * Get public project by slug.
 * @param slug - Project slug
 * @returns Public-safe project
 */
export const getPublicProjectBySlug = async (slug: string) => {
  const project = await ProjectModel.findOne({ slug, ...publicProjectFilter });
  return toPublicProject(project);
};
