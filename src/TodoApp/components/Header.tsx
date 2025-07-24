import { useContext, useState } from "react";
import { TodoContext } from "../TodoContextProvider";

type HeaderProps = {
  text: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTask: () => void;
}

export default function Header() {
  const [text, setText] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
const todoContext = useContext(TodoContext);

  if (!todoContext) {
    return <div>Error: TodoContext not found.</div>;
  }

  const { handleAddTask } = todoContext;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Kanban To Do List</h1>
        <p className="text-gray-500">Drag and drop to-do list</p>
      </header>
      <div className="flex items-center space-x-4 w-full max-w-md">
        <input
          value={text}
          onChange={handleInputChange}
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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
