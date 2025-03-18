import { test as base } from 'playwright-bdd';
import {LoginPage} from '../pages/loginPage.js';
import {CommonFunctions} from '../utils/commonFunctions.js';
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




  loggedInPage: async ({ loginPage }, use) => {
    await loginPage.navigateToLoginPage(process.env.LOGIN_URL);
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    await use(loginPage);
  },



  

});

export { expect } from '@playwright/test';
