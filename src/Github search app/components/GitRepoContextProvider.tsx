"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"
import type { Order, PerPage, Repository, Sortby } from "../types/gitRepoModelTypes"
import { usefetchRepo } from "../fetchGitRepo"

interface RepoContextProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  searchTerm: string
  sortBy: Sortby
  setSortBy: React.Dispatch<React.SetStateAction<Sortby>>
  perPage: PerPage
  setPerPage: React.Dispatch<React.SetStateAction<PerPage>>
  repository: Repository[]
  isLoading?: boolean
  error?: string | null
  order: Order
  setOrder: React.Dispatch<React.SetStateAction<Order>>
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  totalCount: number
}

type RepoContextProviderProps = {
  children: React.ReactNode
}

export const RepoContext = createContext<RepoContextProps | null>(null)

export default function GitRepoContextProvider({ children }: RepoContextProviderProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState<Sortby>("best-match")
  const [order, setOrder] = useState<Order>("desc")
  const [perPage, setPerPage] = useState<PerPage>(10)
  const [page, setPage] = useState<number>(1)

  const { repository, isLoading, error, totalCount } = usefetchRepo(searchTerm, sortBy, order, perPage, page)

  return (
    <RepoContext.Provider
      value={{
        setSearchTerm,
        searchTerm,
        sortBy,
        setSortBy,
        order,
        setOrder,
        perPage,
        setPerPage,
        repository,
        isLoading,
        error,
        page,
        setPage,
        totalCount,
      }}
    >
      {children}
    </RepoContext.Provider>
  )
}

export function useRepoContext() {
  const context = useContext(RepoContext)
  if (!context) {
    throw new Error("Cannot use repo context outside the context provider")
  }
  return context
}
