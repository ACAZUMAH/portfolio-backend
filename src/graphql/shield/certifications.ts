import { isAuthenticated } from "./general";

export const CertificationShield = {
  Query: {
    getCertificationById: isAuthenticated,
    getCertifications: isAuthenticated,
  },

  Mutation: {
    createCertification: isAuthenticated,
    updateCertification: isAuthenticated,
    deleteCertification: isAuthenticated,
  },
};
