import { useRepoContext } from "./GitRepoContextProvider"


export default function SearchFilter() {

 const {searchTerm, setSearchTerm}= useRepoContext()

  return (
    <div className="mb-4 flex justify-center">
      <form action="">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search GitHub Repositories"
          className="w-full max-w-md p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
        />

      </form>
    </div>
  )
}
