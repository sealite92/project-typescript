
type GitRepoItemProps = {
 
    id: number;
    full_name: string;
    description: string;
    stargazers_count: number;
  };


export default function GitRepoItem({repo}: {repo: GitRepoItemProps}) {
  return (
    <div>
      <h2 className="text-xl font-bold">{repo.full_name}</h2>
      <p>{repo.description}</p>
      <p>⭐ {repo.stargazers_count}</p>
    </div>
  )
}
