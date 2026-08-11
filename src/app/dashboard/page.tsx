"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  Calendar, Clock, BookOpen, Target, Zap, ArrowRight,
  CheckCircle2, AlertTriangle, TrendingUp, Brain, ChevronRight, MessageCircle, Sparkles
} from "lucide-react";
import { useStore } from "@/store/useStore";
import { getChapterById, getAllTopicsForSubject } from "@/lib/syllabus";
import { rankTopicsByPriority } from "@/lib/engine/priority";
import { PriorityLevel } from "@/types";
import WhatNowButton from "@/components/dashboard/WhatNowButton";
import MarksPerHour from "@/components/dashboard/MarksPerHour";
import MissedDayButton from "@/components/dashboard/MissedDayButton";
import PriorityBadge from "@/components/shared/PriorityBadge";
import StreakCounter from "@/components/dashboard/StreakCounter";
import ExamCountdown from "@/components/dashboard/ExamCountdown";
import ConfidenceHeatmap from "@/components/dashboard/ConfidenceHeatmap";
import AIQuizGenerator from "@/components/ai/AIQuizGenerator";
import PlanOptimizer from "@/components/ai/PlanOptimizer";

export default function DashboardPage() {
  const { currentPlan, onboarding, markSessionComplete } = useStore();

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const daysRemaining = useMemo(() => {
    if (!onboarding.examDate) return 0;
    const examTime = new Date(onboarding.examDate).getTime();
    const nowTime = new Date(today + "T12:00:00").getTime();
    return Math.max(0, Math.ceil((examTime - nowTime) / (1000 * 60 * 60 * 24)));
  }, [onboarding.examDate, today]);

  const priorityMap = useMemo<Record<string, PriorityLevel>>(() => {
    if (!onboarding.selectedSubject) return {};
    const allTopics = getAllTopicsForSubject(onboarding.selectedSubject);
    if (allTopics.length === 0) return {};
    const totalMinutes = daysRemaining * (onboarding.dailyHours || 3) * 60;
    const ranked = rankTopicsByPriority(allTopics, onboarding.chapterStatuses, onboarding.topicStatuses, daysRemaining, totalMinutes);
    const map: Record<string, PriorityLevel> = {};
    ranked.forEach(r => { map[r.topicId] = r.level; });
    return map;
  }, [onboarding, daysRemaining]);

  if (!currentPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-8">
          <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">No plan yet</h2>
          <p className="text-gray-500 mb-6">Create your personalized exam plan first.</p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-primary text-white font-bold hover:opacity-90 transition-all">
            Build My Plan <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const todayPlan = currentPlan.days.find(d => d.date === today) || currentPlan.days[0];
  const totalSessions = currentPlan.days.reduce((acc, d) => acc + d.sessions.length, 0);
  const completedSessions = currentPlan.days.reduce((acc, d) => acc + d.sessions.filter(s => s.status === "completed").length, 0);
  const progressPercent = totalSessions > 0 ? Math.round((completedSessions / totalSessions) * 100) : 0;
  const totalChapters = onboarding.selectedChapters.length;
  const preparedChapters = Object.values(onboarding.chapterStatuses).filter(s => s === "prepared").length;
  const partialChapters = Object.values(onboarding.chapterStatuses).filter(s => s === "partial").length;
  const prepPercent = totalChapters > 0 ? Math.round(((preparedChapters + partialChapters * 0.5) / totalChapters) * 100) : 0;

  const modeMessage = (() => {
    switch (currentPlan.mode) {
      case "emergency": return { text: "Emergency Mode", color: "text-red-600", bg: "bg-red-50 border-red-200", icon: <AlertTriangle className="w-4 h-4" /> };
      case "final_revision": return { text: "Final Revision Mode", color: "text-amber-600", bg: "bg-amber-50 border-amber-200", icon: <Brain className="w-4 h-4" /> };
      case "exam_day": return { text: "Exam Day", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200", icon: <Target className="w-4 h-4" /> };
      default: return { text: "On Track", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200", icon: <CheckCircle2 className="w-4 h-4" /> };
    }
  })();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="gradient-hero px-4 pt-12 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-1">Your Exam Rescue Plan</h1>
          <p className="text-white/60 text-sm">Here&apos;s your personalized strategy</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-4 space-y-6">
        {/* Exam Countdown */}
        <ExamCountdown />

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="card text-center py-4">
            <Calendar className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
            <div className="text-2xl font-black text-gray-900">{daysRemaining}</div>
            <div className="text-xs text-gray-500">Days Left</div>
          </div>
          <div className="card text-center py-4">
            <Target className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
            <div className="text-2xl font-black text-gray-900">{prepPercent}%</div>
            <div className="text-xs text-gray-500">Prepared</div>
          </div>
          <div className="card text-center py-4">
            <Clock className="w-5 h-5 text-amber-600 mx-auto mb-1" />
            <div className="text-2xl font-black text-gray-900">{onboarding.dailyHours}h</div>
            <div className="text-xs text-gray-500">Daily Study</div>
          </div>
          <div className={`card text-center py-4 border ${modeMessage.bg}`}>
            <div className={`mx-auto mb-1 ${modeMessage.color}`}>{modeMessage.icon}</div>
            <div className={`text-sm font-bold ${modeMessage.color}`}>{modeMessage.text}</div>
          </div>
        </div>

        {/* Streak Counter */}
        <StreakCounter />

        {/* Overall Progress */}
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900">Plan Progress</h3>
            <span className="text-sm font-bold text-indigo-600">{progressPercent}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
          </div>
          <div className="text-xs text-gray-500 mt-2">{completedSessions} of {totalSessions} sessions completed</div>
        </div>

        {/* Today's Plan */}
        {todayPlan && (
          <div className="card border-2 border-indigo-200 bg-indigo-50/30">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide">Today&apos;s Plan</div>
                <h3 className="text-lg font-bold text-gray-900">Day {todayPlan.dayNumber}</h3>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-gray-900">{Math.round(todayPlan.totalMinutes / 60)}h {todayPlan.totalMinutes % 60}m</div>
                <div className="text-xs text-gray-500">study time</div>
              </div>
            </div>

            <div className="space-y-3">
              {todayPlan.sessions.slice(0, 5).map(session => {
                const chapter = getChapterById(session.chapterId);
                const statusColor = session.status === "completed" ? "bg-emerald-500" :
                  session.activityType === "practice" ? "bg-blue-500" :
                  session.activityType === "revision" ? "bg-amber-500" :
                  session.activityType === "quiz" ? "bg-purple-500" :
                  "bg-red-500";

                return (
                  <div key={session.id} className={`flex items-center gap-3 p-3 rounded-xl ${session.status === "completed" ? "bg-emerald-50" : "bg-white"}`}>
                    <div className={`w-2 h-2 rounded-full ${statusColor} shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-900 truncate">{session.whatToStudy[0]}</div>
                      <div className="text-xs text-gray-500">{session.startTime} – {session.endTime} · {chapter?.name || "General"}</div>
                      {session.activityType !== "break" && priorityMap[session.topicId] && (
                        <div className="mt-1">
                          <PriorityBadge level={priorityMap[session.topicId]} />
                        </div>
                      )}
                    </div>
                    {session.status !== "completed" && (
                      <button onClick={() => markSessionComplete(session.id)}
                        className="p-1.5 rounded-lg hover:bg-emerald-100 text-gray-400 hover:text-emerald-600 transition-colors">
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    )}
                    {session.status === "completed" && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                );
              })}
            </div>

            <Link href="/plan" className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
              View Full Day Plan <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Missed a day? */}
        <MissedDayButton />

        {/* AI Doubt Solver Quick Access */}
        <Link href="/doubt" className="card flex items-center gap-4 hover:shadow-md transition-all group border-2 border-dashed border-purple-200 hover:border-purple-400">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-sm">AI Doubt Solver</h3>
            <p className="text-xs text-gray-500">Stuck on a concept? Ask our AI tutor anything.</p>
          </div>
          <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* AI Study Plan Optimizer */}
        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <h3 className="font-bold text-gray-900 text-sm">AI Study Optimizer</h3>
          </div>
          <p className="text-xs text-gray-500 mb-4">Let AI analyze your progress and suggest what to study next.</p>
          <PlanOptimizer />
        </div>

        {/* Marks per Hour — highest-return topics */}
        <MarksPerHour />

        {/* AI Quiz Generator */}
        <div className="card">
          <AIQuizGenerator />
        </div>

        {/* Confidence Heatmap */}
        <ConfidenceHeatmap />

        {/* What Should I Do Now? */}
        <WhatNowButton />

        {/* Quick Actions */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          <Link href="/plan" className="card text-center py-5 hover:shadow-md transition-all group">
            <BookOpen className="w-6 h-6 text-indigo-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-gray-900">My Plan</div>
          </Link>
          <Link href="/pomodoro" className="card text-center py-5 hover:shadow-md transition-all group">
            <Clock className="w-6 h-6 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-gray-900">Timer</div>
          </Link>
          <Link href="/pyq" className="card text-center py-5 hover:shadow-md transition-all group">
            <TrendingUp className="w-6 h-6 text-orange-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-gray-900">PYQ</div>
          </Link>
          <Link href="/gamification" className="card text-center py-5 hover:shadow-md transition-all group">
            <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-gray-900">XP</div>
          </Link>
          <Link href="/flashcards" className="card text-center py-5 hover:shadow-md transition-all group">
            <Sparkles className="w-6 h-6 text-cyan-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-gray-900">Cards</div>
          </Link>
          <Link href="/mocktest" className="card text-center py-5 hover:shadow-md transition-all group">
            <Target className="w-6 h-6 text-emerald-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-gray-900">Mock Test</div>
          </Link>
          <Link href="/formulas" className="card text-center py-5 hover:shadow-md transition-all group">
            <Brain className="w-6 h-6 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-gray-900">Formulas</div>
          </Link>
          <Link href="/practice" className="card text-center py-5 hover:shadow-md transition-all group">
            <CheckCircle2 className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-gray-900">Practice</div>
          </Link>
          <Link href="/progress" className="card text-center py-5 hover:shadow-md transition-all group">
            <AlertTriangle className="w-6 h-6 text-amber-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-gray-900">Progress</div>
          </Link>
          <Link href="/resources" className="card text-center py-5 hover:shadow-md transition-all group">
            <MessageCircle className="w-6 h-6 text-pink-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-gray-900">Resources</div>
          </Link>
        </div>

        {/* Day Overview */}
        <div className="card">
          <h3 className="font-bold text-gray-900 mb-4">Plan Overview</h3>
          <div className="space-y-2">
            {currentPlan.days.map(day => {
              const dayCompleted = day.sessions.filter(s => s.status === "completed").length;
              const dayTotal = day.sessions.length;
              const isToday = day.date === today;
              return (
                <div key={day.date} className={`flex items-center gap-3 p-3 rounded-xl ${isToday ? "bg-indigo-50 border border-indigo-200" : "hover:bg-gray-50"}`}>
                  <div className={`text-xs font-bold w-16 ${isToday ? "text-indigo-600" : "text-gray-400"}`}>
                    Day {day.dayNumber}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-700">{day.summary}</div>
                  </div>
                  <div className="text-xs font-bold text-gray-500">
                    {dayCompleted}/{dayTotal}
                  </div>
                  {day.isExamDay && <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-bold">EXAM</span>}
                  {day.isFinalRevision && <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-600 font-bold">REVISION</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="bottom-nav">
        <Link href="/dashboard" className="bottom-nav-item active">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Home
        </Link>
        <Link href="/plan" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
          Plan
        </Link>
        <Link href="/doubt" className="bottom-nav-item">
          <MessageCircle className="w-5 h-5" />
          AI
        </Link>
        <Link href="/practice" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
          Practice
        </Link>
        <Link href="/progress" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          Progress
        </Link>
      </div>
    </div>
  );
}
