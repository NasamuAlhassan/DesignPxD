import { subjects } from "@/components/forge/mock-data";
import { SubjectCard } from "@/components/forge/subject-card";
import { Button } from "@/components/ui/button";

export default function SubjectsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Subjects</h2>
        <Button>Add new subject</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
}
