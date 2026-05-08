import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProgressWidget({ label, value }: { label: string; value: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex justify-between text-xs text-slate-400">
          <span>Completion</span>
          <span>{value}%</span>
        </div>
        <Progress value={value} />
      </CardContent>
    </Card>
  );
}
