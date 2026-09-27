# Fellow bot (the repo's GitHub App)

Two scheduled workflows change the repo on their own:

- **`sync-progress.yml`** (daily) commits module statuses from Supabase straight to `main`.
- **`update-exam-dates.yml`** (weekly) opens a PR when the IFoA's exam dates change.

`main` is protected by a ruleset: the `validate` and `e2e` checks must pass before anything lands. Both workflows therefore act as a small private GitHub App, the **Fellow bot**, rather than with the built-in `GITHUB_TOKEN`. That's because:

- the app is on the ruleset's bypass list, so the daily sync can still commit to `main`;
- PRs the app opens trigger the checks. PRs opened with `GITHUB_TOKEN` don't, so they could never be merged.

Each run gets a token from `actions/create-github-app-token`. It is scoped to this repo and the permissions below, and it expires within the hour.

## Setting it up (once)

1. **Create the app.** Go to GitHub → your avatar → **Settings → Developer settings → GitHub Apps → New GitHub App**.
   - **Name:** anything unique, e.g. `fellow-bot-handsleyd`.
   - **Homepage URL:** `https://github.com/HandsleyD/Actuarial_Study`.
   - **Webhook:** untick **Active**.
   - **Repository permissions:** **Contents → Read and write** and **Pull requests → Read and write**. **Metadata → Read-only** is added automatically. Leave everything else as **No access**.
   - **Where can this GitHub App be installed?** **Only on this account**.
   - Click **Create GitHub App**.
2. **Note the App ID** shown at the top of the app's page.
3. **Generate a private key.** On the same page, go to **Private keys → Generate a private key**. A `.pem` file downloads.
4. **Install it on this repo only.** In the app's left menu, go to **Install App → Install** and choose **Only select repositories → Actuarial_Study**.
5. **Add two secrets.** In the repo, go to **Settings → Secrets and variables → Actions → New repository secret**:
   - `FELLOW_BOT_APP_ID`: the App ID from step 2.
   - `FELLOW_BOT_PRIVATE_KEY`: the whole contents of the `.pem` file, including the `-----BEGIN` and `-----END` lines.

   Then delete the `.pem` file from your computer.
6. **Let it past the ruleset.** Go to **Settings → Rules → Rulesets →** your `main` ruleset **→ Bypass list → Add bypass**, pick the app (it appears under Apps once installed) and save.
7. **Test it.** Go to **Actions → Sync progress.md from Supabase → Run workflow**, then **Actions → Update IFoA exam dates → Run workflow**. Both should go green. If there's nothing to change, they finish without committing.

## If the key leaks

On the app's page, delete the key under **Private keys**, generate a new one and update `FELLOW_BOT_PRIVATE_KEY`. Nothing else needs to change.
