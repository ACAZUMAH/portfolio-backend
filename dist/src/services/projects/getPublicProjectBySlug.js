"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicProjectBySlug = void 0;
const models_1 = require("../../models");
const helpers_1 = require("./helpers");
/**
 * Get public project by slug.
 * @param slug - Project slug
 * @returns Public-safe project
 */
const getPublicProjectBySlug = async (slug) => {
    const project = await models_1.ProjectModel.findOne({ slug, ...helpers_1.publicProjectFilter });
    return (0, helpers_1.toPublicProject)(project);
};
exports.getPublicProjectBySlug = getPublicProjectBySlug;
