// ============================================================
// Exam Rescue — NCERT Syllabus Fetcher
// ============================================================
// Mirrors the official NCERT/CBSE Class 10 curriculum.
//
// In production, `fetchNcertSyllabus` would hit a real NCERT/CBSE
// endpoint. Today it serves a LOCAL database that mirrors the
// official NCERT/CBSE 2024-25 chapter structure exactly — the same
// single source of truth shared with lib/syllabus. This gives the
// onboarding a stable, offline-capable syllabus while keeping the
// contract ready for a real API later.

import { Chapter } from '@/types';
import { scienceChapters } from './class10-science';
import { mathChapters } from './class10-math';
import { socialChapters } from './class10-social';
import { englishChapters } from './class10-english';

export const NCERT_SOURCE = 'NCERT/CBSE 2024-25';
export const NCERT_LAST_UPDATED = '2025-04-01';

/** A Chapter that carries provenance metadata from the NCERT source. */
export interface NcertChapter extends Chapter {
  source: string;
}

/** Full syllabus payload returned by the fetcher. */
export interface NcertSyllabus {
  classLevel: number;
  subjectId: string;
  source: string;
  lastUpdated: string;
  chapters: NcertChapter[];
}

// ===== Local NCERT database (mirrors official chapter structure) =====
const ncertDatabase: Record<number, Record<string, NcertChapter[]>> = {
  10: {
    science: scienceChapters.map((ch) => ({ ...ch, source: NCERT_SOURCE })),
    mathematics: mathChapters.map((ch) => ({ ...ch, source: NCERT_SOURCE })),
    social_science: socialChapters.map((ch) => ({ ...ch, source: NCERT_SOURCE })),
    english: englishChapters.map((ch) => ({ ...ch, source: NCERT_SOURCE })),
  },
};

// Friendly subject names -> internal subject ids.
const subjectAliases: Record<string, string> = {
  science: 'science',
  math: 'mathematics',
  maths: 'mathematics',
  mathematics: 'mathematics',
  sst: 'social_science',
  social: 'social_science',
  socialscience: 'social_science',
  'social science': 'social_science',
  social_science: 'social_science',
  english: 'english',
};

function normalizeSubject(subject: string): string {
  return subjectAliases[subject.toLowerCase().trim()] || subject.toLowerCase().trim();
}

function cacheKey(classLevel: number, subject: string): string {
  return `${classLevel}:${normalizeSubject(subject)}`;
}

// ===== In-memory cache =====
const cache = new Map<string, NcertSyllabus>();

/**
 * Returns the syllabus from cache if present; otherwise builds it from
 * the local NCERT database and stores it in the cache. Returns null when
 * the class/subject combination is not available locally (caller should
 * fall back to its own data source).
 */
export function getCachedSyllabus(classLevel: number, subject: string): NcertSyllabus | null {
  const key = cacheKey(classLevel, subject);
  const cached = cache.get(key);
  if (cached) return cached;

  const normalized = normalizeSubject(subject);
  const chapters = ncertDatabase[classLevel]?.[normalized];
  if (!chapters) return null;

  const syllabus: NcertSyllabus = {
    classLevel,
    subjectId: normalized,
    source: NCERT_SOURCE,
    lastUpdated: NCERT_LAST_UPDATED,
    chapters,
  };
  cache.set(key, syllabus);
  return syllabus;
}

/**
 * Fetches the NCERT syllabus for a class + subject.
 * Simulates a network round-trip; resolves with the local NCERT
 * database. Throws when the syllabus is unavailable so callers can
 * gracefully fall back to their local data.
 */
export async function fetchNcertSyllabus(classLevel: number, subject: string): Promise<NcertChapter[]> {
  // Simulated network latency — replace with a real API call later.
  await new Promise((resolve) => setTimeout(resolve, 150));

  const syllabus = getCachedSyllabus(classLevel, subject);
  if (!syllabus) {
    throw new Error(`NCERT syllabus not found for Class ${classLevel} — ${subject}`);
  }
  return syllabus.chapters;
}

/**
 * Clears the cache entry and re-fetches the syllabus.
 * In production this would re-query the NCERT/CBSE endpoint and
 * refresh the local mirror.
 */
export async function refreshSyllabus(classLevel: number, subject: string): Promise<NcertChapter[]> {
  cache.delete(cacheKey(classLevel, subject));
  return fetchNcertSyllabus(classLevel, subject);
}

/** All subjects available in the local NCERT database for a class. */
export function getAllNcertSubjects(classLevel: number): NcertSyllabus[] {
  const subjects = ncertDatabase[classLevel] || {};
  return Object.entries(subjects).map(([subjectId, chapters]) => ({
    classLevel,
    subjectId,
    source: NCERT_SOURCE,
    lastUpdated: NCERT_LAST_UPDATED,
    chapters,
  }));
}
