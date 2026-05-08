"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Brain, CalendarDays, Cog, Focus, LayoutDashboard, BookOpenCheck } from "lucide-react";

const links = [
  { href: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/app/onboarding", label: "Onboarding", icon: Brain },
  { href: "/app/focus", label: "Focus Mode", icon: Focus },
  { href: "/app/subjects", label: "Subjects", icon: BookOpenCheck },
  { href: "/app/settings", label: "Settings", icon: Cog },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b border-white/10 bg-[#0a122d]/90 p-4 backdrop-blur-lg md:h-screen md:w-72 md:border-b-0 md:border-r">
      <Link href="/" className="mb-5 flex items-center gap-2">
        <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-sm font-black text-white">
          F
        </div>
        <div>
          <h1 className="text-lg font-semibold text-white">Forge</h1>
          <p className="text-xs text-slate-400">AI Study Planner</p>
        </div>
      </Link>
      <div className="mb-5">
        <Badge className="bg-violet-500/20 text-violet-100">Premium Demo</Badge>
      </div>
      <nav className="grid gap-1">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                active ? "bg-indigo-500/20 text-white" : "text-slate-300 hover:bg-white/10",
              )}
            >
              <Icon className="size-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-5 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-xs text-cyan-100">
        <div className="mb-1 flex items-center gap-1 font-semibold">
          <CalendarDays className="size-4" /> Smart Insight
        </div>
        Your productivity spikes between 7:30 PM and 9:00 PM.
      </div>
    </aside>
  );
}
