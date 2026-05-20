import { model, Schema } from "mongoose";
import { Collections } from "src/common/enums";
import { AdminUserDocument } from "src/common/interfaces";

const adminUserSchema = new Schema<AdminUserDocument>(
  {
    name: String,
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true },
);

export const AdminUserModel = model<AdminUserDocument>(
  Collections.AdminUsers,
  adminUserSchema,
);
