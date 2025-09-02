
import { useEffect, useState } from "react";
import type { Order, PerPage, Repository, Sortby } from "./gitRepoModelTypes";

export const usefetchRepo = (searchTerm : string, sort:Sortby, order: Order, perPage: PerPage, page: number,) => {
const [repos, setRepo] = useState<Repository[]>([])
const [error, setError] = useState<string | null>(null)
const [isLoading, setIsLoading] = useState(false) 
 const [totalCount, setTotalCount] = useState<number>(0)
 const [username, setUsername] = useState("");


useEffect(() => {
  if(!searchTerm) {
    setRepo([])
    return;
  }
  
const fetchGitRepo = async () => {
  setIsLoading(true)
  
    try {
      const query = `${searchTerm}${username ? `+user:${username}` : ""}`;
         const response = await fetch(
          `https://api.github.com/search/repositories?q=${encodeURIComponent(
            query
          )}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`
        );
if (!response.ok) {
    throw new Error("Network response was not ok");
}
    const data = await response.json();
    setRepo(data.items || [])
    setTotalCount(data.total_count || 0)  
}
 catch(error) {
       setError((error as Error).message)
} 
finally {
    setIsLoading(false)}
   
} 
fetchGitRepo()

},[ searchTerm, sort , order, perPage, page])






return {repos, isLoading, error, totalCount,  setUsername, username}
}







// export const mockRepositories: { total_cCount: number; items: Repository[] } = {
//   total_cCount: 50,
//   items: [
//     {
//       id: 1,
//       name: "nextjs",
//       fullName: "vercel/next.js",
//       description: "The React Framework for the Web",
//       htmlUrl: "https://github.com/vercel/next.js",
//       stargazersCount: 120000,
//       forksCount: 24000,
//       updatedAt: "2025-08-10T10:20:30Z",
//       language: "JavaScript",
//       owner: {
//         login: "vercel",
//         avatarUrl: "https://avatars.githubusercontent.com/u/14985020?v=4",
//       },
//     },
//     {
//       id: 2,
//       name: "react",
//       fullName: "facebook/react",
//       description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
//       htmlUrl: "https://github.com/facebook/react",
//       stargazers_count: 210000,
//       forksCount: 44000,
//       updatedAt: "2025-08-12T12:15:45Z",
//       language: "TypeScript",
//       owner: {
//         login: "facebook",
//         avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
//       },
//     },
//     {
//       id: 3,
//       name: "vue",
//       fullName: "vuejs/vue",
//       description: "🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
//       htmlUrl: "https://github.com/vuejs/vue",
//       stargazers_count: 210000,
//       forksCount: 34000,
//       updatedAt: "2025-08-15T08:50:00Z",
//       language: "JavaScript",
//       owner: {
//         login: "vuejs",
//         avatarUrl: "https://avatars.githubusercontent.com/u/6128107?v=4",
//       },
//     },
//     {
//       id: 4,
//       name: "angular",
//       fullName: "angular/angular",
//       description: "One framework. Mobile & desktop.",
//       htmlUrl: "https://github.com/angular/angular",
//       stargazers_count: 92000,
//       forksCount: 24000,
//       updatedAt: "2025-08-17T09:35:00Z",
//       language: "TypeScript",
//       owner: {
//         login: "angular",
//         avatarUrl: "https://avatars.githubusercontent.com/u/139426?v=4",
//       },
//     },

//   {
//     id: 5,
//     name: "svelte",
//     fullName: "sveltejs/svelte",
//     description: "Cybernetically enhanced web apps",
//     htmlUrl: "https://github.com/sveltejs/svelte",
//     stargazers_count: 75000,
//     forksCount: 7000,
//     updatedAt: "2025-08-10T18:45:00Z",
//     language: "TypeScript",
//     owner: {
//       login: "sveltejs",
//       avatarUrl: "https://avatars.githubusercontent.com/u/23617963?v=4",
//     },
//   },
//   {
//     id: 6,
//     name: "nestjs",
//     fullName: "nestjs/nest",
//     description: "A progressive Node.js framework for building efficient and scalable server-side applications.",
//     htmlUrl: "https://github.com/nestjs/nest",
//     stargazers_count: 65000,
//     forksCount: 8000,
//     updatedAt: "2025-08-17T11:20:00Z",
//     language: "TypeScript",
//     owner: {
//       login: "nestjs",
//       avatarUrl: "https://avatars.githubusercontent.com/u/28507035?v=4",
//     },
//   },
//   {
//     id: 7,
//     name: "django",
//     fullName: "django/django",
//     description: "The Web framework for perfectionists with deadlines.",
//     htmlUrl: "https://github.com/django/django",
//     stargazers_count: 78000,
//     forksCount: 33000,
//     updatedAt: "2025-08-11T16:40:00Z",
//     language: "Python",
//     owner: {
//       login: "django",
//       avatarUrl: "https://avatars.githubusercontent.com/u/27804?v=4",
//     },
//   },
//   {
//     id: 8,
//     name: "flask",
//     fullName: "pallets/flask",
//     description: "The Python micro framework for building web applications.",
//     htmlUrl: "https://github.com/pallets/flask",
//     stargazers_count: 68000,
//     forksCount: 18000,
//     updatedAt: "2025-08-09T20:50:00Z",
//     language: "Python",
//     owner: {
//       login: "pallets",
//       avatarUrl: "https://avatars.githubusercontent.com/u/124874?v=4",
//     },
//   },
//   {
//     id: 9,
//     name: "spring-boot",
//     fullName: "spring-projects/spring-boot",
//     description: "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications.",
//     htmlUrl: "https://github.com/spring-projects/spring-boot",
//     stargazers_count: 70000,
//     forksCount: 40000,
//     updatedAt: "2025-08-13T22:30:00Z",
//     language: "Java",
//     owner: {
//       login: "spring-projects",
//       avatarUrl: "https://avatars.githubusercontent.com/u/317776?v=4",
//     },
//   },
//   {
//     id: 10,
//     name: "tensorflow",
//     fullName: "tensorflow/tensorflow",
//     description: "An Open Source Machine Learning Framework for Everyone",
//     htmlUrl: "https://github.com/tensorflow/tensorflow",
//     stargazers_count: 180000,
//     forksCount: 88000,
//     updatedAt: "2025-08-18T07:55:00Z",
//     language: "C++",
//     owner: {
//       login: "tensorflow",
//       avatarUrl: "https://avatars.githubusercontent.com/u/15658638?v=4",
//     },
//   },
//   ],
// };




