// Gamification system — XP, levels, badges, streaks

export interface GamificationState {
  xp: number;
  level: number;
  streak: number;
  longestStreak: number;
  totalStudyMinutes: number;
  totalSessions: number;
  badges: string[];
  lastStudyDate: string | null;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: (state: GamificationState) => boolean;
}

export const LEVELS = [
  { level: 1, name: "Beginner", xpRequired: 0, icon: "🌱" },
  { level: 2, name: "Learner", xpRequired: 100, icon: "📚" },
  { level: 3, name: "Student", xpRequired: 300, icon: "🎓" },
  { level: 4, name: "Scholar", xpRequired: 600, icon: "📖" },
  { level: 5, name: "Achiever", xpRequired: 1000, icon: "⭐" },
  { level: 6, name: "Expert", xpRequired: 1500, icon: "🏆" },
  { level: 7, name: "Master", xpRequired: 2500, icon: "👑" },
  { level: 8, name: "Champion", xpRequired: 4000, icon: "🥇" },
  { level: 9, name: "Legend", xpRequired: 6000, icon: "🔥" },
  { level: 10, name: "Board Topper", xpRequired: 10000, icon: "💎" },
];

export const BADGES: Badge[] = [
  { id: "first-session", name: "First Step", description: "Complete your first study session", icon: "🎯", requirement: (s) => s.totalSessions >= 1 },
  { id: "five-sessions", name: "Getting Started", description: "Complete 5 study sessions", icon: "🚀", requirement: (s) => s.totalSessions >= 5 },
  { id: "ten-sessions", name: "Dedicated", description: "Complete 10 study sessions", icon: "💪", requirement: (s) => s.totalSessions >= 10 },
  { id: "twenty-five-sessions", name: "Committed", description: "Complete 25 study sessions", icon: "🔥", requirement: (s) => s.totalSessions >= 25 },
  { id: "fifty-sessions", name: "Unstoppable", description: "Complete 50 study sessions", icon: "⚡", requirement: (s) => s.totalSessions >= 50 },
  { id: "streak-3", name: "On Fire", description: "3-day study streak", icon: "🔥", requirement: (s) => s.longestStreak >= 3 },
  { id: "streak-7", name: "Week Warrior", description: "7-day study streak", icon: "⚔️", requirement: (s) => s.longestStreak >= 7 },
  { id: "streak-14", name: "Fortnight Fighter", description: "14-day study streak", icon: "🛡️", requirement: (s) => s.longestStreak >= 14 },
  { id: "streak-30", name: "Monthly Master", description: "30-day study streak", icon: "🏅", requirement: (s) => s.longestStreak >= 30 },
  { id: "hours-10", name: "10 Hour Club", description: "Study for 10 hours total", icon: "⏰", requirement: (s) => s.totalStudyMinutes >= 600 },
  { id: "hours-50", name: "50 Hour Legend", description: "Study for 50 hours total", icon: "🕐", requirement: (s) => s.totalStudyMinutes >= 3000 },
  { id: "hours-100", name: "Century Club", description: "Study for 100 hours total", icon: "💯", requirement: (s) => s.totalStudyMinutes >= 6000 },
  { id: "xp-500", name: "XP Hunter", description: "Earn 500 XP", icon: "✨", requirement: (s) => s.xp >= 500 },
  { id: "xp-1000", name: "XP Master", description: "Earn 1000 XP", icon: "🌟", requirement: (s) => s.xp >= 1000 },
  { id: "xp-5000", name: "XP Legend", description: "Earn 5000 XP", icon: "💫", requirement: (s) => s.xp >= 5000 },
  { id: "night-owl", name: "Night Owl", description: "Study after 10 PM", icon: "🦉", requirement: (s) => { const h = new Date().getHours(); return h >= 22 && s.totalSessions > 0; } },
  { id: "early-bird", name: "Early Bird", description: "Study before 7 AM", icon: "🐦", requirement: (s) => { const h = new Date().getHours(); return h < 7 && s.totalSessions > 0; } },
  { id: "weekend-warrior", name: "Weekend Warrior", description: "Study on a weekend", icon: "🗓️", requirement: (s) => { const d = new Date().getDay(); return (d === 0 || d === 6) && s.totalSessions > 0; } },
];

export function calculateLevel(xp: number) {
  let currentLevel = LEVELS[0];
  for (const level of LEVELS) {
    if (xp >= level.xpRequired) currentLevel = level;
  }
  const nextLevel = LEVELS.find(l => l.xpRequired > xp) || LEVELS[LEVELS.length - 1];
  const progress = nextLevel.xpRequired > currentLevel.xpRequired 
    ? ((xp - currentLevel.xpRequired) / (nextLevel.xpRequired - currentLevel.xpRequired)) * 100 
    : 100;
  return { current: currentLevel, next: nextLevel, progress };
}

export function calculateStreak(lastStudyDate: string | null): { streak: number; isNewDay: boolean } {
  if (!lastStudyDate) return { streak: 1, isNewDay: true };
  const last = new Date(lastStudyDate);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return { streak: 0, isNewDay: false }; // already studied today
  if (diffDays === 1) return { streak: 1, isNewDay: true }; // consecutive day
  return { streak: 0, isNewDay: true }; // streak broken
}

export function getNewBadges(state: GamificationState): Badge[] {
  return BADGES.filter(b => !state.badges.includes(b.id) && b.requirement(state));
}

export function getStudyTimeGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 6) return "Burning the midnight oil? 🌙";
  if (hour < 12) return "Good morning! ☀️";
  if (hour < 17) return "Good afternoon! 🌤️";
  if (hour < 21) return "Good evening! 🌅";
  return "Night session? Let's go! 🦉";
}
