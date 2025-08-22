
import type { Repository } from "./gitRepoModelTypes";


export const fetchGitRepo = async (query: string) => {
    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          
    }
    const data = await response.json();
    console.log(data)
    return  data
}
 catch(error) {
        console.error("Error fetching repositories:", error);
}
} 





export const mockRepositories: { total_count: number; items: Repository[] } = {
  total_count: 50, // GitHub API usually returns total_count of all matches
  items: [
    {
      id: 1,
      name: "nextjs",
      full_name: "vercel/next.js",
      description: "The React Framework for the Web",
      html_url: "https://github.com/vercel/next.js",
      stargazers_count: 120000,
      forks_count: 24000,
      updated_at: "2025-08-10T10:20:30Z",
      language: "JavaScript",
      owner: {
        login: "vercel",
        avatar_url: "https://avatars.githubusercontent.com/u/14985020?v=4",
      },
    },
    {
      id: 2,
      name: "react",
      full_name: "facebook/react",
      description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      html_url: "https://github.com/facebook/react",
      stargazers_count: 210000,
      forks_count: 44000,
      updated_at: "2025-08-12T12:15:45Z",
      language: "TypeScript",
      owner: {
        login: "facebook",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
      },
    },
    {
      id: 3,
      name: "vue",
      full_name: "vuejs/vue",
      description: "🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
      html_url: "https://github.com/vuejs/vue",
      stargazers_count: 210000,
      forks_count: 34000,
      updated_at: "2025-08-15T08:50:00Z",
      language: "JavaScript",
      owner: {
        login: "vuejs",
        avatar_url: "https://avatars.githubusercontent.com/u/6128107?v=4",
      },
    },
    {
      id: 4,
      name: "angular",
      full_name: "angular/angular",
      description: "One framework. Mobile & desktop.",
      html_url: "https://github.com/angular/angular",
      stargazers_count: 92000,
      forks_count: 24000,
      updated_at: "2025-08-17T09:35:00Z",
      language: "TypeScript",
      owner: {
        login: "angular",
        avatar_url: "https://avatars.githubusercontent.com/u/139426?v=4",
      },
    },

  {
    id: 5,
    name: "svelte",
    full_name: "sveltejs/svelte",
    description: "Cybernetically enhanced web apps",
    html_url: "https://github.com/sveltejs/svelte",
    stargazers_count: 75000,
    forks_count: 7000,
    updated_at: "2025-08-10T18:45:00Z",
    language: "TypeScript",
    owner: {
      login: "sveltejs",
      avatar_url: "https://avatars.githubusercontent.com/u/23617963?v=4",
    },
  },
  {
    id: 6,
    name: "nestjs",
    full_name: "nestjs/nest",
    description: "A progressive Node.js framework for building efficient and scalable server-side applications.",
    html_url: "https://github.com/nestjs/nest",
    stargazers_count: 65000,
    forks_count: 8000,
    updated_at: "2025-08-17T11:20:00Z",
    language: "TypeScript",
    owner: {
      login: "nestjs",
      avatar_url: "https://avatars.githubusercontent.com/u/28507035?v=4",
    },
  },
  {
    id: 7,
    name: "django",
    full_name: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    html_url: "https://github.com/django/django",
    stargazers_count: 78000,
    forks_count: 33000,
    updated_at: "2025-08-11T16:40:00Z",
    language: "Python",
    owner: {
      login: "django",
      avatar_url: "https://avatars.githubusercontent.com/u/27804?v=4",
    },
  },
  {
    id: 8,
    name: "flask",
    full_name: "pallets/flask",
    description: "The Python micro framework for building web applications.",
    html_url: "https://github.com/pallets/flask",
    stargazers_count: 68000,
    forks_count: 18000,
    updated_at: "2025-08-09T20:50:00Z",
    language: "Python",
    owner: {
      login: "pallets",
      avatar_url: "https://avatars.githubusercontent.com/u/124874?v=4",
    },
  },
  {
    id: 9,
    name: "spring-boot",
    full_name: "spring-projects/spring-boot",
    description: "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications.",
    html_url: "https://github.com/spring-projects/spring-boot",
    stargazers_count: 70000,
    forks_count: 40000,
    updated_at: "2025-08-13T22:30:00Z",
    language: "Java",
    owner: {
      login: "spring-projects",
      avatar_url: "https://avatars.githubusercontent.com/u/317776?v=4",
    },
  },
  {
    id: 10,
    name: "tensorflow",
    full_name: "tensorflow/tensorflow",
    description: "An Open Source Machine Learning Framework for Everyone",
    html_url: "https://github.com/tensorflow/tensorflow",
    stargazers_count: 180000,
    forks_count: 88000,
    updated_at: "2025-08-18T07:55:00Z",
    language: "C++",
    owner: {
      login: "tensorflow",
      avatar_url: "https://avatars.githubusercontent.com/u/15658638?v=4",
    },
  },
  ],
};




