export default function SearchBar({ value, onChange }: any) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search trademarks..."
      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
    />
  );
}