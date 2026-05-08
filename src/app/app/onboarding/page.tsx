"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { UploadArea } from "@/components/forge/upload-area";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      <div>
        <p className="mb-2 text-sm text-slate-300">Step {step} of 3</p>
        <Progress value={(step / 3) * 100} />
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 1 — Subjects</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            <Input placeholder="Subject name" />
            <Input placeholder="Priority (1-5)" />
            <Input placeholder="Weakness (1-5)" />
            <Input placeholder="Curriculum progress %" />
            <Input placeholder="Exam date" type="date" />
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 2 — Schedule Input</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-3 gap-2 text-sm">
              <Button variant="secondary">Manual Entry</Button>
              <Button variant="secondary">Upload Document</Button>
              <Button variant="secondary">Voice Input</Button>
            </div>
            <UploadArea />
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">
              Extracted events preview: Math Class • Biology Lab • Commute • Lunch
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 3 — Review & Generate</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-xl border border-indigo-300/20 bg-indigo-500/10 p-4 text-sm text-indigo-100">
              Weekly calendar preview is ready.
            </div>
            <Button>Generate Plan</Button>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between">
        <Button variant="secondary" onClick={() => setStep((s) => Math.max(1, s - 1))}>Back</Button>
        <Button onClick={() => setStep((s) => Math.min(3, s + 1))}>Continue</Button>
      </div>
    </div>
  );
}
