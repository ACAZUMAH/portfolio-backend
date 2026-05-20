"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundClickModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const outboundClickSchema = new mongoose_1.Schema({
    label: { type: String },
    url: { type: String },
    type: { type: String },
    visitorId: { type: String },
    path: { type: String },
}, { timestamps: true });
exports.OutboundClickModel = (0, mongoose_1.model)(enums_1.Collections.OutboundClicks, outboundClickSchema);
