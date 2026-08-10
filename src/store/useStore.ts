// ============================================================
// Exam Rescue — Global State Management (Zustand)
// ============================================================

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  AppState, OnboardingState, StudyPlan, QuizAttempt,
  PreparationStatus, TopicStatus, StudyTimeOfDay,
  LearningStyle, BreakPreference
} from '@/types';

const defaultOnboarding: OnboardingState = {
  currentStep: 0,
  selectedClass: null,
  selectedSubject: null,
  selectedChapters: [],
  chapterStatuses: {},
  topicStatuses: {},
  examDate: '',
  examTime: '',
  dailyHours: 3,
  studyTimeOfDay: 'evening',
  learningStyle: 'mixed',
  breakPreference: 'flexible',
};

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial state
      user: null,
      onboarding: { ...defaultOnboarding },
      currentPlan: null,
      quizAttempts: [],
      isPlanGenerated: false,
      isLoading: false,

      // Onboarding actions
      setOnboardingStep: (step: number) =>
        set((state) => ({
          onboarding: { ...state.onboarding, currentStep: step },
        })),

      setSelectedClass: (cls: number) =>
        set((state) => ({
          onboarding: {
            ...state.onboarding,
            selectedClass: cls,
            selectedSubject: null,
            selectedChapters: [],
            chapterStatuses: {},
            topicStatuses: {},
          },
        })),

      setSelectedSubject: (subject: string) =>
        set((state) => ({
          onboarding: {
            ...state.onboarding,
            selectedSubject: subject,
            selectedChapters: [],
            chapterStatuses: {},
            topicStatuses: {},
          },
        })),

      toggleChapter: (chapterId: string) =>
        set((state) => {
          const selected = state.onboarding.selectedChapters;
          const newSelected = selected.includes(chapterId)
            ? selected.filter((id) => id !== chapterId)
            : [...selected, chapterId];

          // Also set default status
          const newStatuses = { ...state.onboarding.chapterStatuses };
          if (!selected.includes(chapterId)) {
            newStatuses[chapterId] = 'not_prepared';
          }

          return {
            onboarding: {
              ...state.onboarding,
              selectedChapters: newSelected,
              chapterStatuses: newStatuses,
            },
          };
        }),

      setChapterStatus: (chapterId: string, status: PreparationStatus) =>
        set((state) => ({
          onboarding: {
            ...state.onboarding,
            chapterStatuses: {
              ...state.onboarding.chapterStatuses,
              [chapterId]: status,
            },
          },
        })),

      setTopicStatus: (topicId: string, status: TopicStatus) =>
        set((state) => ({
          onboarding: {
            ...state.onboarding,
            topicStatuses: {
              ...state.onboarding.topicStatuses,
              [topicId]: status,
            },
          },
        })),

      setExamDate: (date: string) =>
        set((state) => ({
          onboarding: { ...state.onboarding, examDate: date },
        })),

      setExamTime: (time: string) =>
        set((state) => ({
          onboarding: { ...state.onboarding, examTime: time },
        })),

      setDailyHours: (hours: number) =>
        set((state) => ({
          onboarding: { ...state.onboarding, dailyHours: hours },
        })),

      setStudyTimeOfDay: (time: StudyTimeOfDay) =>
        set((state) => ({
          onboarding: { ...state.onboarding, studyTimeOfDay: time },
        })),

      setLearningStyle: (style: LearningStyle) =>
        set((state) => ({
          onboarding: { ...state.onboarding, learningStyle: style },
        })),

      setBreakPreference: (pref: BreakPreference) =>
        set((state) => ({
          onboarding: { ...state.onboarding, breakPreference: pref },
        })),

      resetOnboarding: () =>
        set({ onboarding: { ...defaultOnboarding } }),

      // Plan actions
      setCurrentPlan: (plan: StudyPlan) =>
        set({ currentPlan: plan, isPlanGenerated: true }),

      markSessionComplete: (sessionId: string) =>
        set((state) => {
          if (!state.currentPlan) return state;
          return {
            currentPlan: {
              ...state.currentPlan,
              days: state.currentPlan.days.map((day) => ({
                ...day,
                sessions: day.sessions.map((session) =>
                  session.id === sessionId
                    ? { ...session, status: 'completed' as const }
                    : session
                ),
              })),
            },
          };
        }),

      markSessionSkipped: (sessionId: string) =>
        set((state) => {
          if (!state.currentPlan) return state;
          return {
            currentPlan: {
              ...state.currentPlan,
              days: state.currentPlan.days.map((day) => ({
                ...day,
                sessions: day.sessions.map((session) =>
                  session.id === sessionId
                    ? { ...session, status: 'skipped' as const }
                    : session
                ),
              })),
            },
          };
        }),

      addQuizAttempt: (attempt: QuizAttempt) =>
        set((state) => ({
          quizAttempts: [...state.quizAttempts, attempt],
        })),

      adjustPlanBasedOnQuiz: (topicId: string, score: number, total: number) =>
        set((state) => {
          if (!state.currentPlan) return state;
          const percentage = (score / total) * 100;
          return {
            currentPlan: {
              ...state.currentPlan,
              days: state.currentPlan.days.map((day) => ({
                ...day,
                sessions: day.sessions.map((session) => {
                  if (session.topicId === topicId) {
                    return {
                      ...session,
                      notes: `Quiz: ${score}/${total} (${Math.round(percentage)}%)`,
                    };
                  }
                  return session;
                }),
              })),
              version: state.currentPlan.version + 1,
            },
          };
        }),

      setPlanGenerated: (val: boolean) => set({ isPlanGenerated: val }),
      setLoading: (val: boolean) => set({ isLoading: val }),
    }),
    {
      name: 'exam-rescue-store',
    }
  )
);
