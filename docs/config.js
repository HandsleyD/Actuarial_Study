// Supabase project config for cross-device progress sync.
//
// The anon/publishable key below is safe to commit — it's meant to be public
// (Supabase serves it to every browser that loads this page). Row Level
// Security policies in supabase/schema.sql are what actually keep one
// user's progress private from another's; see supabase/SETUP.md.
//
// Leave both blank to run the site in local-only mode: it still works fully,
// flashcard/module progress just stays on the current device instead of
// syncing to an account.
const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";
