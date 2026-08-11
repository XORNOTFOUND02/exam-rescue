"use client";

import { useMemo } from "react";
import { Flame, TrendingUp, Calendar, BookOpen } from "lucide-react";
import { useStore } from "@/store/useStore";

export default function StreakCounter() {
  const { currentPlan } = useStore();

  const streak = useMemo(() => {
    if (!currentPlan) return { current: 0, longest: 0, total: 0 };

    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    let totalStudyDays = 0;

    // Get completed dates
    const completedDates = new Set<string>();
    for (const day of currentPlan.days) {
      const hasCompleted = day.sessions.some(s => s.status === "completed");
      if (hasCompleted) {
        completedDates.add(day.date);
        totalStudyDays++;
      }
    }

    // Calculate streaks (most recent first)
    const sortedDates = Array.from(completedDates).sort().reverse();
    const today = new Date().toISOString().split("T")[0];

    // Current streak from today backwards
    let checkDate = new Date(today);
    for (const dateStr of sortedDates) {
      const diff = Math.floor((checkDate.getTime() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24));
      if (diff <= 1) {
        currentStreak++;
        checkDate = new Date(dateStr);
      } else {
        break;
      }
    }

    // Longest streak
    const sortedAsc = Array.from(completedDates).sort();
    tempStreak = 1;
    for (let i = 1; i < sortedAsc.length; i++) {
      const prev = new Date(sortedAsc[i - 1]);
      const curr = new Date(sortedAsc[i]);
      const diff = Math.floor((curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24));
      if (diff === 1) {
        tempStreak++;
      } else {
        longestStreak = Math.max(longestStreak, tempStreak);
        tempStreak = 1;
      }
    }
    longestStreak = Math.max(longestStreak, tempStreak, currentStreak);

    return { current: currentStreak, longest: longestStreak, total: totalStudyDays };
  }, [currentPlan]);

  return (
    <div className="card">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-5 h-5 text-orange-500" />
        <h3 className="font-bold text-gray-900">Study Streak</h3>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="text-center p-3 rounded-xl bg-orange-50">
          <div className="text-3xl font-black text-orange-600">{streak.current}</div>
          <div className="text-[10px] text-gray-500 mt-1">Current Days</div>
        </div>
        <div className="text-center p-3 rounded-xl bg-amber-50">
          <div className="text-3xl font-black text-amber-600">{streak.longest}</div>
          <div className="text-[10px] text-gray-500 mt-1">Best Streak</div>
        </div>
        <div className="text-center p-3 rounded-xl bg-emerald-50">
          <div className="text-3xl font-black text-emerald-600">{streak.total}</div>
          <div className="text-[10px] text-gray-500 mt-1">Total Days</div>
        </div>
      </div>

      {/* Visual streak indicator */}
      <div className="mt-4 flex gap-1">
        {Array.from({ length: 14 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (13 - i));
          const dateStr = date.toISOString().split("T")[0];
          const isActive = currentPlan?.days.some(d => d.date === dateStr && d.sessions.some(s => s.status === "completed"));
          return (
            <div key={i} className={`flex-1 h-3 rounded-sm transition-all ${
              isActive ? "bg-orange-400" : "bg-gray-100"
            }`} title={dateStr} />
          );
        })}
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[9px] text-gray-400">2 weeks ago</span>
        <span className="text-[9px] text-gray-400">Today</span>
      </div>
    </div>
  );
}
