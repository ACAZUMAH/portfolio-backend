"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = exports.generateRandomFileName = exports.getFileExtensionMimeTypes = exports.getMimeTypeFromBase64 = exports.generateOtp = exports.comparePassword = exports.hashPassword = exports.enumToObject = exports.validateEnumArray = exports.validateEnum = exports.objectIdsToStrings = exports.stringsToObjectIds = exports.getPageConnection = exports.getSanitizeOffset = exports.getSanitizePage = exports.getSanitizeLimit = exports.jwtVerify = exports.jwtSign = exports.constructHttpResponse = exports.getApp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = require("mongoose");
const http_errors_1 = __importDefault(require("http-errors"));
const constants_1 = require("../../common/constants");
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
const getApp = (key) => {
    return constants_1.apps.find((app) => app.key === key);
};
exports.getApp = getApp;
const constructHttpResponse = (data = null, error = null) => {
    const jsonResponse = {
        data,
        error: error
            ? {
                message: error.message,
                details: error
                    .details,
            }
            : null,
    };
    return jsonResponse;
};
exports.constructHttpResponse = constructHttpResponse;
const jwtSign = (obj) => {
    return jsonwebtoken_1.default.sign(obj, `${process.env.JWT_SECRET_KEY}`, {
        expiresIn: `50 days`,
    });
};
exports.jwtSign = jwtSign;
const jwtVerify = (token) => {
    return jsonwebtoken_1.default.verify(token, `${process.env.JWT_SECRET_KEY}`);
};
exports.jwtVerify = jwtVerify;
/**
 * Sanitize limit query param
 * @param limit - limit query param
 * @returns sanitized limit
 * @example getSanitizeLimit(10) // 10
 * @example getSanitizeLimit(0) // 10
 * @example getSanitizeLimit(101) // 10
 * @example getSanitizeLimit(-1) // 10
 * @example getSanitizeLimit(undefined) // 10
 * @example getSanitizeLimit(null) // 10
 * @example getSanitizeLimit('') // 10
 * @example getSanitizeLimit('abc') // 10
 * @example getSanitizeLimit('10') // 10
 * @example getSanitizeLimit('0') // 10
 * @example getSanitizeLimit('101') // 10
 * @example getSanitizeLimit('-1') // 10
 * @example getSanitizeLimit('undefined') // 10
 * @example getSanitizeLimit('null') // 10
 * @example getSanitizeLimit('abc') // 10
 */
const getSanitizeLimit = (limit) => {
    const limitNumber = Number(limit);
    if (Number.isNaN(limitNumber))
        return 10;
    return Math.min(Math.max(limitNumber, 1), 1000);
};
exports.getSanitizeLimit = getSanitizeLimit;
/**
 * get offset
 * @param page - page number
 * @param limit - limit
 * @returns offset
 * @example getOffset(1, 10) // 0
 */
const getSanitizePage = (page) => {
    const pageNumber = Number(page);
    if (Number.isNaN(pageNumber))
        return 1;
    return Math.max(pageNumber, 1);
};
exports.getSanitizePage = getSanitizePage;
const getSanitizeOffset = (page, limit) => {
    return (page - 1) * limit;
};
exports.getSanitizeOffset = getSanitizeOffset;
/**
 * get page connection
 * @param data - data to paginate
 * @param limit - limit
 * @param offset - offset
 * @returns page connection object with edges and pageInfo
 * @example getPageConnection([1,2,3,4,5], 2, 0) // { edges: [1,2], pageInfo: { offset: 0, limit: 2, total: 5, hasNextPage: true } }
 */
