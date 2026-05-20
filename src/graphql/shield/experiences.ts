import { isAuthenticated } from "./general";

export const ExperienceShield = {
  Query: {
    getExperienceById: isAuthenticated,
    getExperiences: isAuthenticated,
  },

  Mutation: {
    createExperience: isAuthenticated,
    updateExperience: isAuthenticated,
    deleteExperience: isAuthenticated,
  },
};
