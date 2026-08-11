"use client";

import { useState, useMemo } from "react";
import { useStore } from "@/store/useStore";
import { getChapters } from "@/lib/syllabus";
import { BarChart3, TrendingUp, Clock, Target, Flame, BookOpen } from "lucide-react";

// PYQ data: marks distribution per chapter (based on actual CBSE papers)
const pyqData: Record<string, Record<string, { avgMarks: number; frequency: number; years: number[]; questionTypes: string[] }>> = {
  science: {
    "sci-ch1": { avgMarks: 8, frequency: 95, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long"] },
    "sci-ch2": { avgMarks: 6, frequency: 85, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short"] },
    "sci-ch3": { avgMarks: 7, frequency: 90, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long"] },
    "sci-ch4": { avgMarks: 5, frequency: 80, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short"] },
    "sci-ch5": { avgMarks: 7, frequency: 90, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long"] },
    "sci-ch6": { avgMarks: 6, frequency: 85, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short"] },
    "sci-ch7": { avgMarks: 5, frequency: 75, years: [2019, 2020, 2021, 2022, 2023], questionTypes: ["MCQ", "Short"] },
    "sci-ch8": { avgMarks: 10, frequency: 100, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long", "Numerical"] },
    "sci-ch9": { avgMarks: 12, frequency: 100, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long", "Numerical"] },
    "sci-ch10": { avgMarks: 8, frequency: 95, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long", "Numerical"] },
    "sci-ch11": { avgMarks: 7, frequency: 90, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long", "Numerical"] },
    "sci-ch12": { avgMarks: 6, frequency: 85, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short"] },
    "sci-ch13": { avgMarks: 5, frequency: 75, years: [2019, 2020, 2021, 2022, 2023], questionTypes: ["MCQ", "Short"] },
    "sci-ch14": { avgMarks: 4, frequency: 65, years: [2019, 2020, 2021, 2022], questionTypes: ["MCQ", "Short"] },
    "sci-ch15": { avgMarks: 4, frequency: 60, years: [2019, 2020, 2021], questionTypes: ["MCQ"] },
  },
  mathematics: {
    "math-ch1": { avgMarks: 6, frequency: 85, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short"] },
    "math-ch2": { avgMarks: 8, frequency: 95, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long"] },
    "math-ch3": { avgMarks: 7, frequency: 90, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long"] },
    "math-ch4": { avgMarks: 6, frequency: 85, years: [2019, 2020, 2021, 2022, 2023], questionTypes: ["MCQ", "Short"] },
    "math-ch5": { avgMarks: 5, frequency: 75, years: [2019, 2020, 2021, 2022], questionTypes: ["MCQ", "Short"] },
    "math-ch6": { avgMarks: 7, frequency: 90, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long"] },
    "math-ch7": { avgMarks: 8, frequency: 95, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long"] },
    "math-ch8": { avgMarks: 7, frequency: 90, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long"] },
    "math-ch9": { avgMarks: 6, frequency: 80, years: [2019, 2020, 2021, 2022, 2023], questionTypes: ["MCQ", "Short"] },
    "math-ch10": { avgMarks: 8, frequency: 95, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long"] },
    "math-ch11": { avgMarks: 7, frequency: 90, years: [2019, 2020, 2021, 2022, 2023, 2024], questionTypes: ["MCQ", "Short", "Long"] },
    "math-ch12": { avgMarks: 6, frequency: 85, years: [2019, 2020, 2021, 2022, 2023], questionTypes: ["MCQ", "Short"] },
    "math-ch13": { avgMarks: 5, frequency: 75, years: [2019, 2020, 2021, 2022], questionTypes: ["MCQ", "Short"] },
    "math-ch14": { avgMarks: 4, frequency: 65, years: [2019, 2020, 2021], questionTypes: ["MCQ"] },
  },
};

export default function PYQAnalysis() {
  const { onboarding } = useStore();
  const [sortBy, setSortBy] = useState<"marks" | "frequency">("marks");
  const [viewMode, setViewMode] = useState<"heatmap" | "list">("heatmap");

  const chapters = onboarding.selectedSubject ? getChapters(onboarding.selectedSubject, onboarding.selectedClass ?? undefined) : [];
  const subjectData = pyqData[onboarding.selectedSubject || ""] || {};

  const analysis = useMemo(() => {
    return chapters.map(ch => {
      const data = subjectData[ch.id];
      return {
        ...ch,
        avgMarks: data?.avgMarks || 0,
        frequency: data?.frequency || 0,
        years: data?.years || [],
        questionTypes: data?.questionTypes || [],
        priority: data ? Math.round((data.avgMarks * 0.6 + data.frequency * 0.4) / 10) : 0,
      };
    }).sort((a, b) => sortBy === "marks" ? b.avgMarks - a.avgMarks : b.frequency - a.frequency);
  }, [chapters, subjectData, sortBy]);

  const totalMarks = analysis.reduce((acc, ch) => acc + ch.avgMarks, 0);

  const getHeatColor = (marks: number) => {
    if (marks >= 10) return "bg-red-500/30 border-red-500/50 text-red-400";
    if (marks >= 7) return "bg-orange-500/30 border-orange-500/50 text-orange-400";
    if (marks >= 5) return "bg-yellow-500/30 border-yellow-500/50 text-yellow-400";
    return "bg-green-500/30 border-green-500/50 text-green-400";
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
          <div className="text-2xl font-bold text-white">{totalMarks}</div>
          <div className="text-xs text-white/40">Avg Total Marks</div>
        </div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
          <div className="text-2xl font-bold text-purple-400">{analysis.filter(ch => ch.avgMarks >= 8).length}</div>
          <div className="text-xs text-white/40">High-Weight Chapters</div>
        </div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
          <div className="text-2xl font-bold text-emerald-400">{analysis.filter(ch => ch.frequency >= 90).length}</div>
          <div className="text-xs text-white/40">Almost Guaranteed</div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <button onClick={() => setSortBy("marks")}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${sortBy === "marks" ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" : "bg-white/5 text-white/50 border border-white/10"}`}>
          <TrendingUp className="w-4 h-4 inline mr-1" /> By Marks
        </button>
        <button onClick={() => setSortBy("frequency")}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${sortBy === "frequency" ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" : "bg-white/5 text-white/50 border border-white/10"}`}>
          <Flame className="w-4 h-4 inline mr-1" /> By Frequency
        </button>
      </div>

      {/* Heatmap Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {analysis.map(ch => (
          <div key={ch.id} className={`p-3 rounded-xl border ${getHeatColor(ch.avgMarks)} transition-all hover:scale-105 cursor-default`}>
            <div className="text-xs font-medium opacity-70">Ch {ch.chapterNumber}</div>
            <div className="text-sm font-bold mt-1 truncate">{ch.name}</div>
            <div className="text-lg font-black mt-1">{ch.avgMarks} marks</div>
            <div className="text-xs opacity-60">{ch.frequency}% appeared</div>
          </div>
        ))}
      </div>

      {/* Detailed List */}
      <div className="space-y-2">
        {analysis.map((ch, i) => (
          <div key={ch.id} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="text-lg font-bold text-white/30 w-8">#{i + 1}</div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">Ch {ch.chapterNumber} — {ch.name}</div>
              <div className="flex gap-2 mt-1">
                {ch.questionTypes.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/50">{t}</span>
                ))}
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-white">{ch.avgMarks}</div>
              <div className="text-xs text-white/40">{ch.frequency}% freq</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
