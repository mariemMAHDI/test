import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TicketWhereInput = {
  deletedAt?: StringNullableFilter;
  httt?: StringNullableFilter;
  id?: StringFilter;
  nom?: StringFilter;
  project?: ProjectWhereUniqueInput;
};
