"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackResumeDownload = void 0;
const enums_1 = require("../../common/enums");
const outboundClicks_1 = require("../../services/outboundClicks");
const resumeAssets_1 = require("../../services/resumeAssets");
/**
 * Track resume download.
 * @param data.id - Resume asset id
 * @param data.visitorId - Visitor id
 * @param data.path - Source path
 * @returns True when resume download is tracked
 */
const trackResumeDownload = async ({ id, visitorId, path, }) => {
    const resume = await (0, resumeAssets_1.incrementResumeDownload)(id);
    await (0, outboundClicks_1.trackOutboundClick)({
        label: "Resume download",
        url: resume?.url,
        type: enums_1.OutboundClickType.RESUME_DOWNLOAD,
        visitorId,
        path,
    });
    return true;
};
exports.trackResumeDownload = trackResumeDownload;
