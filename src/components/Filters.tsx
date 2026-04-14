export default function Filters({ status, setStatus }: any) {
  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="p-3 border rounded-lg"
    >
      <option value="">All</option>
      <option value="Active">Active</option>
      <option value="Expired">Expired</option>
    </select>
  );
}