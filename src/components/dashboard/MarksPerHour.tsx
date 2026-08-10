"use client";

// ============================================================
// Exam Rescue — Marks Per Hour Rankings
// ============================================================
// Shows the student which topics give the best return on study
// time investment, calculated from the priority engine's
// marksPerHour scores.

import { useMemo, useState } from "react";
import { TrendingUp, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { useStore } from "@/store/useStore";
import { getChapterById, getTopicById, getAllTopicsForSubject } from "@/lib/syllabus";
import { rankTopicsByPriority } from "@/lib/engine/priority";

interface RankedTopic {
  topicId: string;
  topicName: string;
  chapterName: string;
  marksPerHour: number;
  priority: string;
  estimatedMinutes: number;
}

export default function MarksPerHour() {
  const { currentPlan, onboarding } = useStore();
  const [expanded, setExpanded] = useState(false);

  const rankedTopics = useMemo<RankedTopic[]>(() => {
    if (!currentPlan) return [];

    const subjectId = onboarding.selectedSubject || "science";
    const allTopics = getAllTopicsForSubject(subjectId);
    if (allTopics.length === 0) return [];

    // Calculate days remaining
    const exam = new Date(onboarding.examDate);
    const now = new Date();
    const daysRemaining = Math.max(0, Math.ceil((exam.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
    const totalStudyMinutes = daysRemaining * onboarding.dailyHours * 60;

    const ranked = rankTopicsByPriority(
      allTopics,
      onboarding.chapterStatuses,
      onboarding.topicStatuses,
      daysRemaining,
      totalStudyMinutes
    );

    return ranked
      .filter((r) => r.marksPerHour > 0)
      .slice(0, expanded ? 10 : 5)
      .map((r) => {
        const topic = getTopicById(r.topicId);
        const chapter = topic ? getChapterById(topic.chapterId) : null;
        return {
          topicId: r.topicId,
          topicName: topic?.name || r.topicId,
          chapterName: chapter?.name || "",
          marksPerHour: r.marksPerHour,
          priority: r.level,
          estimatedMinutes: r.estimatedMinutes,
        };
      });
  }, [currentPlan, onboarding, expanded]);

  if (!currentPlan || rankedTopics.length === 0) return null;

  const maxMPH = Math.max(...rankedTopics.map((r) => r.marksPerHour));

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <h3 className="font-bold text-gray-900">Marks per Hour</h3>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
          BEST ROI
        </span>
      </div>

      <p className="text-xs text-gray-500 mb-4">
        Topics ranked by marks you can earn per hour of study
      </p>

      <div className="space-y-2.5">
        {rankedTopics.map((topic, i) => {
          const barWidth = maxMPH > 0 ? (topic.marksPerHour / maxMPH) * 100 : 0;
          const isTop3 = i < 3;
          return (
            <div key={topic.topicId} className="group">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-bold w-5 text-center ${isTop3 ? "text-emerald-600" : "text-gray-400"}`}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-900 truncate">{topic.topicName}</div>
                  <div className="text-[11px] text-gray-400 truncate">{topic.chapterName}</div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Zap className="w-3 h-3 text-emerald-500" />
                  <span className="text-sm font-black text-emerald-600">{topic.marksPerHour.toFixed(1)}</span>
                  <span className="text-[10px] text-gray-400">m/h</span>
                </div>
              </div>
              <div className="ml-7 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${isTop3 ? "bg-emerald-500" : "bg-gray-300"}`}
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {rankedTopics.length >= 5 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center justify-center gap-1 w-full py-2 text-xs font-semibold text-gray-500 hover:text-gray-700 transition-colors"
        >
          {expanded ? (
            <>Show Less <ChevronUp className="w-3.5 h-3.5" /></>
          ) : (
            <>Show Top 10 <ChevronDown className="w-3.5 h-3.5" /></>
          )}
        </button>
      )}
    </div>
  );
}
