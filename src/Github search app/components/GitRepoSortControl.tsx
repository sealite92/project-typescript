import type { Order, Sortby } from "../gitRepoModelTypes";
import { useRepoContext } from "./GitRepoContextProvider";



export default function GitRepoSortControl() {

  const {sort, setSort, order, setOrder}= useRepoContext()

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-6">
      <select value={sort}  
      onChange={(e) => setSort(e.target.value as Sortby)}
      className="p-2 border rounded-lg shadow-sm"
      >
        <option value="best-match">Best Match</option>
        <option value="stars">Stars</option>
        <option value="most-updated" >Most Updated</option>
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
