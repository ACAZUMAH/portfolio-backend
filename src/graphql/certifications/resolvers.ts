import * as GqlTypes from "src/common/interfaces/graphql";
import * as certificationsServices from "src/services/certifications";
import { getId } from "../general";

/**
 * Get certification by id
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The certification or null
 */
const getCertificationById = (
  _: any,
  args: GqlTypes.QueryGetCertificationByIdArgs,
) => {
  return certificationsServices.getCertificationById(args.id);
};

/**
 * Get certifications list
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The certifications connection
 */
const getCertifications = (
  _: any,
  args: GqlTypes.QueryGetCertificationsArgs,
) => {
  return certificationsServices.getCertifications(args.filters!);
};

/**
 * Create certification
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The created certification
 */
const createCertification = (
  _: any,
  args: GqlTypes.MutationCreateCertificationArgs,
) => {
  return certificationsServices.createCertification(args.data);
};

/**
 * Update certification
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The updated certification
 */
const updateCertification = (
  _: any,
  args: GqlTypes.MutationUpdateCertificationArgs,
) => {
  return certificationsServices.updateCertification(args.data);
};

/**
 * Delete certification
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns Boolean indicating success
 */
const deleteCertification = (
  _: any,
  args: GqlTypes.MutationDeleteCertificationArgs,
) => {
  return certificationsServices.deleteCertification(args.id);
};

export const resolvers = {
  Query: {
    getCertificationById,
    getCertifications,
  },
  Mutation: {
    createCertification,
    updateCertification,
    deleteCertification,
  },
  Certification: {
    ...getId(),
  },
};
