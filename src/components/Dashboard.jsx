import { motion } from "framer-motion";
import TaskManager from "../components/TaskManager";
import Notes from "../components/Notes";
import ResearchTracker from "../components/ResearchTracker";
import CalendarDeadlines from "../components/CalendarDeadlines";
import ProductivityCharts from "../components/ProductivityCharts";
import QuickLinks from "../components/QuickLinks";

function Dashboard({ tasks, setTasks, notes, setNotes, papers, setPapers }) {

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-white"
    >

      {/* WELCOME BANNER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 p-6 rounded-2xl bg-white shadow-lg text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
          Welcome, Shubham Chauhan 👋
        </h2>
        <p className="text-gray-700 mt-1 text-lg">
          Welcome back! Ready to be productive today?
        </p>
      </motion.div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <motion.div whileHover={{ y: -6 }} className="bg-white shadow-lg p-6 rounded-2xl text-center">
          <p className="text-gray-500">Total Tasks</p>
          <h2 className="text-4xl font-bold text-indigo-600 mt-2">{totalTasks}</h2>
        </motion.div>

        <motion.div whileHover={{ y: -6 }} className="bg-white shadow-lg p-6 rounded-2xl text-center">
          <p className="text-gray-500">Completed</p>
          <h2 className="text-4xl font-bold text-green-500 mt-2">{completedTasks}</h2>
        </motion.div>

        <motion.div whileHover={{ y: -6 }} className="bg-white shadow-lg p-6 rounded-2xl text-center">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-4xl font-bold text-red-500 mt-2">{pendingTasks}</h2>
        </motion.div>
      </div>

      {/* QUICK LINKS */}
      <div className="mb-12 bg-white shadow-lg p-6 rounded-2xl">
        <QuickLinks />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div whileHover={{ scale: 1.01 }} className="bg-white shadow-lg p-6 rounded-2xl">
          <TaskManager tasks={tasks} setTasks={setTasks} />
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }} className="bg-white shadow-lg p-6 rounded-2xl">
          <ResearchTracker papers={papers} setPapers={setPapers} />
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }} className="bg-white shadow-lg p-6 rounded-2xl">
          <Notes notes={notes} setNotes={setNotes} />
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }} className="bg-white shadow-lg p-6 rounded-2xl">
          <CalendarDeadlines tasks={tasks} papers={papers} notes={notes} />
        </motion.div>
      </div>

      {/* PRODUCTIVITY CHART */}
      <div className="mt-8 bg-white shadow-lg p-6 rounded-2xl">
        <ProductivityCharts tasks={tasks} notes={notes} papers={papers} />
      </div>

      {/* FLOATING BUTTON */}
      <div className="fixed bottom-8 right-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white w-16 h-16 rounded-full shadow-xl text-3xl flex items-center justify-center"
        >
          +
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Dashboard;