const getPageConnection = (data, page, limit) => {
    const hasNextPage = data.length > limit;
    const edges = hasNextPage ? data.slice(0, limit) : data;
    const pageInfo = { page, limit, total: edges.length, hasNextPage };
    return {
        edges,
        pageInfo,
    };
};
exports.getPageConnection = getPageConnection;
const stringsToObjectIds = (strings = []) => {
    return strings.map((string) => new mongoose_1.Types.ObjectId(string));
};
exports.stringsToObjectIds = stringsToObjectIds;
const objectIdsToStrings = (objectIds = []) => {
    return objectIds.map((objectId) => objectId.toString());
};
exports.objectIdsToStrings = objectIdsToStrings;
const validateEnum = (enumType, value, errorMessage) => {
    const validValues = Object.values(enumType);
    if (!validValues.includes(value))
        throw http_errors_1.default.BadRequest(errorMessage);
};
exports.validateEnum = validateEnum;
const validateEnumArray = (enumType, values, errorMessage) => {
    values.forEach((value) => (0, exports.validateEnum)(enumType, value, errorMessage));
};
exports.validateEnumArray = validateEnumArray;
const enumToObject = (enumType) => {
    return Object.keys(enumType).reduce((accumulator, key) => ({
        ...accumulator,
        [key]: String(enumType[key]),
    }), {});
};
exports.enumToObject = enumToObject;
/**
 * @description Hashes a plain text password using bcrypt.
 * @param password - The plain text password to hash.
 * @returns A hashed version of the password.
 * @throws Will throw an error if hashing fails.
 */
const hashPassword = async (password) => {
    try {
        const salt = await bcrypt_1.default.genSalt(10);
        return await bcrypt_1.default.hash(password, salt);
    }
    catch (error) {
        throw new Error("Unable to hash password");
    }
};
exports.hashPassword = hashPassword;
/**
 * @description Compares a plain text password with a hashed password.
 * @param password - The plain text password to compare.
 * @param hash - The hashed password to compare against.
 * @returns A boolean indicating whether the passwords match.
 * @throws Will throw an error if comparison fails.
 */
const comparePassword = async (password, hash) => {
    try {
        return await bcrypt_1.default.compare(password, hash);
    }
    catch (error) {
        throw new Error("Unable to compare password");
    }
};
exports.comparePassword = comparePassword;
const generateOtp = (length = 6) => {
    const characters = "0123456789";
    let otp = "";
    for (let index = 0; index < length; index += 1) {
        otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return otp;
};
exports.generateOtp = generateOtp;
/**
 * get mime type from base64 string
 * @param base64 - base64 string
 * @returns mime type
 * @example getMimeTypeFromBase64('JVBERi0') // 'application/pdf'
 * @example getMimeTypeFromBase64('R0lGODdh') // 'image/gif'
 */
const getMimeTypeFromBase64 = (base64) => {
    const signatures = {
        "/9j/": "image/jpg",
        UklGR: "image/webp",
        R0lGODdh: "image/gif",
        R0lGODlh: "image/gif",
        iVBORw0KGgo: "image/png",
        JVBERi0: "application/pdf",
        "data:image/jpeg;base64,": "image/jpeg",
        "data:image/png;base64,": "image/png",
        "data:image/gif;base64,": "image/gif",
        "data:image/webp;base64,": "image/webp",
        "data:image/svg+xml;base64,": "image/svg+xml",
        "data:image/tiff;base64,": "image/tiff",
        "data:image/bmp;base64,": "image/bmp",
        "data:image/x-icon;base64,": "image/x-icon",
    };
    for (const signature of Object.keys(signatures)) {
        if (base64.indexOf(signature) === 0) {
            return signatures[signature];
        }
    }
    throw http_errors_1.default.BadRequest("Invalid base64 string");
};
exports.getMimeTypeFromBase64 = getMimeTypeFromBase64;
/**
 * get file extension mime types
 * @param mimeType - mime type
 * @returns file extension
 * @example getFileExtensionMimeTypes('application/pdf') // 'pdf'
 */
const getFileExtensionMimeTypes = (mimeType) => {
    const mimeTypes = {
        "application/pdf": "pdf",
        "image/gif": "gif",
        "image/png": "png",
        "image/jpg": "jpg",
        "image/jpeg": "jpeg",
        "image/webp": "webp",
        "image/svg+xml": "svg",
        "image/tiff": "tiff",
        "image/bmp": "bmp",
        "image/x-icon": "ico",
    };
    return mimeTypes[mimeType];
};
exports.getFileExtensionMimeTypes = getFileExtensionMimeTypes;
/**
 * generate a random file name
 * @param name - file name
 * @returns random file name
 * @example generateRandomFileName('file.pdf') // '35b9f7e07b7d4b7b8b7b7b7b7b7b7b7b.pdf'
 */
const generateRandomFileName = (name) => {
    const extension = name.split(".").pop();
    return `${(0, uuid_1.v4)().replace(/-/g, "")}.${extension}`;
};
exports.generateRandomFileName = generateRandomFileName;
const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};
exports.deepClone = deepClone;
