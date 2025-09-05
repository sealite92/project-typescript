
"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { TodoTaskType, TodoTaskStatus } from "./todoModelTypes"

type TodoContextType = {
  tasks: TodoTaskType[]
  handleAddTask: (text: string) => void
  updateTaskStatus: (id: string, status: TodoTaskStatus) => void
  deleteTask: (id: string) => void
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export function useTodoContext() {
  const context = useContext(TodoContext)
  if (context === undefined) {
    throw new Error("useTodoContext must be used within a TodoContextProvider")
  }
  return context
}

type TodoContextProviderProps = {
  children: ReactNode
}

export default function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [tasks, setTasks] = useState<TodoTaskType[]>([
    { id: "1", text: "Design new landing page", status: "todo" },
    { id: "2", text: "Implement user authentication", status: "in-progress" },
    { id: "3", text: "Set up database schema", status: "done" },
  ])

  const handleAddTask = (text: string) => {
    const newTask: TodoTaskType = {
      id: Date.now().toString(),
      text: text.trim(),
      status: "todo",
    }
    setTasks((prev) => [...prev, newTask])
  }

  const updateTaskStatus = (id: string, status: TodoTaskStatus) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, status } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const value: TodoContextType = {
    tasks,
    handleAddTask,
    updateTaskStatus,
    deleteTask,
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
