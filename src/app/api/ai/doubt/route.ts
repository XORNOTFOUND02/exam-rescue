// ============================================================
// Exam Rescue — AI Doubt Solver API
// ============================================================

import { NextRequest, NextResponse } from 'next/server';
import { askAIConversation } from '@/lib/ai/client';
import { DOUBT_SOLVER_PROMPT } from '@/lib/ai/prompts';

export async function POST(req: NextRequest) {
  try {
    const { message, history = [] } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Build conversation messages
    const messages = [
      { role: 'system', content: DOUBT_SOLVER_PROMPT },
      ...history.map((h: { role: string; content: string }) => ({
        role: h.role,
        content: h.content,
      })),
      { role: 'user', content: message },
    ];

    const result = await askAIConversation(messages, 1024);

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ reply: result.content });
  } catch {
    return NextResponse.json({ error: 'Failed to process your doubt' }, { status: 500 });
  }
}
