import DataLoader from "dataloader";
import { ResumeAssetModel } from "src/models";

export const createResumeAssetLoader = () => {
  const getResumeAssetsByIds = async (ids: readonly string[]) => {
    const resumes = await ResumeAssetModel.find({ _id: { $in: ids } });
    return ids.map(id => resumes.find(resume => String(resume._id) === id) ?? null);
  };

  return new DataLoader(getResumeAssetsByIds);
};
