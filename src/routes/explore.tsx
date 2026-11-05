import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/common";
import {
  BookMarked,
  Landmark,
  Scale,
  History,
  Users,
  Drama,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore Tools — Basics Political Science" },
      {
        name: "description",
        content:
          "Interactive learning tools: political dictionary, scenario simulator, system comparisons, history timeline, great thinkers, and the power-structure explorer.",
      },
      { property: "og:title", content: "Explore Tools — Basics Political Science" },
      {
        property: "og:description",
        content: "Six interactive tools: dictionary, simulator, comparisons, timeline, thinkers, power structure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ExploreIndex,
});

const TOOLS = [
  {
    to: "/explore/dictionary" as const,
    icon: BookMarked,
    title: "Political Dictionary",
    body: "100+ essential terms, each with a plain definition, a deeper explanation, and a real-world example.",
  },
  {
    to: "/explore/simulator" as const,
    icon: Drama,
    title: "Scenario Simulator",
    body: "Step into a president's or legislator's shoes. Every choice has trade-offs — feel them, then see your verdict.",
  },
  {
    to: "/explore/comparisons" as const,
    icon: Scale,
    title: "Comparisons",
    body: "Side-by-side tables for the concepts people most often confuse: democracy vs. republic, socialism vs. communism, and more.",
  },
  {
    to: "/explore/timeline" as const,
    icon: History,
    title: "History Timeline",
    body: "From Athenian democracy to today — the moments that shaped how politics works.",
  },
  {
    to: "/explore/thinkers" as const,
    icon: Users,
    title: "Great Thinkers",
    body: "Plato to Rawls: their ideas, their context, their critics. Read the arguments, not just the names.",
  },
  {
    to: "/explore/power-structure" as const,
    icon: Landmark,
    title: "Power Structure",
    body: "The three branches of government: what each does, and how each checks the others.",
  },
];

function ExploreIndex() {
  return (
    <div className="space-y-6 px-4 pt-6">
      <header className="bps-navy-panel p-5">
        <p className="text-[11px] font-bold uppercase tracking-widest text-gold">Reference &amp; play</p>
        <h1 className="mt-1 text-2xl font-extrabold leading-tight">Explore tools</h1>
        <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
          Six ways to go beyond the modules — look things up, test your judgment, and see the big
          picture.
        </p>
      </header>

      <section>
        <SectionHeading title="All tools" subtitle="Everything works offline." />
        <div className="space-y-3">
          {TOOLS.map(({ to, icon: Icon, title, body }) => (
            <Link
              key={to}
              to={to}
              className="bps-card flex items-start gap-3 p-4 transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15">
                <Icon className="h-5 w-5 text-gold-foreground" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-extrabold text-foreground">{title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{body}</p>
              </div>
              <ChevronRight className="mt-3 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
