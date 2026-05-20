"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const experiencesServices = __importStar(require("../../services/experiences"));
const general_1 = require("../general");
/**
 * Get experience by id
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The experience or null
 */
const getExperienceById = (_, args) => {
    return experiencesServices.getExperienceById(args.id);
};
/**
 * Get experiences
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The experiences connection
 */
const getExperiences = (_, args) => {
    return experiencesServices.getExperiences(args.filters);
};
/**
 * Create experience
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The created experience
 */
const createExperience = (_, args) => {
    return experiencesServices.createExperience(args.data);
};
/**
 * Update experience
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The updated experience
 */
const updateExperience = (_, args) => {
    return experiencesServices.updateExperience(args.data);
};
/**
 * Delete experience
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns Boolean indicating success
 */
const deleteExperience = (_, args) => {
    return experiencesServices.deleteExperience(args.id);
};
exports.resolvers = {
    Query: {
        getExperienceById,
        getExperiences,
    },
    Mutation: {
        createExperience,
        updateExperience,
        deleteExperience,
    },
    Experience: {
        ...(0, general_1.getId)(),
    },
};
