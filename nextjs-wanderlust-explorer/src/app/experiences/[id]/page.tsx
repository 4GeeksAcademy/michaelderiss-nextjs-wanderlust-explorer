import { experiences } from "../../../data/experiences";
import { Experience } from "../../../types/experience";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const id = typeof params.id === "object" && "then" in params.id ? await params.id : params.id;
  const experience = experiences.find((exp: Experience) => exp.id === id);
  if (!experience) return notFound();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 dark:from-black dark:via-zinc-900 dark:to-zinc-800 p-8">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col md:flex-row">
        <img src={experience.imageUrl} alt={experience.title} className="h-80 w-full md:w-1/2 object-cover" />
        <div className="p-8 flex-1 flex flex-col">
          <h1 className="text-3xl font-extrabold mb-2 text-zinc-800 dark:text-zinc-100">{experience.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">{experience.category}</span>
            <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold">{experience.destination}</span>
          </div>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">{experience.description}</p>
          <div className="flex items-center gap-6 mb-4">
            <span className="text-lg font-bold text-yellow-600">${experience.price}</span>
            <span className="text-sm text-zinc-500">⭐ {experience.rating}</span>
          </div>
          <button className="mt-auto px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-200">
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
}
