// ============================================================
// Exam Rescue — Syllabus Index
// ============================================================

import { Chapter, Topic, Subject } from '@/types';

// Class 10
import { scienceSubject, scienceChapters, scienceTopics } from './class10-science';
import { mathSubject, mathChapters, mathTopics } from './class10-math';
import { socialSubject, socialChapters, socialTopics } from './class10-social';
import { englishSubject, englishChapters, englishTopics } from './class10-english';

// Class 9
import { scienceSubject as c9ScienceSubject, scienceChapters as c9ScienceChapters, scienceTopics as c9ScienceTopics } from './class9-science';
import { mathsSubject as c9MathsSubject, mathsChapters as c9MathsChapters, mathsTopics as c9MathsTopics } from './class9-math';
import { socialSubject as c9SocialSubject, socialChapters as c9SocialChapters, socialTopics as c9SocialTopics } from './class9-social';
import { englishSubject as c9EnglishSubject, englishChapters as c9EnglishChapters, englishTopics as c9EnglishTopics } from './class9-english';

// Class 11
import { physicsSubject as c11PhysicsSubject, physicsChapters as c11PhysicsChapters, physicsTopics as c11PhysicsTopics } from './class11-physics';
import { chemistrySubject as c11ChemistrySubject, chemistryChapters as c11ChemistryChapters, chemistryTopics as c11ChemistryTopics } from './class11-chemistry';
import { mathsSubject as c11MathsSubject, mathsChapters as c11MathsChapters, mathsTopics as c11MathsTopics } from './class11-maths';
import { biologySubject as c11BiologySubject, biologyChapters as c11BiologyChapters, biologyTopics as c11BiologyTopics } from './class11-biology';

// Class 12
import { physicsSubject as c12PhysicsSubject, physicsChapters as c12PhysicsChapters, physicsTopics as c12PhysicsTopics } from './class12-physics';
import { chemistrySubject as c12ChemistrySubject, chemistryChapters as c12ChemistryChapters, chemistryTopics as c12ChemistryTopics } from './class12-chemistry';
import { mathsSubject as c12MathsSubject, mathsChapters as c12MathsChapters, mathsTopics as c12MathsTopics } from './class12-maths';
import { biologySubject as c12BiologySubject, biologyChapters as c12BiologyChapters, biologyTopics as c12BiologyTopics } from './class12-biology';

export interface SyllabusData {
  subject: Subject;
  chapters: Chapter[];
  topics: Record<string, Topic[]>;
}

export const subjectsByClass: Record<number, Subject[]> = {
  9: [
    c9ScienceSubject,
    c9MathsSubject,
    c9SocialSubject,
    c9EnglishSubject,
  ],
  10: [
    scienceSubject,
    mathSubject,
    socialSubject,
    englishSubject,
  ],
  11: [
    c11PhysicsSubject,
    c11ChemistrySubject,
    c11MathsSubject,
    c11BiologySubject,
  ],
  12: [
    c12PhysicsSubject,
    c12ChemistrySubject,
    c12MathsSubject,
    c12BiologySubject,
  ],
};

// Map: subjectId -> SyllabusData
// Note: class 9 and 10 share subject IDs (science, mathematics, social_science, english)
// so they can coexist. Class 11/12 use different IDs (physics, chemistry, biology)
// which also don't clash. The subjectsByClass routing ensures the right syllabus
// is shown per class.
const syllabusMap: Record<string, SyllabusData> = {
  // Class 9
  'science': { subject: scienceSubject, chapters: scienceChapters, topics: scienceTopics },
  'mathematics': { subject: mathSubject, chapters: mathChapters, topics: mathTopics },
  'social_science': { subject: socialSubject, chapters: socialChapters, topics: socialTopics },
  'english': { subject: englishSubject, chapters: englishChapters, topics: englishTopics },
  // Class 11/12
  'physics': { subject: c11PhysicsSubject, chapters: c11PhysicsChapters, topics: c11PhysicsTopics },
  'chemistry': { subject: c11ChemistrySubject, chapters: c11ChemistryChapters, topics: c11ChemistryTopics },
  'biology': { subject: c11BiologySubject, chapters: c11BiologyChapters, topics: c11BiologyTopics },
};

