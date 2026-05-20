"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEducation = void 0;
const helpers_1 = require("../../common/helpers");
const models_1 = require("../../models");
/**
 * Get education records.
 * @param filters - Education filters
 * @returns Education connection
 */
const getEducation = async (filters = {}) => {
    const query = {
        ...(filters.institution && { institution: filters.institution }),
        ...(filters.search && {
            $or: [
                { institution: { $regex: filters.search, $options: "i" } },
                { program: { $regex: filters.search, $options: "i" } },
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
    const education = await models_1.EducationModel.find(query, null, options);
    return (0, helpers_1.getPageConnection)(education, page, limit);
};
exports.getEducation = getEducation;
