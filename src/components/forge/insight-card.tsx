import { Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function InsightCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="size-4 text-violet-300" /> AI Insight
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-300">
        Chemistry retention drops after 45 mins. Forge recommends 2 x 35 min blocks with a short reset between.
      </CardContent>
    </Card>
  );
}
