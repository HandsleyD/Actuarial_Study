// Supabase Edge Function: grades a user's typed flashcard answer against the
// model answer, using Google Gemini's free tier. This exists so the Gemini
// API key never has to sit in the browser (docs/ is a public static site) —
// the key lives only as a Supabase Edge Function secret and this function is
// the only thing that ever sees it.
//
// Deliberately requires a signed-in Supabase user (see requireUser() below),
// not just the site's public anon/publishable key, so this endpoint can't be
// hammered anonymously by anyone who reads that key out of the page source —
// it would burn the (free but rate-limited) Gemini quota for everyone.
//
// See supabase/SETUP.md for how to deploy this and set GEMINI_API_KEY.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
// flash-lite over the flagship flash model: this is a one-sentence grading
// task, not worth the extra cost/latency, and lite models see less of the
// "high demand" 503s that hit popular flagship models at peak times.
const GEMINI_MODEL = "gemini-3.5-flash-lite";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

async function requireUser(req: Request) {
  const authHeader = req.headers.get("Authorization") || "";
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) return null;
  return data.user;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Gemini returns 503 ("high demand, try again later") and occasionally 429
// under load — both are transient, so retry a couple of times with backoff
// before giving up, rather than failing a grading request outright.
async function fetchGeminiWithRetry(url: string, options: RequestInit, attempts = 3) {
  let res: Response | null = null;
  for (let i = 0; i < attempts; i++) {
    res = await fetch(url, options);
    if (res.ok || (res.status !== 503 && res.status !== 429)) return res;
    if (i < attempts - 1) await sleep(500 * (i + 1));
  }
  return res!;
}

function buildPrompt(question: string, modelAnswer: string, userAnswer: string) {
  return `You are grading a student's short written answer to an actuarial exam flashcard question. Be concise, specific, and encouraging but honest.

Question: ${question}

Model answer: ${modelAnswer}

Student's answer: ${userAnswer}

Judge how well the student's answer captures the model answer's key points (paraphrasing is fine, it doesn't need to match wording). Respond with only JSON of the form {"verdict": "Strong" | "Partial" | "Weak", "feedback": "..."}, where feedback is a single sentence (max ~30 words) of specific, actionable feedback about what was missing or wrong, or what was good.`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS_HEADERS });

  try {
    if (!GEMINI_API_KEY) {
      return json({ error: "AI grading isn't configured on the server yet." });
    }

    const user = await requireUser(req);
    if (!user) return json({ error: "Sign in to get AI feedback." });

    const body = await req.json().catch(() => null);
    const question = body?.question;
    const modelAnswer = body?.modelAnswer;
    const userAnswer = body?.userAnswer;
    if (!question || !modelAnswer || !userAnswer) {
      return json({ error: "Missing question, modelAnswer, or userAnswer." });
    }

    const geminiRes = await fetchGeminiWithRetry(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: buildPrompt(question, modelAnswer, userAnswer) }] }],
        generationConfig: {
          temperature: 0,
          responseMimeType: "application/json",
          responseSchema: {
            type: "OBJECT",
            properties: {
              verdict: { type: "STRING", enum: ["Strong", "Partial", "Weak"] },
              feedback: { type: "STRING" },
            },
            required: ["verdict", "feedback"],
          },
        },
      }),
    });

    if (!geminiRes.ok) {
      console.error("Gemini request failed", geminiRes.status, await geminiRes.text());
      return json({ error: "AI grading is temporarily unavailable." });
    }

    const geminiData = await geminiRes.json();
    const text = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;
    const parsed = text ? JSON.parse(text) : null;
    if (!parsed || !["Strong", "Partial", "Weak"].includes(parsed.verdict) || typeof parsed.feedback !== "string") {
      console.error("Unexpected Gemini response shape", geminiData);
      return json({ error: "AI grading is temporarily unavailable." });
    }

    return json({ verdict: parsed.verdict, feedback: parsed.feedback.slice(0, 500) });
  } catch (err) {
    console.error(err);
    return json({ error: "AI grading is temporarily unavailable." });
  }
});
