import React from "react";

function highlight(text: string, query: string) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={i} className="bg-yellow-300 px-1 rounded">
        {part}
      </span>
    ) : (
      part
    )
  );
}

function TrademarkCard({ item, search }: any) {
  return (
    <div className="border rounded hover:shadow-lg transition">

      <div className="p-4   shadow  bg-white">
        <h3 className="font-bold text-lg">
          {highlight(item.name, search)}
        </h3>
        <p className="text-sm text-gray-500">{item.owner}</p>
        <span
          className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
            item.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {item.status}
        </span>
      </div>
    </div>
  );
}

export default React.memo(TrademarkCard);