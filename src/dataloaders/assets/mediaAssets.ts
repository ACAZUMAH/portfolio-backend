import DataLoader from "dataloader";
import { MediaAssetModel } from "src/models";

export const createMediaAssetsByProjectIdLoader = () => {
  const getMediaAssetsByProjectIds = async (projectIds: readonly string[]) => {
    const mediaAssets = await MediaAssetModel.find({ projectId: { $in: projectIds } });
    return projectIds.map(projectId =>
      mediaAssets.filter(mediaAsset => mediaAsset.projectId === projectId),
    );
  };

  return new DataLoader(getMediaAssetsByProjectIds);
};
