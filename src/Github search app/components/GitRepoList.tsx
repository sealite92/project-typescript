
import { useRepoContext } from "./GitRepoContextProvider";
import GitRepoItem from "./GitRepoItem";



export default function GitRepoList() {
  const {filterRepository, isLoading, } = useRepoContext()




  return (
    <div>
      {isLoading && <p className="text-center text-4xl">Loading...</p>}
      {!isLoading && filterRepository.length === 0 && <p className="text-center text-4xl">No Repositories Found</p>}
    <ul className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 ">
      {filterRepository.map((repo) => (
        <li key={repo.id} className="p-6 bg-gray-300 mb-3">
         <GitRepoItem repo={repo}/>
        </li>
      ))}
      
    </ul>
    </div>
  )
}
