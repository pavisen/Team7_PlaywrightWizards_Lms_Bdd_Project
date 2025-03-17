
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import LoginPage from '../pages/loginPage.js';
import dotenv from 'dotenv';
dotenv.config();

// Create BDD steps
const { Given, When, Then } = createBdd();

// Step Definitions 

Given('I am on the login page', async function ({page}) {
  this.loginPage = new LoginPage(page); // Pass `page` to LoginPage
  await this.loginPage.navigateToLoginPage(process.env.LOGIN_URL);
});

When('I enter valid credentials', async function ({page}) {
  if (!this.loginPage) throw new Error("LoginPage is not initialized in When step");
  await this.loginPage.login(process.env.USER, process.env.PASSWORD);
});

Then('I should be logged in successfully', async function ({page}) {
  if (!this.loginPage) throw new Error("LoginPage is not initialized in Then step");
  await this.loginPage.verifyLoginSuccess();
});
