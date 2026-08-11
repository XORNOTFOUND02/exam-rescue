"use client";

import { useMemo } from "react";
import { useStore } from "@/store/useStore";
import { getTopics } from "@/lib/syllabus";

export default function ConfidenceHeatmap() {
  const { onboarding } = useStore();

  const heatmap = useMemo(() => {
    const chapters: { name: string; topics: { name: string; status: string; confidence: number }[] }[] = [];

    for (const chapterId of onboarding.selectedChapters) {
      const topics = onboarding.selectedSubject ? getTopics(onboarding.selectedSubject, chapterId, onboarding.selectedClass ?? undefined) : [];
      if (topics.length === 0) continue;

      const topicData = topics.map(t => {
        const status = onboarding.topicStatuses[t.id] || "unknown";
        const confidence = status === "done" ? 100 : status === "partial" ? 50 : status === "not_done" ? 10 : 30;
        return { name: t.name, status, confidence };
      });

      // Get chapter name from the first topic or use ID
      const chapterName = chapterId.split("-").slice(0, -1).join(" ") || chapterId;
      chapters.push({ name: chapterName, topics: topicData });
    }

    return chapters;
  }, [onboarding]);

  if (heatmap.length === 0) return null;

  return (
    <div className="card">
      <h3 className="font-bold text-gray-900 mb-4">Confidence Heatmap</h3>
      <div className="space-y-3">
        {heatmap.map((chapter, ci) => (
          <div key={ci}>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{chapter.name}</div>
            <div className="flex gap-1">
              {chapter.topics.map((topic, ti) => {
                const bg = topic.confidence === 100 ? "bg-emerald-400" :
                          topic.confidence === 50 ? "bg-amber-400" :
                          topic.confidence === 10 ? "bg-red-400" :
                          "bg-gray-300";
                return (
                  <div key={ti}
                    className={`${bg} rounded-sm flex-1 h-6 cursor-default transition-all hover:scale-y-150`}
                    title={`${topic.name}: ${topic.status}`} />
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 text-[10px] text-gray-500">
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-emerald-400" /> Mastered</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-amber-400" /> Partial</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-red-400" /> Not Started</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-gray-300" /> Unknown</div>
      </div>
    </div>
  );
}
