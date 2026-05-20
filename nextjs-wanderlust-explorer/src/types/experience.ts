// src/types/experience.ts

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: "Adventure" | "Culture" | "Food" | "Wellness" | "Nature";
  destination: string; // city + country
  price: number;
  rating: number;
  imageUrl: string;
}
