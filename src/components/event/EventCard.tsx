import Link from "next/link";

import EventStatusBadge from "./EventStatusBadge";
import type { EventItem } from "@/types/event";

interface EventCardProps {
  event: EventItem;
}

function formatDate(date: string) {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function EventCard({
  event,
}: EventCardProps) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="block rounded-2xl border border-white/10 bg-[#15181f] p-6 transition hover:border-violet-500 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {event.organizer}
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            {event.name}
          </h2>
        </div>

        <EventStatusBadge status={event.status} />
      </div>

      <div className="mt-8 border-t border-white/10 pt-4">
        <p className="text-sm text-gray-400">
          {formatDate(event.startDate)}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          {event.location}
        </p>
      </div>
    </Link>
  );
}