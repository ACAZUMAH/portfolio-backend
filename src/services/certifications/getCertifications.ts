import { FilterQuery, QueryOptions } from "mongoose";
import {
  getPageConnection,
  getSanitizeLimit,
  getSanitizeOffset,
  getSanitizePage,
} from "src/common/helpers";
import { CertificationDocument } from "src/common/interfaces";
import { GetCertificationFilters } from "src/common/interfaces/graphql";
import { CertificationModel } from "src/models";

/**
 * Get certifications.
 * @param filters - Certification filters
 * @returns Certifications connection
 */
export const getCertifications = async (
  filters: GetCertificationFilters = {},
) => {
  const query: FilterQuery<CertificationDocument> = {
    ...(filters.issuer && { issuer: filters.issuer }),
    ...(filters.search && {
      $or: [
        { title: { $regex: filters.search, $options: "i" } },
        { issuer: { $regex: filters.search, $options: "i" } },
      ],
    }),
  };

  const page = getSanitizePage(filters.page);
  const limit = getSanitizeLimit(filters.limit);
  const skip = getSanitizeOffset(page, limit);

  const options: QueryOptions = {
    skip,
    lean: true,
    limit: limit + 1,
    sort: { order: 1, createdAt: -1 },
  };

  const certifications = await CertificationModel.find(query, null, options);

  return getPageConnection(certifications, page, limit);
};
