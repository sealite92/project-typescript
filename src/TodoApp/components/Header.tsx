"use client"

import type React from "react"

import { useState } from "react"
import { useTodoContext } from "../TodoContextProvider"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    <div className="mb-8 relative z-20">
       <div className="mb-6 sm:mb-8 absolute top-0 left-0 sm:top-0 sm:left-4">
         <Button
  variant="ghost"
  className="text-white hover:text-white hover:bg-gray-800 border border-white hover:border-gray-600 transition-all duration-200 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2"
  onClick={() => window.history.back()}
>
  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
  <span className="hidden sm:inline">Back to Portfolio</span>
</Button>

        </div>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-[0.3em]">TODO</h1>
          <Clock className="w-8 h-8 text-white" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
        <div className="relative">
          <input
            value={text}
            onChange={handleInputChange}
            type="text"
            placeholder="Create a new todo..."
            className="w-full px-6 py-4 bg-white/95 backdrop-blur-sm border-0 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg shadow-lg"
          />
        </div>
      </form>
    </div>
  )
}
