import { createMediaAssetsByProjectIdLoader } from "./mediaAssets";
import { createResumeAssetLoader } from "./resumeAssets";

export const createAssetLoaders = () => ({
  mediaAssetsByProjectIdLoader: createMediaAssetsByProjectIdLoader(),
  resumeAssetLoader: createResumeAssetLoader(),
});
