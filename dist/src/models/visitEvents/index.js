"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitEventModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const visitEventSchema = new mongoose_1.Schema({
    visitorId: { type: String, required: true },
    sessionId: { type: String, required: true },
    path: { type: String, required: true },
    referrer: { type: String, default: "direct" },
    userAgent: { type: String, default: "unknown" },
    device: { type: String, default: "unknown" },
    utmSource: { type: String, default: "direct" },
    utmMedium: { type: String, default: "none" },
    utmCampaign: { type: String, default: "none" },
}, { timestamps: true });
exports.VisitEventModel = (0, mongoose_1.model)(enums_1.Collections.VisitEvents, visitEventSchema);
