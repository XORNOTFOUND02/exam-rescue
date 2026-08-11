// ============================================================
// Exam Rescue — Class 11 Biology Syllabus (NCERT)
// ============================================================

import { Subject, Chapter, Topic } from '@/types';

export const biologySubject: Subject = {
  id: 'biology',
  classLevelId: 11,
  name: 'Biology',
  icon: '🧬',
  color: '#06b6d4',
};

export const biologyChapters: Chapter[] = [
  { id: 'bio-ch1', subjectId: 'biology', chapterNumber: 1, name: 'The Living World', description: 'Diversity, taxonomic hierarchy', topicCount: 3 },
  { id: 'bio-ch2', subjectId: 'biology', chapterNumber: 2, name: 'Biological Classification', description: 'Five kingdom classification', topicCount: 4 },
  { id: 'bio-ch3', subjectId: 'biology', chapterNumber: 3, name: 'Plant Kingdom', description: 'Algae, bryophytes, pteridophytes, gymnosperms, angiosperms', topicCount: 4 },
  { id: 'bio-ch4', subjectId: 'biology', chapterNumber: 4, name: 'Animal Kingdom', description: 'Phylum classification of animals', topicCount: 4 },
  { id: 'bio-ch5', subjectId: 'biology', chapterNumber: 5, name: 'Morphology of Flowering Plants', description: 'Root, stem, leaf, flower morphology', topicCount: 4 },
  { id: 'bio-ch6', subjectId: 'biology', chapterNumber: 6, name: 'Anatomy of Flowering Plants', description: 'Tissue systems and organizations', topicCount: 3 },
  { id: 'bio-ch7', subjectId: 'biology', chapterNumber: 7, name: 'Structural Organisation in Animals', description: 'Earthfrog, cockroach anatomy', topicCount: 3 },
  { id: 'bio-ch8', subjectId: 'biology', chapterNumber: 8, name: 'Cell: The Unit of Life', description: 'Cell structure, prokaryotic vs eukaryotic', topicCount: 4 },
  { id: 'bio-ch9', subjectId: 'biology', chapterNumber: 9, name: 'Biomolecules', description: 'Carbohydrates, proteins, lipids, nucleic acids', topicCount: 4 },
  { id: 'bio-ch10', subjectId: 'biology', chapterNumber: 10, name: 'Cell Cycle and Cell Division', description: 'Mitosis, meiosis', topicCount: 4 },
  { id: 'bio-ch11', subjectId: 'biology', chapterNumber: 11, name: 'Transport in Plants', description: 'Water and mineral transport, phloem', topicCount: 4 },
  { id: 'bio-ch12', subjectId: 'biology', chapterNumber: 12, name: 'Mineral Nutrition', description: 'Essential minerals, deficiency symptoms', topicCount: 3 },
  { id: 'bio-ch13', subjectId: 'biology', chapterNumber: 13, name: 'Photosynthesis', description: 'Light and dark reactions, C3, C4, CAM', topicCount: 4 },
  { id: 'bio-ch14', subjectId: 'biology', chapterNumber: 14, name: 'Respiration in Plants', description: 'Glycolysis, Krebs cycle, ETC', topicCount: 4 },
  { id: 'bio-ch15', subjectId: 'biology', chapterNumber: 15, name: 'Plant Growth and Development', description: 'Growth regulators, tropisms', topicCount: 4 },
];

