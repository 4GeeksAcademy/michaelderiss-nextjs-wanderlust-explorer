import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100 via-amber-50 to-sky-100 px-6 py-16 sm:px-10 sm:py-24">
      <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-orange-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <Image
          src="/wanderlust-logo.svg"
          alt="Wanderlust Labs Logo"
          width={120}
          height={120}
          className="mb-8 drop-shadow"
        />
        <h1 className="mb-6 text-4xl font-black leading-tight text-zinc-900 sm:text-6xl">
          Discover Your Next Adventure
        </h1>
        <p className="mb-10 max-w-xl text-lg text-zinc-700 sm:text-xl">
          Curated experiences from around the world. Browse, filter, and save the trips you love in one clean explorer.
        </p>
        <Link
          href="/experiences"
          className="inline-block rounded-xl bg-zinc-900 px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-700"
        >
          Explore Experiences
        </Link>
      </div>
    </section>
  );
}
