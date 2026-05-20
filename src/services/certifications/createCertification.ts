import createHttpError from "http-errors";
import { CreateCertificationInput } from "src/common/interfaces/graphql";
import { CertificationModel } from "src/models";

/**
 * Create a certification.
 * @param data - Certification data
 * @returns Created certification
 */
export const createCertification = async (data: CreateCertificationInput) => {
  const cert = await CertificationModel.create({
    ...data,
  });

  if (!cert) {
    throw createHttpError(500, "Failed to create certification");
  }

  return cert;
};
