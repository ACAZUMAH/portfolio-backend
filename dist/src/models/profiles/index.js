"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const seo_1 = require("../seo/seo");
const profileSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    title: { type: String, required: true },
    headline: { type: String, required: true },
    bio: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    location: { type: String },
    linkedInUrl: { type: String },
    githubUrl: { type: String },
    twitterUrl: { type: String },
    seo: seo_1.seoSchema,
}, { timestamps: true });
exports.ProfileModel = (0, mongoose_1.model)(enums_1.Collections.Profiles, profileSchema);
