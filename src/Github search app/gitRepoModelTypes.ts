

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;  
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  language: string | null;     
  owner: {
    login: string;
    avatar_url: string;
  };
}

export type Order = "asc" | "desc"  
export type Sortby = "best-match" | "stars" | "most-updated"