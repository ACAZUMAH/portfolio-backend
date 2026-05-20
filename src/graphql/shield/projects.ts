import { allow } from "graphql-shield";
import { isAuthenticated } from "./general";

export const ProjectShield = {
  Query: {
    getProjectById: isAuthenticated,
    getAdminProjects: isAuthenticated,
    getPublicProjectBySlug: allow,
    getPublicProjects: allow,
    getFeaturedPublicProjects: allow,
  },

  Mutation: {
    createProject: isAuthenticated,
    updateProject: isAuthenticated,
    deleteProject: isAuthenticated,
    uploadProjectMedia: isAuthenticated,
    deleteProjectMedia: isAuthenticated,
  },

  Project: {
    mediaIds: allow,
    medias: allow,
  },
};
