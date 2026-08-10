// ============================================================
// Exam Rescue — Syllabus Index
// ============================================================

import { Chapter, Topic, Subject } from '@/types';
import { scienceSubject, scienceChapters, scienceTopics } from './class10-science';
import { mathSubject, mathChapters, mathTopics } from './class10-math';
import { socialSubject, socialChapters, socialTopics } from './class10-social';
import { englishSubject, englishChapters, englishTopics } from './class10-english';

export interface SyllabusData {
  subject: Subject;
  chapters: Chapter[];
  topics: Record<string, Topic[]>;
}

export const subjectsByClass: Record<number, Subject[]> = {
  9: [
    { id: 'science', classLevelId: 9, name: 'Science', icon: '🔬', color: '#10b981' },
    { id: 'mathematics', classLevelId: 9, name: 'Mathematics', icon: '📐', color: '#6366f1' },
    { id: 'social_science', classLevelId: 9, name: 'Social Science', icon: '🌍', color: '#f59e0b' },
    { id: 'english', classLevelId: 9, name: 'English', icon: '📖', color: '#ec4899' },
  ],
  10: [
    scienceSubject,
    mathSubject,
    socialSubject,
    englishSubject,
  ],
  11: [
    { id: 'physics', classLevelId: 11, name: 'Physics', icon: '⚡', color: '#3b82f6' },
    { id: 'chemistry', classLevelId: 11, name: 'Chemistry', icon: '🧪', color: '#8b5cf6' },
    { id: 'mathematics', classLevelId: 11, name: 'Mathematics', icon: '📐', color: '#6366f1' },
    { id: 'biology', classLevelId: 11, name: 'Biology', icon: '🧬', color: '#22c55e' },
    { id: 'english', classLevelId: 11, name: 'English', icon: '📖', color: '#ec4899' },
  ],
  12: [
    { id: 'physics', classLevelId: 12, name: 'Physics', icon: '⚡', color: '#3b82f6' },
    { id: 'chemistry', classLevelId: 12, name: 'Chemistry', icon: '🧪', color: '#8b5cf6' },
    { id: 'mathematics', classLevelId: 12, name: 'Mathematics', icon: '📐', color: '#6366f1' },
    { id: 'biology', classLevelId: 12, name: 'Biology', icon: '🧬', color: '#22c55e' },
    { id: 'english', classLevelId: 12, name: 'English', icon: '📖', color: '#ec4899' },
  ],
};

const syllabusMap: Record<string, SyllabusData> = {
  'science': { subject: scienceSubject, chapters: scienceChapters, topics: scienceTopics },
  'mathematics': { subject: mathSubject, chapters: mathChapters, topics: mathTopics },
  'social_science': { subject: socialSubject, chapters: socialChapters, topics: socialTopics },
  'english': { subject: englishSubject, chapters: englishChapters, topics: englishTopics },
};

export function getSyllabus(subjectId: string): SyllabusData | null {
  return syllabusMap[subjectId] || null;
}

export function getChapters(subjectId: string): Chapter[] {
  const data = syllabusMap[subjectId];
  return data ? data.chapters : [];
}

export function getTopics(subjectId: string, chapterId: string): Topic[] {
  const data = syllabusMap[subjectId];
  if (!data) return [];
  return data.topics[chapterId] || [];
}

export function getAllTopicsForSubject(subjectId: string): Topic[] {
  const data = syllabusMap[subjectId];
  if (!data) return [];
  return Object.values(data.topics).flat();
}

export function getChapterById(chapterId: string): Chapter | undefined {
  for (const data of Object.values(syllabusMap)) {
    const found = data.chapters.find(c => c.id === chapterId);
    if (found) return found;
  }
  return undefined;
}

export function getTopicById(topicId: string): Topic | undefined {
  for (const data of Object.values(syllabusMap)) {
    for (const topics of Object.values(data.topics)) {
      const found = topics.find(t => t.id === topicId);
      if (found) return found;
    }
  }
  return undefined;
}
