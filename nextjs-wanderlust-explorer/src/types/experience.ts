// src/types/experience.ts

export const EXPERIENCE_CATEGORIES = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
] as const;

export type ExperienceCategory = (typeof EXPERIENCE_CATEGORIES)[number];

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: ExperienceCategory;
  destination: string; // city + country
  price: number;
  rating: number;
  imageUrl: string;
}
