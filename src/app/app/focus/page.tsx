import { Timer } from "@/components/forge/timer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FocusPage() {
  return (
    <div className="space-y-4">
      <Timer />
      <Card>
        <CardHeader>
          <CardTitle>Attached Material</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-300">
          Biology Chapter 7 summary • Flashcards • Formula sheet
        </CardContent>
      </Card>
    </div>
  );
}
