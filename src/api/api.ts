export interface Trademark {
  id: number;
  name: string;
  status: "Active" | "Expired";
  owner: string;
}

const data: Trademark[] = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `Brand ${i + 1}`,
  status: i % 2 === 0 ? "Active" : "Expired",
  owner: `Company ${i + 1}`,
}));

export const fetchTrademarks = async (
  search: string,
  status: string,
  page: number
) => {
  await new Promise((res) => setTimeout(res, 500));

  let filtered = data;

  if (search) {
    filtered = filtered.filter((t) =>
      t.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (status) {
    filtered = filtered.filter((t) => t.status === status);
  }


  const pageSize = 12;
  const start = (page - 1) * pageSize;
  console.log(filtered)
  return {
    results: filtered.slice(start, start + pageSize),
    total: filtered.length,
  };
  
};