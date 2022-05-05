import { Ticket } from "../ticket/Ticket";

export type Project = {
  createdAt: Date;
  id: string;
  nom: string;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
