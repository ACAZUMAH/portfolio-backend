import * as GqlTypes from "src/common/interfaces/graphql";
import { GraphqlContext, ProjectDocument } from "src/common/interfaces";
import * as projectServices from "src/services/projects";
import { getId } from "../general";

const getProjectById = (_: any, args: GqlTypes.QueryGetProjectByIdArgs) => {
  return projectServices.getProjectById(args.id);
};

const getPublicProjectBySlug = (
  _: any,
  args: GqlTypes.QueryGetPublicProjectBySlugArgs,
) => {
  return projectServices.getPublicProjectBySlug(args.slug);
};

const getAdminProjects = (_: any, args: GqlTypes.QueryGetAdminProjectsArgs) => {
  return projectServices.getAdminProjects(args.filters);
};

const getPublicProjects = (
  _: any,
  args: GqlTypes.QueryGetPublicProjectsArgs,
) => {
  return projectServices.getPublicProjects(args.filters);
};

const getFeaturedPublicProjects = (
  _: any,
  args: GqlTypes.QueryGetFeaturedPublicProjectsArgs,
) => {
  return projectServices.getFeaturedPublicProjects(args.filters);
};

const createProject = (_: any, args: GqlTypes.MutationCreateProjectArgs) => {
  return projectServices.createProject(args.data);
};

const updateProject = (_: any, args: GqlTypes.MutationUpdateProjectArgs) => {
  return projectServices.updateProject(args.data);
};

const deleteProject = (_: any, args: GqlTypes.MutationDeleteProjectArgs) => {
  return projectServices.deleteProject(args.id);
};

const uploadProjectMedia = (_: any, args: any) => {
  return projectServices.uploadProjectMedia(args.data);
};

const deleteProjectMedia = (_: any, args: any) => {
  return projectServices.deleteProjectMedia(args.data);
};

const medias = (
  parent: ProjectDocument,
  _: any,
  { uploadLoader }: GraphqlContext,
) => {
  return uploadLoader.loadMany(parent.mediaIds?.map(String) ?? []);
};

export const projectsResolvers = {
  Query: {
    getProjectById,
    getPublicProjectBySlug,
    getAdminProjects,
    getPublicProjects,
    getFeaturedPublicProjects,
  },
  Mutation: {
    createProject,
    updateProject,
    deleteProject,
    uploadProjectMedia,
    deleteProjectMedia,
  },
  Project: {
    ...getId(),
    medias,
  },
};
