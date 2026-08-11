"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, TrendingUp, CheckCircle2, Clock, Brain, AlertTriangle } from "lucide-react";
import { useStore } from "@/store/useStore";
import { getChapters, getTopics } from "@/lib/syllabus";

export default function ProgressPage() {
  const { currentPlan, onboarding, quizAttempts } = useStore();

  const chapters = onboarding.selectedSubject ? getChapters(onboarding.selectedSubject, onboarding.selectedClass ?? undefined) : [];
  const selectedChapters = chapters.filter(ch => onboarding.selectedChapters.includes(ch.id));

  // Calculate stats
  const totalSessions = currentPlan?.days.reduce((acc, d) => acc + d.sessions.length, 0) || 0;
  const completedSessions = currentPlan?.days.reduce((acc, d) => acc + d.sessions.filter(s => s.status === "completed").length, 0) || 0;

  // Chapter progress
  const chapterProgress = selectedChapters.map(ch => {
    const status = onboarding.chapterStatuses[ch.id] || "not_prepared";
    const topics = onboarding.selectedSubject ? getTopics(onboarding.selectedSubject, ch.id, onboarding.selectedClass ?? undefined) : [];
    const doneTopics = topics.filter(t => {
      const ts = onboarding.topicStatuses[t.id];
      return ts === "done";
    }).length;

    return {
      ...ch,
      status,
      totalTopics: topics.length,
      doneTopics,
      percent: topics.length > 0 ? Math.round((doneTopics / topics.length) * 100) : 0,
    };
  });

  // Weak areas (topics that are not_done or partial)
  const weakAreas = useMemo(() => {
    const weak: { chapter: string; topic: string; status: string }[] = [];
    for (const ch of selectedChapters) {
      const topics = onboarding.selectedSubject ? getTopics(onboarding.selectedSubject, ch.id, onboarding.selectedClass ?? undefined) : [];
      for (const t of topics) {
        const ts = onboarding.topicStatuses[t.id] || "not_done";
        if (ts === "not_done" || ts === "partial" || ts === "unknown") {
          weak.push({ chapter: ch.name, topic: t.name, status: ts });
        }
      }
    }
    return weak;
  }, [selectedChapters, onboarding.topicStatuses, onboarding.selectedSubject]);

  // Mastered areas
  const masteredAreas = useMemo(() => {
    const mastered: string[] = [];
    for (const ch of selectedChapters) {
      const topics = onboarding.selectedSubject ? getTopics(onboarding.selectedSubject, ch.id, onboarding.selectedClass ?? undefined) : [];
      const allDone = topics.every(t => onboarding.topicStatuses[t.id] === "done");
      if (allDone && topics.length > 0) mastered.push(ch.name);
    }
    return mastered;
  }, [selectedChapters, onboarding.topicStatuses, onboarding.selectedSubject]);

  // Quiz stats
  const quizStats = useMemo(() => {
    if (quizAttempts.length === 0) return { total: 0, avgScore: 0, bestScore: 0 };
    const total = quizAttempts.length;
    const avgScore = Math.round(quizAttempts.reduce((acc, a) => acc + (a.score / a.totalQuestions) * 100, 0) / total);
    const bestScore = Math.round(Math.max(...quizAttempts.map(a => (a.score / a.totalQuestions) * 100)));
    return { total, avgScore, bestScore };
  }, [quizAttempts]);

  if (!currentPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-8">
          <TrendingUp className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">No progress yet</h2>
          <p className="text-gray-500 text-sm mb-6">Create your plan to start tracking progress.</p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-primary text-white font-bold text-sm">Build My Plan</Link>
        </div>
      </div>
    );
  }

  // Study time
  const completedMinutes = currentPlan.days.reduce((acc, d) =>
    acc + d.sessions.filter(s => s.status === "completed").reduce((a, s) => {
      const [sh, sm] = s.startTime.split(":").map(Number);
      const [eh, em] = s.endTime.split(":").map(Number);
      return a + ((eh * 60 + em) - (sh * 60 + sm));
    }, 0), 0);

  const exam = new Date(onboarding.examDate);
  const now = new Date();
  const daysRemaining = Math.max(0, Math.ceil((exam.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Link href="/dashboard" className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"><ArrowLeft className="w-5 h-5" /></Link>
          <div>
            <h1 className="text-lg font-bold text-gray-900">My Preparation</h1>
            <p className="text-xs text-gray-500">Track your progress across all subjects</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Overall Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="card text-center py-4">
            <Clock className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
            <div className="text-2xl font-black text-gray-900">{Math.round(completedMinutes / 60)}h</div>
            <div className="text-xs text-gray-500">Studied</div>
          </div>
          <div className="card text-center py-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
            <div className="text-2xl font-black text-gray-900">{completedSessions}/{totalSessions}</div>
            <div className="text-xs text-gray-500">Sessions Done</div>
          </div>
          <div className="card text-center py-4">
            <Brain className="w-5 h-5 text-purple-600 mx-auto mb-1" />
            <div className="text-2xl font-black text-gray-900">{quizStats.total}</div>
            <div className="text-xs text-gray-500">Quizzes Taken</div>
          </div>
          <div className="card text-center py-4">
            <TrendingUp className="w-5 h-5 text-amber-600 mx-auto mb-1" />
            <div className="text-2xl font-black text-gray-900">{daysRemaining}</div>
            <div className="text-xs text-gray-500">Days Left</div>
          </div>
        </div>

        {/* Chapter Progress */}
        <div className="card">
          <h3 className="font-bold text-gray-900 mb-4">Chapter Progress</h3>
          <div className="space-y-3">
            {chapterProgress.map(ch => {
              const statusIcon = ch.status === "prepared" ? "🟢" : ch.status === "partial" ? "🟡" : "🔴";
              return (
                <div key={ch.id} className="p-3 rounded-xl bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span>{statusIcon}</span>
                      <span className="text-sm font-semibold text-gray-900">{ch.name}</span>
                    </div>
                    <span className="text-xs font-bold text-gray-500">{ch.doneTopics}/{ch.totalTopics} topics</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${ch.percent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quiz Performance */}
        {quizStats.total > 0 && (
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-4">Quiz Performance</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-indigo-50">
                <div className="text-2xl font-black text-indigo-600">{quizStats.avgScore}%</div>
                <div className="text-xs text-gray-500 mt-1">Average Score</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-emerald-50">
                <div className="text-2xl font-black text-emerald-600">{quizStats.bestScore}%</div>
                <div className="text-xs text-gray-500 mt-1">Best Score</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-purple-50">
                <div className="text-2xl font-black text-purple-600">{quizStats.total}</div>
                <div className="text-xs text-gray-500 mt-1">Total Quizzes</div>
              </div>
            </div>
          </div>
        )}

        {/* Weak Areas */}
        {weakAreas.length > 0 && (
          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-gray-900">Areas Needing Attention</h3>
            </div>
            <div className="space-y-2">
              {weakAreas.slice(0, 10).map((area, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 border border-amber-100">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${area.status === "not_done" ? "bg-red-100 text-red-600" : "bg-yellow-100 text-yellow-600"}`}>
                    {area.status === "not_done" ? "✗" : "~"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-900 truncate">{area.topic}</div>
                    <div className="text-xs text-gray-500">{area.chapter}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mastered Areas */}
        {masteredAreas.length > 0 && (
          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <h3 className="font-bold text-gray-900">Mastered Chapters</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {masteredAreas.map((name, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">{name}</span>
              ))}
            </div>
          </div>
        )}

        {/* Study Time Distribution */}
        <div className="card">
          <h3 className="font-bold text-gray-900 mb-4">Study Time</h3>
          <div className="space-y-2">
            {currentPlan.days.slice(0, 7).map(day => {
              const dayCompleted = day.sessions.filter(s => s.status === "completed").length;
              const dayTotal = day.sessions.length;
              const percent = dayTotal > 0 ? (dayCompleted / dayTotal) * 100 : 0;
              return (
                <div key={day.date} className="flex items-center gap-3">
                  <div className="text-xs font-bold text-gray-400 w-12">Day {day.dayNumber}</div>
                  <div className="flex-1 progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
                  </div>
                  <div className="text-xs font-bold text-gray-500 w-12 text-right">{Math.round(day.totalMinutes / 60)}h</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="bottom-nav">
        <Link href="/dashboard" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Home
        </Link>
        <Link href="/plan" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
          Plan
        </Link>
        <Link href="/practice" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
          Practice
        </Link>
        <Link href="/progress" className="bottom-nav-item active">
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
