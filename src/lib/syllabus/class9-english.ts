// ============================================================
// Exam Rescue — Class 9 English Syllabus (NCERT)
// ============================================================

import { Subject, Chapter, Topic } from '@/types';

export const englishSubject: Subject = {
  id: 'english',
  classLevelId: 9,
  name: 'English',
  icon: '📖',
  color: '#ec4899',
};

export const englishChapters: Chapter[] = [
  // Beehive (Prose)
  { id: 'eng-bh-ch1', subjectId: 'english', chapterNumber: 1, name: 'The Fun They Had', description: 'Isaac Asimov - futuristic story about education', topicCount: 3 },
  { id: 'eng-bh-ch2', subjectId: 'english', chapterNumber: 2, name: 'The Sound of Music', description: 'Evelyn Glennie - overcoming deafness to become a musician', topicCount: 3 },
  { id: 'eng-bh-ch3', subjectId: 'english', chapterNumber: 3, name: 'The Little Girl', description: 'Katherine Mansfield - relationship with father', topicCount: 3 },
  { id: 'eng-bh-ch4', subjectId: 'english', chapterNumber: 4, name: 'A Truly Beautiful Mind', description: 'Albert Einstein biography', topicCount: 3 },
  { id: 'eng-bh-ch5', subjectId: 'english', chapterNumber: 5, name: 'The Snake and the Mirror', description: 'Vaikom Muhammad Basheer - humorous story', topicCount: 3 },
  { id: 'eng-bh-ch6', subjectId: 'english', chapterNumber: 6, name: 'My Childhood', description: 'A.P.J. Abdul Kalam autobiography', topicCount: 3 },
  { id: 'eng-bh-ch7', subjectId: 'english', chapterNumber: 7, name: 'Packing', description: 'Jerome K. Jerome - humorous account', topicCount: 3 },
  { id: 'eng-bh-ch8', subjectId: 'english', chapterNumber: 8, name: 'Reach for the Top', description: 'Santosh Yadav and Maria Sharapova', topicCount: 3 },
  { id: 'eng-bh-ch9', subjectId: 'english', chapterNumber: 9, name: 'The Bond of Love', description: 'Kenneth Anderson - bond with a bear', topicCount: 3 },
  { id: 'eng-bh-ch10', subjectId: 'english', chapterNumber: 10, name: 'Kathmandu', description: 'Vikram Seth - travelogue', topicCount: 3 },
  { id: 'eng-bh-ch11', subjectId: 'english', chapterNumber: 11, name: 'If I Were You', description: 'Douglas James - play about identity', topicCount: 3 },
  // Beehive (Poetry)
  { id: 'eng-bp-ch1', subjectId: 'english', chapterNumber: 12, name: 'The Road Not Taken', description: 'Robert Frost - choices in life', topicCount: 2 },
  { id: 'eng-bp-ch2', subjectId: 'english', chapterNumber: 13, name: 'Sound of Music', description: 'Evelyn Glennie poem', topicCount: 2 },
  { id: 'eng-bp-ch3', subjectId: 'english', chapterNumber: 14, name: 'The Little Girl', description: 'Poem about childhood', topicCount: 2 },
  { id: 'eng-bp-ch4', subjectId: 'english', chapterNumber: 15, name: 'A Truly Beautiful Mind', description: 'Poem about beauty', topicCount: 2 },
  { id: 'eng-bp-ch5', subjectId: 'english', chapterNumber: 16, name: 'The Duck and the Kangaroo', description: 'Edward Lear - nonsense verse', topicCount: 2 },
  { id: 'eng-bp-ch6', subjectId: 'english', chapterNumber: 17, name: 'I Wandered Lonely as a Cloud', description: 'William Wordsworth - daffodils', topicCount: 2 },
  { id: 'eng-bp-ch7', subjectId: 'english', chapterNumber: 18, name: 'The Invisible Man', description: 'Poem about invisibility', topicCount: 2 },
  { id: 'eng-bp-ch8', subjectId: 'english', chapterNumber: 19, name: 'The Tale of the Melon City', description: 'Vikram Seth - humorous poem', topicCount: 2 },
];

