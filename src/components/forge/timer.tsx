"use client";

import { useMemo, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const presets = {
  pomodoro: 25 * 60,
  deep: 50 * 60,
  warmup: 10 * 60,
};

export function Timer() {
  const [mode, setMode] = useState<keyof typeof presets>("pomodoro");
  const [timeLeft, setTimeLeft] = useState(presets.pomodoro);

  const progress = useMemo(() => {
    const total = presets[mode];
    return ((total - timeLeft) / total) * 100;
  }, [mode, timeLeft]);

  const min = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const sec = String(timeLeft % 60).padStart(2, "0");

  return (
    <Card className="mx-auto w-full max-w-xl bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-cyan-400/10 p-8 text-center">
      <div className="mx-auto mb-6 grid w-fit grid-flow-col gap-2 rounded-full border border-white/15 bg-white/5 p-1">
        {([
          ["pomodoro", "25/5 Pomodoro"],
          ["deep", "Deep Focus"],
          ["warmup", "Quick Warmup"],
        ] as const).map(([key, label]) => (
          <button
            key={key}
            className={`rounded-full px-3 py-1 text-xs transition ${
              mode === key ? "bg-white/20 text-white" : "text-slate-300"
            }`}
            onClick={() => {
              setMode(key);
              setTimeLeft(presets[key]);
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="relative mx-auto mb-6 grid size-56 place-items-center rounded-full border border-white/20 bg-[#0d1838]">
        <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 100 100" aria-hidden>
          <circle cx="50" cy="50" r="44" stroke="rgba(255,255,255,0.12)" strokeWidth="8" fill="none" />
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="url(#grad)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="276"
            strokeDashoffset={276 - (276 * progress) / 100}
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div>
          <p className="text-5xl font-semibold tracking-tight text-white">{min}:{sec}</p>
          <p className="mt-1 text-sm text-slate-300">Biology — Unit 5 Review</p>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <Button variant="secondary"><Play className="mr-1 size-4" />Start</Button>
        <Button variant="secondary"><Pause className="mr-1 size-4" />Pause</Button>
        <Button variant="secondary" onClick={() => setTimeLeft(presets[mode])}><RotateCcw className="mr-1 size-4" />Reset</Button>
      </div>
    </Card>
  );
}
