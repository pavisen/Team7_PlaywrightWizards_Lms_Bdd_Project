
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
const browserCategory = process.env.BROWSER || 'chromium'; // Default to 'chromium' if not set
const isHeaded = process.env.HEADED === 'true'; // Defaults to headless if not set

console.log(`Running tests on ${browserCategory} in ${isHeaded ? 'headed' : 'headless'} mode...`);


export default defineConfig({
  testDir, 
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 0,  // ✅ Set retries to 2 for all environments
  // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: !isHeaded, // Set headless mode based on HEADED environment variable
    
    trace: 'off',
    screenshot: 'only-on-failure', // Automatically capture screenshot on failure
    
  },
  projects: [
    {
      name: browserCategory,
      use: {
        headless: !isHeaded, // Ensure headless is respected here as well
        browserName: browserCategory, // Set the browser name dynamically
        
        // Directly set browser-specific options without using devices
        ...(browserCategory === 'chromium' && {
          // Chromium-specific options
          channel: 'chrome', // Or path to a custom Chromium browser
        }),
        ...(browserCategory === 'firefox' && {
          // Firefox-specific options
          channel: 'firefox', // Or path to a custom Firefox browser
        }),
        ...(browserCategory === 'webkit' && {
          // WebKit-specific options
          channel: 'safari', // Or path to a custom WebKit browser
        }),
      },
    },
  ],
});

