"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, CheckCircle2, BookOpen,
  ChevronDown, ChevronUp, Play
} from "lucide-react";
import { useStore } from "@/store/useStore";
import { getChapterById, getAllTopicsForSubject } from "@/lib/syllabus";
import { getResourcesForTopic } from "@/lib/resources";
import { rankTopicsByPriority } from "@/lib/engine/priority";
import { StudySession, PriorityLevel } from "@/types";
import PriorityBadge from "@/components/shared/PriorityBadge";

function SessionCard({ session, priorityLevel }: { session: StudySession; priorityLevel?: PriorityLevel }) {
  const [expanded, setExpanded] = useState(false);
  const { markSessionComplete } = useStore();
  const chapter = getChapterById(session.chapterId);
  const resources = getResourcesForTopic(session.topicId);

  const typeColors: Record<string, { bg: string; text: string; label: string }> = {
    study: { bg: "bg-red-100", text: "text-red-700", label: "📖 Study" },
    revision: { bg: "bg-amber-100", text: "text-amber-700", label: "🔄 Revision" },
    practice: { bg: "bg-blue-100", text: "text-blue-700", label: "✏️ Practice" },
    quiz: { bg: "bg-purple-100", text: "text-purple-700", label: "🧠 Quiz" },
    active_recall: { bg: "bg-pink-100", text: "text-pink-700", label: "💡 Active Recall" },
    mock_test: { bg: "bg-orange-100", text: "text-orange-700", label: "📝 Mock Test" },
    break: { bg: "bg-gray-100", text: "text-gray-600", label: "☕ Break" },
  };

  const type = typeColors[session.activityType] || typeColors.study;

  return (
    <div className={`rounded-2xl border-2 overflow-hidden transition-all ${session.status === "completed" ? "border-emerald-200 bg-emerald-50/30" : "border-gray-200 bg-white hover:border-indigo-200"}`}>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5">
            <div className="text-xs font-bold text-gray-400 w-20">{session.startTime} – {session.endTime}</div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${type.bg} ${type.text}`}>{type.label}</span>
              {priorityLevel && <PriorityBadge level={priorityLevel} />}
              {session.status === "completed" && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
            </div>
            <div className="font-semibold text-gray-900 text-sm mb-1">{session.whatToStudy[0]}</div>
            {chapter && <div className="text-xs text-gray-500">{chapter.name}</div>}
          </div>
          <div className="flex gap-1">
            {session.status !== "completed" && (
              <button onClick={() => markSessionComplete(session.id)}
                className="p-1.5 rounded-lg hover:bg-emerald-100 text-gray-400 hover:text-emerald-600 transition-colors">
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
            <button onClick={() => setExpanded(!expanded)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {session.notes && (
          <div className="mt-2 px-3 py-2 rounded-lg bg-indigo-50 text-xs text-indigo-700">
            📊 {session.notes}
          </div>
        )}
      </div>

      {expanded && (
        <div className="border-t border-gray-100 p-4 bg-gray-50 space-y-4">
          <div>
            <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">What to Study</h4>
            <ul className="space-y-1">
              {session.whatToStudy.map((item, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-indigo-400 mt-0.5">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">How to Study</h4>
            <ol className="space-y-1">
              {session.howToStudy.map((item, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-emerald-500 font-bold text-xs mt-0.5">{i + 1}.</span> {item}
                </li>
              ))}
            </ol>
          </div>

          {resources.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Recommended Resources</h4>
              <div className="space-y-2">
                {resources.map(res => (
                  <a key={res.id} href={res.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-indigo-300 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                      <Play className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-900 truncate">{res.title}</div>
                      <div className="text-xs text-gray-500">{res.provider} · {res.duration}</div>
                      {res.reason && (
                        <div className="text-[11px] text-indigo-600 mt-0.5 italic">{res.reason}</div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function PlanPage() {
  const [selectedDay, setSelectedDay] = useState(0);
  const { currentPlan, onboarding } = useStore();

  // Compute priority map for session badges (must be before early return)
  const priorityMap = useMemo(() => {
    if (!onboarding.selectedSubject) return {} as Record<string, PriorityLevel>;
    const allTopics = getAllTopicsForSubject(onboarding.selectedSubject);
    if (allTopics.length === 0) return {} as Record<string, PriorityLevel>;
    const exam = new Date(onboarding.examDate);
    const now = new Date();
    const daysRemaining = Math.max(0, Math.ceil((exam.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
    const totalMinutes = daysRemaining * (onboarding.dailyHours || 3) * 60;
    const ranked = rankTopicsByPriority(
      allTopics,
      onboarding.chapterStatuses,
      onboarding.topicStatuses,
      daysRemaining,
      totalMinutes
    );
    const map: Record<string, PriorityLevel> = {};
    ranked.forEach(r => { map[r.topicId] = r.level; });
    return map;
  }, [onboarding]);

  if (!currentPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-8">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">No plan yet</h2>
          <p className="text-gray-500 text-sm mb-6">Create your plan first.</p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-primary text-white font-bold text-sm">
            Build My Plan
          </Link>
        </div>
      </div>
    );
  }

  const day = currentPlan.days[selectedDay];
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Link href="/dashboard" className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Your Study Plan</h1>
            <p className="text-xs text-gray-500">{currentPlan.days.length} days · Version {currentPlan.version}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Day selector */}
        <div className="flex gap-2 overflow-x-auto pb-4 -mx-4 px-4">
          {currentPlan.days.map((d, i) => {
            const isToday = d.date === today;
            const isSelected = i === selectedDay;
            return (
              <button key={i} onClick={() => setSelectedDay(i)}
                className={`shrink-0 px-4 py-3 rounded-xl border-2 text-center transition-all ${isSelected ? "border-indigo-500 bg-indigo-50" : isToday ? "border-indigo-200 bg-indigo-50/50" : "border-gray-200 hover:border-gray-300"}`}>
                <div className="text-xs font-bold text-gray-400">Day {d.dayNumber}</div>
                <div className="text-sm font-bold text-gray-900 mt-0.5">
                  {isToday ? "Today" : new Date(d.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                </div>
                {d.isExamDay && <div className="text-[10px] font-bold text-red-600 mt-0.5">EXAM</div>}
                {d.isFinalRevision && <div className="text-[10px] font-bold text-amber-600 mt-0.5">REVISION</div>}
              </button>
            );
          })}
        </div>

        {/* Day Summary */}
        <div className="card mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-white/80">Day {day.dayNumber}</div>
              <div className="text-lg font-bold">{day.summary}</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black">{day.sessions.length}</div>
              <div className="text-xs text-white/60">sessions</div>
            </div>
          </div>
        </div>

        {/* Sessions */}
        <div className="space-y-3">
          {day.sessions.map(session => (
            <SessionCard key={session.id} session={session} priorityLevel={priorityMap[session.topicId]} />
          ))}
        </div>

        {day.sessions.length === 0 && (
          <div className="text-center py-12">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">All done for this day!</h3>
            <p className="text-sm text-gray-500">Great job completing all sessions.</p>
          </div>
        )}
      </div>

      {/* Mobile Bottom Nav */}
      <div className="bottom-nav">
        <Link href="/dashboard" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Home
        </Link>
        <Link href="/plan" className="bottom-nav-item active">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
          Plan
        </Link>
        <Link href="/practice" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
          Practice
        </Link>
        <Link href="/progress" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          Progress
        </Link>
        <Link href="/resources" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          Profile
        </Link>
      </div>
    </div>
  );
}