// Class-specific syllabus maps for when subject IDs overlap (e.g. science for C9 vs C10)
// Use getChaptersByClass() for unambiguous lookups.
const syllabusByClass: Record<number, Record<string, SyllabusData>> = {
  9: {
    'science': { subject: c9ScienceSubject, chapters: c9ScienceChapters, topics: c9ScienceTopics },
    'mathematics': { subject: c9MathsSubject, chapters: c9MathsChapters, topics: c9MathsTopics },
    'social_science': { subject: c9SocialSubject, chapters: c9SocialChapters, topics: c9SocialTopics },
    'english': { subject: c9EnglishSubject, chapters: c9EnglishChapters, topics: c9EnglishTopics },
  },
  10: {
    'science': { subject: scienceSubject, chapters: scienceChapters, topics: scienceTopics },
    'mathematics': { subject: mathSubject, chapters: mathChapters, topics: mathTopics },
    'social_science': { subject: socialSubject, chapters: socialChapters, topics: socialTopics },
    'english': { subject: englishSubject, chapters: englishChapters, topics: englishTopics },
  },
  11: {
    'physics': { subject: c11PhysicsSubject, chapters: c11PhysicsChapters, topics: c11PhysicsTopics },
    'chemistry': { subject: c11ChemistrySubject, chapters: c11ChemistryChapters, topics: c11ChemistryTopics },
    'mathematics': { subject: c11MathsSubject, chapters: c11MathsChapters, topics: c11MathsTopics },
    'biology': { subject: c11BiologySubject, chapters: c11BiologyChapters, topics: c11BiologyTopics },
  },
  12: {
    'physics': { subject: c12PhysicsSubject, chapters: c12PhysicsChapters, topics: c12PhysicsTopics },
    'chemistry': { subject: c12ChemistrySubject, chapters: c12ChemistryChapters, topics: c12ChemistryTopics },
    'mathematics': { subject: c12MathsSubject, chapters: c12MathsChapters, topics: c12MathsTopics },
    'biology': { subject: c12BiologySubject, chapters: c12BiologyChapters, topics: c12BiologyTopics },
  },
};

/** Get syllabus with class-level precision (recommended) */
export function getSyllabusByClass(classLevelId: number, subjectId: string): SyllabusData | null {
  return syllabusByClass[classLevelId]?.[subjectId] || null;
}

/** Legacy: get syllabus by subjectId only (works for unique subject IDs) */
export function getSyllabus(subjectId: string): SyllabusData | null {
  return syllabusMap[subjectId] || null;
}

export function getChapters(subjectId: string, classLevelId?: number): Chapter[] {
  if (classLevelId !== undefined) {
    const data = syllabusByClass[classLevelId]?.[subjectId];
    return data ? data.chapters : [];
  }
  const data = syllabusMap[subjectId];
  return data ? data.chapters : [];
}

export function getTopics(subjectId: string, chapterId: string, classLevelId?: number): Topic[] {
  if (classLevelId !== undefined) {
    const data = syllabusByClass[classLevelId]?.[subjectId];
    if (!data) return [];
    return data.topics[chapterId] || [];
  }
  const data = syllabusMap[subjectId];
  if (!data) return [];
  return data.topics[chapterId] || [];
}

export function getAllTopicsForSubject(subjectId: string, classLevelId?: number): Topic[] {
  if (classLevelId !== undefined) {
    const data = syllabusByClass[classLevelId]?.[subjectId];
    if (!data) return [];
    return Object.values(data.topics).flat();
  }
  const data = syllabusMap[subjectId];
  if (!data) return [];
  return Object.values(data.topics).flat();
}

export function getChapterById(chapterId: string): Chapter | undefined {
  for (const data of Object.values(syllabusByClass)) {
    for (const syllabus of Object.values(data)) {
      const found = syllabus.chapters.find(c => c.id === chapterId);
      if (found) return found;
    }
  }
  // Fallback to legacy map
  for (const data of Object.values(syllabusMap)) {
    const found = data.chapters.find(c => c.id === chapterId);
    if (found) return found;
  }
  return undefined;
}

export function getTopicById(topicId: string): Topic | undefined {
  for (const data of Object.values(syllabusByClass)) {
    for (const syllabus of Object.values(data)) {
      for (const topics of Object.values(syllabus.topics)) {
        const found = topics.find(t => t.id === topicId);
        if (found) return found;
      }
    }
  }
  for (const data of Object.values(syllabusMap)) {
    for (const topics of Object.values(data.topics)) {
      const found = topics.find(t => t.id === topicId);
      if (found) return found;
    }
  }
  return undefined;
}
