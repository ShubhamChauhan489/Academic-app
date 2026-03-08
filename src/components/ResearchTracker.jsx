// src/components/ResearchTracker.jsx
import { useState, useEffect } from "react";

function ResearchTracker({ papers, setPapers }) {
  const [newPaperTitle, setNewPaperTitle] = useState("");
  const [newCriteria, setNewCriteria] = useState("");

  // Add new research paper
  const handleAddPaper = () => {
    if (newPaperTitle.trim() === "") return;
    const newPaper = {
      id: Date.now(),
      title: newPaperTitle,
      criteria: newCriteria,
    };
    setPapers([...papers, newPaper]);
    setNewPaperTitle("");
    setNewCriteria("");
  };

  // Delete paper
  const handleDeletePaper = (id) => {
    setPapers(papers.filter((paper) => paper.id !== id));
  };

  // Update paper
  const handleUpdatePaper = (id) => {
    const updatedTitle = prompt("Update paper title:");
    const updatedCriteria = prompt("Update criteria/journal/conference:");
    if (updatedTitle !== null && updatedTitle.trim() !== "") {
      setPapers(
        papers.map((paper) =>
          paper.id === id
            ? { ...paper, title: updatedTitle, criteria: updatedCriteria }
            : paper
        )
      );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Research Tracker</h2>

      {/* Add New Paper */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Paper Title"
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={newPaperTitle}
          onChange={(e) => setNewPaperTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Criteria / Journal / Conference"
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={newCriteria}
          onChange={(e) => setNewCriteria(e.target.value)}
        />
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
          onClick={handleAddPaper}
        >
          Add
        </button>
      </div>

      {/* Papers List */}
      {papers.length === 0 ? (
        <p className="text-gray-500">No research papers yet!</p>
      ) : (
        <ul className="space-y-2">
          {papers.map((paper) => (
            <li
              key={paper.id}
              className="flex justify-between items-center bg-gray-50 p-2 rounded shadow-sm"
            >
              <div className="flex flex-col">
                <span className="font-medium">{paper.title}</span>
                <span className="text-gray-500 text-sm">{paper.criteria}</span>
              </div>
              <div className="flex gap-2">
                <button
                  className="text-green-500 hover:text-green-700"
                  onClick={() => handleUpdatePaper(paper.id)}
                >
                  Update
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDeletePaper(paper.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResearchTracker;