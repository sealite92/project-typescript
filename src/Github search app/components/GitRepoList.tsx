
import GitRepoItem from "./GitRepoItem";


type RepoListProps = {
  repos: {
    id: number;
    full_name: string;
    description: string;
    stargazers_count: number;
  }[];
};


export default function GitRepoList({repos}: RepoListProps) {
  return (
    <ul>
      
      {repos.map((repo) => (
        <li key={repo.id} className="p-6 bg-gray-300 mb-3">
         <GitRepoItem repo={repo}/>
        </li>
      ))}
      
    </ul>
  )
}
