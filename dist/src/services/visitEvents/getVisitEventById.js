"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVisitEventById = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Get visit event by id.
 * @param id - Visit event id
 * @returns Visit event
 * @throws 400 error if id is invalid
 * @throws 404 error if visit event is not found
 */
const getVisitEventById = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid visit event id");
    const visitEvent = await models_1.VisitEventModel.findById(id);
    if (!visitEvent)
        throw http_errors_1.default.NotFound("Visit event not found");
    return visitEvent;
};
exports.getVisitEventById = getVisitEventById;
