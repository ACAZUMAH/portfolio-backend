"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectImpressionById = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Get project impression by id.
 * @param id - Project impression id
 * @returns Project impression
 * @throws 400 error if id is invalid
 * @throws 404 error if project impression is not found
 */
const getProjectImpressionById = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid project impression id");
    const projectImpression = await models_1.ProjectImpressionModel.findById(id);
    if (!projectImpression)
        throw http_errors_1.default.NotFound("Project impression not found");
    return projectImpression;
};
exports.getProjectImpressionById = getProjectImpressionById;
