import { createBdd } from 'playwright-bdd';
import BatchPage from '../pages/batchPage.js';
import dotenv from 'dotenv';
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
