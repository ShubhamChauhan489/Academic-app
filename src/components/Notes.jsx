// src/components/Notes.jsx
import { useState } from "react";

function Notes({ notes, setNotes }) {
  const [newNote, setNewNote] = useState("");

  // Add note
  const handleAddNote = () => {
    if (newNote.trim() === "") return;
    setNotes([...notes, { id: Date.now(), text: newNote }]);
    setNewNote("");
  };

  // Delete note
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Update note
  const handleUpdateNote = (id) => {
    const updatedText = prompt("Update note:", notes.find(n => n.id === id)?.text);
    if (updatedText !== null && updatedText.trim() !== "") {
      setNotes(notes.map((n) => (n.id === id ? { ...n, text: updatedText } : n)));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Notes</h2>

      {/* Add Note */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add new note..."
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddNote()}
        />
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          onClick={handleAddNote}
        >
          Add
        </button>
      </div>

      {/* Notes List */}
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes yet!</p>
      ) : (
        <ul className="space-y-2">
          {notes.map((note) => (
            <li
              key={note.id}
              className="flex justify-between items-center bg-gray-50 p-2 rounded shadow-sm"
            >
              <span>{note.text}</span>
              <div className="flex gap-2">
                <button
                  className="text-green-500 hover:text-green-700"
                  onClick={() => handleUpdateNote(note.id)}
                >
                  Update
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDeleteNote(note.id)}
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

export default Notes;