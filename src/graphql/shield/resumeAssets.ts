import { isAuthenticated } from "./general";

export const ResumeAssetShield = {
  Query: {
    adminResumes: isAuthenticated,
  },

  Mutation: {
    createResumeAsset: isAuthenticated,
    updateResumeAsset: isAuthenticated,
    setDefaultResume: isAuthenticated,
  },
};
