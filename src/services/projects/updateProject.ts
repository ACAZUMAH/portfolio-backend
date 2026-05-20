import { UpdateProjectInput } from "src/common/interfaces/graphql";
import { ProjectModel } from "src/models";
import { getProjectById } from "./getProjectById";

/**
 * Update a project.
 * @param data.id - Project id
 * @param data - Project update data
 * @returns Updated project
 * @throws 400 error if id is invalid
 * @throws 404 error if project is not found
 */
export const updateProject = async (data: UpdateProjectInput) => {
  const project = await getProjectById(data.id);

  const update: Record<string, any> = {};

  if (data.title) update.title = data.title;
  if (data.slug) update.slug = data.slug;
  if (data.summary) update.summary = data.summary;
  if (data.problem) update.problem = data.problem;
  if (data.role) update.role = data.role;
  if (data.company) update.company = data.company;
  if (data.client) update.client = data.client;
  if (data.stack) update.stack = data.stack;
  if (data.features) update.features = data.features;
  if (data.outcomes) update.outcomes = data.outcomes;
  if (data.lessons) update.lessons = data.lessons;
  if (data.links) update.links = data.links;
  if (data.mediaIds) update.mediaIds = data.mediaIds;
  if (data.caseStudySections) update.caseStudySections = data.caseStudySections;
  if (data.visibility) update.visibility = data.visibility;
  if (data.status) update.status = data.status;
  if (data.featured) update.featured = data.featured;
  if (data.order) update.order = data.order;
  if (data.seo) update.seo = data.seo;
  if (data.github) update.github = data.github;

  return await ProjectModel.findByIdAndUpdate(
    project._id,
    { $set: update },
    { new: true },
  );
};
