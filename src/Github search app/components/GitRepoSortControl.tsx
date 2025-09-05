"use client"

import type { Order, PerPage, Sortby } from "../types/gitRepoModelTypes"
import { useRepoContext } from "./GitRepoContextProvider"

export default function GitRepoSortControl() {
  const { sortBy, setSortBy, order, setOrder, perPage, setPerPage } = useRepoContext()

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8 px-4">
      <select
        value={perPage}
        onChange={(e) => setPerPage(Number(e.target.value) as PerPage)}
        className="w-full sm:w-auto px-3 sm:px-4 py-2.5 sm:py-2 bg-white border border-blue-200 rounded-lg sm:rounded-xl text-sm font-medium text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer hover:border-blue-300"
      >
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
        <option value={40}>40 per page</option>
        <option value={80}>80 per page</option>
        <option value={160}>160 per page</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as Sortby)}
        className="w-full sm:w-auto px-3 sm:px-4 py-2.5 sm:py-2 bg-white border border-blue-200 rounded-lg sm:rounded-xl text-sm font-medium text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer hover:border-blue-300"
      >
        <option value="best-match">Best Match</option>
        <option value="stars">Stars</option>
        <option value="most-updated">Last Updated</option>
      </select>

      <select
        value={order}
        onChange={(e) => setOrder(e.target.value as Order)}
        className="w-full sm:w-auto px-3 sm:px-4 py-2.5 sm:py-2 bg-white border border-blue-200 rounded-lg sm:rounded-xl text-sm font-medium text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer hover:border-blue-300"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  )
}
