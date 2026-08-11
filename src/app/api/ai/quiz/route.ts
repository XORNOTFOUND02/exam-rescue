// ============================================================
// Exam Rescue — AI Quiz Generator API
// ============================================================

import { NextRequest, NextResponse } from 'next/server';
import { askAI } from '@/lib/ai/client';
import { QUIZ_GENERATOR_PROMPT } from '@/lib/ai/prompts';

export async function POST(req: NextRequest) {
  try {
    const { subject, chapter, topic, questionCount = 5, questionType = 'mcq' } = await req.json();

    if (!subject || !chapter) {
      return NextResponse.json({ error: 'Subject and chapter are required' }, { status: 400 });
    }

    const prompt = `Generate ${questionCount} CBSE Class 10 ${subject} quiz questions for chapter: "${chapter}"${topic ? `, topic: "${topic}"` : ''}.
Question types: ${questionType === 'mixed' ? 'mix of MCQ, short_answer, and numerical' : questionType}.
Difficulty: mix of easy, medium, and hard.

IMPORTANT: Return ONLY a valid JSON array. No markdown, no extra text.`;

    const result = await askAI(QUIZ_GENERATOR_PROMPT, prompt, 4096);

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    // Parse AI response
    try {
      // Try to extract JSON from response
      let jsonStr = result.content;
      const jsonMatch = jsonStr.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        jsonStr = jsonMatch[0];
      }
      const questions = JSON.parse(jsonStr);

      // Add IDs
      const questionsWithIds = questions.map((q: Record<string, unknown>, i: number) => ({
        ...q,
        id: `ai-q-${Date.now()}-${i}`,
        topicId: topic || chapter,
        chapterId: chapter,
      }));

      return NextResponse.json({ questions: questionsWithIds });
    } catch {
      return NextResponse.json(
        { error: 'Failed to parse AI response. Please try again.', raw: result.content },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json({ error: 'Failed to generate quiz' }, { status: 500 });
  }
}
