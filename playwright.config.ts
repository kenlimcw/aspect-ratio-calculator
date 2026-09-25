import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './playwright-tests',
  timeout: 30000,
  retries: 1,
  use: {
    /* Overridable: the Jetson runs several sites at once and 3000 is not always
     * ours. A hardcoded port makes the suite unrunnable rather than failing
     * honestly. */
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        /* On the arm64 dev box the cached browser revision rarely matches the
         * one this Playwright version wants, and the arm64 build lives under
         * chrome-linux-arm64/ rather than chrome-linux/. Point at a known-good
         * binary there; leave it unset in CI, where `playwright install` has
         * put the matching revision where Playwright expects it. */
        launchOptions: process.env.PLAYWRIGHT_CHROMIUM
          ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM }
          : {},
      },
    },
  ],
});
