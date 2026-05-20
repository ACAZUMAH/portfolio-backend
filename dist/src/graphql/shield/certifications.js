"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificationShield = void 0;
const general_1 = require("./general");
exports.CertificationShield = {
    Query: {
        getCertificationById: general_1.isAuthenticated,
        getCertifications: general_1.isAuthenticated,
    },
    Mutation: {
        createCertification: general_1.isAuthenticated,
        updateCertification: general_1.isAuthenticated,
        deleteCertification: general_1.isAuthenticated,
    },
};
