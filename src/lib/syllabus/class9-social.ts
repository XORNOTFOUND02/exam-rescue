// ============================================================
// Exam Rescue — Class 9 Social Science Syllabus (NCERT)
// ============================================================

import { Subject, Chapter, Topic } from '@/types';

export const socialSubject: Subject = {
  id: 'social_science',
  classLevelId: 9,
  name: 'Social Science',
  icon: '🌍',
  color: '#f59e0b',
};

export const socialChapters: Chapter[] = [
  // History
  { id: 'ss-hist-ch1', subjectId: 'social_science', chapterNumber: 1, name: 'The French Revolution', description: 'Causes, course, and impact of the French Revolution', topicCount: 4 },
  { id: 'ss-hist-ch2', subjectId: 'social_science', chapterNumber: 2, name: 'Socialism in Europe and the Russian Revolution', description: 'Rise of socialism, Russian Revolution', topicCount: 4 },
  { id: 'ss-hist-ch3', subjectId: 'social_science', chapterNumber: 3, name: 'Nazism and the Rise of Hitler', description: 'Nazism, Hitler\'s rise, Holocaust', topicCount: 4 },
  { id: 'ss-hist-ch4', subjectId: 'social_science', chapterNumber: 4, name: 'Forest Society and Colonialism', description: 'Impact of colonialism on forests', topicCount: 3 },
  { id: 'ss-hist-ch5', subjectId: 'social_science', chapterNumber: 5, name: 'Pastoralists in the Modern World', description: 'Pastoralism and colonial impact', topicCount: 3 },
  // Geography
  { id: 'ss-geo-ch1', subjectId: 'social_science', chapterNumber: 6, name: 'India - Size and Location', description: 'India\'s size, location, and neighbours', topicCount: 3 },
  { id: 'ss-geo-ch2', subjectId: 'social_science', chapterNumber: 7, name: 'Physical Features of India', description: 'Mountain ranges, plateaus, plains', topicCount: 4 },
  { id: 'ss-geo-ch3', subjectId: 'social_science', chapterNumber: 8, name: 'Drainage', description: 'River systems, drainage patterns', topicCount: 4 },
  { id: 'ss-geo-ch4', subjectId: 'social_science', chapterNumber: 9, name: 'Climate', description: 'Climate of India, monsoon', topicCount: 4 },
  { id: 'ss-geo-ch5', subjectId: 'social_science', chapterNumber: 10, name: 'Natural Vegetation and Wild Life', description: 'Vegetation types, wildlife', topicCount: 3 },
  { id: 'ss-geo-ch6', subjectId: 'social_science', chapterNumber: 11, name: 'Population', description: 'Population distribution, density, growth', topicCount: 3 },
  // Civics
  { id: 'ss-ps-ch1', subjectId: 'social_science', chapterNumber: 12, name: 'What is Democracy? Why Democracy?', description: 'Features of democracy, alternatives', topicCount: 4 },
  { id: 'ss-ps-ch2', subjectId: 'social_science', chapterNumber: 13, name: 'Constitutional Design', description: 'Making of the Indian Constitution', topicCount: 4 },
  { id: 'ss-ps-ch3', subjectId: 'social_science', chapterNumber: 14, name: 'Electoral Politics in Democracy', description: 'Elections, voting, political parties', topicCount: 4 },
  { id: 'ss-ps-ch4', subjectId: 'social_science', chapterNumber: 15, name: 'Working of Institutions', description: 'Parliament, judiciary, executive', topicCount: 4 },
  { id: 'ss-ps-ch5', subjectId: 'social_science', chapterNumber: 16, name: 'Democratic Rights', description: 'Fundamental rights, Right to Equality', topicCount: 4 },
];

