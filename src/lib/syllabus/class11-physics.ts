// ============================================================
// Exam Rescue — Class 11 Physics Syllabus (NCERT)
// ============================================================

import { Subject, Chapter, Topic } from '@/types';

export const physicsSubject: Subject = {
  id: 'physics',
  classLevelId: 11,
  name: 'Physics',
  icon: '⚡',
  color: '#3b82f6',
};

export const physicsChapters: Chapter[] = [
  { id: 'phy-ch1', subjectId: 'physics', chapterNumber: 1, name: 'Physical World', description: 'Scope of physics, nature of physical laws', topicCount: 3 },
  { id: 'phy-ch2', subjectId: 'physics', chapterNumber: 2, name: 'Units and Measurements', description: 'SI units, significant figures, errors', topicCount: 4 },
  { id: 'phy-ch3', subjectId: 'physics', chapterNumber: 3, name: 'Motion in a Straight Line', description: 'Distance, displacement, velocity, acceleration', topicCount: 4 },
  { id: 'phy-ch4', subjectId: 'physics', chapterNumber: 4, name: 'Motion in a Plane', description: 'Projectile motion, circular motion', topicCount: 4 },
  { id: 'phy-ch5', subjectId: 'physics', chapterNumber: 5, name: 'Laws of Motion', description: 'Newton\'s laws, friction, circular motion', topicCount: 4 },
  { id: 'phy-ch6', subjectId: 'physics', chapterNumber: 6, name: 'Work, Energy and Power', description: 'Work-energy theorem, collisions', topicCount: 4 },
  { id: 'phy-ch7', subjectId: 'physics', chapterNumber: 7, name: 'System of Particles and Rotational Motion', description: 'Center of mass, torque, angular momentum', topicCount: 4 },
  { id: 'phy-ch8', subjectId: 'physics', chapterNumber: 8, name: 'Gravitation', description: 'Kepler\'s laws, gravitational potential', topicCount: 4 },
  { id: 'phy-ch9', subjectId: 'physics', chapterNumber: 9, name: 'Mechanical Properties of Solids', description: 'Stress, strain, elastic modulus', topicCount: 3 },
  { id: 'phy-ch10', subjectId: 'physics', chapterNumber: 10, name: 'Mechanical Properties of Fluids', description: 'Pressure, viscosity, surface tension', topicCount: 4 },
  { id: 'phy-ch11', subjectId: 'physics', chapterNumber: 11, name: 'Thermal Properties of Matter', description: 'Heat transfer, thermal expansion', topicCount: 4 },
  { id: 'phy-ch12', subjectId: 'physics', chapterNumber: 12, name: 'Thermodynamics', description: 'Laws of thermodynamics, heat engines', topicCount: 4 },
  { id: 'phy-ch13', subjectId: 'physics', chapterNumber: 13, name: 'Kinetic Theory', description: 'Kinetic theory of gases, degrees of freedom', topicCount: 3 },
  { id: 'phy-ch14', subjectId: 'physics', chapterNumber: 14, name: 'Oscillations', description: 'SHM, pendulum, spring system', topicCount: 4 },
  { id: 'phy-ch15', subjectId: 'physics', chapterNumber: 15, name: 'Waves', description: 'Wave motion, superposition, standing waves', topicCount: 4 },
];

