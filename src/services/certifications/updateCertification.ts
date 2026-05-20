import { UpdateCertificationInput } from "src/common/interfaces/graphql";
import { CertificationModel } from "src/models";
import { getCertificationById } from "./getCertificationById";

/**
 * Update a certification.
 * @param data.id - Certification id
 * @param data - Certification update data
 * @returns Updated certification
 * @throws 400 error if id is invalid
 * @throws 404 error if certification is not found
 */
export const updateCertification = async (data: UpdateCertificationInput) => {
  const certification = await getCertificationById(data.id);

  const update: Record<string, any> = {};

  if (data.title) update.title = data.title;
  if (data.issuer) update.issuer = data.issuer;
  if (data.date) update.date = data.date;
  if (data.url) update.url = data.url;
  if (data.order) update.order = data.order;

  return await CertificationModel.findByIdAndUpdate(
    certification._id,
    { $set: update },
    { new: true },
  );
};
