"use client"

import { Search } from "lucide-react"
import { useRepoContext } from "./GitRepoContextProvider"

export default function SearchFilter() {
  const { searchTerm, setSearchTerm } = useRepoContext()

  return (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
      <div className="relative">
        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search GitHub repositories..."
          className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 text-base sm:text-lg bg-white border border-blue-200 rounded-xl sm:rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-blue-400"
        />
      </div>
    </div>
  )
}
