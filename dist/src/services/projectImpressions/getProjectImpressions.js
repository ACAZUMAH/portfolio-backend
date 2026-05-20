"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectImpressions = void 0;
const helpers_1 = require("../../common/helpers");
const models_1 = require("../../models");
/**
 * Get project impressions.
 * @param filters - Project impression filters
 * @returns Project impressions connection
 */
const getProjectImpressions = async (filters = {}) => {
    const query = {
        ...(filters.projectId && { projectId: filters.projectId }),
        ...(filters.slug && { slug: filters.slug }),
        ...(filters.visitorId && { visitorId: filters.visitorId }),
        ...(filters.search && {
            $or: [
                { slug: { $regex: filters.search, $options: "i" } },
                { path: { $regex: filters.search, $options: "i" } },
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
        sort: { createdAt: -1 },
    };
    const projectImpressions = await models_1.ProjectImpressionModel.find(query, null, options);
    return (0, helpers_1.getPageConnection)(projectImpressions, page, limit);
};
exports.getProjectImpressions = getProjectImpressions;
