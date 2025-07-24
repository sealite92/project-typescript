import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "./types";

type TodoContextProviderProps = {
  children: React.ReactNode;
};

type TodoContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  handleAddTask: (text: string) => void;
  updateTaskStatus: (id: string, status: Task["status"]) => void;
  deleteTask: (id: string) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

const STORAGE_KEY = "kanban_tasks";

export default function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error("Failed to parse tasks from localStorage", err);
      return [];
    }
  });

  // ✅ Sync to localStorage every time `tasks` change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (err) {
      console.error("Failed to save tasks to localStorage", err);
    }
  }, [tasks]);

  const addTask = (task: Task) => {
    const newTask: Task = {
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

  const updateTaskStatus = (id: string, status: Task["status"]) => {
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
