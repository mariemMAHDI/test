import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TicketUpdateInput = {
  deletedAt?: string | null;
  httt?: string | null;
  nom?: string;
  project?: ProjectWhereUniqueInput | null;
};
