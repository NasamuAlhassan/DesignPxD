"use client";

import { ChevronLeft, ChevronRight, Download, WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 md:px-6">
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm">
          <ChevronLeft className="mr-1 size-4" /> Prev
        </Button>
        <Button variant="secondary" size="sm">
          Next <ChevronRight className="ml-1 size-4" />
        </Button>
        <p className="ml-2 text-sm text-slate-300">May 11 - May 17</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm">
          <Download className="mr-1 size-4" /> Export PDF
        </Button>
        <Button size="sm">
          <WandSparkles className="mr-1 size-4" /> Generate Plan
        </Button>
        <div className="size-9 rounded-full border border-white/20 bg-gradient-to-b from-indigo-400 to-cyan-400" />
      </div>
    </div>
  );
}
