import { Project } from "../project/Project";

export type Ticket = {
  createdAt: Date;
  deletedAt: string | null;
  httt: string | null;
  id: string;
  nom: string;
  project?: Project | null;
  updatedAt: Date;
};
