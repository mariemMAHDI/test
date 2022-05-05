import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "deletedAt";

export const TicketTitle = (record: TTicket): string => {
  return record.deletedAt || record.id;
};
