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
const educationServices = __importStar(require("../../services/education"));
const general_1 = require("../general");
/**
 * Get education by id
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The education or null
 */
const getEducationById = (_, args) => {
    return educationServices.getEducationById(args.id);
};
/**
 * Get education list
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The education connection
 */
const getEducation = (_, args) => {
    return educationServices.getEducation(args.filters);
};
/**
 * Create education
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The created education
 */
const createEducation = (_, args) => {
    return educationServices.createEducation(args.data);
};
/**
 * Update education
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The updated education
 */
const updateEducation = (_, args) => {
    return educationServices.updateEducation(args.data);
};
/**
 * Delete education
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns Boolean indicating success
 */
const deleteEducation = (_, args) => {
    return educationServices.deleteEducation(args.id);
};
exports.resolvers = {
    Query: {
        getEducationById,
        getEducation,
    },
    Mutation: {
        createEducation,
        updateEducation,
        deleteEducation,
    },
    Education: {
        ...(0, general_1.getId)(),
    },
};
