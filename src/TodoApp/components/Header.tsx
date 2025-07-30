import { useState } from "react";
import { useTodoContext } from "../TodoContextProvider";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [text, setText] = useState("");
  const { handleAddTask } = useTodoContext();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-teal-600 rounded-lg shadow-md mb-4 relative">
      
      {/* Back Button */}
      <span
        className="absolute left-3 top-3 text-slate-800 px-2 py-1 border bg-slate-100 rounded cursor-pointer"
        onClick={() => navigate("/")}
      >
        &larr;
      </span>

      {/* Header Title */}
      <header className="mb-4 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">Kanban To Do List</h1>
        <p className="text-white text-sm sm:text-base">Drag and drop to-do list</p>
      </header>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row items-center w-full max-w-md gap-2 sm:gap-4">
        <input
          value={text}
          onChange={handleInputChange}
          type="text"
          className="flex-1 w-full px-4 py-2 border text-white border-gray-300  rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a new task..."
        />
        <button
          className="w-full sm:w-auto px-4 py-2 bg-teal-100 text-teal-800 font-medium rounded hover:bg-teal-300 transition"
          onClick={() => {
            handleAddTask(text);
            setText("");
          }}
        >
          Add task
        </button>
      </div>
    </div>
  );
}
