import { isValidObjectId } from "mongoose";
import { ResumeAssetModel } from "src/models";

/**
 * Increment resume download count.
 * @param id - Resume asset id
 * @returns Updated resume asset or null
 */
export const incrementResumeDownload = async (id: string) => {
  if (!isValidObjectId(id)) return null;

  return ResumeAssetModel.findByIdAndUpdate(
    id,
    { $inc: { downloads: 1 } },
    { new: true },
  );
};
