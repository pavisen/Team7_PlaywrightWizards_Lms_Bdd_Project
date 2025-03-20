import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/loginPage.js';
import { BatchPage } from '../pages/batchPage.js';
import { CommonFunctions } from '../utils/commonFunctions.js';
import { ProgramPage } from '../pages/programPage.js';
import dotenv from 'dotenv';

dotenv.config();

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  commonFunctions: async ({ page }, use) => {
    const commonFunctions = new CommonFunctions(page);
    await use(commonFunctions);
  },

  batchPage: async ({ page }, use) => {
    const batchPage = new BatchPage(page);
    await use(batchPage);
  },

  loggedInPage: async ({ loginPage }, use) => {
    await loginPage.navigateToLoginPage(process.env.LOGIN_URL);
    await loginPage.login(process.env.ADMIN_USERNAME, process.env.PASSWORD);
    await use(loginPage);
  },

  programPage: async ({ page }, use) => {
    const programPage = new ProgramPage(page);
    await use(programPage);
  }

});

export { expect } from '@playwright/test';
