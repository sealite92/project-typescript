
type GitRepoItemProps = {
 
    id: number;
    full_name: string;
    description: string | null;
    stargazers_count: number;
    updated_at: string;
    html_url: string;
    language: string | null;
    owner: {
      login: string;
      avatar_url: string;}
  };


export default function GitRepoItem({ repo }: { repo: GitRepoItemProps }) {
  return (
    <div
      className="block bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 grid-cols-1md:grid-cols-2 lg:grid-cols-3"
    > 
      <a
       href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 ">
        <img
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
          className="w-12 h-12 rounded-full border"
        />
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 hover:underline">
            {repo.full_name}
          </h2>
          <p className="text-sm text-gray-500 hover:underline">@{repo.owner.login}</p>
        </div>
      </a>

    
      <p className="mt-3 text-gray-700 text-sm md:text-base break-words whitespace-normal">
        {repo.description || "No description available."}
      </p>

    
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
       <span>
  ⭐
  {repo.stargazers_count > 1000
    ? (repo.stargazers_count / 1000).toFixed(1) + "k"
    : repo.stargazers_count.toString()}
</span>

        {repo.language && <span>📝 {repo.language}</span>}
        <span>📅 Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
    </div>
  );
}