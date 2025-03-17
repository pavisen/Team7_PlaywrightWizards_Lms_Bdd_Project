<<<<<<< HEAD
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import dotenv from "dotenv";
import LoginPage from "../pages/loginPage.js";
import CommonFunctions from '../utils/commonFunctions.js';  
import BatchPage from "../pages/batchPage.js";
//const CommonFunctions = require('../utils/commonFunctions.js');  

// Load environment variables
=======
import { createBdd } from 'playwright-bdd';
import BatchPage from '../pages/batchPage.js';
import dotenv from 'dotenv';
>>>>>>> 01b11c2de579af6b27883b5a6672a684213d4656
dotenv.config();

// Create BDD steps
const { Given, When, Then } = createBdd();

// Step Definitions

Given('Admin is on the home Page', async function () {
  this.batchPage = new BatchPage(this.page);
  await this.batchPage.navigateToBatch();
});

When('Admin Clicks on the Batch menu from the header', async function () {
  await this.batchPage.navigateToBatch();
});

// Then('Admin should be in the Manage Batch Page', async function () {
//   await this.batchPage.verifyBatchPage();
// });
