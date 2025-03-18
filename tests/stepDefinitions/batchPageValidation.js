
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader'; 
const { Given, When, Then } = createBdd();


Given('Admin is on the home Page',  async function ({loggedInPage})  {
 
});

When('Admin Clicks on the Batch menu from the header', async function ({commonFunctions}) {
  // Initialize CommonFunctions for Batch module
  await commonFunctions.clickMenu('batch');
  
});

Then('Admin should be in the {string} Page', async function ({commonFunctions},expectedText) {
  const actualText = await commonFunctions.moduleSelectors.batch.manage_text.textContent();
  expect(actualText).toBe(expectedText);
});

Then('Admin should see the {string} Title in the Batch Page', async function ({commonFunctions},expectedTitle) {
  const actualTitle = await commonFunctions.getHeaderText();
  expect(actualTitle).toBe(expectedTitle);
});

