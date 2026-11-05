import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { DICTIONARY } from "@/data/dictionary";
import { Chip, EmptyState, SectionHeading } from "@/components/common";
import { ChevronLeft, Search } from "lucide-react";

export const Route = createFileRoute("/explore/dictionary")({
  head: () => ({
    meta: [
      { title: "Political Dictionary — Basics Political Science" },
      {
        name: "description",
        content:
          "Over 100 political terms in plain language: power, legitimacy, federalism, populism, and more — each with a deeper explanation and a real example.",
      },
      { property: "og:title", content: "Political Dictionary — Basics Political Science" },
      {
        property: "og:description",
        content: "100+ political terms explained in plain language, with examples.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DictionaryPage,
});

const CATEGORY_LABELS: Record<string, string> = {
  all: "All",
  core: "Core concepts",
  systems: "Systems",
  power: "Power & authority",
  ideology: "Ideologies",
  democracy: "Democracy",
  international: "International",
  everyday: "Everyday politics",
};

function DictionaryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [openTerm, setOpenTerm] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DICTIONARY.filter((e) => {
      const inCategory = category === "all" || e.category === category;
      const matches =
        !q ||
        e.term.toLowerCase().includes(q) ||
        e.simple.toLowerCase().includes(q) ||
        e.detailed.toLowerCase().includes(q);
      return inCategory && matches;
    });
  }, [query, category]);

  return (
    <div className="space-y-5 px-4 pt-6">
      <Link to="/explore" className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground">
        <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Explore
      </Link>

      <header>
        <h1 className="text-2xl font-extrabold leading-tight text-foreground">Political dictionary</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {DICTIONARY.length} terms. Tap any entry for the full explanation and an example.
        </p>
      </header>

      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms or definitions…"
          aria-label="Search the dictionary"
          className="w-full rounded-xl border border-input bg-card py-2.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      <div className="bps-scroll-x -mx-1 flex gap-2 px-1 pb-1">
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setCategory(key)}
            aria-pressed={category === key}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
              category === key
                ? "bg-primary text-primary-foreground"
                : "border border-input bg-card text-muted-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <section className="space-y-2">
        {results.length === 0 ? (
          <EmptyState title="No matches" body="Try another word, or clear the category filter." />
        ) : (
          results.map((entry) => {
            const open = openTerm === entry.term;
            return (
              <div key={entry.term} className="bps-card overflow-hidden">
                <button
                  onClick={() => setOpenTerm(open ? null : entry.term)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-2 p-4 text-left"
                >
                  <div className="min-w-0">
                    <p className="font-extrabold text-foreground">{entry.term}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{entry.simple}</p>
                  </div>
                  <Chip tone="muted" className="shrink-0">
                    {CATEGORY_LABELS[entry.category] ?? entry.category}
                  </Chip>
                </button>
                {open && (
                  <div className="border-t border-border px-4 py-3">
                    <p className="text-sm leading-relaxed text-foreground">{entry.detailed}</p>
                    <p className="mt-2 rounded-xl bg-muted px-3 py-2 text-sm leading-relaxed text-foreground">
                      <span className="font-extrabold text-gold-foreground">Example: </span>
                      {entry.example}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      <div className="pb-2">
        <SectionHeading
          title="How to use this"
          subtitle="Key terms inside lessons link to the same ideas — the dictionary is your safety net while reading."
        />
      </div>
    </div>
  );
}
