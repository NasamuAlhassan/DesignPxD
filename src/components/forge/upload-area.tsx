"use client";

import { UploadCloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function UploadArea() {
  return (
    <Card className="border-dashed border-violet-300/30">
      <CardContent className="flex min-h-44 flex-col items-center justify-center gap-2 text-center text-sm text-slate-300">
        <UploadCloud className="size-8 text-violet-300" />
        <p>Drop files here or click to upload</p>
        <p className="text-xs text-slate-400">Supports PDF, Excel, Word, PNG, JPG</p>
      </CardContent>
    </Card>
  );
}
