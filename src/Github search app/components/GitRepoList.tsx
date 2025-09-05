
import { useRepoContext } from "./GitRepoContextProvider";
import GitRepoItem from "./GitRepoItem";



export default function GitRepoList() {
  const {repos, isLoading, error,searchTerm} = useRepoContext()

let messaege : string | null = null;

if(searchTerm&& isLoading) {
  messaege = "Loading..."
}else if(!isLoading&& error && searchTerm && repos.length === 0) {
  messaege = "Check your network..."  
}
else if(!isLoading && repos.length === 0 && searchTerm && !error) {
  messaege = `No repo with name ${searchTerm}`
}
else if(!isLoading && repos.length === 0 &&  !searchTerm) {
  messaege = "🔍 Start by searching for your Repositories"
}


  return (
    <div>
      {messaege &&  <p className="text-center text-4xl">{messaege}</p>}
    <ul className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 ">
      {repos.map((repo) => (
        <li key={repo.id} className="p-6 bg-gray-300 mb-3">
         <GitRepoItem repo={repo}/>
        </li>
      ))}
      
    </ul>
    </div>
  )
}
