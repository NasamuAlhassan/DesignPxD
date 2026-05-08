import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function AuthPage() {
  return (
    <main className="grid min-h-screen place-items-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to Forge</CardTitle>
          <p className="text-sm text-slate-400">Sign in, sign up, or continue in demo mode.</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <div className="grid gap-2">
            <Button>Sign in</Button>
            <Button variant="secondary">Sign up</Button>
            <Button variant="secondary">Continue with Google</Button>
            <Button variant="secondary">Send magic link</Button>
          </div>
          <Link href="/app/dashboard" className="block text-center text-sm text-cyan-300 hover:underline">
            Continue as Guest / Demo
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
