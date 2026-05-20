"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countVisitEvents = void 0;
const models_1 = require("../../models");
/**
 * Count visit events.
 * @param filter - Visit event filters
 * @returns Visit event count
 */
const countVisitEvents = async (filter = {}) => {
    return models_1.VisitEventModel.countDocuments(filter);
};
exports.countVisitEvents = countVisitEvents;
