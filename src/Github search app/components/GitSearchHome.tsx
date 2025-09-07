"use client"

import GitRepoList from "./GitRepoList"
import GitRepoSortControl from "./GitRepoSortControl"
import GitRepoContextProvider from "./GitRepoContextProvider"
import SearchFilter from "./SearchFilter"
import Pagination from "@/components/Pagination"
import { Github, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GitSearchHome() {
  return (
    <div className="min-h-screen min-w-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 sm:mb-8">
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-200 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Back to Portfolio
          </Button>
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Github className="w-6 h-6 sm:w-8 sm:h-8 text-gray-100" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
              GitHub Repository Search
            </h1>
          </div>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-balance px-4">
            Discover and explore repositories from the world's largest code hosting platform
          </p>
        </div>

        <GitRepoContextProvider>
          <SearchFilter />
          <GitRepoSortControl />
          <GitRepoList />
          <Pagination />
        </GitRepoContextProvider>
      </div>
    </div>
  )
}
