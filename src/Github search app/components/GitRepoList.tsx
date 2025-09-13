import type React from "react"
import { useRepoContext } from "./GitRepoContextProvider"
import GitRepoItem from "./GitRepoItem"

export default function GitRepoList() {
  const { repository, isLoading, error, searchTerm } = useRepoContext()

  let message: string | null = null
  const icon: React.ReactNode = null

  if (searchTerm && isLoading) {
    message = "Loading..."
  } else if (!isLoading && error && searchTerm && repository.length === 0) {
    message = "Check your network..."
  } else if (!isLoading && !error && searchTerm && repository.length === 0) {
    message = "No repository found with such name ..."
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 overflow-hidden">
      {message && (
        <div className="flex flex-col items-center justify-center mt-10 text-center px-4">
          <p className="text-gray-300 text-lg sm:text-xl font-medium">{message}</p>
        </div>
      )}

      <ul className="grid gap-4 sm:gap-6 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {repository.map((repository) => (
          <li
            key={repository.id}
            className="bg-gray-800  rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors duration-200"
          >
            <GitRepoItem repository={repository} />
          </li>
        ))}
      </ul>
    </div>
  )
}
