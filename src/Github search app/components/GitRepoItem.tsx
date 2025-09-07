import { Star, Calendar, Code } from "lucide-react"
import type { Repository } from "../types/gitRepoModelTypes"

export default function GitRepoItem({ repository }: { repository: Repository }) {
  const formatStars = (count: number) => {
    if (count > 1000) {
      return (count / 1000).toFixed(1) + "k"
    }
    return count.toString()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <a
      href={repository.htmlUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-900 rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-700 p-4 sm:p-5 lg:p-6 hover:shadow-lg hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 group w-full"
    >
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        <img
          src={repository.owner.avatarUrl || "/placeholder.svg"}
          alt={repository.owner.login}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-gray-600 flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200 break-words leading-tight mb-1">
            {repository.fullName}
          </h3>
          <p className="text-sm sm:text-base text-gray-400">@{repository.owner.login}</p>
        </div>
      </div>

      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 line-clamp-3 break-words">
        {repository.description || "No description available."}
      </p>

      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4" />
          <span className="font-medium">{formatStars(repository.stargazersCount)}</span>
        </div>

        {repository.languages && (
          <div className="flex items-center gap-1.5 min-w-0">
            <Code className="w-4 h-4 flex-shrink-0" />
            <span className="break-words">{repository.languages}</span>
          </div>
        )}

        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(repository.updatedAt)}</span>
        </div>
      </div>
    </a>
  )
}