export const englishTopics: Record<string, Topic[]> = {
  'eng-bh-ch1': [
    { id: 'eng-bh-ch1-t1', chapterId: 'eng-bh-ch1', name: 'Summary and Theme', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'eng-bh-ch1-t2', chapterId: 'eng-bh-ch1', name: 'Key Vocabulary', importance: 7, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bh-ch1-t3', chapterId: 'eng-bh-ch1', name: 'Questions and Answers', importance: 8, difficulty: 4, estimatedMinutes: 20 },
  ],
  'eng-bh-ch2': [
    { id: 'eng-bh-ch2-t1', chapterId: 'eng-bh-ch2', name: 'Summary and Theme', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'eng-bh-ch2-t2', chapterId: 'eng-bh-ch2', name: 'Key Vocabulary', importance: 7, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bh-ch2-t3', chapterId: 'eng-bh-ch2', name: 'Questions and Answers', importance: 8, difficulty: 4, estimatedMinutes: 20 },
  ],
  'eng-bh-ch3': [
    { id: 'eng-bh-ch3-t1', chapterId: 'eng-bh-ch3', name: 'Summary and Theme', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'eng-bh-ch3-t2', chapterId: 'eng-bh-ch3', name: 'Key Vocabulary', importance: 7, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bh-ch3-t3', chapterId: 'eng-bh-ch3', name: 'Questions and Answers', importance: 8, difficulty: 4, estimatedMinutes: 20 },
  ],
  'eng-bh-ch4': [
    { id: 'eng-bh-ch4-t1', chapterId: 'eng-bh-ch4', name: 'Summary and Theme', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'eng-bh-ch4-t2', chapterId: 'eng-bh-ch4', name: 'Key Vocabulary', importance: 7, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bh-ch4-t3', chapterId: 'eng-bh-ch4', name: 'Questions and Answers', importance: 8, difficulty: 4, estimatedMinutes: 20 },
  ],
  'eng-bh-ch5': [
    { id: 'eng-bh-ch5-t1', chapterId: 'eng-bh-ch5', name: 'Summary and Theme', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'eng-bh-ch5-t2', chapterId: 'eng-bh-ch5', name: 'Key Vocabulary', importance: 7, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bh-ch5-t3', chapterId: 'eng-bh-ch5', name: 'Questions and Answers', importance: 8, difficulty: 4, estimatedMinutes: 20 },
  ],
  'eng-bh-ch6': [
    { id: 'eng-bh-ch6-t1', chapterId: 'eng-bh-ch6', name: 'Summary and Theme', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'eng-bh-ch6-t2', chapterId: 'eng-bh-ch6', name: 'Key Vocabulary', importance: 7, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bh-ch6-t3', chapterId: 'eng-bh-ch6', name: 'Questions and Answers', importance: 8, difficulty: 4, estimatedMinutes: 20 },
  ],
  'eng-bh-ch7': [
    { id: 'eng-bh-ch7-t1', chapterId: 'eng-bh-ch7', name: 'Summary and Theme', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'eng-bh-ch7-t2', chapterId: 'eng-bh-ch7', name: 'Key Vocabulary', importance: 7, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bh-ch7-t3', chapterId: 'eng-bh-ch7', name: 'Questions and Answers', importance: 8, difficulty: 4, estimatedMinutes: 20 },
  ],
  'eng-bh-ch8': [
    { id: 'eng-bh-ch8-t1', chapterId: 'eng-bh-ch8', name: 'Summary and Theme', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'eng-bh-ch8-t2', chapterId: 'eng-bh-ch8', name: 'Key Vocabulary', importance: 7, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bh-ch8-t3', chapterId: 'eng-bh-ch8', name: 'Questions and Answers', importance: 8, difficulty: 4, estimatedMinutes: 20 },
  ],
  'eng-bh-ch9': [
    { id: 'eng-bh-ch9-t1', chapterId: 'eng-bh-ch9', name: 'Summary and Theme', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'eng-bh-ch9-t2', chapterId: 'eng-bh-ch9', name: 'Key Vocabulary', importance: 7, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bh-ch9-t3', chapterId: 'eng-bh-ch9', name: 'Questions and Answers', importance: 8, difficulty: 4, estimatedMinutes: 20 },
  ],
  'eng-bh-ch10': [
    { id: 'eng-bh-ch10-t1', chapterId: 'eng-bh-ch10', name: 'Summary and Theme', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'eng-bh-ch10-t2', chapterId: 'eng-bh-ch10', name: 'Key Vocabulary', importance: 7, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bh-ch10-t3', chapterId: 'eng-bh-ch10', name: 'Questions and Answers', importance: 8, difficulty: 4, estimatedMinutes: 20 },
  ],
  'eng-bh-ch11': [
    { id: 'eng-bh-ch11-t1', chapterId: 'eng-bh-ch11', name: 'Summary and Theme', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'eng-bh-ch11-t2', chapterId: 'eng-bh-ch11', name: 'Key Vocabulary', importance: 7, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bh-ch11-t3', chapterId: 'eng-bh-ch11', name: 'Questions and Answers', importance: 8, difficulty: 4, estimatedMinutes: 20 },
  ],
  // Poetry topics (all follow same pattern)
  'eng-bp-ch1': [
    { id: 'eng-bp-ch1-t1', chapterId: 'eng-bp-ch1', name: 'Poem Summary', importance: 8, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bp-ch1-t2', chapterId: 'eng-bp-ch1', name: 'Literary Devices', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'eng-bp-ch2': [
    { id: 'eng-bp-ch2-t1', chapterId: 'eng-bp-ch2', name: 'Poem Summary', importance: 8, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bp-ch2-t2', chapterId: 'eng-bp-ch2', name: 'Literary Devices', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'eng-bp-ch3': [
    { id: 'eng-bp-ch3-t1', chapterId: 'eng-bp-ch3', name: 'Poem Summary', importance: 8, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bp-ch3-t2', chapterId: 'eng-bp-ch3', name: 'Literary Devices', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'eng-bp-ch4': [
    { id: 'eng-bp-ch4-t1', chapterId: 'eng-bp-ch4', name: 'Poem Summary', importance: 8, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bp-ch4-t2', chapterId: 'eng-bp-ch4', name: 'Literary Devices', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'eng-bp-ch5': [
    { id: 'eng-bp-ch5-t1', chapterId: 'eng-bp-ch5', name: 'Poem Summary', importance: 8, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bp-ch5-t2', chapterId: 'eng-bp-ch5', name: 'Literary Devices', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'eng-bp-ch6': [
    { id: 'eng-bp-ch6-t1', chapterId: 'eng-bp-ch6', name: 'Poem Summary', importance: 8, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bp-ch6-t2', chapterId: 'eng-bp-ch6', name: 'Literary Devices', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'eng-bp-ch7': [
    { id: 'eng-bp-ch7-t1', chapterId: 'eng-bp-ch7', name: 'Poem Summary', importance: 8, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bp-ch7-t2', chapterId: 'eng-bp-ch7', name: 'Literary Devices', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'eng-bp-ch8': [
    { id: 'eng-bp-ch8-t1', chapterId: 'eng-bp-ch8', name: 'Poem Summary', importance: 8, difficulty: 3, estimatedMinutes: 15 },
    { id: 'eng-bp-ch8-t2', chapterId: 'eng-bp-ch8', name: 'Literary Devices', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
};
