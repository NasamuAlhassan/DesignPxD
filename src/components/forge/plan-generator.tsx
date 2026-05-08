"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { StudyBlock } from "./study-block";

const generatedBlocks = [
  {
    subject: "Biology: Active Recall",
    time: "Tue 7:00 PM - 8:15 PM",
    duration: "75 min",
    reason: "High priority — exam in 4 days",
  },
  {
    subject: "Chemistry: Stoichiometry",
    time: "Wed 5:30 PM - 6:30 PM",
    duration: "60 min",
    reason: "Weakness level 5, low curriculum progress",
  },
];

export function PlanGenerator() {
  const [loading, setLoading] = useState(false);

  const run = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1600);
  };

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-white">AI Plan Generation</h2>
        <Button onClick={run}>Generate Plan</Button>
      </div>
      {loading ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-violet-300/20 bg-violet-500/10 p-4 text-sm text-violet-100"
        >
          Forge AI is analyzing classes, energy patterns, and exam urgency...
        </motion.div>
      ) : (
        <div className="grid gap-3">
          {generatedBlocks.map((block) => (
            <StudyBlock key={block.subject} {...block} />
          ))}
        </div>
      )}
    </section>
  );
}
