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

    /* Model a visitor outside the EEA, which is most of them.
     *
     * The consent banner is geo-gated: `src/proxy.ts` reads Vercel's
     * `x-vercel-ip-country` and only asks for consent inside the EEA/UK/CH.
     * Absent that header it assumes the strictest case, which is right for a
     * real request of unknown origin and wrong for a test run — locally the
     * header never exists, so the banner opened on every page, sat over the
     * bottom-left corner and swallowed clicks meant for the controls beneath
     * it. Five specs failed on a dialog none of them were about.
     *
     * Declaring a country here makes the default suite exercise the path most
     * visitors take. A spec that wants the banner sets `DE` on its own
     * context and tests it deliberately. */
    extraHTTPHeaders: {
      'x-vercel-ip-country': 'AU',

      /* Preview deployments sit behind Vercel Authentication and answer an
       * unauthenticated request with a 302 to the SSO login, so a suite
       * pointed at one fails every assertion for a reason that has nothing to
       * do with the site. This header is the documented way through, and it
       * keeps the deployment private to everyone who does not hold it.
       *
       * Absent — which is the normal case against localhost — it contributes
       * no header at all. Never hardcode the value; it lives outside the
       * repo. */
      ...(process.env.VERCEL_PROTECTION_BYPASS
        ? { 'x-vercel-protection-bypass': process.env.VERCEL_PROTECTION_BYPASS }
        : {}),
    },
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
        launchOptions: {
          ...(process.env.PLAYWRIGHT_CHROMIUM
            ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM }
            : {}),
          /* The embed suite frames 127.0.0.1 from localhost to get a real
           * cross-origin parent. Chrome's Local Network Access check refuses
           * that with ERR_BLOCKED_BY_LOCAL_NETWORK_ACCESS_CHECKS — a
           * protection against public pages probing your LAN, which has
           * nothing to do with a third-party site embedding a public widget.
           *
           * Without the flag all seven iframe tests fail with an empty frame
           * and the widget looks broken when it is not. Scoped to the test
           * browser; it changes nothing that ships. */
          args: [
            '--disable-features=LocalNetworkAccessChecks,PrivateNetworkAccessChecks,BlockInsecurePrivateNetworkRequests',
          ],
        },
      },
    },
  ],
});
