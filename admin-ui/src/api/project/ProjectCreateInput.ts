import { TicketCreateNestedManyWithoutProjectsInput } from "./TicketCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  nom: string;
  tickets?: TicketCreateNestedManyWithoutProjectsInput;
};
