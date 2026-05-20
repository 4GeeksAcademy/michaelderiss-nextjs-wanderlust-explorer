import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 dark:from-black dark:via-zinc-900 dark:to-zinc-800 font-sans">
      <main className="flex flex-col items-center justify-center w-full max-w-2xl px-6 py-32 rounded-3xl shadow-xl bg-white/90 dark:bg-zinc-900/90">
        <Image
          src="/wanderlust-logo.svg"
          alt="Wanderlust Labs Logo"
          width={120}
          height={120}
          className="mb-8 drop-shadow-lg"
        />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500 mb-6 text-center">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl text-zinc-700 dark:text-zinc-200 mb-10 text-center max-w-lg">
          Curated experiences from around the world. Find, filter, and save your favorites — from street-food tours in Bangkok to sailing trips in the Adriatic.
        </p>
        <Link
          href="/experiences"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500 text-white text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200"
        >
          Explore Experiences
        </Link>
      </main>
    </div>
  );
}
