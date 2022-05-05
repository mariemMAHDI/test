import { StringFilter } from "../../util/StringFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  nom?: StringFilter;
  tickets?: TicketListRelationFilter;
};
