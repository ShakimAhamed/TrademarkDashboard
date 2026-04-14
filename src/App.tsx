import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTrademarks } from "./api/api";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import VirtualList from "./components/VirtualList";
import Skeleton from "./components/Skeleton";
import Pagination from "./components/Pagination";
import { useDebounce } from "./hooks/useDebounce";

export default function App() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search);

  const { data, isLoading } = useQuery({
    queryKey: ["trademarks", debouncedSearch, status, page],
    queryFn: () => fetchTrademarks(debouncedSearch, status,  page),
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Trademark Intelligence Dashboard
      </h1>

      <div className="flex gap-4 mb-4">
        <SearchBar value={search} onChange={setSearch} />
        <Filters status={status} setStatus={setStatus} />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      ) : (
          <VirtualList items={data?.results || []} search={search} />
      )
      }
      {data && (
        <Pagination page={page} total={data.total} setPage={setPage} />
      )}
    </div>
  );
}