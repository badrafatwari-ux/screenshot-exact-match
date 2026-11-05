import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { TIMELINE, ERA_LABELS, type TimelineEvent } from "@/data/timeline";
import { Chip } from "@/components/common";
import { ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/explore/timeline")({
  head: () => ({
    meta: [
      { title: "History Timeline — Basics Political Science" },
      {
        name: "description",
        content:
          "Political history from Athenian democracy to today: the declarations, revolutions, constitutions, and turning points that shaped how politics works.",
      },
      { property: "og:title", content: "History Timeline — Basics Political Science" },
      {
        property: "og:description",
        content: "The political moments that shaped how politics works, from Athens to today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TimelinePage,
});

const ERAS = Object.keys(ERA_LABELS) as TimelineEvent["era"][];

function TimelinePage() {
  const [era, setEra] = useState<"all" | TimelineEvent["era"]>("all");
  const events = era === "all" ? TIMELINE : TIMELINE.filter((e) => e.era === era);

  return (
    <div className="space-y-5 px-4 pt-6">
      <Link to="/explore" className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground">
        <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Explore
      </Link>

      <header>
        <h1 className="text-2xl font-extrabold leading-tight text-foreground">History timeline</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {TIMELINE.length} turning points in political history. None celebrate a side — each changed
          how power works.
        </p>
      </header>

      <div className="bps-scroll-x -mx-1 flex gap-2 px-1 pb-1">
        <button
          onClick={() => setEra("all")}
          aria-pressed={era === "all"}
          className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
            era === "all"
              ? "bg-primary text-primary-foreground"
              : "border border-input bg-card text-muted-foreground"
          }`}
        >
          All eras
        </button>
        {ERAS.map((e) => (
          <button
            key={e}
            onClick={() => setEra(e)}
            aria-pressed={era === e}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
              era === e
                ? "bg-primary text-primary-foreground"
                : "border border-input bg-card text-muted-foreground"
            }`}
          >
            {ERA_LABELS[e]}
          </button>
        ))}
      </div>

      <ol className="relative space-y-4 border-l border-border pl-5">
        {events.map((event) => (
          <li key={`${event.year}-${event.title}`} className="relative">
            <span
              className="absolute -left-[1.62rem] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-card"
              aria-hidden="true"
            />
            <div className="bps-card p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-extrabold text-gold-foreground">{event.year}</span>
                <Chip tone="muted">{ERA_LABELS[event.era]}</Chip>
              </div>
              <p className="mt-1 font-extrabold text-foreground">{event.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{event.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
