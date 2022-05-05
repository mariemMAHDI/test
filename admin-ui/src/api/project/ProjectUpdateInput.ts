import { TicketUpdateManyWithoutProjectsInput } from "./TicketUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  nom?: string;
  tickets?: TicketUpdateManyWithoutProjectsInput;
};
