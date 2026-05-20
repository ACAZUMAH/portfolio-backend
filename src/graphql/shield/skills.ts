import { isAuthenticated } from "./general";

export const SkillShield = {
  Query: {
    getSkillById: isAuthenticated,
    getSkills: isAuthenticated,
  },

  Mutation: {
    createSkill: isAuthenticated,
    updateSkill: isAuthenticated,
    deleteSkill: isAuthenticated,
  },
};
