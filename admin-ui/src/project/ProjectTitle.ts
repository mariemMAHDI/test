import { Project as TProject } from "../api/project/Project";

export const PROJECT_TITLE_FIELD = "nom";

export const ProjectTitle = (record: TProject): string => {
  return record.nom || record.id;
};
