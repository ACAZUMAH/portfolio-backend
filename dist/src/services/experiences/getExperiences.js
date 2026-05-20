"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExperiences = void 0;
const helpers_1 = require("../../common/helpers");
const models_1 = require("../../models");
/**
 * Get experiences.
 * @param filters - Experience filters
 * @returns Experiences connection
 */
const getExperiences = async (filters = {}) => {
    const query = {
        ...(filters.company && { company: filters.company }),
        ...(filters.isCurrent !== undefined && { isCurrent: filters.isCurrent }),
        ...(filters.order !== undefined && { order: filters.order }),
        ...(filters.search && {
            $or: [
                { role: { $regex: filters.search, $options: "i" } },
                { company: { $regex: filters.search, $options: "i" } },
                { location: { $regex: filters.search, $options: "i" } },
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
    const experiences = await models_1.ExperienceModel.find(query, null, options);
    return (0, helpers_1.getPageConnection)(experiences, page, limit);
};
exports.getExperiences = getExperiences;
