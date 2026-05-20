import DataLoader from "dataloader";
import { ProjectModel } from "src/models";

export const createProjectLoader = () => {
  const getProjectsByIds = async (ids: readonly string[]) => {
    const projects = await ProjectModel.find({ _id: { $in: ids } });
    return ids.map(id => projects.find(project => String(project._id) === id) ?? null);
  };

  return new DataLoader(getProjectsByIds);
};
