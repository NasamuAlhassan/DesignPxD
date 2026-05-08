import { Calendar } from "@/components/forge/calendar";
import { EventCard } from "@/components/forge/event-card";
import { InsightCard } from "@/components/forge/insight-card";
import { PlanGenerator } from "@/components/forge/plan-generator";
import { ProgressWidget } from "@/components/forge/progress-widget";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
      <section className="space-y-4">
        <Calendar />
        <PlanGenerator />
      </section>
      <aside className="space-y-4">
        <div className="grid gap-3">
          <EventCard title="Biology Revision" time="7:30 PM - 9:00 PM" type="Study" />
          <EventCard title="Math Class" time="10:00 AM - 11:30 AM" type="Class" />
        </div>
        <ProgressWidget label="Weekly Goal" value={76} />
        <ProgressWidget label="Focus Score" value={88} />
        <InsightCard />
      </aside>
    </div>
  );
}
