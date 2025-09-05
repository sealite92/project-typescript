"use client"

import { useEffect, useState } from "react"
import type { Order, PerPage, Repository, Sortby } from "./types/gitRepoModelTypes"
import { mapToRepository } from "./Helpers/helper"

export const usefetchRepo = (searchTerm: string, sort: Sortby, order: Order, perPage: PerPage, page: number) => {
  const [repository, setRepository] = useState<Repository[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [totalCount, setTotalCount] = useState<number>(0)
  const [username, setUsername] = useState("")

  useEffect(() => {
    const fetchGitRepo = async () => {
      setIsLoading(true)

      try {
        let query: string

        if (!searchTerm) {
          // Fetch trending repositories from the last week
          const oneWeekAgo = new Date()
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
          const dateString = oneWeekAgo.toISOString().split("T")[0]
          query = `created:>${dateString} stars:>10`
        } else {
          query = `${searchTerm}${username ? `+user:${username}` : ""}`
        }

        const response = await fetch(
          `https://api.github.com/search/repositories?q=${encodeURIComponent(
            query,
          )}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`,
        )
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        if(data && data.items) {
          const repositories = mapToRepository(data.items)
          setRepository(repositories)
          setTotalCount(data.total_count || 0)
        }
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGitRepo()
  }, [searchTerm, sort, order, perPage, page])

  return { repository, isLoading, error, totalCount, setUsername, username }
}
