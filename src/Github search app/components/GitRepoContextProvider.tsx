import {  createContext,  useContext,  useState } from "react"
import type { Order, Repository, Sortby } from "../gitRepoModelTypes";
import { usefetchRepo,  } from "../fetchGitRepo";

interface RepoContextProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    searchTerm: string;
    sort: Sortby;
    setSort: React.Dispatch<React.SetStateAction<Sortby>>;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    filterRepository: Repository[];
    isLoading?: boolean;
    error?: string | null;
order: Order;
setOrder: React.Dispatch<React.SetStateAction<Order>>;
}

type RepoContextProviderProps = {
    children: React.ReactNode
}

export const RepoContext = createContext<RepoContextProps | null>(null)

export default function GitRepoContextProvider({children}: RepoContextProviderProps) {
const [searchTerm, setSearchTerm] = useState("")
  const [sort, setSort] = useState<Sortby>("best-match")
  const [order, setOrder] = useState<Order>("desc")
  const [page, setPage] = useState<number>(0)

  const filterRepository = usefetchRepo(searchTerm).repo
    .filter(repo => repo.name.includes(searchTerm) || repo.full_name.includes(searchTerm) || (repo.description && repo.description.includes(searchTerm))).sort((a,b) => {
      if(sort === "stars") {
        return order === "asc" ? a.stargazers_count - b.stargazers_count : b.stargazers_count - a.stargazers_count
      }
      if(sort === "most-updated") {
        return order === "asc" ? new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime() : new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      }
      return 0;
    })
    .map(repo => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description ?? "",
      stargazers_count: repo.stargazers_count,
      updated_at: repo.updated_at,
      html_url: repo.html_url,
      forks_count: repo.forks_count,
      language: repo.language,
      owner: repo.owner,
    }));


  

  return (
    <RepoContext.Provider value={{setSearchTerm, searchTerm, sort, setSort, order, setOrder, page, setPage, filterRepository}}>
     {children}
    </RepoContext.Provider>
  )
}




export function useRepoContext() {
const context = useContext(RepoContext)
if(!context) {
    throw new Error("Cannot use repo context outside the context provider") 
}
return context;
}