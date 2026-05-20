"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = exports.OutboundClickType = exports.MediaType = exports.LeadPriority = exports.LeadStatus = exports.ProjectStatus = exports.ProjectVisibility = exports.Collections = exports.ClientApp = void 0;
var ClientApp;
(function (ClientApp) {
    ClientApp["CLIENTS_PORTAL"] = "CLIENTS_PORTAL";
    ClientApp["ADMIN_PORTAL"] = "ADMIN_PORTAL";
})(ClientApp || (exports.ClientApp = ClientApp = {}));
var Collections;
(function (Collections) {
    Collections["Auth"] = "Auth";
    Collections["AdminUsers"] = "AdminUser";
    Collections["AvailabilityStatuses"] = "AvailabilityStatus";
    Collections["Certifications"] = "Certification";
    Collections["ContactLeads"] = "ContactLead";
    Collections["Education"] = "Education";
    Collections["Experiences"] = "Experience";
    Collections["MediaAssets"] = "MediaAsset";
    Collections["OutboundClicks"] = "OutboundClick";
    Collections["Profiles"] = "Profile";
    Collections["ProjectImpressions"] = "ProjectImpression";
    Collections["Projects"] = "Project";
    Collections["ResumeAssets"] = "ResumeAsset";
    Collections["Skills"] = "Skill";
    Collections["Testimonials"] = "Testimonial";
    Collections["VisitEvents"] = "VisitEvent";
    Collections["Uploads"] = "Upload";
})(Collections || (exports.Collections = Collections = {}));
var ProjectVisibility;
(function (ProjectVisibility) {
    ProjectVisibility["PUBLIC"] = "PUBLIC";
    ProjectVisibility["PRIVATE_SUMMARY"] = "PRIVATE_SUMMARY";
    ProjectVisibility["PASSWORD_PROTECTED"] = "PASSWORD_PROTECTED";
    ProjectVisibility["HIDDEN"] = "HIDDEN";
})(ProjectVisibility || (exports.ProjectVisibility = ProjectVisibility = {}));
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["LIVE"] = "LIVE";
    ProjectStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ProjectStatus["CLIENT_WORK"] = "CLIENT_WORK";
    ProjectStatus["OPEN_SOURCE"] = "OPEN_SOURCE";
    ProjectStatus["PRIVATE"] = "PRIVATE";
    ProjectStatus["ARCHIVED"] = "ARCHIVED";
})(ProjectStatus || (exports.ProjectStatus = ProjectStatus = {}));
var LeadStatus;
(function (LeadStatus) {
    LeadStatus["NEW"] = "NEW";
    LeadStatus["REVIEWED"] = "REVIEWED";
    LeadStatus["REPLIED"] = "REPLIED";
    LeadStatus["ARCHIVED"] = "ARCHIVED";
})(LeadStatus || (exports.LeadStatus = LeadStatus = {}));
var LeadPriority;
(function (LeadPriority) {
    LeadPriority["LOW"] = "LOW";
    LeadPriority["MEDIUM"] = "MEDIUM";
    LeadPriority["HIGH"] = "HIGH";
})(LeadPriority || (exports.LeadPriority = LeadPriority = {}));
var MediaType;
(function (MediaType) {
    MediaType["IMAGE"] = "IMAGE";
    MediaType["LOGO"] = "LOGO";
    MediaType["SCREENSHOT"] = "SCREENSHOT";
    MediaType["RESUME"] = "RESUME";
    MediaType["OG_IMAGE"] = "OG_IMAGE";
    MediaType["OTHER"] = "OTHER";
})(MediaType || (exports.MediaType = MediaType = {}));
var OutboundClickType;
(function (OutboundClickType) {
    OutboundClickType["LINK"] = "LINK";
    OutboundClickType["RESUME_DOWNLOAD"] = "RESUME_DOWNLOAD";
    OutboundClickType["SOCIAL_PROFILE"] = "SOCIAL_PROFILE";
    OutboundClickType["PROJECT_LINK"] = "PROJECT_LINK";
})(OutboundClickType || (exports.OutboundClickType = OutboundClickType = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["BAD_REQUEST"] = "BAD_REQUEST";
    ErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorCode["FORBIDDEN"] = "FORBIDDEN";
    ErrorCode["NOT_FOUND"] = "NOT_FOUND";
    ErrorCode["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
