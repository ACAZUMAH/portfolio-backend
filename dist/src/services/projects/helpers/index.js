"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPublicProject = exports.publicProjectFilter = void 0;
const enums_1 = require("../../../common/enums");
const publicProjectVisibilities = [
    enums_1.ProjectVisibility.PUBLIC,
    enums_1.ProjectVisibility.PRIVATE_SUMMARY,
    enums_1.ProjectVisibility.PASSWORD_PROTECTED,
];
exports.publicProjectFilter = {
    visibility: { $in: publicProjectVisibilities },
};
/**
 * Format a project for public portfolio access.
 * @param project - Project document
 * @returns Public-safe project document
 */
const toPublicProject = (project) => {
    if (!project)
        return null;
    const publicProject = typeof project.toObject === "function"
        ? project.toObject({ virtuals: true })
        : project;
    if (publicProject.visibility === enums_1.ProjectVisibility.PRIVATE_SUMMARY) {
        return {
            ...publicProject,
            problem: undefined,
            features: [],
            outcomes: [],
            lessons: [],
            caseStudySections: [],
        };
    }
    if (publicProject.visibility === enums_1.ProjectVisibility.PASSWORD_PROTECTED) {
        return {
            ...publicProject,
            features: [],
            outcomes: [],
            lessons: [],
            caseStudySections: [],
        };
    }
    return publicProject;
};
exports.toPublicProject = toPublicProject;
