"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectShield = void 0;
const graphql_shield_1 = require("graphql-shield");
const general_1 = require("./general");
exports.ProjectShield = {
    Query: {
        getProjectById: general_1.isAuthenticated,
        getAdminProjects: general_1.isAuthenticated,
        getPublicProjectBySlug: graphql_shield_1.allow,
        getPublicProjects: graphql_shield_1.allow,
        getFeaturedPublicProjects: graphql_shield_1.allow,
    },
    Mutation: {
        createProject: general_1.isAuthenticated,
        updateProject: general_1.isAuthenticated,
        deleteProject: general_1.isAuthenticated,
        uploadProjectMedia: general_1.isAuthenticated,
        deleteProjectMedia: general_1.isAuthenticated,
    },
    Project: {
        mediaIds: graphql_shield_1.allow,
        medias: graphql_shield_1.allow,
    },
};
