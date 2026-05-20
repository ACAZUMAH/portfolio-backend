import { ObjectCannedACL } from "@aws-sdk/client-s3";
import { StorageDirectory } from "src/common/enums/storage";

export interface UploadContentToStorageParams {
  filename: string;
  directory?: StorageDirectory;
  mimeType: string;
  stream: Buffer;
  acl?: ObjectCannedACL;
}
