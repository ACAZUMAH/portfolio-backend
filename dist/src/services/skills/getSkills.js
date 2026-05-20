"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkills = void 0;
const helpers_1 = require("../../common/helpers");
const models_1 = require("../../models");
/**
 * Get skills.
 * @param filters - Skill filters
 * @returns Skills connection
 */
const getSkills = async (filters = {}) => {
    const query = {
        ...(filters.category && { category: filters.category }),
        ...(filters.featured !== undefined && { featured: filters.featured }),
        ...(filters.search && {
            $or: [
                { name: { $regex: filters.search, $options: "i" } },
                { category: { $regex: filters.search, $options: "i" } },
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
        sort: { category: 1, order: 1, createdAt: -1 },
    };
    const skills = await models_1.SkillModel.find(query, null, options);
    return (0, helpers_1.getPageConnection)(skills, page, limit);
};
exports.getSkills = getSkills;
