"use client";

import { useCallback, useEffect, useState } from "react";

const FAVORITES_KEY = "wanderlust-favorite-ids";
const FAVORITES_EVENT = "wanderlust-favorites-updated";

function readFavoriteIds() {
  if (typeof window === "undefined") {
    return [] as string[];
  }

  const raw = window.localStorage.getItem(FAVORITES_KEY);

  if (!raw) {
    return [] as string[];
  }

  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "string") : [];
  } catch {
    return [] as string[];
  }
}

function writeFavoriteIds(ids: string[]) {
  window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
  window.dispatchEvent(new Event(FAVORITES_EVENT));
}

export function useFavoriteIds() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    setFavoriteIds(readFavoriteIds());

    const handleSync = () => {
      setFavoriteIds(readFavoriteIds());
    };

    window.addEventListener("storage", handleSync);
    window.addEventListener(FAVORITES_EVENT, handleSync);

    return () => {
      window.removeEventListener("storage", handleSync);
      window.removeEventListener(FAVORITES_EVENT, handleSync);
    };
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((prev) => {
      const next = prev.includes(id) ? prev.filter((favoriteId) => favoriteId !== id) : [...prev, id];
      writeFavoriteIds(next);
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (id: string) => {
      return favoriteIds.includes(id);
    },
    [favoriteIds],
  );

  return {
    favoriteIds,
    isFavorite,
    toggleFavorite,
  };
}
