import { experiences } from "../../data/experiences";
import { Experience } from "../../types/experience";
import Link from "next/link";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 dark:from-black dark:via-zinc-900 dark:to-zinc-800 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500">
          Explore Experiences
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experiences.map((exp: Experience) => (
            <div key={exp.id} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <img src={exp.imageUrl} alt={exp.title} className="h-48 w-full object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-xl font-bold mb-2 text-zinc-800 dark:text-zinc-100">{exp.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-300 mb-2 line-clamp-2">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">{exp.category}</span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold">{exp.destination}</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-yellow-600">${exp.price}</span>
                  <span className="text-sm text-zinc-500">⭐ {exp.rating}</span>
                </div>
                <Link href={`/experiences/${exp.id}`} className="mt-4 inline-block text-blue-600 hover:underline font-medium">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
