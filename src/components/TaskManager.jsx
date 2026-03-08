// src/components/TaskManager.jsx
import { useState } from "react";

function TaskManager({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");

  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), title: newTask, completed: false },
    ]);
    setNewTask("");
  };

  // Delete a task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle completed
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>

      {/* Add Task */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add new task..."
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>

      {/* Task List */}
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet!</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-50 p-2 rounded shadow-sm"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTask(task.id)}
                  className="h-5 w-5"
                />
                <span
                  className={`${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.title}
                </span>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskManager;