import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { COMPARISONS } from "@/data/comparisons";
import { ChevronDown, ChevronLeft, ChevronUp } from "lucide-react";

export const Route = createFileRoute("/explore/comparisons")({
  head: () => ({
    meta: [
      { title: "Comparisons — Basics Political Science" },
      {
        name: "description",
        content:
          "Side-by-side comparisons of the political concepts people most often confuse: democracy vs. republic, authoritarianism vs. totalitarianism, presidential vs. parliamentary, and more.",
      },
      { property: "og:title", content: "Comparisons — Basics Political Science" },
      {
        property: "og:description",
        content: "Side-by-side tables for the concepts people most often confuse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ComparisonsPage,
});

function ComparisonsPage() {
  const [openId, setOpenId] = useState<string | null>(COMPARISONS[0]?.id ?? null);

  return (
    <div className="space-y-5 px-4 pt-6">
      <Link to="/explore" className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground">
        <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Explore
      </Link>

      <header>
        <h1 className="text-2xl font-extrabold leading-tight text-foreground">Comparisons</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          The pairs and trios most often mixed up — separated cleanly, aspect by aspect.
        </p>
      </header>

      <div className="space-y-3">
        {COMPARISONS.map((c) => {
          const open = openId === c.id;
          return (
            <div key={c.id} className="bps-card overflow-hidden">
              <button
                onClick={() => setOpenId(open ? null : c.id)}
                aria-expanded={open}
                className="flex w-full items-start justify-between gap-3 p-4 text-left"
              >
                <div>
                  <p className="font-extrabold text-foreground">{c.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{c.blurb}</p>
                </div>
                {open ? (
                  <ChevronUp className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                ) : (
                  <ChevronDown className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                )}
              </button>
              {open && (
                <div className="border-t border-border p-4">
                  <div className="bps-scroll-x rounded-xl border border-border">
                    <table className="w-full min-w-[30rem] text-left text-xs">
                      <thead>
                        <tr className="bg-muted">
                          {c.headers.map((h) => (
                            <th key={h} className="px-3 py-2 font-extrabold text-foreground">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {c.rows.map((row, r) => (
                          <tr key={r} className="border-t border-border">
                            {row.map((cell, i) => (
                              <td
                                key={i}
                                className={`px-3 py-2 align-top ${
                                  i === 0 ? "font-bold text-foreground" : "text-muted-foreground"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
