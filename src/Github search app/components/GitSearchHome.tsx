import GitRepoList from "./GitRepoList"
import GitRepoSortControl from "./GitRepoSortControl"
import GitRepoContextProvider from "./GitRepoContextProvider"
import SearchFilter from "./SearchFilter"
import Pagination from "@/components/Pagination"
import { Github } from "lucide-react"

export default function GitSearchHome() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
  
       
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Github className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-balance">
              GitHub Repository Search
            </h1>
          </div>
          <p className="text-blue-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-balance px-4">
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
