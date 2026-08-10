// ============================================================
// Exam Rescue — Core Type Definitions
// ============================================================

export type PreparationStatus = 'prepared' | 'partial' | 'not_prepared';
export type TopicStatus = 'done' | 'partial' | 'not_done' | 'unknown';
export type ActivityType = 'study' | 'practice' | 'revision' | 'quiz' | 'break' | 'mock_test' | 'active_recall';
export type ResourceType = 'concept' | 'revision' | 'practice' | 'one_shot' | 'numerical' | 'diagram';
export type PriorityLevel = 'very_high' | 'high' | 'medium' | 'low';
export type PlanMode = 'normal' | 'emergency' | 'final_revision' | 'exam_day';
export type LearningStyle = 'video' | 'reading' | 'questions' | 'mixed';
export type BreakPreference = 'short_frequent' | 'longer' | 'flexible';
export type StudyTimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night' | 'custom';
export type QuestionType = 'mcq' | 'short_answer' | 'numerical' | 'assertion_reason' | 'long_answer';

export interface User {
  id: string;
  name: string;
  email: string;
  classLevel: number;
  createdAt: string;
}

export interface ClassLevel {
  id: number;
  name: string;
  board: string;
}

export interface Subject {
  id: string;
  classLevelId: number;
  name: string;
  icon: string;
  color: string;
}

export interface Chapter {
  id: string;
  subjectId: string;
  chapterNumber: number;
  name: string;
  description: string;
  topicCount: number;
}

export interface Topic {
  id: string;
  chapterId: string;
  name: string;
  importance: number; // 1-10
  difficulty: number; // 1-10
  estimatedMinutes: number;
  isHighYield?: boolean;
}

export interface UserChapterStatus {
  userId: string;
  chapterId: string;
  status: PreparationStatus;
}

export interface UserTopicStatus {
  userId: string;
  topicId: string;
  status: TopicStatus;
}

export interface Exam {
  id: string;
  userId: string;
  subjectId: string;
  examDate: string;
  examTime?: string;
  createdAt: string;
}

export interface StudyPlan {
  id: string;
  userId: string;
  examId: string;
  createdAt: string;
  version: number;
  mode: PlanMode;
  dailyHours: number;
  studyTimeOfDay: StudyTimeOfDay;
  learningStyle: LearningStyle;
  breakPreference: BreakPreference;
  days: DayPlan[];
}

export interface DayPlan {
  date: string;
  dayNumber: number;
  isExamDay: boolean;
  isFinalRevision: boolean;
  sessions: StudySession[];
  totalMinutes: number;
  summary: string;
}

export interface StudySession {
  id: string;
  topicId: string;
  chapterId: string;
  date: string;
  startTime: string;
  endTime: string;
  activityType: ActivityType;
  status: 'pending' | 'in_progress' | 'completed' | 'skipped';
  whatToStudy: string[];
  howToStudy: string[];
  resourceId?: string;
  notes?: string;
}

export interface Question {
  id: string;
  topicId: string;
  chapterId: string;
  question: string;
  questionType: QuestionType;
  difficulty: number;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  topicId: string;
  questions: Question[];
  answers: Record<string, string>;
  score: number;
  totalQuestions: number;
  timeTaken: number;
  completedAt: string;
}

export interface Resource {
  id: string;
  subjectId: string;
  chapterId: string;
  topicId?: string;
  title: string;
  url: string;
  provider: string;
  duration: string;
  resourceType: ResourceType;
  priority: number;
  thumbnailUrl?: string;
  reason?: string;
}

export interface PriorityScore {
  topicId: string;
  score: number;
  level: PriorityLevel;
  reason: string;
  estimatedMinutes: number;
  marksPerHour: number;
}

export interface PlanAdjustment {
  type: 'reschedule' | 'priority_change' | 'time_reallocation' | 'topic_added' | 'topic_removed';
  description: string;
  affectedDates: string[];
}

// Store types
export interface OnboardingState {
  currentStep: number;
  selectedClass: number | null;
  selectedSubject: string | null;
  selectedChapters: string[];
  chapterStatuses: Record<string, PreparationStatus>;
  topicStatuses: Record<string, TopicStatus>;
  examDate: string;
  examTime: string;
  dailyHours: number;
  studyTimeOfDay: StudyTimeOfDay;
  learningStyle: LearningStyle;
  breakPreference: BreakPreference;
}

export interface AppState {
  user: User | null;
  onboarding: OnboardingState;
  currentPlan: StudyPlan | null;
  quizAttempts: QuizAttempt[];
  isPlanGenerated: boolean;
  isLoading: boolean;

  // Onboarding actions
  setOnboardingStep: (step: number) => void;
  setSelectedClass: (cls: number) => void;
  setSelectedSubject: (subject: string) => void;
  toggleChapter: (chapterId: string) => void;
  setChapterStatus: (chapterId: string, status: PreparationStatus) => void;
  setTopicStatus: (topicId: string, status: TopicStatus) => void;
  setExamDate: (date: string) => void;
  setExamTime: (time: string) => void;
  setDailyHours: (hours: number) => void;
  setStudyTimeOfDay: (time: StudyTimeOfDay) => void;
  setLearningStyle: (style: LearningStyle) => void;
  setBreakPreference: (pref: BreakPreference) => void;
  resetOnboarding: () => void;

  // Plan actions
  setCurrentPlan: (plan: StudyPlan) => void;
  markSessionComplete: (sessionId: string) => void;
  markSessionSkipped: (sessionId: string) => void;
  addQuizAttempt: (attempt: QuizAttempt) => void;
  adjustPlanBasedOnQuiz: (topicId: string, score: number, total: number) => void;
  setPlanGenerated: (val: boolean) => void;
  setLoading: (val: boolean) => void;
}
