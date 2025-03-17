// import { test, expect } from '@playwright/test';
// import fs from 'fs';
// import path from 'path';

// // Declare global variables for browser and page
// let browser;
// let page;

// test.beforeEach(async ({ page, browser }) => {
//   // This hook is run before each test
//   console.log('Before Hook - Test is starting');
//   browser = browser;  // Using the Playwright instance
//   page = page;        // Using the page from Playwright
// });

// test.afterEach(async ({ testInfo, page }) => {
//   // This hook is run after each test
//   console.log('After Hook - Test is finished');
//   console.log('Test Status:', testInfo.status); // Log the test status to confirm if the test is failing

//   if (testInfo.status === 'failed') {
//     console.log('Test failed, capturing screenshot');
    
//     const screenshotDir = path.resolve(__dirname, './reports/screenshots');
//     if (!fs.existsSync(screenshotDir)) {
//       fs.mkdirSync(screenshotDir, { recursive: true });
//     }

//     const screenshotPath = path.join(screenshotDir, `${testInfo.title.replace(/[\/\\?%*:|"<>]/g, '_')}.png`);
//     await page.screenshot({ path: screenshotPath });
//     console.log(`Screenshot captured: ${screenshotPath}`);
//   }

//   // Optionally, you can close the browser here or do any other cleanup tasks
//   console.log('Browser closed');
// });

// test('simple failed test', async ({ page }) => {
//   // This test is designed to fail
//   expect(false).toBe(true);
// });
