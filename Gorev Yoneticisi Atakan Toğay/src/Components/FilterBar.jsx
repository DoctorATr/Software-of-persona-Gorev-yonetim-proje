import { FILTERS } from "../Interfaces/task.js";

export default function FilterBar({ filter, onFilterChange, search, onSearchChange }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex rounded-lg bg-slate-200 p-1">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={`rounded-md px-3 py-1 text-sm ${
              filter === f.value
                ? "bg-white font-medium text-indigo-600 shadow-sm"
                : "text-slate-600"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Ara..."
        className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none"
      />
    </div>
  );
}
