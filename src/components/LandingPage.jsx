import { motion } from "framer-motion";
import { FaTasks, FaFileAlt, FaCalendarAlt } from "react-icons/fa";

function LandingPage({ startApp }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white text-gray-800 flex flex-col">

      {/* Animated Background Blobs */}
      <motion.div 
        className="absolute top-[-150px] left-[-150px] w-96 h-96 bg-purple-300 rounded-full opacity-40 blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-100px] w-96 h-96 bg-indigo-300 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full relative z-10">
        <h1 className="text-2xl font-bold text-gray-800">Academic Productivity</h1>
        <button
          onClick={startApp}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-indigo-500 transition"
        >
          Open Dashboard
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-24 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-indigo-700"
        >
          Organize Your Academic Life
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl text-gray-700 mb-10"
        >
          Manage tasks, research papers, notes, and deadlines in one powerful dashboard designed for students and researchers.
        </motion.p>

        <motion.button
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          onClick={startApp}
          className="bg-indigo-600 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-xl hover:bg-indigo-500 transition transform hover:scale-105"
        >
          Get Started 🚀
        </motion.button>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform bg-white">
            <FaTasks className="mx-auto text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Task Manager</h3>
            <p>Track assignments, research tasks, and deadlines efficiently.</p>
          </div>

          <div className="p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform bg-white">
            <FaFileAlt className="mx-auto text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Research Tracker</h3>
            <p>Organize research papers, journals, and conference submissions.</p>
          </div>

          <div className="p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform bg-white">
            <FaCalendarAlt className="mx-auto text-indigo-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Calendar & Deadlines</h3>
            <p>Visualize important dates and never miss submissions.</p>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="bg-indigo-50 py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-indigo-700">Your Productivity Dashboard</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl shadow-lg bg-white">
              <h4 className="font-semibold mb-2">Tasks Overview</h4>
              <p>Quick view of total tasks and pending assignments.</p>
            </div>
            <div className="p-6 rounded-xl shadow-lg bg-white">
              <h4 className="font-semibold mb-2">Research Papers</h4>
              <p>Track your journals, papers, and submissions easily.</p>
            </div>
            <div className="p-6 rounded-xl shadow-lg bg-white">
              <h4 className="font-semibold mb-2">Upcoming Deadlines</h4>
              <p>See all important dates at a glance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Managing Your Academic Work Today</h2>
        <button
          onClick={startApp}
          className="bg-indigo-600 text-white px-10 py-4 rounded-lg font-semibold shadow-xl hover:bg-indigo-500 transition transform hover:scale-105"
        >
          Launch Dashboard
        </button>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-gray-500 text-sm relative z-10">
        © 2026 Academic Dashboard — Built by Shubham Chauhan
      </div>
    </div>
  );
}

export default LandingPage;