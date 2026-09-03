// Supabase project config for cross-device progress sync.
//
// The publishable key below is safe to commit — it's meant to be public
// (Supabase serves it to every browser that loads this page). Row Level
// Security policies in supabase/schema.sql are what actually keep one
// user's progress private from another's; see supabase/SETUP.md.
//
// Newer Supabase projects show this in the dashboard as the "Publishable
// key" (starts with sb_publishable_...); older projects call the same slot
// the "anon" key (a long eyJ... JWT) — either works here unchanged.
//
// Leave both blank to run the site in local-only mode: it still works fully,
// flashcard/module progress just stays on the current device instead of
// syncing to an account.
const SUPABASE_URL = "";
const SUPABASE_PUBLISHABLE_KEY = "";
