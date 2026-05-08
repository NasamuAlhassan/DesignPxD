import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function EventCard({ title, time, type }: { title: string; time: string; type: string }) {
  return (
    <Card className="bg-white/5">
      <CardContent className="flex items-center justify-between p-3">
        <div>
          <p className="text-sm font-medium text-white">{title}</p>
          <p className="text-xs text-slate-400">{time}</p>
        </div>
        <Badge>{type}</Badge>
      </CardContent>
    </Card>
  );
}
