"use client"

import type React from "react"

import { useState } from "react"
import TodoContextProvider from "../TodoContextProvider"
import TodoMain from "./TodoMain"
import Header from "./Header"

export default function TodoHome() {
  const [newTodo, setNewTodo] = useState("")

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodo.trim()) {
      setNewTodo("")
    }
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden lg:p-20">
      <div className="relative">
        <div
          className="h-80 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url('/public/bg-desktop-dark.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/80 via-purple-500/80 to-blue-500/80" />
        </div>
      </div>

      <div className="bg-gray-900 min-h-screen -mt-20 relative z-10 rounded-t-3xl">
        <TodoContextProvider>
          <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="relative -mt-60 z-20">
              <Header />
            </div>

            <TodoMain />

            <div className="text-center mt-12">
              <p className="text-gray-500 text-sm">Drag and drop to reorder list</p>
            </div>
          </div>
        </TodoContextProvider>
      </div>
    </div>
  )
}