export const socialTopics: Record<string, Topic[]> = {
  'ss-hist-ch1': [
    { id: 'ss-hist-ch1-t1', chapterId: 'ss-hist-ch1', name: 'French Society in 1780s', importance: 8, difficulty: 5, estimatedMinutes: 25 },
    { id: 'ss-hist-ch1-t2', chapterId: 'ss-hist-ch1', name: 'Outbreak of Revolution', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-hist-ch1-t3', chapterId: 'ss-hist-ch1', name: 'France Becomes a Republic', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-hist-ch1-t4', chapterId: 'ss-hist-ch1', name: 'Legacy of the French Revolution', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'ss-hist-ch2': [
    { id: 'ss-hist-ch2-t1', chapterId: 'ss-hist-ch2', name: 'Rise of Socialism', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-hist-ch2-t2', chapterId: 'ss-hist-ch2', name: 'Russian Revolution', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'ss-hist-ch2-t3', chapterId: 'ss-hist-ch2', name: 'Stalin\'s Rule', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-hist-ch2-t4', chapterId: 'ss-hist-ch2', name: 'Impact on World', importance: 7, difficulty: 5, estimatedMinutes: 20 },
  ],
  'ss-hist-ch3': [
    { id: 'ss-hist-ch3-t1', chapterId: 'ss-hist-ch3', name: 'Rise of Nazism', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-hist-ch3-t2', chapterId: 'ss-hist-ch3', name: 'Hitler\'s Rise to Power', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-hist-ch3-t3', chapterId: 'ss-hist-ch3', name: 'Nazi Germany', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'ss-hist-ch3-t4', chapterId: 'ss-hist-ch3', name: 'Holocaust', importance: 10, difficulty: 6, estimatedMinutes: 25 },
  ],
  'ss-hist-ch4': [
    { id: 'ss-hist-ch4-t1', chapterId: 'ss-hist-ch4', name: 'Forests and Communities', importance: 7, difficulty: 5, estimatedMinutes: 20 },
    { id: 'ss-hist-ch4-t2', chapterId: 'ss-hist-ch4', name: 'Colonial Forest Policies', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-hist-ch4-t3', chapterId: 'ss-hist-ch4', name: 'Impact on Forest People', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'ss-hist-ch5': [
    { id: 'ss-hist-ch5-t1', chapterId: 'ss-hist-ch5', name: 'Pastoral Life', importance: 7, difficulty: 4, estimatedMinutes: 20 },
    { id: 'ss-hist-ch5-t2', chapterId: 'ss-hist-ch5', name: 'Colonial Impact', importance: 7, difficulty: 5, estimatedMinutes: 20 },
    { id: 'ss-hist-ch5-t3', chapterId: 'ss-hist-ch5', name: 'Pastoralism Today', importance: 6, difficulty: 4, estimatedMinutes: 15 },
  ],
  'ss-geo-ch1': [
    { id: 'ss-geo-ch1-t1', chapterId: 'ss-geo-ch1', name: 'India\'s Size', importance: 7, difficulty: 3, estimatedMinutes: 15 },
    { id: 'ss-geo-ch1-t2', chapterId: 'ss-geo-ch1', name: 'India\'s Location', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'ss-geo-ch1-t3', chapterId: 'ss-geo-ch1', name: 'India\'s Neighbours', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'ss-geo-ch2': [
    { id: 'ss-geo-ch2-t1', chapterId: 'ss-geo-ch2', name: 'Mountain Ranges', importance: 8, difficulty: 5, estimatedMinutes: 25 },
    { id: 'ss-geo-ch2-t2', chapterId: 'ss-geo-ch2', name: 'Northern Plains', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'ss-geo-ch2-t3', chapterId: 'ss-geo-ch2', name: 'Peninsular Plateau', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-geo-ch2-t4', chapterId: 'ss-geo-ch2', name: 'Coastal Plains and Islands', importance: 7, difficulty: 4, estimatedMinutes: 20 },
  ],
  'ss-geo-ch3': [
    { id: 'ss-geo-ch3-t1', chapterId: 'ss-geo-ch3', name: 'River Systems', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-geo-ch3-t2', chapterId: 'ss-geo-ch3', name: 'Drainage Patterns', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-geo-ch3-t3', chapterId: 'ss-geo-ch3', name: 'Major Rivers', importance: 9, difficulty: 5, estimatedMinutes: 25 },
    { id: 'ss-geo-ch3-t4', chapterId: 'ss-geo-ch3', name: 'River Basins', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'ss-geo-ch4': [
    { id: 'ss-geo-ch4-t1', chapterId: 'ss-geo-ch4', name: 'Climate of India', importance: 9, difficulty: 7, estimatedMinutes: 30 },
    { id: 'ss-geo-ch4-t2', chapterId: 'ss-geo-ch4', name: 'Monsoon', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'ss-geo-ch4-t3', chapterId: 'ss-geo-ch4', name: 'Seasons', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'ss-geo-ch4-t4', chapterId: 'ss-geo-ch4', name: 'Distribution of Rainfall', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'ss-geo-ch5': [
    { id: 'ss-geo-ch5-t1', chapterId: 'ss-geo-ch5', name: 'Vegetation Types', importance: 8, difficulty: 5, estimatedMinutes: 25 },
    { id: 'ss-geo-ch5-t2', chapterId: 'ss-geo-ch5', name: 'Wildlife', importance: 7, difficulty: 4, estimatedMinutes: 20 },
    { id: 'ss-geo-ch5-t3', chapterId: 'ss-geo-ch5', name: 'Conservation', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'ss-geo-ch6': [
    { id: 'ss-geo-ch6-t1', chapterId: 'ss-geo-ch6', name: 'Population Distribution', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'ss-geo-ch6-t2', chapterId: 'ss-geo-ch6', name: 'Population Density', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'ss-geo-ch6-t3', chapterId: 'ss-geo-ch6', name: 'Population Growth', importance: 8, difficulty: 6, estimatedMinutes: 25 },
  ],
  'ss-ps-ch1': [
    { id: 'ss-ps-ch1-t1', chapterId: 'ss-ps-ch1', name: 'What is Democracy?', importance: 9, difficulty: 5, estimatedMinutes: 25 },
    { id: 'ss-ps-ch1-t2', chapterId: 'ss-ps-ch1', name: 'Features of Democracy', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-ps-ch1-t3', chapterId: 'ss-ps-ch1', name: 'Why Democracy?', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'ss-ps-ch1-t4', chapterId: 'ss-ps-ch1', name: 'Democratic Alternatives', importance: 7, difficulty: 5, estimatedMinutes: 20 },
  ],
  'ss-ps-ch2': [
    { id: 'ss-ps-ch2-t1', chapterId: 'ss-ps-ch2', name: 'Making of the Constitution', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-ps-ch2-t2', chapterId: 'ss-ps-ch2', name: 'Constituent Assembly', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-ps-ch2-t3', chapterId: 'ss-ps-ch2', name: 'Philosophy of the Constitution', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-ps-ch2-t4', chapterId: 'ss-ps-ch2', name: 'Key Features', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'ss-ps-ch3': [
    { id: 'ss-ps-ch3-t1', chapterId: 'ss-ps-ch3', name: 'Elections in India', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-ps-ch3-t2', chapterId: 'ss-ps-ch3', name: 'Voting System', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'ss-ps-ch3-t3', chapterId: 'ss-ps-ch3', name: 'Political Parties', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-ps-ch3-t4', chapterId: 'ss-ps-ch3', name: 'Election Commission', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'ss-ps-ch4': [
    { id: 'ss-ps-ch4-t1', chapterId: 'ss-ps-ch4', name: 'Parliament', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-ps-ch4-t2', chapterId: 'ss-ps-ch4', name: 'Executive', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-ps-ch4-t3', chapterId: 'ss-ps-ch4', name: 'Judiciary', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-ps-ch4-t4', chapterId: 'ss-ps-ch4', name: 'Working of Institutions', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'ss-ps-ch5': [
    { id: 'ss-ps-ch5-t1', chapterId: 'ss-ps-ch5', name: 'Fundamental Rights', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-ps-ch5-t2', chapterId: 'ss-ps-ch5', name: 'Right to Equality', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-ps-ch5-t3', chapterId: 'ss-ps-ch5', name: 'Right to Freedom', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'ss-ps-ch5-t4', chapterId: 'ss-ps-ch5', name: 'Exploitation and Remedies', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
};
