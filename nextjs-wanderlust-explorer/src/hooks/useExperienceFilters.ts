import { useMemo } from "react";

import { Experience, ExperienceCategory } from "@/types/experience";

interface FilterOptions {
  searchTerm: string;
  category: ExperienceCategory | "";
  destination: string;
}

function escapeRegex(term: string) {
  return term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function useExperienceFilters(experiences: Experience[], options: FilterOptions) {
  const { searchTerm, category, destination } = options;

  return useMemo(() => {
    const trimmedSearch = searchTerm.trim();
    const trimmedDestination = destination.trim().toLowerCase();

    return experiences.filter((experience) => {
      const titleMatches = trimmedSearch
        ? new RegExp(escapeRegex(trimmedSearch), "i").test(experience.title)
        : true;
      const categoryMatches = category ? experience.category === category : true;
      const destinationMatches = trimmedDestination
        ? experience.destination.toLowerCase().includes(trimmedDestination)
        : true;

      return titleMatches && categoryMatches && destinationMatches;
    });
  }, [experiences, searchTerm, category, destination]);
}
