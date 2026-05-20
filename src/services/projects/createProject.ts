import createHttpError from "http-errors";
import { ProjectDocument } from "src/common/interfaces";
import { CreateProjectInput } from "src/common/interfaces/graphql";
import { ProjectModel } from "src/models";

/**
 * Create a project.
 * @param data - Project data
 * @returns Created project
 */
export const createProject = async (data: CreateProjectInput) => {
  const createData: Partial<ProjectDocument> = Object.fromEntries(
    Object.entries(data).filter(
      ([, value]) => value !== undefined && value !== null,
    ),
  );

  const project = await ProjectModel.create(createData);

  if (!project) {
    throw createHttpError(500, "Failed to create project");
  }

  return project;
};
