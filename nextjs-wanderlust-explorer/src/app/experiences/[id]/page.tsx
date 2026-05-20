"use client";

import { useEffect } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

import { useFavorites } from "@/context/FavoritesContext";
import { experiences } from "@/data/experiences";

export default function ExperienceDetailPage() {
  const params = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();

  const experience = experiences.find((item) => item.id === params.id);

  useEffect(() => {
    if (!experience) {
      return;
    }

    const previousTitle = document.title;
    document.title = `${experience.title} | Wanderlust Explorer`;

    return () => {
      document.title = previousTitle;
    };
  }, [experience]);

  if (!experience) {
    notFound();
  }

  const favorite = isFavorite(experience.id);

  return (
    <section className="mx-auto max-w-4xl">
      <Link href="/experiences" className="mb-6 inline-block text-sm font-semibold text-zinc-700 hover:text-zinc-900">
        ← Back to explorer
      </Link>

      <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-200">
        <img src={experience.imageUrl} alt={experience.title} className="h-72 w-full object-cover sm:h-96" />

        <div className="space-y-5 p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-zinc-900">{experience.title}</h1>
              <p className="mt-2 text-zinc-600">{experience.destination}</p>
            </div>

            <button
              type="button"
              onClick={() => toggleFavorite(experience.id)}
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800"
            >
              {favorite ? "♥ Saved" : "♡ Save"}
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
              {experience.category}
            </span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              {experience.destination}
            </span>
          </div>

          <p className="text-base leading-7 text-zinc-700">{experience.description}</p>

          <div className="flex gap-6 border-t border-zinc-200 pt-5 text-sm text-zinc-700">
            <p>
              <span className="block text-xs uppercase tracking-wide text-zinc-500">Price</span>${experience.price}
            </p>
            <p>
              <span className="block text-xs uppercase tracking-wide text-zinc-500">Rating</span>★ {experience.rating.toFixed(1)}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
