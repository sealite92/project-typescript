"use client"

import type React from "react"

import { useState } from "react"
import { useTodoContext } from "../TodoContextProvider"
import { useNavigate } from "react-router-dom"
import { Plus, ArrowLeft } from "lucide-react"

export default function Header() {
  const [text, setText] = useState("")
  const { handleAddTask } = useTodoContext()
  const navigate = useNavigate()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      handleAddTask(text)
      setText("")
    }
  }

  return (
    <div className="mb-8">
      <button
        onClick={() => navigate("/")}
        className="mb-6 inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </button>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2 text-balance">Task Board</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">Organize your work with drag and drop</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-3">
          <input
            value={text}
            onChange={handleInputChange}
            type="text"
            className="flex-1 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 dark:placeholder-slate-400 text-slate-900 dark:text-slate-100"
            placeholder="Add a new task..."
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </form>
    </div>
  )
}
