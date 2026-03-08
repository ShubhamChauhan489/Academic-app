import {
  FaBars,
  FaHome,
  FaTasks,
  FaFileAlt,
  FaCalendarAlt,
  FaEnvelope,
  FaGoogleDrive,
  FaFileExcel,
  FaFileWord,
} from "react-icons/fa";

function Sidebar({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) {

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, tab: "home" },
    { name: "Tasks", icon: <FaTasks />, tab: "tasks" },
    { name: "Notes", icon: <FaFileAlt />, tab: "notes" },
    { name: "Calendar", icon: <FaCalendarAlt />, tab: "calendar" },
    { name: "Gmail", icon: <FaEnvelope />, link: "https://mail.google.com" },
    { name: "Drive", icon: <FaGoogleDrive />, link: "https://drive.google.com" },
    { name: "Sheets", icon: <FaFileExcel />, link: "https://sheets.google.com" },
    { name: "Docs", icon: <FaFileWord />, link: "https://docs.google.com" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-900 shadow-lg flex flex-col transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-16"
      }`}
    >

      {/* Header */}

      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">

        {sidebarOpen && (
          <h1 className="font-bold text-gray-800 dark:text-white">
            Dashboard
          </h1>
        )}

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition"
        >
          <FaBars />
        </button>

      </div>

      {/* Menu */}

      <nav className="flex-1 mt-4">

        {menuItems.map((item) => {

          // External Links
          if (item.link) {
            return (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 cursor-pointer hover:bg-indigo-100 dark:hover:bg-gray-700 transition"
              >
                <span className="text-lg">{item.icon}</span>
                {sidebarOpen && <span>{item.name}</span>}
              </a>
            );
          }

          // Internal Tabs
          return (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.tab)}
              className={`flex items-center gap-3 p-3 w-full text-left cursor-pointer transition ${
                activeTab === item.tab
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && <span>{item.name}</span>}
            </button>
          );

        })}

      </nav>

    </div>
  );
}

export default Sidebar;