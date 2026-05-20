"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadResolvers = void 0;
/*
 * Type Resolvers for Role type
 */
const id = (parent) => `${parent._id}`;
const url = (parent) => `${process.env.UPLOADS_BASE_URL}/${parent.directory}/${parent.filename}`;
exports.uploadResolvers = {
    Upload: {
        id,
        url,
    },
};
