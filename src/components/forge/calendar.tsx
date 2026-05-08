"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { weeklyEvents } from "./mock-data";
import "@fullcalendar/core/index.css";
import "@fullcalendar/daygrid/index.css";
import "@fullcalendar/timegrid/index.css";

const eventColors: Record<string, string> = {
  study: "#3b82f6",
  class: "#8b5cf6",
  meal: "#f59e0b",
  travel: "#06b6d4",
  rest: "#22c55e",
};

export function Calendar() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1735] p-2">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={false}
        events={weeklyEvents.map((event) => ({
          id: event.id,
          title: event.subject,
          start: event.start,
          end: event.end,
          backgroundColor: eventColors[event.type],
          borderColor: eventColors[event.type],
        }))}
        height="auto"
        allDaySlot={false}
        slotMinTime="06:00:00"
        slotMaxTime="23:00:00"
      />
    </div>
  );
}
