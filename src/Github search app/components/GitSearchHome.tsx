import {  useEffect, useState } from "react"
import { fetchGitRepo, mockRepositories } from "../fetchGitRepo";
import GitRepoInput from "./GitRepoInput";
import GitRepoList from "./GitRepoList";





export default function GitSearchHome() {
  const [searchTerm, setSearchTerm] = useState("")

  const filterRepository = mockRepositories.items
    .filter(repo => repo.name.includes(searchTerm) || repo.full_name.includes(searchTerm) || (repo.description && repo.description.includes(searchTerm)))
    .map(repo => ({
      id: repo.id,
      full_name: repo.full_name,
      description: repo.description ?? "",
      stargazers_count: repo.stargazers_count
    }));

  useEffect(() => {
    fetchGitRepo
  }, []);
  return (
    <div className="bg-red-100 min-h-screen p-4">
      This is the GitHub Search App Home Page.

      <GitRepoInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <GitRepoList repos={filterRepository}/>
      
    </div>
  )
}


