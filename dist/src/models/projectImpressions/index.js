"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectImpressionModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const projectImpressionSchema = new mongoose_1.Schema({
    projectId: { type: String },
    slug: { type: String },
    visitorId: { type: String },
    path: { type: String },
}, { timestamps: true });
exports.ProjectImpressionModel = (0, mongoose_1.model)(enums_1.Collections.ProjectImpressions, projectImpressionSchema);
