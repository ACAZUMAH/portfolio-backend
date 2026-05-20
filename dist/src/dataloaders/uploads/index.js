"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUploadLoaders = void 0;
const uploads_1 = require("./uploads");
const createUploadLoaders = () => ({
    uploadLoader: (0, uploads_1.createUploadLoader)(),
});
exports.createUploadLoaders = createUploadLoaders;
