
import { defineConfig} from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });


// Ensure Playwright-BDD correctly processes feature files
const testDir = defineBddConfig({
  importTestFrom: path.resolve(__dirname, 'tests/fixtures/fixture.js'),
  features: path.resolve(__dirname, 'tests/features/**/*.feature'),
  steps:path.resolve(__dirname, 'tests/stepDefinitions/**/*.js'),

});

// Get the browser category and headed mode from environment variables
const browserCategory = process.env.BROWSER?.trim();
const isHeaded = process.env.HEADED === 'true'; // Defaults to headless if not set

console.log(`Running tests on ${browserCategory} in ${isHeaded ? 'headed' : 'headless'} mode`);

const projects = browserCategory
? [
    {
      name: browserCategory,
      use: { browserName: browserCategory, headless: !isHeaded },
    },
  ]
: [
    {
      name: 'chromium',
      use: { browserName: 'chromium', headless: !isHeaded },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox', headless: !isHeaded },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit', headless: !isHeaded },
    },
  ];

export default defineConfig({
  testDir, 
  captureGitInfo: { commit: true, diff: true },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 0,  // ✅ Set retries to 2 for all environments
  // retries: process.env.CI ? 2 : 0,
  workers: 5, //change to 4 for parallel
  reporter: [
    ['allure-playwright'], // Allure Reporter
    ['html', { outputFolder: 'playwright-report', open: 'always' }] // HTML Report - always, never, on-failure
  ],
  use: {
    headless: !isHeaded, // Set headless mode based on HEADED environment variable
    trace: 'retain-on-failure',// Retain trace files on failure
    screenshot: 'only-on-failure', // Automatically capture screenshot on failure
    
  },
 projects,
});

