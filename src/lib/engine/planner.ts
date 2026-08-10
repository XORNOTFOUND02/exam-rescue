// ============================================================
// Exam Rescue — Plan Generation Engine
// ============================================================

import {
  StudyPlan, DayPlan, StudySession, Topic, PreparationStatus,
  TopicStatus, PlanMode, ActivityType, StudyTimeOfDay,
  LearningStyle, BreakPreference
} from '@/types';
import { rankTopicsByPriority } from './priority';
import { getTopics } from '@/lib/syllabus';
import { v4 as uuidv4 } from 'uuid';

interface PlanInput {
  subjectId: string;
  selectedChapters: string[];
  chapterStatuses: Record<string, PreparationStatus>;
  topicStatuses: Record<string, TopicStatus>;
  examDate: string;
  examTime?: string;
  dailyHours: number;
  studyTimeOfDay: StudyTimeOfDay;
  learningStyle: LearningStyle;
  breakPreference: BreakPreference;
  userId: string;
}

/**
 * Determine the plan mode based on days remaining
 */
function getPlanMode(daysRemaining: number): PlanMode {
  if (daysRemaining <= 0) return 'exam_day';
  if (daysRemaining <= 2) return 'emergency';
  if (daysRemaining <= 4) return 'final_revision';
  return 'normal';
}

/**
 * Get study time slots based on user preference
 */
function getStudySlots(
  dailyMinutes: number,
  studyTimeOfDay: StudyTimeOfDay,
  breakPreference: BreakPreference
): { start: string; end: string; breakMinutes: number }[] {
  const slots: { start: string; end: string; breakMinutes: number }[] = [];

  const breakMinutes = breakPreference === 'short_frequent' ? 5 :
    breakPreference === 'longer' ? 15 : 10;

  let baseHour: number;
  switch (studyTimeOfDay) {
    case 'morning': baseHour = 6; break;
    case 'afternoon': baseHour = 13; break;
    case 'evening': baseHour = 16; break;
    case 'night': baseHour = 19; break;
    default: baseHour = 16; break;
  }

  let remainingMinutes = dailyMinutes;
  let currentHour = baseHour;
  let currentMinutes = 0;

  while (remainingMinutes > 0) {
    const blockDuration = Math.min(remainingMinutes, 60);
    const startStr = `${String(currentHour).padStart(2, '0')}:${String(currentMinutes).padStart(2, '0')}`;

    currentMinutes += blockDuration;
    if (currentMinutes >= 60) {
      currentHour += Math.floor(currentMinutes / 60);
      currentMinutes = currentMinutes % 60;
    }

    const endStr = `${String(currentHour).padStart(2, '0')}:${String(currentMinutes).padStart(2, '0')}`;

    slots.push({
      start: startStr,
      end: endStr,
      breakMinutes,
    });

    remainingMinutes -= blockDuration;

    // Add break
    if (remainingMinutes > 0) {
      currentMinutes += breakMinutes;
      if (currentMinutes >= 60) {
        currentHour += Math.floor(currentMinutes / 60);
        currentMinutes = currentMinutes % 60;
      }
      remainingMinutes -= breakMinutes;
    }
  }

  return slots;
}

/**
 * Get study method recommendations based on topic characteristics and learning style
 */
function getStudyMethods(
  topic: Topic,
  chapterStatus: PreparationStatus,
  topicStatus: TopicStatus,
  learningStyle: LearningStyle
): string[] {
  const methods: string[] = [];

  if (topicStatus === 'not_done' || topicStatus === 'unknown') {
    methods.push('Read the NCERT explanation carefully');
    if (learningStyle === 'video' || learningStyle === 'mixed') {
      methods.push('Watch a concept video for visual understanding');
    }
    methods.push('Write key points from memory');
    methods.push('Solve 3-5 practice questions');
    if (topic.difficulty >= 7) {
      methods.push('Break this topic into smaller sub-concepts');
    }
  } else if (topicStatus === 'partial') {
    methods.push('Focus on the parts you are unsure about');
    methods.push('Re-read the specific sections you find difficult');
    methods.push('Practice targeted questions on weak areas');
    methods.push('Explain the concept aloud without looking at notes');
  } else {
    methods.push('Quick review of key formulas/definitions');
    methods.push('Solve a few challenging questions to confirm mastery');
    methods.push('Add to your revision list');
  }

  return methods;
}

