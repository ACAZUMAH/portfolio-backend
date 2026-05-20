import { createAssetLoaders } from "./assets";
import { createProjectLoaders } from "./projects";
import { createUploadLoaders } from "./uploads";

export const createDataLoaders = () => ({
  ...createProjectLoaders(),
  ...createAssetLoaders(),
  ...createUploadLoaders(),
});

export type DataLoaders = ReturnType<typeof createDataLoaders>;
