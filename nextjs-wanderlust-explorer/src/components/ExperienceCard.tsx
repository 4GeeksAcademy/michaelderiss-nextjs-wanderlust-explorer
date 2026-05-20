"use client";

import Link from "next/link";

import { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ExperienceCard({ experience, isFavorite, onToggleFavorite }: ExperienceCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
      <img src={experience.imageUrl} alt={experience.title} className="h-44 w-full object-cover" />

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-bold text-zinc-900">{experience.title}</h2>
          <button
            type="button"
            onClick={() => onToggleFavorite(experience.id)}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="text-2xl leading-none"
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        </div>

        <p className="line-clamp-2 text-sm text-zinc-600">{experience.description}</p>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
            {experience.category}
          </span>
          <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800">
            {experience.destination}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between text-sm text-zinc-700">
          <span className="font-semibold">${experience.price}</span>
          <span>★ {experience.rating.toFixed(1)}</span>
        </div>

        <Link
          href={`/experiences/${experience.id}`}
          className="inline-flex w-fit rounded-lg bg-zinc-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
