import { useRepoContext } from "../Github search app/components/GitRepoContextProvider";


export default function Pagination() {
  const { page, setPage, perPage, setPerPage, totalCount } = useRepoContext();

  const totalPages = Math.ceil(totalCount / perPage);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  // ✅ Generate a small "window" of page numbers
  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxVisible = 5;

    let start = Math.max(1, page - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      {/* Pagination controls */}
      <div className="flex gap-2 items-center">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-3 py-1 rounded-md border bg-white hover:bg-gray-100 disabled:opacity-50"
        >
          Prev
        </button>

        {/* Show first page */}
        {page > 3 && (
          <>
            <button
              onClick={() => setPage(1)}
              className="px-3 py-1 rounded-md border bg-white hover:bg-gray-100"
            >
              1
            </button>
            {page > 4 && <span className="px-2">...</span>}
          </>
        )}

        {/* Window of pages */}
        {getPageNumbers().map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-3 py-1 rounded-md border ${
              page === p
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        ))}

        {/* Show last page */}
        {page < totalPages - 2 && (
          <>
            {page < totalPages - 3 && <span className="px-2">...</span>}
            <button
              onClick={() => setPage(totalPages)}
              className="px-3 py-1 rounded-md border bg-white hover:bg-gray-100"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-3 py-1 rounded-md border bg-white hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>


      {/* Info */}
      <p className="text-sm text-gray-600">
        Page {page} of {totalPages} ({totalCount} results)
      </p>
    </div>
  );
}
