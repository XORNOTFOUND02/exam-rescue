// ============================================================
// Exam Rescue — Class 10 English Syllabus (CBSE/NCERT)
// ============================================================

import { Chapter, Topic, Subject } from '@/types';

export const englishSubject: Subject = {
  id: 'english',
  classLevelId: 10,
  name: 'English',
  icon: '📖',
  color: '#ec4899',
};

export const englishChapters: Chapter[] = [
  // First Flight (Prose)
  {
    id: 'eng-ff-ch1',
    subjectId: 'english',
    chapterNumber: 1,
    name: 'A Letter to God',
    description: 'Lencho\'s faith and the postal system',
    topicCount: 3,
  },
  {
    id: 'eng-ff-ch2',
    subjectId: 'english',
    chapterNumber: 2,
    name: 'Nelson Mandela: Long Walk to Freedom',
    description: 'Autobiography excerpt, apartheid, struggle for freedom',
    topicCount: 3,
  },
  {
    id: 'eng-ff-ch3',
    subjectId: 'english',
    chapterNumber: 3,
    name: 'Two Stories about Flying',
    description: 'His First Flight and Black Aeroplane',
    topicCount: 3,
  },
  {
    id: 'eng-ff-ch4',
    subjectId: 'english',
    chapterNumber: 4,
    name: 'From the Diary of Anne Frank',
    description: 'Diary writing, Anne\'s life in hiding',
    topicCount: 3,
  },
  {
    id: 'eng-ff-ch5',
    subjectId: 'english',
    chapterNumber: 5,
    name: 'The Hundred Dresses - I',
    description: 'Social discrimination, bullying, empathy',
    topicCount: 3,
  },
  {
    id: 'eng-ff-ch6',
    subjectId: 'english',
    chapterNumber: 6,
    name: 'The Hundred Dresses - II',
    description: 'Guilt, realization, and the aftermath',
    topicCount: 3,
  },
  {
    id: 'eng-ff-ch7',
    subjectId: 'english',
    chapterNumber: 7,
    name: 'Glimpses of India',
    description: 'Coorg, Kerala, Tea from Assam, Panchampuduram',
    topicCount: 3,
  },
  {
    id: 'eng-ff-ch8',
    subjectId: 'english',
    chapterNumber: 8,
    name: 'Mijbil the Otter',
    description: 'Maxwell\'s pet otter, animal friendship',
    topicCount: 3,
  },
  {
    id: 'eng-ff-ch9',
    subjectId: 'english',
    chapterNumber: 9,
    name: 'Madam Rides the Bus',
    description: 'Valliamai\'s bus journey, independence',
    topicCount: 3,
  },
  {
    id: 'eng-ff-ch10',
    subjectId: 'english',
    chapterNumber: 10,
    name: 'The Sermon at Benares',
    description: 'Buddha\'s sermon on grief and loss',
    topicCount: 3,
  },
  {
    id: 'eng-ff-ch11',
    subjectId: 'english',
    chapterNumber: 11,
    name: 'The Proposal',
    description: 'Chubukov\'s daughter, marriage proposal comedy',
    topicCount: 3,
  },
  // First Flight (Poetry)
  {
    id: 'eng-fp-ch1',
    subjectId: 'english',
    chapterNumber: 12,
    name: 'Dust of Snow / Fire and Ice',
    description: 'Nature poetry, symbolism',
    topicCount: 3,
  },
  {
    id: 'eng-fp-ch2',
    subjectId: 'english',
    chapterNumber: 13,
    name: 'A Tiger in the Zoo',
    description: 'Contrast between zoo and wild',
    topicCount: 3,
  },
  {
    id: 'eng-fp-ch3',
    subjectId: 'english',
    chapterNumber: 14,
    name: 'How to Tell Wild Animals / The Ball Poem',
    description: 'Humorous and reflective poetry',
    topicCount: 3,
  },
  {
    id: 'eng-fp-ch4',
    subjectId: 'english',
    chapterNumber: 15,
    name: 'Amanda / Animals',
    description: 'Escapism and comparison with animals',
    topicCount: 3,
  },
  {
    id: 'eng-fp-ch5',
    subjectId: 'english',
    chapterNumber: 16,
    name: 'The Ball Poem / For Anne Gregory',
    description: 'Loss, identity, and self-realization',
    topicCount: 3,
  },
];