export const physicsTopics: Record<string, Topic[]> = {
  'phy-ch1': [
    { id: 'phy-ch1-t1', chapterId: 'phy-ch1', name: 'Scope of Physics', importance: 7, difficulty: 3, estimatedMinutes: 15 },
    { id: 'phy-ch1-t2', chapterId: 'phy-ch1', name: 'Fundamental Forces', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch1-t3', chapterId: 'phy-ch1', name: 'Nature of Physical Laws', importance: 7, difficulty: 4, estimatedMinutes: 15 },
  ],
  'phy-ch2': [
    { id: 'phy-ch2-t1', chapterId: 'phy-ch2', name: 'SI Units', importance: 8, difficulty: 3, estimatedMinutes: 15 },
    { id: 'phy-ch2-t2', chapterId: 'phy-ch2', name: 'Significant Figures', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch2-t3', chapterId: 'phy-ch2', name: 'Errors in Measurement', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch2-t4', chapterId: 'phy-ch2', name: 'Dimensional Analysis', importance: 8, difficulty: 5, estimatedMinutes: 20 },
  ],
  'phy-ch3': [
    { id: 'phy-ch3-t1', chapterId: 'phy-ch3', name: 'Distance vs Displacement', importance: 8, difficulty: 4, estimatedMinutes: 15 },
    { id: 'phy-ch3-t2', chapterId: 'phy-ch3', name: 'Velocity and Speed', importance: 8, difficulty: 4, estimatedMinutes: 15 },
    { id: 'phy-ch3-t3', chapterId: 'phy-ch3', name: 'Acceleration', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch3-t4', chapterId: 'phy-ch3', name: 'Kinematic Equations', importance: 10, difficulty: 6, estimatedMinutes: 25 },
  ],
  'phy-ch4': [
    { id: 'phy-ch4-t1', chapterId: 'phy-ch4', name: 'Vectors', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch4-t2', chapterId: 'phy-ch4', name: 'Projectile Motion', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'phy-ch4-t3', chapterId: 'phy-ch4', name: 'Circular Motion', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch4-t4', chapterId: 'phy-ch4', name: 'Relative Motion', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'phy-ch5': [
    { id: 'phy-ch5-t1', chapterId: 'phy-ch5', name: 'Newton\'s First Law', importance: 8, difficulty: 4, estimatedMinutes: 15 },
    { id: 'phy-ch5-t2', chapterId: 'phy-ch5', name: 'Newton\'s Second Law', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch5-t3', chapterId: 'phy-ch5', name: 'Newton\'s Third Law', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch5-t4', chapterId: 'phy-ch5', name: 'Friction', importance: 9, difficulty: 6, estimatedMinutes: 25 },
  ],
  'phy-ch6': [
    { id: 'phy-ch6-t1', chapterId: 'phy-ch6', name: 'Work', importance: 8, difficulty: 4, estimatedMinutes: 15 },
    { id: 'phy-ch6-t2', chapterId: 'phy-ch6', name: 'Kinetic and Potential Energy', importance: 10, difficulty: 5, estimatedMinutes: 25 },
    { id: 'phy-ch6-t3', chapterId: 'phy-ch6', name: 'Work-Energy Theorem', importance: 9, difficulty: 6, estimatedMinutes: 20 },
    { id: 'phy-ch6-t4', chapterId: 'phy-ch6', name: 'Collisions', importance: 9, difficulty: 7, estimatedMinutes: 30 },
  ],
  'phy-ch7': [
    { id: 'phy-ch7-t1', chapterId: 'phy-ch7', name: 'Center of Mass', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch7-t2', chapterId: 'phy-ch7', name: 'Torque', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch7-t3', chapterId: 'phy-ch7', name: 'Angular Momentum', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'phy-ch7-t4', chapterId: 'phy-ch7', name: 'Rolling Motion', importance: 8, difficulty: 7, estimatedMinutes: 25 },
  ],
  'phy-ch8': [
    { id: 'phy-ch8-t1', chapterId: 'phy-ch8', name: 'Kepler\'s Laws', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch8-t2', chapterId: 'phy-ch8', name: 'Universal Gravitation', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch8-t3', chapterId: 'phy-ch8', name: 'Gravitational Potential', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'phy-ch8-t4', chapterId: 'phy-ch8', name: 'Orbital Velocity', importance: 9, difficulty: 7, estimatedMinutes: 25 },
  ],
  'phy-ch9': [
    { id: 'phy-ch9-t1', chapterId: 'phy-ch9', name: 'Stress and Strain', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch9-t2', chapterId: 'phy-ch9', name: 'Elastic Moduli', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch9-t3', chapterId: 'phy-ch9', name: 'Stress-Strain Curve', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'phy-ch10': [
    { id: 'phy-ch10-t1', chapterId: 'phy-ch10', name: 'Pressure', importance: 8, difficulty: 4, estimatedMinutes: 15 },
    { id: 'phy-ch10-t2', chapterId: 'phy-ch10', name: 'Buoyancy', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch10-t3', chapterId: 'phy-ch10', name: 'Viscosity', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'phy-ch10-t4', chapterId: 'phy-ch10', name: 'Surface Tension', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'phy-ch11': [
    { id: 'phy-ch11-t1', chapterId: 'phy-ch11', name: 'Heat Transfer', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch11-t2', chapterId: 'phy-ch11', name: 'Thermal Expansion', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch11-t3', chapterId: 'phy-ch11', name: 'Calorimetry', importance: 8, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch11-t4', chapterId: 'phy-ch11', name: 'Newton\'s Law of Cooling', importance: 8, difficulty: 6, estimatedMinutes: 20 },
  ],
  'phy-ch12': [
    { id: 'phy-ch12-t1', chapterId: 'phy-ch12', name: 'First Law of Thermodynamics', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch12-t2', chapterId: 'phy-ch12', name: 'Second Law of Thermodynamics', importance: 10, difficulty: 7, estimatedMinutes: 30 },
    { id: 'phy-ch12-t3', chapterId: 'phy-ch12', name: 'Heat Engines', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'phy-ch12-t4', chapterId: 'phy-ch12', name: 'Entropy', importance: 9, difficulty: 7, estimatedMinutes: 25 },
  ],
  'phy-ch13': [
    { id: 'phy-ch13-t1', chapterId: 'phy-ch13', name: 'Kinetic Theory of Gases', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch13-t2', chapterId: 'phy-ch13', name: 'Degrees of Freedom', importance: 8, difficulty: 6, estimatedMinutes: 20 },
    { id: 'phy-ch13-t3', chapterId: 'phy-ch13', name: 'Mean Free Path', importance: 7, difficulty: 5, estimatedMinutes: 15 },
  ],
  'phy-ch14': [
    { id: 'phy-ch14-t1', chapterId: 'phy-ch14', name: 'Simple Harmonic Motion', importance: 10, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch14-t2', chapterId: 'phy-ch14', name: 'SHM Equations', importance: 9, difficulty: 6, estimatedMinutes: 20 },
    { id: 'phy-ch14-t3', chapterId: 'phy-ch14', name: 'Spring-Mass System', importance: 9, difficulty: 6, estimatedMinutes: 20 },
    { id: 'phy-ch14-t4', chapterId: 'phy-ch14', name: 'Simple Pendulum', importance: 9, difficulty: 5, estimatedMinutes: 20 },
  ],
  'phy-ch15': [
    { id: 'phy-ch15-t1', chapterId: 'phy-ch15', name: 'Wave Motion', importance: 9, difficulty: 5, estimatedMinutes: 20 },
    { id: 'phy-ch15-t2', chapterId: 'phy-ch15', name: 'Superposition', importance: 9, difficulty: 6, estimatedMinutes: 25 },
    { id: 'phy-ch15-t3', chapterId: 'phy-ch15', name: 'Standing Waves', importance: 9, difficulty: 7, estimatedMinutes: 25 },
    { id: 'phy-ch15-t4', chapterId: 'phy-ch15', name: 'Beats and Doppler Effect', importance: 8, difficulty: 7, estimatedMinutes: 25 },
  ],
};
