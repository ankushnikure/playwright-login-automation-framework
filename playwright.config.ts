import { defineConfig, devices } from "@playwright/test";
import { BASE_URL } from "@config/env";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  expect: {
    timeout: 5000
  },

  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    headless: false,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized']
    }
  },

  projects: [{ name: "chromium" }]
});