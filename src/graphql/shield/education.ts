import { isAuthenticated } from "./general";

export const EducationShield = {
  Query: {
    getEducationById: isAuthenticated,
    getEducation: isAuthenticated,
  },

  Mutation: {
    createEducation: isAuthenticated,
    updateEducation: isAuthenticated,
    deleteEducation: isAuthenticated,
  },
};
