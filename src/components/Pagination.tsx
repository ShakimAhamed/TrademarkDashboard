export default function Pagination({ page, total, setPage }: any) {
  const totalPages = Math.ceil(total / 12);

  return (
    <div className="flex gap-4 justify-center mt-6">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2 border rounded"
      >
        Prev
      </button>

      <span className="font-semibold">
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 border rounded"
      >
        Next
      </button>
    </div>
  );
}