// ============================================================
// Exam Rescue — AI Client (Groq / Gemini)
// ============================================================

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

interface AIResponse {
  content: string;
  error?: string;
}

/**
 * Call Groq API (free tier: llama-3.3-70b-versatile)
 */
async function callGroq(
  messages: { role: string; content: string }[],
  maxTokens: number = 2048
): Promise<AIResponse> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return { content: '', error: 'GROQ_API_KEY not configured. Add it to .env.local' };
  }

  try {
    const res = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        max_tokens: maxTokens,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return { content: '', error: `Groq API error: ${err}` };
    }

    const data = await res.json();
    return { content: data.choices[0]?.message?.content || '' };
  } catch (e) {
    return { content: '', error: `Network error: ${e}` };
  }
}

/**
 * Main AI call function
 */
export async function askAI(
  systemPrompt: string,
  userMessage: string,
  maxTokens: number = 2048
): Promise<AIResponse> {
  return callGroq(
    [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage },
    ],
    maxTokens
  );
}

/**
 * Multi-turn AI conversation
 */
export async function askAIConversation(
  messages: { role: string; content: string }[],
  maxTokens: number = 2048
): Promise<AIResponse> {
  return callGroq(messages, maxTokens);
}
