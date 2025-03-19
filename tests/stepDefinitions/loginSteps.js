import { test } from '../fixtures/fixture';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { getTestData } from '../utils/excelReader';
const { Given, When, Then } = createBdd();

const sheet_Name = 'login';
// Step Definitions for Login Feature

Given('Admin is on login Page', async ({loginPage}) => {
  await loginPage.navigateToLoginPage(process.env.LOGIN_URL);
});

When('Admin enter valid data in all field and clicks login button', async  ({loginPage}) => {
  await loginPage.login(process.env.USER, process.env.PASSWORD);
});

Then('Admin should land on home page', async  ({loginPage}) => {
  const dashboard = await loginPage.getDashboardText();
  await expect(dashboard).toBeVisible(); 
});


When('Admin enter invalid data and clicks login button', async ({loginPage}) => {
  const scenario = 'invalid_credentials'; 
  const username = getTestData(sheet_Name, scenario, 'username');
  const password = getTestData(sheet_Name, scenario, 'password');
  await loginPage.login(username, password); 
});

Then('Error message {string}', async ({loginPage}, expectedErrorMessage) => {
  const errorMessage = await loginPage.getErrorMessage();
  await expect(errorMessage).toHaveText(expectedErrorMessage); 
});

When('Admin enter value only in password and clicks login button', async ({loginPage}) => {
  const scenario = 'empty_username'; 
  const username = getTestData(sheet_Name, scenario, 'username');
  const password = getTestData(sheet_Name, scenario, 'password');
  await loginPage.login(username, password); 
});

When('Admin enter value only in user name and clicks login button', async ({loginPage}) => {
  const scenario = 'empty_password'; 
  const username = getTestData(sheet_Name, scenario, 'username');
  const password = getTestData(sheet_Name, scenario, 'password');
  await loginPage.login(username, password); 
});

Then('Error message {string} for null user name', async ({loginPage}, expectedErrorMessage) => {
  const errorMessageLocator = await loginPage.getEmptyUsernameError(); 
  await expect(errorMessageLocator).toHaveText(expectedErrorMessage); 
});

Then('Error message {string} for null password', async ({loginPage}, expectedErrorMessage) => {
  const errorMessageLocator = await loginPage.getEmptyPasswordError(); 
  await expect(errorMessageLocator).toHaveText(expectedErrorMessage); 
});

When('Admin enter valid credentials  and clicks login button through keyboard', async ({loginPage}) => {  
await loginPage.usernameInput.click();
await loginPage.page.keyboard.type(process.env.USER); 
await loginPage.passwordInput.click();
await loginPage.page.keyboard.type(process.env.PASSWORD);
await loginPage.passwordInput.press('Enter');
});

When('Admin enter valid credentials  and clicks login button through mouse', async ({loginPage}) => {
   await loginPage.usernameInput.click();
   await loginPage.usernameInput.fill(process.env.USER);
     await loginPage.passwordInput.click();
     await loginPage.passwordInput.fill(process.env.PASSWORD);
  await loginPage.submitButton.hover(); 
  await loginPage.submitButton.click(); 
});

