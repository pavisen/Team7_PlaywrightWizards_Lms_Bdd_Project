import { test } from '../fixtures/fixture';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { getTestData } from '../utils/excelReader';

// Create BDD steps
const { Given, When, Then } = createBdd();

// Step Definitions 

Given('I am on the login page', async ({loginPage}) => {
  await loginPage.navigateToLoginPage(process.env.LOGIN_URL);
});

When('I enter valid credentials', async  ({loginPage}) => {
  await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
});

Then('I should be logged in successfully', async  ({loginPage}) => {

  await loginPage.verifyLoginSuccess();
});


When('Admin enter invalid data and clicks login button', async ({loginPage}) => {
  const username = getTestData('login', 'invalid credentials', 'username');
  const password = getTestData('login', 'invalid credentials', 'password');
  console.log(`Username: ${username}`);
console.log(`Password: ${password}`);
  await loginPage.login(username, password); 
});

Then('Error message {string}', async ({loginPage}, arg) => {
  await loginPage.verifyLoginError();
  const expectedErrorMessage = getTestData('login', 'invalid credentials', 'errorMessage');
  console.log(`Expected Error Message: ${expectedErrorMessage}`);

});


