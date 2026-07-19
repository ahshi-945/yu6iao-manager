import type { EventStatus } from "@/types/event";

interface EventStatusBadgeProps {
  status: EventStatus;
}

const statusStyles: Record<EventStatus, string> = {
  Planning: "border-blue-500/20 bg-blue-500/10 text-blue-300",
  Preparing: "border-yellow-500/20 bg-yellow-500/10 text-yellow-300",
  Running: "border-green-500/20 bg-green-500/10 text-green-300",
  Finished: "border-white/10 bg-white/5 text-gray-400",
};

export default function EventStatusBadge({
  status,
}: EventStatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
