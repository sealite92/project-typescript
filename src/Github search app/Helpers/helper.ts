



export function mapToRepository(response: any) {
return response.map((items: { id: number; name: string; full_name: string; description: string; html_url: string; stargazers_count: number; forks_count: number; updated_at: number; Languages: string;  owner: { login: string; avatar_url: string; },  }) => {
    return ({
        id: items.id,
        name: items.name,
        fullName: items.full_name,
        description: items.description,
        htmlUrl: items.html_url,
        stargazersCount: items.stargazers_count,
        forksCount: items.forks_count,
        updatedAt: items.updated_at,
        languages: items.Languages,
        owner:  {
            login: items.owner.login,
            avatarUrl: items.owner.avatar_url
        }
    });
})
}