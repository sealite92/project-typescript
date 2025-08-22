
type GitRepoInputProps = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;  
    searchTerm: string; 
};

export default function GitRepoInput({searchTerm, setSearchTerm}: GitRepoInputProps) {

   


  return (
    <div>
      <form action="">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search GitHub Repositories"
          className="p-2 border rounded"
        />

      </form>
    </div>
  )
}
