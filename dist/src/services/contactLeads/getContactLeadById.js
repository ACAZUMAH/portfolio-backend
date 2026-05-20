"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactLeadById = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Get contact lead by id.
 * @param id - Contact lead id
 * @returns Contact lead
 * @throws 400 error if id is invalid
 * @throws 404 error if contact lead is not found
 */
const getContactLeadById = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid contact lead id");
    const contactLead = await models_1.ContactLeadModel.findById(id);
    if (!contactLead)
        throw http_errors_1.default.NotFound("Contact lead not found");
    return contactLead;
};
exports.getContactLeadById = getContactLeadById;
