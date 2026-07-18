export type EventStatus =
  | "Planning"
  | "Preparing"
  | "Running"
  | "Finished";

export interface EventItem {
  id: string;
  name: string;
  status: EventStatus;
  startDate: string;
  endDate: string;
  location: string;
  organizer: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateEventInput {
  name: string;
  status: EventStatus;
  startDate: string;
  endDate: string;
  location: string;
  organizer: string;
  description: string;
}
