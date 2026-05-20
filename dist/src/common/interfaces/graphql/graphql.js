"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectVisibility = exports.ProjectStatus = exports.MediaType = exports.LeadStatus = exports.LeadPriority = void 0;
var LeadPriority;
(function (LeadPriority) {
    LeadPriority["HIGH"] = "HIGH";
    LeadPriority["LOW"] = "LOW";
    LeadPriority["MEDIUM"] = "MEDIUM";
})(LeadPriority || (exports.LeadPriority = LeadPriority = {}));
var LeadStatus;
(function (LeadStatus) {
    LeadStatus["ARCHIVED"] = "ARCHIVED";
    LeadStatus["NEW"] = "NEW";
    LeadStatus["REPLIED"] = "REPLIED";
    LeadStatus["REVIEWED"] = "REVIEWED";
})(LeadStatus || (exports.LeadStatus = LeadStatus = {}));
var MediaType;
(function (MediaType) {
    MediaType["IMAGE"] = "IMAGE";
    MediaType["LOGO"] = "LOGO";
    MediaType["OG_IMAGE"] = "OG_IMAGE";
    MediaType["OTHER"] = "OTHER";
    MediaType["RESUME"] = "RESUME";
    MediaType["SCREENSHOT"] = "SCREENSHOT";
})(MediaType || (exports.MediaType = MediaType = {}));
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["ARCHIVED"] = "ARCHIVED";
    ProjectStatus["CLIENT_WORK"] = "CLIENT_WORK";
    ProjectStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ProjectStatus["LIVE"] = "LIVE";
    ProjectStatus["OPEN_SOURCE"] = "OPEN_SOURCE";
    ProjectStatus["PRIVATE"] = "PRIVATE";
})(ProjectStatus || (exports.ProjectStatus = ProjectStatus = {}));
var ProjectVisibility;
(function (ProjectVisibility) {
    ProjectVisibility["HIDDEN"] = "HIDDEN";
    ProjectVisibility["PASSWORD_PROTECTED"] = "PASSWORD_PROTECTED";
    ProjectVisibility["PRIVATE_SUMMARY"] = "PRIVATE_SUMMARY";
    ProjectVisibility["PUBLIC"] = "PUBLIC";
})(ProjectVisibility || (exports.ProjectVisibility = ProjectVisibility = {}));
