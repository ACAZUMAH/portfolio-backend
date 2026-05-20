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
const availabilityServices = __importStar(require("../../services/availabilityStatus"));
const general_1 = require("../general");
/**
 * Get availability status by id
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The availability status or null
 */
const getAvailabilityStatusById = (_, args) => {
    return availabilityServices.getAvailabilityStatusById(args.id);
};
/**
 * Get latest availability status
 * @returns The availability status or null
 */
const getLatestAvailabilityStatus = () => {
    return availabilityServices.getLatestAvailabilityStatus();
};
/**
 * Create availability status
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The created availability status
 */
const createAvailabilityStatus = (_, args) => {
    return availabilityServices.createAvailabilityStatus(args.data);
};
/**
 * Update availability status
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The updated availability status
 */
const updateAvailabilityStatus = (_, args) => {
    return availabilityServices.updateAvailabilityStatus(args.data);
};
exports.resolvers = {
    Query: {
        getAvailabilityStatusById,
        getLatestAvailabilityStatus,
    },
    Mutation: {
        createAvailabilityStatus,
        updateAvailabilityStatus,
    },
    AvailabilityStatus: {
        ...(0, general_1.getId)(),
    },
};