/**
 * Get "what to study" breakdown for a topic
 */
function getWhatToStudy(topic: Topic, topicStatus: TopicStatus): string[] {
  if (topicStatus === 'done') {
    return [
      `Quick revision of ${topic.name}`,
      'Key formulas and definitions',
      'Practice 2-3 challenging questions',
    ];
  }

  if (topicStatus === 'partial') {
    return [
      `Focus on incomplete parts of ${topic.name}`,
      'Identify and study weak sub-concepts',
      'Practice questions on specific areas',
      'Test your understanding with recall',
    ];
  }

  return [
    `Learn ${topic.name} from NCERT`,
    'Understand core concepts and definitions',
    'Study relevant diagrams and examples',
    'Write key points from memory',
    'Solve NCERT in-text questions',
    'Practice previous year questions',
  ];
}

/**
 * Generate the complete study plan
 */
export function generateStudyPlan(input: PlanInput): StudyPlan {
  const { subjectId, selectedChapters, chapterStatuses, topicStatuses, examDate, dailyHours, studyTimeOfDay, learningStyle, breakPreference, userId } = input;

  // Calculate days
  const now = new Date();
  const exam = new Date(examDate);
  const daysRemaining = Math.max(1, Math.ceil((exam.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));

  const mode = getPlanMode(daysRemaining);
  const dailyMinutes = dailyHours * 60;
  const totalStudyMinutes = daysRemaining * dailyMinutes;

  // Collect all topics
  const allTopics: Topic[] = [];
  for (const chapterId of selectedChapters) {
    const topics = getTopics(subjectId, chapterId);
    allTopics.push(...topics);
  }

  // Rank by priority
  const priorityScores = rankTopicsByPriority(
    allTopics,
    chapterStatuses,
    topicStatuses,
    daysRemaining,
    totalStudyMinutes
  );

  // Get study slots
  const studySlots = getStudySlots(dailyMinutes, studyTimeOfDay, breakPreference);

  // Generate day-by-day plan
  const days: DayPlan[] = [];
  let topicIndex = 0;

  for (let day = 0; day < daysRemaining; day++) {
    const date = new Date(now);
    date.setDate(date.getDate() + day);
    const dateStr = date.toISOString().split('T')[0];

    const isExamDay = day === daysRemaining - 1 && mode === 'exam_day';
    const isFinalRevision = day === daysRemaining - 1 && mode !== 'exam_day';

    const sessions: StudySession[] = [];

    if (isExamDay) {
      // Exam day — quick revision only
      const topPriorityTopics = priorityScores.slice(0, 5);
      for (let i = 0; i < Math.min(topPriorityTopics.length, studySlots.length); i++) {
        const slot = studySlots[i];
        const pScore = topPriorityTopics[i];
        const topic = allTopics.find(t => t.id === pScore.topicId);
        if (!topic) continue;

        sessions.push({
          id: uuidv4(),
          topicId: topic.id,
          chapterId: topic.chapterId,
          date: dateStr,
          startTime: slot.start,
          endTime: slot.end,
          activityType: 'revision',
          status: 'pending',
          whatToStudy: [
            `Quick revision of ${topic.name}`,
            'Key formulas and definitions',
            'Common mistakes to avoid',
          ],
          howToStudy: [
            'Read through notes quickly',
            'Recall key points without looking',
            'Mark any remaining doubts',
          ],
        });
      }
    } else if (isFinalRevision) {
      // Final revision day — focus on weak areas and practice
      const weakTopics = priorityScores.filter(s =>
        s.level === 'very_high' || s.level === 'high'
      ).slice(0, 3);

      let slotIndex = 0;

      // Weak area revision
      for (const pScore of weakTopics) {
        if (slotIndex >= studySlots.length) break;
        const slot = studySlots[slotIndex];
        const topic = allTopics.find(t => t.id === pScore.topicId);
        if (!topic) continue;

        sessions.push({
          id: uuidv4(),
          topicId: topic.id,
          chapterId: topic.chapterId,
          date: dateStr,
          startTime: slot.start,
          endTime: slot.end,
          activityType: 'revision',
          status: 'pending',
          whatToStudy: [
            `Final revision of ${topic.name}`,
            'Focus on frequently confused concepts',
            'Review key questions and answers',
          ],
          howToStudy: [
            'Close the book and recall everything',
            'Open and fill in gaps',
            'Solve 2-3 previous year questions',
          ],
        });
        slotIndex++;
      }

      // Mock test
      if (slotIndex < studySlots.length) {
        const slot = studySlots[slotIndex];
        sessions.push({
          id: uuidv4(),
          topicId: weakTopics[0]?.topicId || allTopics[0]?.id || '',
          chapterId: weakTopics[0] ? allTopics.find(t => t.id === weakTopics[0].topicId)?.chapterId || '' : '',
          date: dateStr,
          startTime: slot.start,
          endTime: slot.end,
          activityType: 'mock_test',
          status: 'pending',
          whatToStudy: [
            'Full-length mock test',
            'All major topics',
            'Time yourself',
          ],
          howToStudy: [
            'Set a timer',
            'Attempt all questions',
            'Review mistakes afterward',
          ],
        });
      }
    } else {
      // Regular study day
      let slotIndex = 0;

      while (slotIndex < studySlots.length && topicIndex < priorityScores.length) {
        const slot = studySlots[slotIndex];
        const pScore = priorityScores[topicIndex];
        const topic = allTopics.find(t => t.id === pScore.topicId);
        if (!topic) { topicIndex++; continue; }

        const chapterStatus = chapterStatuses[topic.chapterId] || 'not_prepared';
        const topicStatusVal = topicStatuses[topic.id] || 'not_done';

        // Determine activity type
        let activityType: ActivityType = 'study';
        if (topicStatusVal === 'done') {
          activityType = 'revision';
        } else if (topicStatusVal === 'partial') {
          activityType = 'study';
        }

        sessions.push({
          id: uuidv4(),
          topicId: topic.id,
          chapterId: topic.chapterId,
          date: dateStr,
          startTime: slot.start,
          endTime: slot.end,
          activityType,
          status: 'pending',
          whatToStudy: getWhatToStudy(topic, topicStatusVal),
          howToStudy: getStudyMethods(topic, chapterStatus, topicStatusVal, learningStyle),
        });

        topicIndex++;
        slotIndex++;
      }

      // Add practice/quiz slot at the end
      if (slotIndex < studySlots.length && sessions.length > 0) {
        const slot = studySlots[slotIndex];
        const lastSession = sessions[sessions.length - 1];
        sessions.push({
          id: uuidv4(),
          topicId: lastSession.topicId,
          chapterId: lastSession.chapterId,
          date: dateStr,
          startTime: slot.start,
          endTime: slot.end,
          activityType: 'practice',
          status: 'pending',
          whatToStudy: [
            'Practice questions on today\'s topics',
            'Attempt 5-10 MCQs and short questions',
            'Review any mistakes',
          ],
          howToStudy: [
            'Solve without looking at answers',
            'Check and understand each mistake',
            'Mark weak areas for tomorrow',
          ],
        });
      }

      // Add active recall at the end
      if (slotIndex + 1 < studySlots.length && sessions.length > 1) {
        const slot = studySlots[slotIndex + 1];
        sessions.push({
          id: uuidv4(),
          topicId: sessions[0].topicId,
          chapterId: sessions[0].chapterId,
          date: dateStr,
          startTime: slot.start,
          endTime: slot.end,
          activityType: 'active_recall',
          status: 'pending',
          whatToStudy: [
            'Close all books and notes',
            'Write down everything you remember from today',
            'Identify gaps in your understanding',
          ],
          howToStudy: [
            'Set a timer for 10 minutes',
            'Write freely from memory',
            'Check against your notes',
            'Note what you missed',
          ],
        });
      }
    }

    // Calculate summary
    const studyMinutes = sessions.reduce((acc, s) => {
      const [sh, sm] = s.startTime.split(':').map(Number);
      const [eh, em] = s.endTime.split(':').map(Number);
      return acc + ((eh * 60 + em) - (sh * 60 + sm));
    }, 0);

    let summary = '';
    if (isExamDay) {
      summary = 'Exam Day — Quick revision and final preparation';
    } else if (isFinalRevision) {
      summary = `Final Revision Day — Focus on weak areas and practice. ${sessions.length} sessions planned.`;
    } else if (mode === 'emergency') {
      summary = `Emergency Mode — High-priority topics only. ${sessions.length} focused sessions.`;
    } else {
      summary = `${sessions.length} study sessions covering ${new Set(sessions.map(s => s.chapterId)).size} chapters.`;
    }

    days.push({
      date: dateStr,
      dayNumber: day + 1,
      isExamDay,
      isFinalRevision,
      sessions,
      totalMinutes: studyMinutes,
      summary,
    });
  }

  return {
    id: uuidv4(),
    userId,
    examId: '',
    createdAt: new Date().toISOString(),
    version: 1,
    mode,
    dailyHours,
    studyTimeOfDay,
    learningStyle,
    breakPreference,
    days,
  };
}

/**
 * Adapt plan based on quiz performance
 */
export function adaptPlan(
  plan: StudyPlan,
  topicId: string,
  score: number,
  totalQuestions: number
): StudyPlan {
  const percentage = (score / totalQuestions) * 100;
  const updatedDays = plan.days.map(day => ({
    ...day,
    sessions: day.sessions.map(session => {
      if (session.topicId === topicId) {
        if (percentage < 50) {
          // Poor performance — add more revision
          return {
            ...session,
            whatToStudy: [
              ...session.whatToStudy,
              'Extra revision needed — focus on fundamental concepts',
              'Re-read the chapter section carefully',
              'Solve more practice questions on this topic',
            ],
            notes: `Quiz score: ${score}/${totalQuestions}. Needs more practice.`,
          };
        } else if (percentage >= 80) {
          // Good performance — reduce revision
          return {
            ...session,
            whatToStudy: [
              `Good progress on this topic! Quick review only.`,
              'Solve a few advanced questions',
              'Move to next priority topic',
            ],
            notes: `Quiz score: ${score}/${totalQuestions}. Well understood.`,
          };
        }
      }
      return session;
    }),
  }));

  return {
    ...plan,
    days: updatedDays,
    version: plan.version + 1,
  };
}

/**
 * Handle missed day — rebuild remaining schedule
 */
export function handleMissedDay(plan: StudyPlan, missedDate: string): StudyPlan {
  const missedDayIndex = plan.days.findIndex(d => d.date === missedDate);
  if (missedDayIndex === -1) return plan;

  // Collect uncompleted sessions from missed day
  const missedSessions = plan.days[missedDayIndex].sessions
    .filter(s => s.status !== 'completed');

  // Redistribute to remaining days
  const updatedDays = [...plan.days];
  let sessionIndex = 0;

  for (let i = missedDayIndex + 1; i < updatedDays.length && sessionIndex < missedSessions.length; i++) {
    const day = updatedDays[i];
    if (day.isExamDay) continue;

    // Add one missed session per day
    if (sessionIndex < missedSessions.length) {
      const missedSession = missedSessions[sessionIndex];
      const lastSession = day.sessions[day.sessions.length - 1];

      let newStartHour = 20;
      if (lastSession) {
        const [h, m] = lastSession.endTime.split(':').map(Number);
        newStartHour = h + (m + 10 >= 60 ? 1 : 0);
      }

      day.sessions.push({
        ...missedSession,
        id: uuidv4(),
        date: day.date,
        startTime: `${String(Math.min(newStartHour, 22)).padStart(2, '0')}:00`,
        endTime: `${String(Math.min(newStartHour + 1, 23)).padStart(2, '0')}:00`,
        notes: `Rescheduled from ${missedDate}`,
      });

      sessionIndex++;
    }
  }

  // If some sessions couldn't be redistributed, add to final revision
  while (sessionIndex < missedSessions.length) {
    const lastDay = updatedDays[updatedDays.length - 1];
    if (lastDay && !lastDay.isExamDay) {
      const missedSession = missedSessions[sessionIndex];
      lastDay.sessions.unshift({
        ...missedSession,
        id: uuidv4(),
        date: lastDay.date,
        startTime: '06:00',
        endTime: '07:00',
        notes: `Rescheduled from ${missedDate}`,
      });
    }
    sessionIndex++;
  }

  return {
    ...plan,
    days: updatedDays,
    version: plan.version + 1,
  };
}
