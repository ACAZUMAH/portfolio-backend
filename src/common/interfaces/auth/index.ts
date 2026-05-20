import { Types } from "mongoose";
import { AdminUserDocument } from "../adminUser";

export interface AuthDocument extends Document {
  adminId: Types.ObjectId | string;
  token: string;
  expiresIn: Date;
  phoneNumber?: string;
  email?: string;
}

export interface AuthPayload {
  adminId: string;
  email: string;
}

export interface AuthAdmin {
  email: string;
  password: string;
}

export interface CompleteLoginToken {
  adminUser: AdminUserDocument;
  password: string;
}
