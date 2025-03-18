import { test } from '../fixtures/fixture';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

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
