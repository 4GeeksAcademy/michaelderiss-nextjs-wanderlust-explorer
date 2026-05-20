"use client";

import { EXPERIENCE_CATEGORIES, ExperienceCategory } from "@/types/experience";

interface FilterBarProps {
  category: ExperienceCategory | "";
  destination: string;
  destinations: string[];
  onCategoryChange: (value: ExperienceCategory | "") => void;
  onDestinationChange: (value: string) => void;
}

export function FilterBar({
  category,
  destination,
  destinations,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-zinc-700">Category</span>
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value as ExperienceCategory | "")}
          className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option value="">All categories</option>
          {EXPERIENCE_CATEGORIES.map((categoryOption) => (
            <option key={categoryOption} value={categoryOption}>
              {categoryOption}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-zinc-700">Destination</span>
        <select
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
          className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option value="">All destinations</option>
          {destinations.map((destinationOption) => (
            <option key={destinationOption} value={destinationOption}>
              {destinationOption}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
