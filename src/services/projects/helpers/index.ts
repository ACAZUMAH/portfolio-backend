import { ProjectVisibility } from "src/common/enums";
import { ProjectDocument } from "src/common/interfaces";

const publicProjectVisibilities = [
  ProjectVisibility.PUBLIC,
  ProjectVisibility.PRIVATE_SUMMARY,
  ProjectVisibility.PASSWORD_PROTECTED,
];

export const publicProjectFilter = {
  visibility: { $in: publicProjectVisibilities },
};

/**
 * Format a project for public portfolio access.
 * @param project - Project document
 * @returns Public-safe project document
 */
export const toPublicProject = (project?: ProjectDocument | null) => {
  if (!project) return null;

  const publicProject =
    typeof (project as any).toObject === "function"
      ? (project as any).toObject({ virtuals: true })
      : project;

  if (publicProject.visibility === ProjectVisibility.PRIVATE_SUMMARY) {
    return {
      ...publicProject,
      problem: undefined,
      features: [],
      outcomes: [],
      lessons: [],
      caseStudySections: [],
    };
  }

  if (publicProject.visibility === ProjectVisibility.PASSWORD_PROTECTED) {
    return {
      ...publicProject,
      features: [],
      outcomes: [],
      lessons: [],
      caseStudySections: [],
    };
  }

  return publicProject;
};
