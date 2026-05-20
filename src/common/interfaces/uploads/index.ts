import { Types } from "mongoose";
import { StorageDirectory } from "src/common/enums/storage";

export interface UploadDocument {
  _id: Types.ObjectId;
  filename: string;
  directory: string;
  mimeType: string;
  size: number;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUpload {
  filename: string;
  directory: string;
  mimeType: string;
  size: number;
}

export interface UpdateUpload {
  id: string;
  filename?: string;
  directory?: string;
  mimeType?: string;
  size?: number;
  url?: string;
}

export interface UploadPhoto {
  file: string;
  directory: StorageDirectory;
}
