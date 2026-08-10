"use client";

import { TrendingUp } from "lucide-react";

export default function ScoreOptimization() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Marks per Hour</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">You don&apos;t need to study everything equally.</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Exam Rescue helps prioritize what deserves your limited time. We calculate which topics give you the best return on your study hours.
              </p>
              <div className="space-y-3">
                {[
                  "Identify high-yield topics first",
                  "Focus on weak areas that matter most",
                  "Skip what you already know well",
                  "Maximize marks per hour invested",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { topic: "Ohm's Law", time: "45 min", priority: "Very High", bar: "w-[95%]", color: "from-red-400 to-red-500" },
                { topic: "Carbon Compounds", time: "2 hrs", priority: "Medium", bar: "w-[55%]", color: "from-yellow-400 to-yellow-500" },
                { topic: "Heredity", time: "1 hr", priority: "High", bar: "w-[75%]", color: "from-orange-400 to-orange-500" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-sm">{item.topic}</span>
                    <span className="text-xs text-white/60">{item.time}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                    <div className={`h-full rounded-full bg-gradient-to-r ${item.color} ${item.bar}`} />
                  </div>
                  <div className="text-xs text-white/50">Priority: {item.priority}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
