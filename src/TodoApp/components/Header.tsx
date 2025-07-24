import {  useState } from "react";
import { useTodoContext } from "../TodoContextProvider";



export default function Header() {
  const [text, setText] = useState("");
  const { handleAddTask } = useTodoContext();



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }


  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md mb-4 relative">
      <span className="absolute left-5 top-10 text-slate-800 px-2 py-1 border bg-slate-100 rounded cursor-pointer">&larr;
      
</span>
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Kanban To Do List</h1>
        <p className="text-white">Drag and drop to-do list</p>
      </header>
      <div className="flex items-center space-x-4 w-full max-w-md">
        <input
          value={text}
          onChange={handleInputChange}
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a new task..."
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={() => {
          handleAddTask(text);  
          console.log("Task added:", text);
          setText("");
        }
        }>
          Add task
        </button>
      </div>
   
    </div>
  )
}
