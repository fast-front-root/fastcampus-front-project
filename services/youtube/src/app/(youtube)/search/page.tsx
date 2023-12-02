import { SearchFilter } from "@/src/features/search/components/SearchFilter";
import { SearchResultList } from "@/src/features/search/components/SearchResultList";
import { Suspense } from "react";

export default function Search() {
  return (
    <main>
      <SearchFilter />
      <Suspense fallback={<></>}>
        <SearchResultList />
      </Suspense>
    </main>
  );
}
