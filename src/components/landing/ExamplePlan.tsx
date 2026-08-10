"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExamplePlan() {
  return (
    <section id="example" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">See It In Action</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Your plan looks something like this</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Every study block tells you exactly what to do and how to do it.</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-4 text-sm text-gray-400 font-mono">day-1-plan.json</span>
          </div>

          <div className="mb-6">
            <div className="text-sm text-indigo-400 font-semibold mb-1">DAY 1 — TODAY</div>
            <div className="text-xs text-gray-400">Electricity + Acids, Bases and Salts</div>
          </div>

          <div className="space-y-4">
            {[
              { time: "6:00 – 6:50 PM", topic: "Ohm's Law", color: "bg-red-500", what: ["definition", "formula", "V-I graph", "numerical applications"] },
              { time: "7:00 – 7:40 PM", topic: "Resistance", color: "bg-yellow-500", what: ["factors affecting resistance", "series & parallel", "common question types"] },
              { time: "7:50 – 8:20 PM", topic: "Practice", color: "bg-blue-500", what: ["5 MCQs", "3 short answer", "1 numerical"] },
              { time: "8:20 – 8:40 PM", topic: "Active Recall", color: "bg-purple-500", what: ["Close book", "Write from memory", "Check gaps"] },
            ].map((block, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="text-xs text-gray-400 font-mono w-32 shrink-0 pt-1">{block.time}</div>
                <div className={`w-2 h-2 rounded-full ${block.color} mt-2 shrink-0`} />
                <div className="flex-1 bg-white/5 rounded-xl p-4">
                  <div className="font-semibold text-sm mb-1">{block.topic}</div>
                  <div className="text-xs text-gray-400">{block.what.join(" · ")}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <Link href="/onboarding" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-bold text-sm hover:bg-gray-100 transition-colors">
              Build Your Own Plan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
