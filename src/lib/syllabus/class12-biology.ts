// ============================================================
// Exam Rescue — Class 12 Biology Syllabus (NCERT)
// ============================================================

import { Subject, Chapter, Topic } from '@/types';

export const biologySubject: Subject = {
  id: 'biology',
  classLevelId: 12,
  name: 'Biology',
  icon: '🧬',
  color: '#06b6d4',
};

export const biologyChapters: Chapter[] = [
  { id: 'bio-ch1', subjectId: 'biology', chapterNumber: 1, name: 'Reproduction in Organisms', description: 'Asexual and sexual reproduction', topicCount: 3 },
  { id: 'bio-ch2', subjectId: 'biology', chapterNumber: 2, name: 'Sexual Reproduction in Flowering Plants', description: 'Flower structure, pollination, fertilisation', topicCount: 4 },
  { id: 'bio-ch3', subjectId: 'biology', chapterNumber: 3, name: 'Human Reproduction', description: 'Reproductive system, gametogenesis', topicCount: 4 },
  { id: 'bio-ch4', subjectId: 'biology', chapterNumber: 4, name: 'Reproductive Health', description: 'Population, STDs, contraception, MTP', topicCount: 3 },
  { id: 'bio-ch5', subjectId: 'biology', chapterNumber: 5, name: 'Principles of Inheritance', description: 'Mendelism, linkage, crossing over', topicCount: 4 },
  { id: 'bio-ch6', subjectId: 'biology', chapterNumber: 6, name: 'Molecular Basis of Inheritance', description: 'DNA structure, replication, transcription, translation', topicCount: 4 },
  { id: 'bio-ch7', subjectId: 'biology', chapterNumber: 7, name: 'Evolution', description: 'Origin of life, evidence, Hardy-Weinberg', topicCount: 4 },
  { id: 'bio-ch8', subjectId: 'biology', chapterNumber: 8, name: 'Human Health and Disease', description: 'Immunity, AIDS, cancer', topicCount: 4 },
  { id: 'bio-ch9', subjectId: 'biology', chapterNumber: 9, name: 'Strategies for Enhancement in Food Production', description: 'Animal husbandry, plant breeding, tissue culture', topicCount: 3 },
  { id: 'bio-ch10', subjectId: 'biology', chapterNumber: 10, name: 'Microbes in Human Welfare', description: 'Microbes in industry, sewage, biogas', topicCount: 3 },
  { id: 'bio-ch11', subjectId: 'biology', chapterNumber: 11, name: 'Biotechnology: Principles and Processes', description: 'Genetic engineering tools, PCR, gel electrophoresis', topicCount: 4 },
  { id: 'bio-ch12', subjectId: 'biology', chapterNumber: 12, name: 'Biotechnology and Its Applications', description: 'Bt crops, gene therapy, molecular diagnosis', topicCount: 3 },
  { id: 'bio-ch13', subjectId: 'biology', chapterNumber: 13, name: 'Organisms and Populations', description: 'Adaptations, interactions, population growth', topicCount: 4 },
  { id: 'bio-ch14', subjectId: 'biology', chapterNumber: 14, name: 'Ecosystem', description: 'Energy flow, nutrient cycling, services', topicCount: 4 },
  { id: 'bio-ch15', subjectId: 'biology', chapterNumber: 15, name: 'Biodiversity and Conservation', description: 'Patterns,热点 areas, strategies', topicCount: 3 },
  { id: 'bio-ch16', subjectId: 'biology', chapterNumber: 16, name: 'Environmental Issues', description: 'Pollution, global warming, ozone depletion', topicCount: 3 },
];

