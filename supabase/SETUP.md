# Cloud sync setup (Supabase)

Without this, the study site works fine on its own — progress just stays on
whatever device you're using. This adds email/password login and syncs
module status, flashcard mastery, and your study streak across devices.

A note on naming: newer Supabase projects show **"Publishable key"** and
**"Secret key"** in the dashboard where older projects showed **"anon"** and
**"service_role"**. Same two slots, same privileges — this guide uses the
newer names throughout since that's what a new project shows; if yours shows
the old ones instead, "anon" = publishable key, "service_role" = secret key.

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and create a free account/project.
2. Any project name/region is fine. Note the database password it asks you
   to set (you won't need it for this setup, but keep it somewhere safe).

## 2. Run the schema

1. In your new project, open **SQL Editor** in the left sidebar → **New query**.
2. Paste the entire contents of [`schema.sql`](./schema.sql) from this folder.
3. Click **Run**.

This creates three tables (`module_status`, `flashcard_mastery`,
`study_streak`) with Row Level Security turned on, so each signed-in user can
only ever read or write their own rows. This is the important part — without
RLS, anyone could read or overwrite anyone else's progress, since the site
talks to Supabase using a public key. You can re-run this file safely if you
ever need to (it won't error on tables/policies that already exist).

## 3. (Optional) Skip email confirmation

By default, Supabase makes a new user confirm their email before they can
sign in. For a personal single-user site this is just friction. To turn it
off: **Authentication → Providers → Email → uncheck "Confirm email"**.
(Leave it on if you'd rather have the extra check — you'll just need to click
the confirmation link Supabase emails you after signing up, once.)

## 4. Get your Publishable key

**Project Settings → API Keys**. You need two values:

- **Project URL** — looks like `https://xxxxxxxxxxxx.supabase.co`
- **Publishable key** — starts with `sb_publishable_...`

Do **not** use the **Secret key** (`sb_secret_...`) here — that one bypasses
Row Level Security entirely and must never go in client-side code. It's only
used later, in step 6, and only outside the browser.

## 5. Paste them into the site

Open [`docs/config.js`](../docs/config.js) and fill in the two blank strings:

```js
const SUPABASE_URL = "https://xxxxxxxxxxxx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_...";
```

Commit and push. The publishable key is safe to commit — it's designed to be
public; `schema.sql`'s Row Level Security policies are what actually keep
your data private. The site will pick up the change automatically once it's
live and show a sign-in option instead of "cloud sync isn't set up yet."

## Using it

- **Sign up** with any email/password on the site itself (the gear icon →
  Account). If you left email confirmation on, check your inbox once.
- Progress made before signing in isn't lost — it's copied into your account
  the moment you first sign in on that device.
- Signed in on two devices, both syncing to the same account: progress made
  offline on either is queued locally and uploaded next time that device is
  online, so a flaky connection won't lose anything.

## 6. (Optional) Mirror module status back into progress.md

Module status now lives in Supabase, not in git — the site never reads or
writes `progress.md` for status once you're signed in. But `progress.md` is
also the file your study-session chats read/edit, so there's a small script
and a scheduled GitHub Action that mirror Supabase's status **into**
`progress.md` (one direction only — see the notice it stamps into each file).
This step is optional; skip it if you're fine with `progress.md` just being
whatever it was last set to.

**What it needs, and why it's not the publishable key:** the mirror has to
read every module's status regardless of who's "logged in" as far as the
script is concerned, so it uses Supabase's **Secret key**
(`sb_secret_...`), which bypasses Row Level Security. That's fine here
because this key only ever runs server-side (a GitHub Action, or your own
machine) — it must **never** go in `docs/config.js` or any other file that
ships to the browser. Supabase enforces this too: secret keys return 401 if
a request looks like it came from a browser. This is the same category of
thing as the GitHub PAT the site used to hold in `localStorage`; the whole
point of the Supabase move was getting that kind of credential out of
client-side storage, so don't undo that here.

1. **Get the Secret key**: Project Settings → API Keys → the key labelled
   **Secret key** (not Publishable).
2. **Add repo secrets**: in the GitHub repo, Settings → Secrets and
   variables → Actions → New repository secret. Add two:
   - `SUPABASE_URL` — same project URL as in `docs/config.js`
   - `SUPABASE_SECRET_KEY` — the Secret key from step 1
3. That's it — [`.github/workflows/sync-progress.yml`](../.github/workflows/sync-progress.yml)
   runs daily and commits any status changes automatically. You can also
   trigger it on demand from the repo's **Actions** tab → "Sync progress.md
   from Supabase" → **Run workflow**.

**Running it yourself instead**, without the Action (e.g. to sync right
before a study session, or if you'd rather not store the Secret key in
GitHub at all):

```bash
SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co \
SUPABASE_SECRET_KEY=sb_secret_... \
node scripts/sync-progress-md.mjs
```

This only writes files locally — review the diff and commit/push yourself
when you're happy with it. Don't put the Secret key in a file; pass it as an
environment variable each time (or keep it in a password manager and paste
it into the shell command when you need it).

## If your project still uses the old anon/service_role keys

Some existing Supabase projects (created before the newer key format) still
show **anon** and **service_role** as long `eyJ...` tokens instead of the
`sb_publishable_.../sb_secret_...` format above. Both formats work
identically everywhere in this repo — just use anon wherever this guide says
Publishable key, and service_role wherever it says Secret key. Nothing else
changes.