export const biologyTopics: Record<string, Topic[]> = {
  'bio-ch1': [
    { id: 'bio-ch1-t1', chapterId: 'bio-ch1', name: 'Diversity in Living Organisms', importance: 8, difficulty: 4, estimatedMinutes: 20 },
    { id: 'bio-ch1-t2', chapterId: 'bio-ch1', name: 'Taxonomic Categories', importance: 9, difficulty: 5, estimatedMinutes: 25 },
    { id: 'bio-ch1-t3', chapterId: 'bio-ch1', name: 'Taxonomic Aids', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'bio-ch2': [
    { id: 'bio-ch2-t1', chapterId: 'bio-ch2', name: 'Kingdom Monera', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch2-t2', chapterId: 'bio-ch2', name: 'Kingdom Protista', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch2-t3', chapterId: 'bio-ch2', name: 'Kingdom Fungi', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch2-t4', chapterId: 'bio-ch2', name: 'Virus and Viroids', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'bio-ch3': [
    { id: 'bio-ch3-t1', chapterId: 'bio-ch3', name: 'Algae', importance: 7, difficulty: 4, estimatedMinutes: 15 },
    { id: 'bio-ch3-t2', chapterId: 'bio-ch3', name: 'Bryophytes', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch3-t3', chapterId: 'bio-ch3', name: 'Pteridophytes', importance: 7, difficulty: 5, estimatedMinutes: 15 },
    { id: 'bio-ch3-t4', chapterId: 'bio-ch3', name: 'Gymnosperms and Angiosperms', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'bio-ch4': [
    { id: 'bio-ch4-t1', chapterId: 'bio-ch4', name: 'Porifera to Cnidaria', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch4-t2', chapterId: 'bio-ch4', name: 'Platyhelminthes to Nematoda', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch4-t3', chapterId: 'bio-ch4', name: 'Annelida to Mollusca', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch4-t4', chapterId: 'bio-ch4', name: 'Arthropoda to Chordata', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'bio-ch5': [
    { id: 'bio-ch5-t1', chapterId: 'bio-ch5', name: 'Root and Stem', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch5-t2', chapterId: 'bio-ch5', name: 'Leaf and Inflorescence', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch5-t3', chapterId: 'bio-ch5', name: 'Flower and Fruit', importance: 9, difficulty: 5, estimatedMinutes: 25 },
    { id: 'bio-ch5-t4', chapterId: 'bio-ch5', name: 'Seed and Seed Germination', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'bio-ch6': [
    { id: 'bio-ch6-t1', chapterId: 'bio-ch6', name: 'Tissue System', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch6-t2', chapterId: 'bio-ch6', name: 'Anatomy of Dicot and Monocot', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch6-t3', chapterId: 'bio-ch6', name: 'Secondary Growth', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'bio-ch7': [
    { id: 'bio-ch7-t1', chapterId: 'bio-ch7', name: 'Earthworm Anatomy', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch7-t2', chapterId: 'bio-ch7', name: 'Cockroach Anatomy', importance: 8, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch7-t3', chapterId: 'bio-ch7', name: 'Frog Anatomy', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'bio-ch8': [
    { id: 'bio-ch8-t1', chapterId: 'bio-ch8', name: 'Prokaryotic Cell', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch8-t2', chapterId: 'bio-ch8', name: 'Eukaryotic Cell', importance: 10, difficulty: 6, estimatedMinutes: 30 },
    { id: 'bio-ch8-t3', chapterId: 'bio-ch8', name: 'Cell Organelles', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'bio-ch8-t4', chapterId: 'bio-ch8', name: 'Cell Division', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'bio-ch9': [
    { id: 'bio-ch9-t1', chapterId: 'bio-ch9', name: 'Carbohydrates', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch9-t2', chapterId: 'bio-ch9', name: 'Proteins', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch9-t3', chapterId: 'bio-ch9', name: 'Lipids', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch9-t4', chapterId: 'bio-ch9', name: 'Nucleic Acids', importance: 10, difficulty: 7, estimatedMinutes: 30 },
  ],
  'bio-ch10': [
    { id: 'bio-ch10-t1', chapterId: 'bio-ch10', name: 'Cell Cycle', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch10-t2', chapterId: 'bio-ch10', name: 'Mitosis', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch10-t3', chapterId: 'bio-ch10', name: 'Meiosis', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'bio-ch10-t4', chapterId: 'bio-ch10', name: 'Significance of Cell Division', importance: 8, difficulty: 4, estimatedMinutes: 15 },
  ],
  'bio-ch11': [
    { id: 'bio-ch11-t1', chapterId: 'bio-ch11', name: 'Water Transport', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch11-t2', chapterId: 'bio-ch11', name: 'Transpiration', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch11-t3', chapterId: 'bio-ch11', name: 'Mineral Transport', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch11-t4', chapterId: 'bio-ch11', name: 'Phloem Transport', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'bio-ch12': [
    { id: 'bio-ch12-t1', chapterId: 'bio-ch12', name: 'Essential Minerals', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'bio-ch12-t2', chapterId: 'bio-ch12', name: 'Deficiency Symptoms', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch12-t3', chapterId: 'bio-ch12', name: 'Nitrogen Fixation', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'bio-ch13': [
    { id: 'bio-ch13-t1', chapterId: 'bio-ch13', name: 'Light Reactions', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'bio-ch13-t2', chapterId: 'bio-ch13', name: 'Dark Reactions (Calvin Cycle)', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'bio-ch13-t3', chapterId: 'bio-ch13', name: 'C3, C4, CAM Plants', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch13-t4', chapterId: 'bio-ch13', name: 'Factors Affecting Photosynthesis', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'bio-ch14': [
    { id: 'bio-ch14-t1', chapterId: 'bio-ch14', name: 'Glycolysis', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch14-t2', chapterId: 'bio-ch14', name: 'Krebs Cycle', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'bio-ch14-t3', chapterId: 'bio-ch14', name: 'Electron Transport Chain', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'bio-ch14-t4', chapterId: 'bio-ch14', name: 'Fermentation', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'bio-ch15': [
    { id: 'bio-ch15-t1', chapterId: 'bio-ch15', name: 'Plant Growth Regulators', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'bio-ch15-t2', chapterId: 'bio-ch15', name: 'Auxins and Gibberellins', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'bio-ch15-t3', chapterId: 'bio-ch15', name: 'Cytokinins and Abscisic Acid', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'bio-ch15-t4', chapterId: 'bio-ch15', name: 'Tropisms', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
};
