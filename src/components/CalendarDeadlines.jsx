// src/components/CalendarDeadlines.jsx
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function CalendarDeadlines({ tasks, papers, notes }) {
  const [events, setEvents] = useState(() => {
    const taskEvents = tasks.map((t) => ({
      id: `task-${t.id}`,
      title: t.title || t.text || "Task",
      date: t.dueDate || new Date().toISOString().split("T")[0],
      color: t.completed ? "#4ade80" : "#f87171",
    }));

    const paperEvents = papers.map((p) => ({
      id: `paper-${p.id}`,
      title: p.title || "Research Paper",
      date: p.dueDate || new Date().toISOString().split("T")[0],
      color: "#60a5fa",
    }));

    const noteEvents = notes.map((n) => ({
      id: `note-${n.id}`,
      title: n.text || "Note",
      date: n.dueDate || new Date().toISOString().split("T")[0],
      color: "#facc15",
    }));

    return [...taskEvents, ...paperEvents, ...noteEvents];
  });

  // Add event on date click
  const handleDateClick = (info) => {
    const title = prompt("Add new event for " + info.dateStr);
    if (title) {
      setEvents([...events, { id: Date.now(), title, date: info.dateStr, color: "#a78bfa" }]);
    }
  };

  // Edit or Delete on event click
  const handleEventClick = (info) => {
    const action = prompt(
      `Edit event "${info.event.title}" or type "delete" to remove:`,
      info.event.title
    );
    if (action === null) return; // Cancel
    if (action.toLowerCase() === "delete") {
      setEvents(events.filter((e) => e.id.toString() !== info.event.id.toString()));
    } else if (action.trim() !== "") {
      setEvents(
        events.map((e) =>
          e.id.toString() === info.event.id.toString() ? { ...e, title: action } : e
        )
      );
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Calendar & Deadlines</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        height={500}
      />
    </div>
  );
}

export default CalendarDeadlines;