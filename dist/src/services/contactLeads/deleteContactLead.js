"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContactLead = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Delete a contact lead.
 * @param id - Contact lead id
 * @returns True if contact lead is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if contact lead is not found
 */
const deleteContactLead = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid contact lead id");
    const contactLead = await models_1.ContactLeadModel.findByIdAndDelete(id);
    if (!contactLead)
        throw http_errors_1.default.NotFound("Contact lead not found");
    return true;
};
exports.deleteContactLead = deleteContactLead;
