import { motion } from "framer-motion";

function DashboardHeader({ addNewTask }) {
  return (
    <div className="relative mb-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-6 rounded-2xl shadow-xl overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-[-60px] right-[-60px] w-48 h-48 bg-yellow-300 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-[-60px] left-[-60px] w-48 h-48 bg-indigo-400 rounded-full opacity-30 blur-3xl"></div>

      {/* Header Content */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Academic Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-indigo-100"
          >
            Manage tasks, research papers, and notes in one place
          </motion.p>
        </div>

        <motion.button
          onClick={addNewTask}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 md:mt-0 bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold shadow-lg hover:shadow-indigo-400 transition"
        >
          + New Task
        </motion.button>
      </div>
    </div>
  );
}

export default DashboardHeader;