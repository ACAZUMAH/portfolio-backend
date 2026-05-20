import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import createError from "http-errors";
import { apps } from "src/common/constants";
import { EnumType } from "src/common/interfaces";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export const getApp = (key: string) => {
  return apps.find((app) => app.key === key);
};

export const constructHttpResponse = <T>(
  data: T | null = null,
  error: createError.HttpError | null = null,
) => {
  const jsonResponse = {
    data,
    error: error
      ? {
          message: error.message,
          details: (error as createError.HttpError & { details?: unknown })
            .details,
        }
      : null,
  };

  return jsonResponse;
};

export const jwtSign = (obj: object) => {
  return jwt.sign(obj, `${process.env.JWT_SECRET_KEY}`, {
    expiresIn: `50 days`,
  });
};

export const jwtVerify = (token: string): any => {
  return jwt.verify(token, `${process.env.JWT_SECRET_KEY}`);
};

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
export const getSanitizeLimit = (limit?: number | string | null) => {
  const limitNumber = Number(limit);
  if (Number.isNaN(limitNumber)) return 10;
  return Math.min(Math.max(limitNumber, 1), 1000);
};

/**
 * get offset
 * @param page - page number
 * @param limit - limit
 * @returns offset
 * @example getOffset(1, 10) // 0
 */
export const getSanitizePage = (page?: number | string | null) => {
  const pageNumber = Number(page);
  if (Number.isNaN(pageNumber)) return 1;
  return Math.max(pageNumber, 1);
};

export const getSanitizeOffset = (page: number, limit: number) => {
  return (page - 1) * limit;
};

/**
 * get page connection
 * @param data - data to paginate
 * @param limit - limit
 * @param offset - offset
 * @returns page connection object with edges and pageInfo
 * @example getPageConnection([1,2,3,4,5], 2, 0) // { edges: [1,2], pageInfo: { offset: 0, limit: 2, total: 5, hasNextPage: true } }
 */
export const getPageConnection = <T>(
  data: Array<T>,
  page: number,
  limit: number,
) => {
  const hasNextPage = data.length > limit;
  const edges = hasNextPage ? data.slice(0, limit) : data;
  const pageInfo = { page, limit, total: edges.length, hasNextPage };

  return {
    edges,
    pageInfo,
  };
};

export const stringsToObjectIds = (strings: string[] = []) => {
  return strings.map((string) => new Types.ObjectId(string));
};

export const objectIdsToStrings = (objectIds: Types.ObjectId[] = []) => {
  return objectIds.map((objectId) => objectId.toString());
};

export const validateEnum = <T extends EnumType>(
  enumType: T,
  value: string,
  errorMessage: string,
) => {
  const validValues = Object.values(enumType);
  if (!validValues.includes(value)) throw createError.BadRequest(errorMessage);
};

export const validateEnumArray = <T extends EnumType>(
  enumType: T,
  values: string[],
  errorMessage: string,
) => {
  values.forEach((value) => validateEnum(enumType, value, errorMessage));
};

export const enumToObject = <T extends Record<string, string | number>>(
  enumType: T,
): { [K in keyof T]: string } => {
  return Object.keys(enumType).reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: String(enumType[key as keyof T]),
    }),
    {} as { [K in keyof T]: string },
  );
};

/**
 * @description Hashes a plain text password using bcrypt.
 * @param password - The plain text password to hash.
 * @returns A hashed version of the password.
 * @throws Will throw an error if hashing fails.
 */
export const hashPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error("Unable to hash password");
  }
};

/**
 * @description Compares a plain text password with a hashed password.
 * @param password - The plain text password to compare.
 * @param hash - The hashed password to compare against.
 * @returns A boolean indicating whether the passwords match.
 * @throws Will throw an error if comparison fails.
 */
export const comparePassword = async (password: string, hash: string) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw new Error("Unable to compare password");
  }
};

export const generateOtp = (length = 6) => {
  const characters = "0123456789";
  let otp = "";

  for (let index = 0; index < length; index += 1) {
    otp += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return otp;
};

/**
 * get mime type from base64 string
 * @param base64 - base64 string
 * @returns mime type
 * @example getMimeTypeFromBase64('JVBERi0') // 'application/pdf'
 * @example getMimeTypeFromBase64('R0lGODdh') // 'image/gif'
 */
export const getMimeTypeFromBase64 = (base64: string) => {
  const signatures: { [key: string]: string } = {
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

  throw createError.BadRequest("Invalid base64 string");
};

/**
 * get file extension mime types
 * @param mimeType - mime type
 * @returns file extension
 * @example getFileExtensionMimeTypes('application/pdf') // 'pdf'
 */
export const getFileExtensionMimeTypes = (mimeType: string) => {
  const mimeTypes: { [key: string]: string } = {
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

/**
 * generate a random file name
 * @param name - file name
 * @returns random file name
 * @example generateRandomFileName('file.pdf') // '35b9f7e07b7d4b7b8b7b7b7b7b7b7b7b.pdf'
 */
export const generateRandomFileName = (name: string) => {
  const extension = name.split(".").pop();
  return `${uuidv4().replace(/-/g, "")}.${extension}`;
};

export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};
