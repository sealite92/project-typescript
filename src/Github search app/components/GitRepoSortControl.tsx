import type { Order, PerPage, Sortby } from "../gitRepoModelTypes";
import { useRepoContext } from "./GitRepoContextProvider";



export default function GitRepoSortControl() {


  const { sort, setSort, order, setOrder, perPage, setPerPage,} =
    useRepoContext();

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-6">
  
      <select
        value={perPage}
        onChange={(e) => {
          setPerPage(Number(e.target.value) as PerPage); ;
          
        }}
        className="border p-2 rounded"
      >
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
        <option value={40}>40 per page</option>
        <option value={80}>80 per page</option>
        <option value={160}>160 per page</option>
      </select>

      <select value={sort}  
      onChange={(e) => setSort(e.target.value as Sortby)}
      className="p-2 border rounded-lg shadow-sm"
      >
        <option value="best-match">Best Match</option>
        <option value="stars">Stars</option>
        <option value="most-updated" >Last Updated</option>
      </select>

      <select value={order} 
       onChange={(e) => setOrder(e.target.value as Order)}
        className="p-2 border rounded-lg shadow-sm"
       >
        <option value="asc" >Ascending</option>
        <option value="desc" >Descending</option>
      </select>
    </div>
  )
}
