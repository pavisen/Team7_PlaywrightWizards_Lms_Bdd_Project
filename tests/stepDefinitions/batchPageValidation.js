/*import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import LoginPage from "../pages/loginPage.js";
import BatchPage from '../pages/batchPage.js'; 

import dotenv from "dotenv";


// Load environment variables
dotenv.config();

//const readXlsxFile = require('read-excel-file');
//console.log("Excel Reader is installed and working!");

Given("Admin is on the home Page",async function () {
    const loginPage = new LoginPage(this.page);
    await loginPage.navigateToLoginPage(process.env.LOGIN_URL);
    await this.page.waitForLoadState('load');
    
    await loginPage.enterUsername(process.env.USERNAME);
    await loginPage.enterPassword(process.env.PASSWORD);
    await loginPage.submitLogin();
   // await this.page.waitForTimeout(500); 


});

When("Admin Clicks on the Batch menu from the header",async function () {
   // const loginPage = new LoginPage(this.page);
    const batchPage = new BatchPage(this.page);
     await this.page.waitForTimeout(500);
    await batchPage.navigateToBatch();
});

Then("Admin should be in the Manage Batch Page", async function () {
    const batchPage = new BatchPage(this.page);
    await batchPage.navigateToManageBatch();
});*/


import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import BatchPage from '../pages/batchPage.js';
import CommonFunctions from '../utils/commonFunctions.js';
import dotenv from 'dotenv';

dotenv.config();

// Create BDD steps
const { Given, When, Then } = createBdd();

let commonFunctions;

Given('Admin is on the home page', async function () {
  // Initialize the CommonFunctions class for Program
  commonFunctions = new CommonFunctions(this.page, 'program');

  const loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage(process.env.LOGIN_URL);
  await this.page.waitForLoadState('load');

  await loginPage.enterUsername(process.env.USERNAME);
  await loginPage.enterPassword(process.env.PASSWORD);
  await loginPage.submitLogin();

  // Assuming you navigate to the home page after login
  await commonFunctions.clickMenu();
});

When('Admin clicks on the Batch menu from the header', async function () {
  // Initialize CommonFunctions for Batch
  commonFunctions = new CommonFunctions(this.page, 'batch');
  await commonFunctions.clickMenu();
});

Then('Admin should be in the Manage Batch Page', async function () {
  const batchPage = new BatchPage(this.page);
  await batchPage.verifyBatchPage();
});

