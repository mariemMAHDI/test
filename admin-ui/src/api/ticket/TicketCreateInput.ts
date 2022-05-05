import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TicketCreateInput = {
  deletedAt?: string | null;
  httt?: string | null;
  nom: string;
  project?: ProjectWhereUniqueInput | null;
};
