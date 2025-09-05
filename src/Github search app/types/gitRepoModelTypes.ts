

export interface Repository {
  id: number;
  name: string;
  fullName: string;
  description: string | null;  
  htmlUrl: string;
  stargazersCount: number;
  forksCount: number;
  updatedAt: string;
  languages: string | null;     
  owner: owner
}

type owner = {
 login: string;
    avatarUrl: string;
}

export type Order = "asc" | "desc"  
export type Sortby = "best-match" | "stars" | "most-updated"
export type PerPage = 10 | 20 | 40 | 80 | 160