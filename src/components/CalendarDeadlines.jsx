// src/components/CalendarDeadlines.jsx
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function CalendarDeadlines({ tasks, papers, notes }) {
  const [events, setEvents] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen for responsive calendar
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize events from tasks, papers, notes
  useEffect(() => {
    const taskEvents = tasks.map((t) => ({
      id: `task-${t.id}`,
      title: t.title || t.text || "Task",
      date: t.dueDate || new Date().toISOString().split("T")[0],
      color: t.completed ? "#4ade80" : "#f87171", // green/red
    }));

    const paperEvents = papers.map((p) => ({
      id: `paper-${p.id}`,
      title: p.title || "Research Paper",
      date: p.dueDate || new Date().toISOString().split("T")[0],
      color: "#60a5fa", // blue
    }));

    const noteEvents = notes.map((n) => ({
      id: `note-${n.id}`,
      title: n.text || "Note",
      date: n.dueDate || new Date().toISOString().split("T")[0],
      color: "#facc15", // yellow
    }));

    setEvents([...taskEvents, ...paperEvents, ...noteEvents]);
  }, [tasks, papers, notes]);

  // Add new event on date click
  const handleDateClick = (info) => {
    const title = prompt("Add new event for " + info.dateStr);
    if (title) {
      setEvents((prev) => [
        ...prev,
        { id: Date.now(), title, date: info.dateStr, color: "#a78bfa" },
      ]);
    }
  };

  // Edit or delete event on click
  const handleEventClick = (info) => {
    const action = prompt(
      `Edit event "${info.event.title}" or type "delete" to remove:`,
      info.event.title
    );
    if (action === null) return; // Cancel
    if (action.toLowerCase() === "delete") {
      setEvents((prev) =>
        prev.filter((e) => e.id.toString() !== info.event.id.toString())
      );
    } else if (action.trim() !== "") {
      setEvents((prev) =>
        prev.map((e) =>
          e.id.toString() === info.event.id.toString() ? { ...e, title: action } : e
        )
      );
    }
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-2xl">
      <h2 className="text-xl font-semibold mb-4 text-indigo-700">
        Calendar & Deadlines
      </h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={isMobile ? "timeGridWeek" : "dayGridMonth"}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: isMobile
            ? "timeGridWeek,timeGridDay"
            : "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        height={isMobile ? 600 : 500}
        contentHeight="auto"
        themeSystem="standard"
        className="fc-theme-tailwind"
      />
    </div>
  );
}

export default CalendarDeadlines;