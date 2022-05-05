import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  httt?: SortOrder;
  id?: SortOrder;
  nom?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
};
