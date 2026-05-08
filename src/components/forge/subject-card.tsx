import { Subject } from "./types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export function SubjectCard({ subject }: { subject: Subject }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{subject.name}</CardTitle>
          <Badge>Priority {subject.priority}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-slate-300">
        <p>Weakness: {subject.weakness}/5</p>
        <div>
          <div className="mb-1 flex justify-between text-xs">
            <span>Progress</span>
            <span>{subject.progress}%</span>
          </div>
          <Progress value={subject.progress} />
        </div>
        <p>Upcoming exam: {subject.exam}</p>
        <p>Study hours this week: {subject.studyHours}h</p>
        <div className="flex gap-2 pt-1">
          <Button variant="secondary" size="sm">Edit</Button>
          <Button variant="secondary" size="sm">Delete</Button>
        </div>
      </CardContent>
    </Card>
  );
}
