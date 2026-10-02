// Supabase Edge Function: deletes the calling user's account and all of
// their study data. The site's publishable key can't delete auth users (and
// shouldn't be able to), so this runs with the service role key, which
// Supabase provides to Edge Functions as SUPABASE_SERVICE_ROLE_KEY and which
// never leaves the server.
//
// The only account it will ever delete is the one whose access token came
// with the request: the user id is taken from the verified JWT (see
// requireUser() below), never from the request body.
//
// See supabase/SETUP.md for how to deploy this.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

// Every table holding per-user rows (schema.sql and migrations/). They all
// reference auth.users with ON DELETE CASCADE, so deleting the user removes
// the account and all of its rows in one transaction: it either all goes or
// none of it does. The sweep of these tables afterwards only matters if a
// table is ever added without the cascade, and runs once the account is
// already gone, so a failure there can't leave a half-deleted account.
const USER_TABLES = [
  "module_status",
  "flashcard_mastery",
  "study_streak",
  "session_log",
  "flashcard_srs", // 002_spaced_repetition.sql
  "drill_progress", // 003_drills.sql
  "exam_plan", // 004_exam_plan.sql
  "subject_result", // 005_subject_results.sql
  "question_score", // 006_question_scores.sql
  "mock_result", // 006_question_scores.sql
];

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

// A migration that hasn't been run yet leaves its table missing: nothing to delete.
function isMissingTable(error: { code?: string } | null) {
  return !!error && (error.code === "42P01" || error.code === "PGRST205");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS_HEADERS });
  if (req.method !== "POST") return json({ error: "Use POST." }, 405);

  try {
    const user = await requireUser(req);
    if (!user) return json({ error: "Sign in again, then delete your account." });

    const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await admin.auth.admin.deleteUser(user.id);
    if (error) {
      console.error("Deleting the auth user failed", error);
      return json({ error: "Couldn't delete your account just now. Nothing was removed; try again later." });
    }

    for (const table of USER_TABLES) {
      const { error: sweepError } = await admin.from(table).delete().eq("user_id", user.id);
      if (sweepError && !isMissingTable(sweepError)) console.error(`Sweeping ${table} after deleting ${user.id} failed`, sweepError);
    }

    return json({ deleted: true });
  } catch (err) {
    console.error(err);
    return json({ error: "Account deletion is temporarily unavailable." });
  }
});
