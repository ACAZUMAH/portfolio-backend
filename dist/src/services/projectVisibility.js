"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPublicProject = exports.serializeDocument = void 0;
const serializeDocument = (doc) => {
    if (!doc)
        return null;
    const obj = typeof doc.toObject === "function" ? doc.toObject() : doc;
    return { ...obj, id: String(obj._id || obj.id) };
};
exports.serializeDocument = serializeDocument;
const toPublicProject = (project) => {
    const serialized = (0, exports.serializeDocument)(project);
    if (!serialized)
        return null;
    if (serialized.visibility === "PRIVATE_SUMMARY") {
        return {
            ...serialized,
            problem: serialized.problem || null,
            features: serialized.features || [],
            outcomes: serialized.outcomes || [],
            lessons: [],
            caseStudySections: serialized.caseStudySections || [],
            links: [],
            mediaIds: [],
        };
    }
    if (serialized.visibility === "PASSWORD_PROTECTED") {
        return {
            ...serialized,
            problem: "Detailed case study is protected.",
            features: serialized.features || [],
            outcomes: [],
            lessons: [],
            caseStudySections: [],
            links: [],
            mediaIds: [],
        };
    }
    return serialized;
};
exports.toPublicProject = toPublicProject;
