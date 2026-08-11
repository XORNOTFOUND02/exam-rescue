"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DoubtSolver from "@/components/ai/DoubtSolver";

export default function DoubtPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/90 backdrop-blur border border-gray-200 text-sm font-medium text-gray-700 hover:bg-white shadow-sm transition-all">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </div>

      <DoubtSolver />
    </div>
  );
}
