import { Document, Types } from "mongoose";

export interface AdminUserDocument extends Document {
  name?: string;
  email: string;
  passwordHash: string;

  createdAt?: Date;
  updatedAt?: Date;
}
