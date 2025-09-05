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
      className="block bg-white rounded-lg sm:rounded-xl lg:rounded-2xl border border-blue-100 p-3 sm:p-4 lg:p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group w-full"
    >
      <div className="flex items-start gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3 lg:mb-4">
        <img
          src={repository.owner.avatarUrl || "/placeholder.svg"}
          alt={repository.owner.login}
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-blue-100 flex-shrink-0"
        />
        <div className="flex-1 overflow-hidden">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-200 break-words leading-tight">
            {repository.fullName}
          </h3>
          <p className="text-xs sm:text-sm text-blue-500 mt-0.5 sm:mt-1">@{repository.owner.login}</p>
        </div>
      </div>

      <p className="text-blue-600 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 lg:mb-4 line-clamp-3 sm:line-clamp-2 break-words">
        {repository.description || "No description available."}
      </p>

      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 lg:gap-4 text-xs text-blue-500">
        <div className="flex items-center gap-1 flex-shrink-0">
          <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="font-medium">{formatStars(repository.stargazersCount)}</span>
        </div>

        {repository.languages && (
          <div className="flex items-center gap-1 min-w-0">
            <Code className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
            <span className="break-words">{repository.languages}</span>
          </div>
        )}

        <div className="flex items-center gap-1 flex-shrink-0">
          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="text-xs">{formatDate(repository.updatedAt)}</span>
        </div>
      </div>
    </a>
  )
}
