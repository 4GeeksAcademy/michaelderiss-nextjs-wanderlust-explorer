"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ExperienceCard } from "@/components/ExperienceCard";
import { FilterBar } from "@/components/FilterBar";
import { SearchBar } from "@/components/SearchBar";
import { useFavorites } from "@/context/FavoritesContext";
import { experiences } from "@/data/experiences";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";
import { ExperienceCategory } from "@/types/experience";

function readStringParam(params: URLSearchParams, key: string) {
  return params.get(key) ?? "";
}

export function ExperiencesExplorer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isFavorite, toggleFavorite } = useFavorites();

  const [searchTerm, setSearchTerm] = useState(() => readStringParam(searchParams, "search"));
  const [category, setCategory] = useState<ExperienceCategory | "">(
    () => readStringParam(searchParams, "category") as ExperienceCategory | "",
  );
  const [destination, setDestination] = useState(() => readStringParam(searchParams, "destination"));

  useEffect(() => {
    setSearchTerm(readStringParam(searchParams, "search"));
    setCategory(readStringParam(searchParams, "category") as ExperienceCategory | "");
    setDestination(readStringParam(searchParams, "destination"));
  }, [searchParams]);

  const destinations = useMemo(
    () => Array.from(new Set(experiences.map((experience) => experience.destination))).sort(),
    [],
  );

  const filteredExperiences = useExperienceFilters(experiences, {
    searchTerm,
    category,
    destination,
  });

  const updateQueryParams = (nextValues: {
    search?: string;
    category?: ExperienceCategory | "";
    destination?: string;
  }) => {
    const nextParams = new URLSearchParams(searchParams.toString());

    const normalizedValues = {
      search: nextValues.search ?? searchTerm,
      category: nextValues.category ?? category,
      destination: nextValues.destination ?? destination,
    };

    if (normalizedValues.search) {
      nextParams.set("search", normalizedValues.search);
    } else {
      nextParams.delete("search");
    }

    if (normalizedValues.category) {
      nextParams.set("category", normalizedValues.category);
    } else {
      nextParams.delete("category");
    }

    if (normalizedValues.destination) {
      nextParams.set("destination", normalizedValues.destination);
    } else {
      nextParams.delete("destination");
    }

    const queryString = nextParams.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    updateQueryParams({ search: value });
  };

  const handleCategoryChange = (value: ExperienceCategory | "") => {
    setCategory(value);
    updateQueryParams({ category: value });
  };

  const handleDestinationChange = (value: string) => {
    setDestination(value);
    updateQueryParams({ destination: value });
  };

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Explore Experiences</h1>
        <p className="text-zinc-600">Filter by search, category, and destination. Share your URL to keep filters.</p>
      </header>

      <div className="space-y-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200">
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
        <FilterBar
          category={category}
          destination={destination}
          destinations={destinations}
          onCategoryChange={handleCategoryChange}
          onDestinationChange={handleDestinationChange}
        />
      </div>

      {filteredExperiences.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-12 text-center">
          <p className="text-lg font-semibold text-zinc-800">No results found</p>
          <p className="mt-2 text-sm text-zinc-600">Try adjusting your search term or filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={isFavorite(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}
