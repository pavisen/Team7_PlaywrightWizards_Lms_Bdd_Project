
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader'; 
const { Given, When, Then } = createBdd();


<<<<<<< HEAD
Given('Admin is on the home page', async function () {
  // Initialize the CommonFunctions class for Program
  commonFunctions = new CommonFunctions(this.page, 'program');

  const loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage(process.env.LOGIN_URL);
  await this.page.waitForLoadState('load');

  await loginPage.enterUsername(process.env.USER);
  await loginPage.enterPassword(process.env.PASSWORD);
  await loginPage.submitLogin();

  // Assuming you navigate to the home page after login
  await commonFunctions.clickMenu();
=======
Given('Admin is on the home Page',  async function ({loggedInPage})  {
 
>>>>>>> cb15eba30d3a823a62d54e63cfa101bef2bc1257
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

