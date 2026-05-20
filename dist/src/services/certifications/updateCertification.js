"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCertification = void 0;
const models_1 = require("../../models");
const getCertificationById_1 = require("./getCertificationById");
/**
 * Update a certification.
 * @param data.id - Certification id
 * @param data - Certification update data
 * @returns Updated certification
 * @throws 400 error if id is invalid
 * @throws 404 error if certification is not found
 */
const updateCertification = async (data) => {
    const certification = await (0, getCertificationById_1.getCertificationById)(data.id);
    const update = {};
    if (data.title)
        update.title = data.title;
    if (data.issuer)
        update.issuer = data.issuer;
    if (data.date)
        update.date = data.date;
    if (data.url)
        update.url = data.url;
    if (data.order)
        update.order = data.order;
    return await models_1.CertificationModel.findByIdAndUpdate(certification._id, { $set: update }, { new: true });
};
exports.updateCertification = updateCertification;
