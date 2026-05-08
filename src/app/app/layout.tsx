import { Sidebar } from "@/components/forge/sidebar";
import { Navbar } from "@/components/forge/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex md:min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
