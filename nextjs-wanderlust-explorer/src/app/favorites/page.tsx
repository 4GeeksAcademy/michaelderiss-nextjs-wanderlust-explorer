"use client";

import Link from "next/link";

import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";
import { useFavoriteIds } from "@/hooks/useFavoriteIds";

export default function FavoritesPage() {
  const { favoriteIds, isFavorite, toggleFavorite } = useFavoriteIds();

  const favoriteExperiences = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Your Favorites</h1>
        <p className="mt-2 text-zinc-600">Saved experiences appear here for quick access.</p>
      </header>

      {favoriteExperiences.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-12 text-center">
          <p className="text-lg font-semibold text-zinc-800">No favorites yet</p>
          <p className="mt-2 text-sm text-zinc-600">Tap a heart on the explorer to build your shortlist.</p>
          <Link
            href="/experiences"
            className="mt-6 inline-flex rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700"
          >
            Go to explorer
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteExperiences.map((experience) => (
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
