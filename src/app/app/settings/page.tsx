import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="mx-auto grid max-w-3xl gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-300">Daily reminders, session completion alerts, AI rebalance updates.</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Theme, timezone & export preferences</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-3">
          <Input placeholder="Theme: Dark" />
          <Input placeholder="Timezone" />
          <Button variant="secondary">Default export: PDF</Button>
        </CardContent>
      </Card>
    </div>
  );
}
