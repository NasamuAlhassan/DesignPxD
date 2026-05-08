import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function StudyBlock({
  subject,
  time,
  duration,
  reason,
}: {
  subject: string;
  time: string;
  duration: string;
  reason: string;
}) {
  return (
    <Card className="bg-indigo-500/10">
      <CardContent className="space-y-1 p-4">
        <div className="flex items-center justify-between">
          <p className="font-medium text-white">{subject}</p>
          <Badge className="bg-cyan-400/20 text-cyan-100">{duration}</Badge>
        </div>
        <p className="text-sm text-slate-300">{time}</p>
        <p className="text-xs text-violet-100">{reason}</p>
      </CardContent>
    </Card>
  );
}
