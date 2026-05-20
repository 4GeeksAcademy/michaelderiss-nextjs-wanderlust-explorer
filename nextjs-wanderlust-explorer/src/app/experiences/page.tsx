import { Suspense } from "react";

import { ExperiencesExplorer } from "@/components/ExperiencesExplorer";

function LoadingFilters() {
  return (
    <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-zinc-200">
      <p className="text-zinc-600">Loading explorer...</p>
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<LoadingFilters />}>
      <ExperiencesExplorer />
    </Suspense>
  );
}
