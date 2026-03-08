import { motion } from "framer-motion";

function DashboardStats({ totalTasks, completedTasks, pendingTasks }) {

  const cardStyle =
    "bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl";

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

      <motion.div whileHover={{ y: -6 }} className={cardStyle}>
        <p className="text-gray-500">Total Tasks</p>
        <h2 className="text-4xl font-bold text-indigo-600 mt-2">
          {totalTasks}
        </h2>
      </motion.div>

      <motion.div whileHover={{ y: -6 }} className={cardStyle}>
        <p className="text-gray-500">Completed</p>
        <h2 className="text-4xl font-bold text-green-500 mt-2">
          {completedTasks}
        </h2>
      </motion.div>

      <motion.div whileHover={{ y: -6 }} className={cardStyle}>
        <p className="text-gray-500">Pending</p>
        <h2 className="text-4xl font-bold text-red-500 mt-2">
          {pendingTasks}
        </h2>
      </motion.div>

    </div>

  );
}

export default DashboardStats;