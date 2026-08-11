"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PomodoroTimer from "@/components/pomodoro/PomodoroTimer";

export default function PomodoroPage() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-4">
          <Link href="/dashboard" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> <span className="text-sm">Back</span>
          </Link>
          <span className="text-white font-semibold text-sm">Pomodoro Timer</span>
        </div>
      </nav>
      <div className="pt-14">
        <PomodoroTimer />
      </div>
    </div>
  );
}
