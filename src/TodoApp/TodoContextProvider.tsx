import { createContext, useContext,} from "react";
import { v4 as uuidv4 } from "uuid";
import type { TodoTaskStatus, TodoTaskType } from "./types";
import useLocalStorage from "./useLocalStorage";


type TodoContextProviderProps = {
  children: React.ReactNode;
};

type TodoContextType = {
  tasks: TodoTaskType[];
  addTask: (task: TodoTaskType) => void;
  handleAddTask: (text: string) => void;
  updateTaskStatus: (id: string, status: TodoTaskType["status"]) => void;
  deleteTask: (id: string) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

const STORAGE_KEY = "kanban_tasks";

export default function TodoContextProvider({ children }: TodoContextProviderProps) {
 const [tasks, setTasks] = useLocalStorage(STORAGE_KEY, []);

  const addTask = (task: TodoTaskType) => {
    const newTask: TodoTaskType = {
      id: uuidv4(),
      text: task.text,
      status: "todo",
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleAddTask = (text: string) => {
    if (text.trim() === "") return;
    addTask({ id: "", text, status: "todo" });
  };

  const updateTaskStatus = (id: string, status: TodoTaskStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTask,
        handleAddTask,
        updateTaskStatus,
        deleteTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoContextProvider");
  }
  return context;
}
