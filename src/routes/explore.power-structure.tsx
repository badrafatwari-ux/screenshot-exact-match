import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BRANCHES } from "@/data/power-structure";
import { Chip } from "@/components/common";
import { ChevronLeft, ArrowLeftRight, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/explore/power-structure")({
  head: () => ({
    meta: [
      { title: "Power Structure — Basics Political Science" },
      {
        name: "description",
        content:
          "The three branches of government — executive, legislative, judiciary: what each does, who serves in it, and how each checks and is checked.",
      },
      { property: "og:title", content: "Power Structure — Basics Political Science" },
      {
        property: "og:description",
        content: "What each branch of government does — and how each checks the others.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PowerStructurePage,
});

type Branch = (typeof BRANCHES)[number];

function PowerStructurePage() {
  const [selectedId, setSelectedId] = useState<Branch["id"]>("executive");
  const branch = BRANCHES.find((b) => b.id === selectedId) ?? BRANCHES[0]!;

  return (
    <div className="space-y-5 px-4 pt-6">
      <Link to="/explore" className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground">
        <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Explore
      </Link>

      <header>
        <h1 className="text-2xl font-extrabold leading-tight text-foreground">Power structure</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          The classic three branches. Names and details differ by country, but the division of labor
          and the mutual checking are the point.
        </p>
      </header>

      <div className="grid grid-cols-3 gap-2" role="tablist" aria-label="Branches of government">
        {BRANCHES.map((b) => (
          <button
            key={b.id}
            role="tab"
            aria-selected={selectedId === b.id}
            onClick={() => setSelectedId(b.id)}
            className={`rounded-xl px-2 py-2.5 text-xs font-extrabold transition-colors ${
              selectedId === b.id
                ? "bg-primary text-primary-foreground"
                : "border border-input bg-card text-muted-foreground"
            }`}
          >
            {b.name}
          </button>
        ))}
      </div>

      <section className="bps-navy-panel p-5">
        <p className="text-[11px] font-bold uppercase tracking-widest text-gold">The {branch.name}</p>
        <p className="mt-1 text-sm leading-relaxed text-primary-foreground/90">{branch.essence}</p>
      </section>

      <section className="bps-card p-4">
        <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          What it does
        </p>
        <ul className="mt-2 space-y-1.5">
          {branch.responsibilities.map((r) => (
            <li key={r} className="flex gap-2 text-sm text-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>
      </section>

      <section className="bps-card p-4">
        <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          Who sits in it
        </p>
        <ul className="mt-2 space-y-1.5">
          {branch.composition.map((c) => (
            <li key={c} className="flex gap-2 text-sm text-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="bps-card p-4">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gold-foreground">
          <ArrowLeftRight className="h-3.5 w-3.5" aria-hidden="true" /> How it checks the others
        </p>
        <div className="mt-2 space-y-2">
          {branch.checksOn.map((c) => (
            <div key={c.target} className="rounded-xl bg-muted px-3 py-2">
              <p className="text-xs font-extrabold text-foreground">Over the {c.target}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{c.how}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bps-card p-4">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gold-foreground">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> How it is checked
        </p>
        <div className="mt-2 space-y-2">
          {branch.checkedBy.map((c) => (
            <div key={c.source} className="rounded-xl bg-muted px-3 py-2">
              <p className="text-xs font-extrabold text-foreground">By the {c.source}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{c.how}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bps-card p-4">
        <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          In your everyday life
        </p>
        <p className="mt-1 text-sm leading-relaxed text-foreground">{branch.everyday}</p>
      </section>

      <p className="pb-2 text-center text-[11px] text-muted-foreground">
        <Chip tone="gold">Neutrality note</Chip>
        <span className="mt-1 block">
          Descriptions are institution-generic: they fit presidential and parliamentary systems alike.
        </span>
      </p>
    </div>
  );
}