export const englishTopics: Record<string, Topic[]> = {
  'eng-ff-ch1': [
    { id: 'eng-ff-ch1-t1', chapterId: 'eng-ff-ch1', name: 'Plot Summary and Characters', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-ff-ch1-t2', chapterId: 'eng-ff-ch1', name: 'Themes — Faith, Trust, and Human Nature', importance: 7, difficulty: 4, estimatedMinutes: 30, isHighYield: true },
    { id: 'eng-ff-ch1-t3', chapterId: 'eng-ff-ch1', name: 'Important Questions and Answers', importance: 7, difficulty: 4, estimatedMinutes: 30 },
  ],
  'eng-ff-ch2': [
    { id: 'eng-ff-ch2-t1', chapterId: 'eng-ff-ch2', name: 'Key Events and Details', importance: 7, difficulty: 4, estimatedMinutes: 30 },
    { id: 'eng-ff-ch2-t2', chapterId: 'eng-ff-ch2', name: 'Themes — Freedom, Struggle, Leadership', importance: 8, difficulty: 5, estimatedMinutes: 35, isHighYield: true },
    { id: 'eng-ff-ch2-t3', chapterId: 'eng-ff-ch2', name: 'Important Questions and Answers', importance: 7, difficulty: 4, estimatedMinutes: 30 },
  ],
  'eng-ff-ch3': [
    { id: 'eng-ff-ch3-t1', chapterId: 'eng-ff-ch3', name: 'His First Flight — Summary', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-ff-ch3-t2', chapterId: 'eng-ff-ch3', name: 'Black Aeroplane — Summary', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-ff-ch3-t3', chapterId: 'eng-ff-ch3', name: 'Themes — Courage, Independence, Mystery', importance: 7, difficulty: 4, estimatedMinutes: 30 },
  ],
  'eng-ff-ch4': [
    { id: 'eng-ff-ch4-t1', chapterId: 'eng-ff-ch4', name: 'Summary and Anne\'s World', importance: 7, difficulty: 4, estimatedMinutes: 30 },
    { id: 'eng-ff-ch4-t2', chapterId: 'eng-ff-ch4', name: 'Themes — Adolescence, Identity, Hope', importance: 7, difficulty: 4, estimatedMinutes: 30, isHighYield: true },
    { id: 'eng-ff-ch4-t3', chapterId: 'eng-ff-ch4', name: 'Important Questions and Answers', importance: 7, difficulty: 4, estimatedMinutes: 30 },
  ],
  'eng-ff-ch5': [
    { id: 'eng-ff-ch5-t1', chapterId: 'eng-ff-ch5', name: 'Plot and Characters', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-ff-ch5-t2', chapterId: 'eng-ff-ch5', name: 'Themes — Discrimination, Empathy, Regret', importance: 7, difficulty: 4, estimatedMinutes: 30, isHighYield: true },
    { id: 'eng-ff-ch5-t3', chapterId: 'eng-ff-ch5', name: 'Important Questions and Answers', importance: 7, difficulty: 4, estimatedMinutes: 30 },
  ],
  'eng-ff-ch6': [
    { id: 'eng-ff-ch6-t1', chapterId: 'eng-ff-ch6', name: 'Summary and Resolution', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-ff-ch6-t2', chapterId: 'eng-ff-ch6', name: 'Themes — Guilt, Realization, Social Class', importance: 7, difficulty: 4, estimatedMinutes: 30 },
    { id: 'eng-ff-ch6-t3', chapterId: 'eng-ff-ch6', name: 'Important Questions and Answers', importance: 6, difficulty: 4, estimatedMinutes: 25 },
  ],
  'eng-ff-ch7': [
    { id: 'eng-ff-ch7-t1', chapterId: 'eng-ff-ch7', name: 'Coorg — Description and Culture', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-ff-ch7-t2', chapterId: 'eng-ff-ch7', name: 'Tea from Assam and Kerala', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-ff-ch7-t3', chapterId: 'eng-ff-ch7', name: 'Important Questions and Answers', importance: 6, difficulty: 3, estimatedMinutes: 25 },
  ],
  'eng-ff-ch8': [
    { id: 'eng-ff-ch8-t1', chapterId: 'eng-ff-ch8', name: 'Summary and Key Events', importance: 5, difficulty: 3, estimatedMinutes: 20 },
    { id: 'eng-ff-ch8-t2', chapterId: 'eng-ff-ch8', name: 'Themes — Companionship, Adaptation', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-ff-ch8-t3', chapterId: 'eng-ff-ch8', name: 'Important Questions and Answers', importance: 6, difficulty: 3, estimatedMinutes: 25 },
  ],
  'eng-ff-ch9': [
    { id: 'eng-ff-ch9-t1', chapterId: 'eng-ff-ch9', name: 'Summary and Characters', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-ff-ch9-t2', chapterId: 'eng-ff-ch9', name: 'Themes — Independence, Curiosity, Adventure', importance: 7, difficulty: 4, estimatedMinutes: 30, isHighYield: true },
    { id: 'eng-ff-ch9-t3', chapterId: 'eng-ff-ch9', name: 'Important Questions and Answers', importance: 6, difficulty: 4, estimatedMinutes: 25 },
  ],
  'eng-ff-ch10': [
    { id: 'eng-ff-ch10-t1', chapterId: 'eng-ff-ch10', name: 'Summary and the Sermon', importance: 7, difficulty: 4, estimatedMinutes: 30 },
    { id: 'eng-ff-ch10-t2', chapterId: 'eng-ff-ch10', name: 'Themes — Loss, Acceptance, Philosophy', importance: 8, difficulty: 5, estimatedMinutes: 35, isHighYield: true },
    { id: 'eng-ff-ch10-t3', chapterId: 'eng-ff-ch10', name: 'Important Questions and Answers', importance: 7, difficulty: 4, estimatedMinutes: 30 },
  ],
  'eng-ff-ch11': [
    { id: 'eng-ff-ch11-t1', chapterId: 'eng-ff-ch11', name: 'Summary and Characters', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-ff-ch11-t2', chapterId: 'eng-ff-ch11', name: 'Themes — Misunderstanding, Comedy, Pride', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-ff-ch11-t3', chapterId: 'eng-ff-ch11', name: 'Important Questions and Answers', importance: 6, difficulty: 3, estimatedMinutes: 25 },
  ],
  'eng-fp-ch1': [
    { id: 'eng-fp-ch1-t1', chapterId: 'eng-fp-ch1', name: 'Dust of Snow — Summary and Imagery', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-fp-ch1-t2', chapterId: 'eng-fp-ch1', name: 'Fire and Ice — Summary and Symbolism', importance: 7, difficulty: 4, estimatedMinutes: 25, isHighYield: true },
    { id: 'eng-fp-ch1-t3', chapterId: 'eng-fp-ch1', name: 'Important Questions and Literary Devices', importance: 7, difficulty: 4, estimatedMinutes: 30 },
  ],
  'eng-fp-ch2': [
    { id: 'eng-fp-ch2-t1', chapterId: 'eng-fp-ch2', name: 'A Tiger in the Zoo — Summary', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-fp-ch2-t2', chapterId: 'eng-fp-ch2', name: 'Themes — Freedom vs Captivity', importance: 7, difficulty: 4, estimatedMinutes: 30, isHighYield: true },
    { id: 'eng-fp-ch2-t3', chapterId: 'eng-fp-ch2', name: 'Important Questions and Literary Devices', importance: 7, difficulty: 4, estimatedMinutes: 25 },
  ],
  'eng-fp-ch3': [
    { id: 'eng-fp-ch3-t1', chapterId: 'eng-fp-ch3', name: 'How to Tell Wild Animals — Summary', importance: 5, difficulty: 3, estimatedMinutes: 20 },
    { id: 'eng-fp-ch3-t2', chapterId: 'eng-fp-ch3', name: 'The Ball Poem — Summary and Themes', importance: 7, difficulty: 4, estimatedMinutes: 30, isHighYield: true },
    { id: 'eng-fp-ch3-t3', chapterId: 'eng-fp-ch3', name: 'Important Questions and Literary Devices', importance: 6, difficulty: 4, estimatedMinutes: 25 },
  ],
  'eng-fp-ch4': [
    { id: 'eng-fp-ch4-t1', chapterId: 'eng-fp-ch4', name: 'Amanda — Summary and Escape Themes', importance: 7, difficulty: 4, estimatedMinutes: 25, isHighYield: true },
    { id: 'eng-fp-ch4-t2', chapterId: 'eng-fp-ch4', name: 'Animals — Summary and Comparison', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-fp-ch4-t3', chapterId: 'eng-fp-ch4', name: 'Important Questions and Literary Devices', importance: 6, difficulty: 4, estimatedMinutes: 25 },
  ],
  'eng-fp-ch5': [
    { id: 'eng-fp-ch5-t1', chapterId: 'eng-fp-ch5', name: 'The Ball Poem — Summary', importance: 6, difficulty: 3, estimatedMinutes: 25 },
    { id: 'eng-fp-ch5-t2', chapterId: 'eng-fp-ch5', name: 'For Anne Gregory — Summary and Theme', importance: 6, difficulty: 4, estimatedMinutes: 25 },
    { id: 'eng-fp-ch5-t3', chapterId: 'eng-fp-ch5', name: 'Important Questions and Literary Devices', importance: 6, difficulty: 4, estimatedMinutes: 25 },
  ],
};
