import { createUploadLoader } from "./uploads";

export const createUploadLoaders = () => ({
  uploadLoader: createUploadLoader(),
});
