import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import CommonFunctions from '../utils/commonFunctions.js';
import LoginPage from '../pages/loginPage.js';
const { Given, When, Then } = createBdd();
  
Given('Admin is on the home Page',  async function ({page})  {
  this.loginPage = new LoginPage(page); 
  await this.loginPage.navigateToLoginPage(process.env.LOGIN_URL); 
  await this.loginPage.login(process.env.USERNAME, process.env.PASSWORD);
});

When('Admin Clicks on the Batch menu from the header', async function ({page}) {
  // Initialize CommonFunctions for Batch
  this.commonFunctions = new CommonFunctions(page, 'batch'); 
  await this.commonFunctions.clickMenu();
});

Then('Admin should be in the {string} Page', async function ({page},expectedText) {
  const actualText = await this.commonFunctions.moduleSelectors.batch.manage_text.textContent();
  expect(actualText).toBe(expectedText);
});

Then('Admin should see the {string} Title in the Batch Page', async function ({page},expectedTitle) {
  const actualTitle = await this.commonFunctions.getHeaderText();
  expect(actualTitle).toBe(expectedTitle);
});