export const biologyTopics: Record<string, Topic[]> = {
  'bio-ch1': [
    { id: 'bio-ch1-t1', chapterId: 'bio-ch1', name: 'Asexual Reproduction', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'bio-ch1-t2', chapterId: 'bio-ch1', name: 'Sexual Reproduction', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch1-t3', chapterId: 'bio-ch1', name: 'Events in Sexual Reproduction', importance: 9, difficulty: 5, estimatedMinutes: 25 },
  ],
  'bio-ch2': [
    { id: 'bio-ch2-t1', chapterId: 'bio-ch2', name: 'Flower Structure', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch2-t2', chapterId: 'bio-ch2', name: 'Pollination', importance: 9, difficulty: 5, estimatedMinutes: 25 },
    { id: 'bio-ch2-t3', chapterId: 'bio-ch2', name: 'Double Fertilisation', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch2-t4', chapterId: 'bio-ch2', name: 'Seed and Fruit Formation', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'bio-ch3': [
    { id: 'bio-ch3-t1', chapterId: 'bio-ch3', name: 'Male Reproductive System', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch3-t2', chapterId: 'bio-ch3', name: 'Female Reproductive System', importance: 9, difficulty: 5, estimatedMinutes: 25 },
    { id: 'bio-ch3-t3', chapterId: 'bio-ch3', name: 'Gametogenesis', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch3-t4', chapterId: 'bio-ch3', name: 'Menstrual Cycle', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'bio-ch4': [
    { id: 'bio-ch4-t1', chapterId: 'bio-ch4', name: 'Reproductive Health', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'bio-ch4-t2', chapterId: 'bio-ch4', name: 'Population Explosion', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'bio-ch4-t3', chapterId: 'bio-ch4', name: 'Contraception Methods', importance: 9, difficulty: 5, estimatedMinutes: 25 },
  ],
  'bio-ch5': [
    { id: 'bio-ch5-t1', chapterId: 'bio-ch5', name: 'Mendel\'s Laws', importance: 10, difficulty: 5, estimatedMinutes: 25 },
    { id: 'bio-ch5-t2', chapterId: 'bio-ch5', name: 'Inheritance Patterns', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch5-t3', chapterId: 'bio-ch5', name: 'Linkage and Crossing Over', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'bio-ch5-t4', chapterId: 'bio-ch5', name: 'Sex Determination', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'bio-ch6': [
    { id: 'bio-ch6-t1', chapterId: 'bio-ch6', name: 'DNA Structure', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch6-t2', chapterId: 'bio-ch6', name: 'DNA Replication', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'bio-ch6-t3', chapterId: 'bio-ch6', name: 'Transcription', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'bio-ch6-t4', chapterId: 'bio-ch6', name: 'Translation', importance: 10, difficulty: 7, estimatedMinutes: 30 },
  ],
  'bio-ch7': [
    { id: 'bio-ch7-t1', chapterId: 'bio-ch7', name: 'Origin of Life', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch7-t2', chapterId: 'bio-ch7', name: 'Evidence for Evolution', importance: 9, difficulty: 5, estimatedMinutes: 25 },
    { id: 'bio-ch7-t3', chapterId: 'bio-ch7', name: 'Hardy-Weinberg Principle', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch7-t4', chapterId: 'bio-ch7', name: 'Mechanisms of Evolution', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'bio-ch8': [
    { id: 'bio-ch8-t1', chapterId: 'bio-ch8', name: 'Immunity', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch8-t2', chapterId: 'bio-ch8', name: 'AIDS', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch8-t3', chapterId: 'bio-ch8', name: 'Cancer', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch8-t4', chapterId: 'bio-ch8', name: 'Drug and Alcohol Abuse', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'bio-ch9': [
    { id: 'bio-ch9-t1', chapterId: 'bio-ch9', name: 'Animal Husbandry', importance: 7, difficulty: 4, estimatedMinutes: 15 },
    { id: 'bio-ch9-t2', chapterId: 'bio-ch9', name: 'Plant Breeding', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch9-t3', chapterId: 'bio-ch9', name: 'Tissue Culture', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'bio-ch10': [
    { id: 'bio-ch10-t1', chapterId: 'bio-ch10', name: 'Microbes in Industry', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'bio-ch10-t2', chapterId: 'bio-ch10', name: 'Microbes in Environment', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'bio-ch10-t3', chapterId: 'bio-ch10', name: 'Microbes in Sewage Treatment', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'bio-ch11': [
    { id: 'bio-ch11-t1', chapterId: 'bio-ch11', name: 'Genetic Engineering Tools', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch11-t2', chapterId: 'bio-ch11', name: 'PCR and Gel Electrophoresis', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'bio-ch11-t3', chapterId: 'bio-ch11', name: 'Cloning Vectors', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch11-t4', chapterId: 'bio-ch11', name: 'Recombinant DNA Technology', importance: 10, difficulty: 7, estimatedMinutes: 30 },
  ],
  'bio-ch12': [
    { id: 'bio-ch12-t1', chapterId: 'bio-ch12', name: 'Bt Crops', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch12-t2', chapterId: 'bio-ch12', name: 'Gene Therapy', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch12-t3', chapterId: 'bio-ch12', name: 'Molecular Diagnosis', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'bio-ch13': [
    { id: 'bio-ch13-t1', chapterId: 'bio-ch13', name: 'Organism and Environment', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch13-t2', chapterId: 'bio-ch13', name: 'Population Interactions', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch13-t3', chapterId: 'bio-ch13', name: 'Population Growth Models', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'bio-ch13-t4', chapterId: 'bio-ch13', name: 'Ecological Adaptations', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'bio-ch14': [
    { id: 'bio-ch14-t1', chapterId: 'bio-ch14', name: 'Energy Flow', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch14-t2', chapterId: 'bio-ch14', name: 'Nutrient Cycling', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch14-t3', chapterId: 'bio-ch14', name: 'Ecological Succession', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'bio-ch14-t4', chapterId: 'bio-ch14', name: 'Ecosystem Services', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'bio-ch15': [
    { id: 'bio-ch15-t1', chapterId: 'bio-ch15', name: 'Biodiversity Patterns', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch15-t2', chapterId: 'bio-ch15', name: 'Biodiversity Loss', importance: 9, difficulty: 5, estimatedMinutes: 25 },
    { id: 'bio-ch15-t3', chapterId: 'bio-ch15', name: 'Conservation Strategies', importance: 9, difficulty: 5, estimatedMinutes: 25 },
  ],
  'bio-ch16': [
    { id: 'bio-ch16-t1', chapterId: 'bio-ch16', name: 'Air and Water Pollution', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'bio-ch16-t2', chapterId: 'bio-ch16', name: 'Global Warming', importance: 9, difficulty: 5, estimatedMinutes: 25 },
    { id: 'bio-ch16-t3', chapterId: 'bio-ch16', name: 'Ozone Depletion', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
};
