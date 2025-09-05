"use client"

import { useRepoContext } from "../Github search app/components/GitRepoContextProvider"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Pagination() {
  const { page, setPage, perPage, totalCount } = useRepoContext()

  const totalPages = Math.ceil(totalCount / perPage)

  const handlePrev = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1)
  }

  const getPageNumbers = () => {
    const pages: number[] = []
    const maxVisible = 5

    let start = Math.max(1, page - Math.floor(maxVisible / 2))
    const end = Math.min(totalPages, start + maxVisible - 1)

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    return pages
  }

  if (totalPages <= 1) return null

  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 mt-6 sm:mt-8 mb-4 sm:mb-6 px-4">
      <div className="flex flex-wrap gap-1 sm:gap-2 items-center justify-center">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="flex items-center gap-1 px-2 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-blue-200 bg-white hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {page > 3 && (
          <>
            <button
              onClick={() => setPage(1)}
              className="px-2 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-blue-200 bg-white hover:bg-blue-50 transition-colors"
            >
              1
            </button>
            {page > 4 && <span className="px-1 sm:px-2 text-blue-400 text-sm">...</span>}
          </>
        )}

        {getPageNumbers().map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-2 sm:px-4 py-2 text-sm sm:text-base rounded-lg border transition-colors ${
              page === p
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "border-blue-200 bg-white hover:bg-blue-50"
            }`}
          >
            {p}
          </button>
        ))}

        {page < totalPages - 2 && (
          <>
            {page < totalPages - 3 && <span className="px-1 sm:px-2 text-blue-400 text-sm">...</span>}
            <button
              onClick={() => setPage(totalPages)}
              className="px-2 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-blue-200 bg-white hover:bg-blue-50 transition-colors"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="flex items-center gap-1 px-2 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-blue-200 bg-white hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>

      <p className="text-xs sm:text-sm text-blue-500 text-center">
        Page {page} of {totalPages} • {totalCount.toLocaleString()} repositories
      </p>
    </div>
  )
}
