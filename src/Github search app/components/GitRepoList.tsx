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
          <p className="text-blue-700 text-lg sm:text-xl font-medium">{message}</p>
        </div>
      )}

      <ul className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {repository.map((repository) => (
          <li key={repository.id} className="p-6 bg-gray-300 mb-3">
            <GitRepoItem repository={repository} />
          </li>
        ))}
      </ul>
    </div>
  )
}
