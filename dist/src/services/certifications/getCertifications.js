"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCertifications = void 0;
const helpers_1 = require("../../common/helpers");
const models_1 = require("../../models");
/**
 * Get certifications.
 * @param filters - Certification filters
 * @returns Certifications connection
 */
const getCertifications = async (filters = {}) => {
    const query = {
        ...(filters.issuer && { issuer: filters.issuer }),
        ...(filters.search && {
            $or: [
                { title: { $regex: filters.search, $options: "i" } },
                { issuer: { $regex: filters.search, $options: "i" } },
            ],
        }),
    };
    const page = (0, helpers_1.getSanitizePage)(filters.page);
    const limit = (0, helpers_1.getSanitizeLimit)(filters.limit);
    const skip = (0, helpers_1.getSanitizeOffset)(page, limit);
    const options = {
        skip,
        lean: true,
        limit: limit + 1,
        sort: { order: 1, createdAt: -1 },
    };
    const certifications = await models_1.CertificationModel.find(query, null, options);
    return (0, helpers_1.getPageConnection)(certifications, page, limit);
};
exports.getCertifications = getCertifications;
