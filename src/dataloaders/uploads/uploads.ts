import DataLoader from "dataloader";
import { UploadModel } from "src/models/uploads";

export const createUploadLoader = () => {
  const getUploadsByIds = async (ids: readonly string[]) => {
    const uploads = await UploadModel.find({ _id: { $in: ids } });
    return ids.map(id => uploads.find(upload => upload._id.toString() === id));
  };

  return new DataLoader(getUploadsByIds);
};
