

import GitRepoList from "./GitRepoList";
import GitRepoSortControl from "./GitRepoSortControl";
import GitRepoContextProvider from "./GitRepoContextProvider";
import SearchFilter from "./SearchFilter";





export default function GitSearchHome() {
  

  return (
  <div className="bg-gray-100 min-h-screen p-6 ">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        🔍 GitHub Repository Search
      </h1>
<GitRepoContextProvider>
<SearchFilter/>
<GitRepoSortControl />
<GitRepoList />
</GitRepoContextProvider>
</div>

  )
}


