// ============================================================
// Exam Rescue — Priority Scoring Engine
// ============================================================

import { Topic, PreparationStatus, TopicStatus, PriorityScore, PriorityLevel } from '@/types';

/**
 * Calculate priority score for a topic based on multiple factors.
 * Higher score = higher priority to study.
 */
export function calculateTopicPriority(
  topic: Topic,
  chapterStatus: PreparationStatus,
  topicStatus: TopicStatus,
  daysRemaining: number,
  totalStudyMinutes: number,
  totalTopics: number,
): PriorityScore {
  let score = 0;
  const reasons: string[] = [];

  // 1. Base importance (0-30 points)
  const importanceScore = (topic.importance / 10) * 30;
  score += importanceScore;
  if (topic.importance >= 8) reasons.push('High exam relevance');

  // 2. Preparation gap (0-30 points)
  let prepGapScore = 0;
  if (topicStatus === 'not_done' || topicStatus === 'unknown') {
    prepGapScore = 30;
    reasons.push('Not yet prepared');
  } else if (topicStatus === 'partial') {
    prepGapScore = 18;
    reasons.push('Partially prepared');
  } else {
    prepGapScore = 0;
  }
  score += prepGapScore;

  // 3. High-yield bonus (0-15 points)
  if (topic.isHighYield) {
    score += 15;
    reasons.push('Frequently tested topic');
  }

  // 4. Time feasibility (0-15 points)
  const minutesPerTopic = totalStudyMinutes / Math.max(totalTopics, 1);
  const feasibility = Math.min(1, minutesPerTopic / Math.max(topic.estimatedMinutes, 1));
  score += feasibility * 15;
  if (feasibility >= 0.8) reasons.push('Can be covered in available time');

  // 5. Urgency (0-10 points)
  const urgency = Math.min(1, 10 / Math.max(daysRemaining, 1));
  score += urgency * 10;
  if (daysRemaining <= 3) reasons.push('Very little time left');

  // Determine priority level
  let level: PriorityLevel;
  if (score >= 75) level = 'very_high';
  else if (score >= 55) level = 'high';
  else if (score >= 35) level = 'medium';
  else level = 'low';

  // Calculate marks per hour (conceptual)
  const estimatedMinutesForTopic = topic.estimatedMinutes;
  const marksPerHour = Math.round((topic.importance / estimatedMinutesForTopic) * 60);

  return {
    topicId: topic.id,
    score: Math.round(score),
    level,
    reason: reasons.length > 0 ? reasons.join('. ') : 'Standard priority',
    estimatedMinutes: topic.estimatedMinutes,
    marksPerHour: Math.min(marksPerHour, 20),
  };
}

/**
 * Rank all topics by priority for a given subject and user preparation.
 */
export function rankTopicsByPriority(
  topics: Topic[],
  chapterStatuses: Record<string, PreparationStatus>,
  topicStatuses: Record<string, TopicStatus>,
  daysRemaining: number,
  totalStudyMinutes: number
): PriorityScore[] {
  const scores = topics.map(topic => {
    const chapterStatus = chapterStatuses[topic.chapterId] || 'not_prepared';
    const topicStatus = topicStatuses[topic.id] || 'not_done';
    return calculateTopicPriority(
      topic,
      chapterStatus,
      topicStatus,
      daysRemaining,
      totalStudyMinutes,
      topics.length,
    );
  });

  return scores.sort((a, b) => b.score - a.score);
}

/**
 * Get human-readable priority explanation
 */
export function getPriorityExplanation(score: PriorityScore): string {
  switch (score.level) {
    case 'very_high':
      return `Very High Priority — ${score.reason}. Estimated time: ${score.estimatedMinutes} min.`;
    case 'high':
      return `High Priority — ${score.reason}. Estimated time: ${score.estimatedMinutes} min.`;
    case 'medium':
      return `Medium Priority — ${score.reason}. Estimated time: ${score.estimatedMinutes} min.`;
    case 'low':
      return `Low Priority — ${score.reason}. Estimated time: ${score.estimatedMinutes} min.`;
  }
}
