"use client";

import { useMemo } from "react";
import { useStore } from "@/store/useStore";
import { calculateLevel, BADGES, LEVELS } from "@/lib/gamification";
import { Zap, Trophy, Flame, Star, TrendingUp } from "lucide-react";

export default function GamificationDashboard() {
  const { onboarding, quizAttempts, currentPlan } = useStore();

  // Calculate gamification stats from existing data
  const stats = useMemo(() => {
    const totalSessions = currentPlan?.days.reduce((acc, d) => acc + d.sessions.filter(s => s.status === "completed").length, 0) || 0;
    const totalMinutes = currentPlan?.days.reduce((acc, d) => acc + d.sessions.filter(s => s.status === "completed").length * 30, 0) || 0;
    const quizXP = quizAttempts.length * 10;
    const sessionXP = totalSessions * 20;
    const xp = quizXP + sessionXP;
    const level = calculateLevel(xp);
    
    // Simulate streak (in real app, track dates)
    const streak = Math.min(totalSessions, 7);
    
    // Determine earned badges
    const earned = BADGES.filter(b => {
      const s = { xp, level: level.current.level, streak, longestStreak: streak, totalStudyMinutes: totalMinutes, totalSessions, badges: [], lastStudyDate: null };
      return b.requirement(s);
    }).map(b => b.id);

    return { xp, level, streak, totalSessions, totalMinutes, earned };
  }, [currentPlan, quizAttempts]);

  return (
    <div className="space-y-6">
      {/* Level & XP Bar */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{stats.level.current.icon}</span>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Level {stats.level.current.level}</div>
              <div className="text-xl font-black text-white">{stats.level.current.name}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-400">{stats.xp}</div>
            <div className="text-xs text-white/40">XP</div>
          </div>
        </div>
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000"
            style={{ width: `${stats.level.progress}%` }} />
        </div>
        <div className="flex justify-between mt-2 text-xs text-white/40">
          <span>{stats.level.current.name}</span>
          <span>{stats.level.next.name} ({stats.level.next.xpRequired - stats.xp} XP away)</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
          <Flame className="w-6 h-6 text-orange-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">{stats.streak}</div>
          <div className="text-xs text-white/40">Day Streak</div>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
          <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">{stats.xp}</div>
          <div className="text-xs text-white/40">Total XP</div>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
          <Trophy className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">{stats.earned.length}</div>
          <div className="text-xs text-white/40">Badges</div>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
          <Star className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">{stats.totalSessions}</div>
          <div className="text-xs text-white/40">Sessions</div>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Badges</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {BADGES.map(badge => {
            const isEarned = stats.earned.includes(badge.id);
            return (
              <div key={badge.id}
                className={`p-3 rounded-xl border text-center transition-all ${isEarned ? "bg-purple-500/10 border-purple-500/30" : "bg-white/5 border-white/10 opacity-40"}`}>
                <div className="text-2xl mb-1">{badge.icon}</div>
                <div className="text-xs font-semibold text-white">{badge.name}</div>
                <div className="text-[10px] text-white/40 mt-0.5">{badge.description}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Level Progress */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Level Progress</h3>
        <div className="space-y-2">
          {LEVELS.map(level => {
            const isCurrent = stats.level.current.level === level.level;
            const isUnlocked = stats.xp >= level.xpRequired;
            return (
              <div key={level.level}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isCurrent ? "bg-purple-500/10 border border-purple-500/30" : isUnlocked ? "bg-white/5" : "bg-white/5 opacity-40"}`}>
                <span className="text-xl">{level.icon}</span>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white">Level {level.level} — {level.name}</div>
                  <div className="text-xs text-white/40">{level.xpRequired} XP required</div>
                </div>
                {isUnlocked && <span className="text-xs text-emerald-400 font-semibold">Unlocked</span>}
                {isCurrent && <span className="text-xs text-purple-400 font-semibold">Current</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
