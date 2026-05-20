import { UploadDocument } from "src/common/interfaces/uploads";

/*
 * Type Resolvers for Role type
 */
const id = (parent: UploadDocument) => `${parent._id}`;
const url = (parent: UploadDocument) =>
  `${process.env.UPLOADS_BASE_URL}/${parent.directory}/${parent.filename}`;

export const uploadResolvers = {
  Upload: {
    id,
    url,
  },
};
