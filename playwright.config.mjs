// Browser tests for the study site: see tests/e2e/README.md.
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: "http://localhost:4173",
    // Offline caching would make one test's files leak into the next.
    serviceWorkers: "block",
    // Dates and times on the site are local: pin them so tests don't depend
    // on where or when they run.
    locale: "en-GB",
    timezoneId: "Europe/London",
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"], viewport: { width: 1280, height: 900 } } }],
  webServer: {
    command: "node tests/e2e/serve.mjs",
    url: "http://localhost:4173/",
    reuseExistingServer: !process.env.CI,
  },
});
