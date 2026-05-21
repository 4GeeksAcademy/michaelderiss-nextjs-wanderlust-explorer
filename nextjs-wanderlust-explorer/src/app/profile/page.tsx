"use client";

import { useFavoriteIds } from "@/hooks/useFavoriteIds";

export default function ProfilePage() {
  const { favoriteIds } = useFavoriteIds();

  return (
    <section className="mx-auto max-w-2xl">
      <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 text-2xl font-black text-white">
            LM
          </div>
          <h1 className="text-2xl font-black text-zinc-900">Lea Moreau</h1>
          <p className="mt-1 text-zinc-600">Product Manager and travel enthusiast</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-stone-100 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Saved favorites</p>
            <p className="mt-2 text-3xl font-black text-zinc-900">{favoriteIds.length}</p>
          </div>
          <div className="rounded-2xl bg-stone-100 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Member since</p>
            <p className="mt-2 text-3xl font-black text-zinc-900">2026</p>
          </div>
        </div>
      </article>
    </section>
  );
}
