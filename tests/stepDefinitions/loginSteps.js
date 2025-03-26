import { test } from '../fixtures/fixture';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { getTestData } from '../utils/excelReader';
import logger, { attachLogsAfterEachTest } from '../utils/logger.js';
import { assert } from 'console';
const { Given, When, Then } = createBdd();
const sheet_Name = 'login';

// Step Definitions for Login Feature
Given('Admin is on login Page', async ({loginPage}) => {
  await loginPage.navigateToLoginPage(process.env.LOGIN_URL);
  logger.info('Navigated to Login Page');
});

When('Admin enter valid data in all field and clicks login button', async  ({loginPage}) => {
  await loginPage.login(process.env.ADMIN_USERNAME, process.env.PASSWORD);
  logger.info('Entered Username and Password');
});

Then('Admin should land on home page', async  ({loginPage}) => {
  const dashboard = await loginPage.getDashboardText();
  await expect(dashboard).toBeVisible(); 
  logger.info('Successfully logged in and redirected to Dashboard');
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
  loginPage.navigateToLoginPage(process.env.LOGIN_URL);
  const errorMessageLocator = await loginPage.getEmptyPasswordError();
  await expect(errorMessageLocator).toHaveText(expectedErrorMessage);

});

When('Admin enter valid credentials  and clicks login button through keyboard', async ({loginPage}) => {  
await loginPage.usernameInput.click();
await loginPage.page.keyboard.type(process.env.ADMIN_USERNAME); 
await loginPage.passwordInput.click();
await loginPage.page.keyboard.type(process.env.PASSWORD);
await loginPage.passwordInput.press('Enter');
});

When('Admin enter valid credentials  and clicks login button through mouse', async ({loginPage}) => {
   await loginPage.usernameInput.click();
   await loginPage.usernameInput.fill(process.env.ADMIN_USERNAME);
     await loginPage.passwordInput.click();
     await loginPage.passwordInput.fill(process.env.PASSWORD);
  await loginPage.submitButton.hover(); 
  await loginPage.submitButton.click(); 
});

Given('The browser is open', async ({loginPage}) => {
  await loginPage.navigateToLoginPage(process.env.LOGIN_URL);

});

When('Admin gives the correct LMS portal URL', async ({loginPage}) => {
  await loginPage.navigateToLoginPage(process.env.LOGIN_URL);
});


Then('Admin should see asterisk mark symbol next to text for mandatory fields', async ({loginPage}) => {
  await loginPage.asterisk.waitFor({ state: 'visible' }); 
    const isAsteriskVisible = await loginPage.isAsteriskPresent();
    
    console.log('Asterisk visibility:', isAsteriskVisible); 

    expect(isAsteriskVisible).toBeTruthy(); 

});

Then('Admin should {string} in the second text field', async ({loginPage}, expectedText) => {
  const secondFieldText = await loginPage.getSecondFieldText();
  expect(secondFieldText).toBe(expectedText);
});

Then('Admin should see asterisk mark symbol next to password text', async ({loginPage}) => {
  await loginPage.asterisk.waitFor({ state: 'visible' }); 
  const isAsteriskVisible = await loginPage.isAsteriskPresent();
  console.log('Asterisk visibility:', isAsteriskVisible); 
  expect(isAsteriskVisible).toBeTruthy(); 
});

Then('Admin should see input field on the centre of the page', async ({loginPage}) => {
   const isCentered = await loginPage.isInputFieldCentered();
    expect(isCentered).toBeTruthy();
});

Then('Admin should see login button', async ({loginPage}) => {
  const isLoginButtonPresent = await loginPage.isLoginButtonPresent();
    expect(isLoginButtonPresent).toBeTruthy();
});

Then('Admin should see user in gray color', async ({loginPage}) => {
  const userFieldColor = await loginPage.getUserFieldPlaceholderColor();
 // expect(userFieldColor).toBe('gray');
  expect(userFieldColor).toBe('rgba(0, 0, 0, 0.54)'); // Matching the exact computed color

});

Then('Admin should see password in gray color', async ({loginPage}) => {
  const passwordFieldColor = await loginPage.getPasswordFieldPlaceholderColor();
  expect(passwordFieldColor).toBe('rgba(0, 0, 0, 0.54)'); // Matching the exact computed color

});


When('Admin enter invalid URL and clicks login button', async ({loginPage}) => {
  await loginPage.verifyURL();
  
  
 
});

Then('Admin should receive application error', async ({loginPage}) => {
  expect(loginPage.verifyURL).toBeTruthy();
 
});

When('Admin gives the correct LMS portal HTTP response greater than {int}', async ({loginPage}, arg) => {
  loginPage.  verifyBrokenLink();
}
 
);

Then('the link is broken', async ({loginPage}) => {
  expect(loginPage.verifyBrokenLink()).toBeTruthy;
  
});

Then('Admin should see the correct spelling in all fields', async ({loginPage}) => {
  await loginPage.verifySpellingofFields();
});
When('Logins to the application', async ({loginPage}) => {
  await loginPage.login(process.env.ADMIN_USERNAME, process.env.PASSWORD);
});
Then('Admin should see LMS - Learning Management System', async ({loginPage,commonFunctions}) => {
  loginPage.login(process.env.ADMIN_USERNAME, process.env.PASSWORD);
  const actualTitle = await commonFunctions.getHeaderText();
  const expectedTitle = 'LMS - Learning Management System';
  expect(actualTitle.trim()).toBe(expectedTitle);
});

Then('Admin should see company name below the app name', async ({loginPage}) => {
  const extractedText =await loginPage.ExtractTextFromImage();
  console.log("Extracted Text: ", extractedText);
  expect(extractedText).toContain('LMS - Learning Management System')
  expect(extractedText).toContain('NumpyNinja')
});

 

Then('Admin should see Please login to LMS application', async ({loginPage}) => {
  const actualText = await loginPage.login_header.textContent();
  const expectedText = 'Please login to LMS application';
  expect(actualText.trim()).toBe(expectedText);
});

Then('Admin should see two text field', async ({loginPage}) => {
  loginPage.verifyTextFields();
  

  // Step: Then Admin should see two text field
  // From: tests\features\01_login.feature:114:5
});

Then('Admin should see {string} in the first text field', async ({loginPage}, expectedText) => {
  const firstFieldText = await loginPage.usernameInput.getAttribute('ng-reflect-placeholder');
  expect(firstFieldText.trim()).toBe(expectedText.trim());
}); 
 