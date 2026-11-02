import { Link, useRouterState } from "@tanstack/react-router";
import { Home, BookOpen, Compass, BarChart3, User } from "lucide-react";

const TABS = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/learn", label: "Learn", icon: BookOpen, exact: false },
  { to: "/explore", label: "Explore", icon: Compass, exact: false },
  { to: "/progress", label: "Progress", icon: BarChart3, exact: false },
  { to: "/profile", label: "Profile", icon: User, exact: false },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-lg border-t bg-card/95 backdrop-blur bps-safe-bottom"
      style={{ borderColor: "var(--color-border)" }}
    >
      <ul className="grid grid-cols-5">
        {TABS.map(({ to, label, icon: Icon, exact }) => {
          const active = exact ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);
          return (
            <li key={to}>
              <Link
                to={to}
                className={`flex flex-col items-center gap-1 px-1 py-2.5 text-[11px] font-semibold transition-colors ${
                  active ? "text-gold" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 1.9} aria-hidden="true" />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
