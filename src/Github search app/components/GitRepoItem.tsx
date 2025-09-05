import { Star, Calendar, Code } from "lucide-react"

type GitRepoItemProps = {
  id: number
  full_name: string
  description: string | null
  stargazers_count: number
  updated_at: string
  html_url: string
  language: string | null
  owner: {
    login: string
    avatar_url: string
  }
}

export default function GitRepoItem({ repo }: { repo: GitRepoItemProps }) {
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
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl sm:rounded-2xl border border-blue-100 p-4 sm:p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
    >
      {/* Header with avatar and repo name */}
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        <img
          src={repo.owner.avatar_url || "/placeholder.svg"}
          alt={repo.owner.login}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-blue-100 flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
            {repo.full_name}
          </h3>
          <p className="text-xs sm:text-sm text-blue-500 mt-1">@{repo.owner.login}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-blue-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
        {repo.description || "No description available."}
      </p>

      {/* Stats */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-blue-500">
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="font-medium">{formatStars(repo.stargazers_count)}</span>
        </div>

        {repo.language && (
          <div className="flex items-center gap-1">
            <Code className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="truncate max-w-20 sm:max-w-none">{repo.language}</span>
          </div>
        )}

        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="hidden sm:inline">{formatDate(repo.updated_at)}</span>
          <span className="sm:hidden">{formatDate(repo.updated_at).replace(", ", " ")}</span>
        </div>
      </div>
    </a>
  )
}
