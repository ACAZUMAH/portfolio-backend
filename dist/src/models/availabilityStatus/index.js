"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailabilityStatusModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const availabilityStatusSchema = new mongoose_1.Schema({
    label: { type: String, required: true },
    description: { type: String },
    acceptingWork: { type: Boolean, default: true },
}, { timestamps: true });
exports.AvailabilityStatusModel = (0, mongoose_1.model)(enums_1.Collections.AvailabilityStatuses, availabilityStatusSchema);
