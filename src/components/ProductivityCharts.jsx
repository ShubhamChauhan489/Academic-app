// src/components/ProductivityCharts.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function ProductivityCharts({ tasks, notes, papers }) {
  // Prepare data
  const data = [
    {
      name: "Tasks",
      Completed: tasks.filter(t => t.completed).length,
      Pending: tasks.filter(t => !t.completed).length,
    },
    {
      name: "Research",
      Completed: papers.length, // count of papers added
      Pending: 0, // can add "to review" later
    },
    {
      name: "Notes",
      Completed: notes.length,
      Pending: 0,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Productivity Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Completed" fill="#4ade80" />
          <Bar dataKey="Pending" fill="#f87171" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProductivityCharts;