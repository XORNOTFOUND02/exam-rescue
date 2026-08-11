// ============================================================
// Exam Rescue — AI Study Plan Optimizer API
// ============================================================

import { NextRequest, NextResponse } from 'next/server';
import { askAI } from '@/lib/ai/client';
import { PLAN_OPTIMIZER_PROMPT } from '@/lib/ai/prompts';

export async function POST(req: NextRequest) {
  try {
    const {
      subject,
      chapters,
      chapterStatuses,
      topicStatuses,
      daysRemaining,
      dailyHours,
      quizScores,
      weakTopics,
    } = await req.json();

    const prompt = `Analyze this student's CBSE Class 10 ${subject} preparation and give optimization advice:

SELECTED CHAPTERS: ${JSON.stringify(chapters)}
CHAPTER STATUS: ${JSON.stringify(chapterStatuses)}
TOPIC STATUS: ${JSON.stringify(topicStatuses)}
DAYS REMAINING: ${daysRemaining}
DAILY STUDY HOURS: ${dailyHours}
QUIZ SCORES: ${JSON.stringify(quizScores || [])}
WEAK TOPICS: ${JSON.stringify(weakTopics || [])}

Give specific, actionable recommendations. Return ONLY valid JSON matching this schema:
{
  "priorityChapters": ["chapter names to focus first"],
  "timeAllocation": { "topic": "hours needed" },
  "weakAreas": ["specific topics needing more work"],
  "strongAreas": ["topics that are well covered"],
  "dailyStrategy": "what to do each day",
  "examTips": ["specific CBSE exam tips"],
  "confidenceMessage": "encouraging personalized message"
}`;

    const result = await askAI(PLAN_OPTIMIZER_PROMPT, prompt, 2048);

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    try {
      let jsonStr = result.content;
      const jsonMatch = jsonStr.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        jsonStr = jsonMatch[0];
      }
      const recommendations = JSON.parse(jsonStr);
      return NextResponse.json({ recommendations });
    } catch {
      return NextResponse.json(
        { error: 'Failed to parse AI response', raw: result.content },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json({ error: 'Failed to optimize plan' }, { status: 500 });
  }
}
