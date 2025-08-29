import {  createContext,  useContext,  useState } from "react"
import type { Order, Repository, Sortby } from "../gitRepoModelTypes";
import { usefetchRepo,  } from "../fetchGitRepo";

interface RepoContextProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    searchTerm: string;
    sort: Sortby;
    setSort: React.Dispatch<React.SetStateAction<Sortby>>;
    perPage: number;
    setPerPage: React.Dispatch<React.SetStateAction<number>>;
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
  const [perPage, setPerPage] = useState<number>(3)
  const {repo, isLoading, error} = usefetchRepo(searchTerm)

  const startIndex = 0

  const filterRepository = repo
    .filter(repo => repo.name.includes(searchTerm) || repo.full_name.includes(searchTerm) || (repo.description && repo.description.includes(searchTerm))).sort((a,b) => {
      if(sort === "stars") {
        return order === "asc" ? a.stargazers_count - b.stargazers_count : b.stargazers_count - a.stargazers_count
      }
      if(sort === "most-updated") {
        return order === "asc" ? new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime() : new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      }
      return 0;
    }).slice(startIndex ,perPage)
   


  

  return (
    <RepoContext.Provider value={{setSearchTerm, searchTerm, sort, setSort, order, setOrder, perPage, setPerPage, filterRepository, isLoading, error}}>
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