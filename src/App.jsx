import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import TaskManager from "./components/TaskManager";
import Notes from "./components/Notes";
import ResearchTracker from "./components/ResearchTracker";
import CalendarDeadlines from "./components/CalendarDeadlines";
import LandingPage from "./components/LandingPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [started, setStarted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // GLOBAL STATES
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [papers, setPapers] = useState(
    JSON.parse(localStorage.getItem("papers")) || []
  );

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  // LOCAL STORAGE SYNC
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("papers", JSON.stringify(papers));
  }, [papers]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // If user hasn't started yet, show landing page
  if (!started) {
    return <LandingPage startApp={() => setStarted(true)} />;
  }

  // MAIN DASHBOARD APP
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex">

        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? "ml-64" : "ml-16"
          } flex flex-col min-h-screen`}
        >

          {/* Header */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white/20 dark:bg-gray-900/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg mb-8">
  
  {/* Left: Logo + App Name */}
  <div className="flex items-center gap-4">
   

    {/* App Name */}
    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
      Academic Dashboard
    </h1>
  </div>

  {/* Right: Dark Mode Toggle */}
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="mt-4 md:mt-0 bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-indigo-500 transition"
  >
    {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
  </button>

</div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-6">
            {activeTab === "home" && (
              <Dashboard
                tasks={tasks}
                setTasks={setTasks}
                notes={notes}
                setNotes={setNotes}
                papers={papers}
                setPapers={setPapers}
              />
            )}

            {activeTab === "tasks" && (
              <TaskManager tasks={tasks} setTasks={setTasks} />
            )}

            {activeTab === "notes" && (
              <Notes notes={notes} setNotes={setNotes} />
            )}

            {activeTab === "calendar" && (
              <CalendarDeadlines
                tasks={tasks}
                papers={papers}
                notes={notes}
              />
            )}

            {activeTab === "research" && (
              <ResearchTracker papers={papers} setPapers={setPapers} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;