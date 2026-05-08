import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge — AI Study Planner",
  description: "Your AI-powered personal study planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0B1020] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
