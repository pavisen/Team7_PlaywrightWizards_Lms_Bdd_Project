
import { test } from '../fixtures/fixture.js';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader.js'; 
import { CommonFunctions } from '../utils/commonFunctions.js';
const { Given, When, Then } = createBdd();
import logger from '../utils/logger.js';


Given('Admin is on the Batch page', async ({}) => {
  // Step: Given Admin is on the Batch page
  // From: tests/features/03_batch.feature:113:6
});

When('Admin clicks the delete Icon on any row', async ({}) => {
  // Step: When Admin clicks the delete Icon on any row
  // From: tests/features/03_batch.feature:114:6
});

Then('Admin should see the confirm alert box with yes and no button', async ({}) => {
  // Step: Then Admin should see the confirm alert box with yes and no button
  // From: tests/features/03_batch.feature:115:6
});

Given('Admin is on the batch confirm popup page', async ({}) => {
  // Step: Given Admin is on the batch confirm popup page
  // From: tests/features/03_batch.feature:118:6
});

When('Admin clicks on the delete icon and click yes button', async ({}) => {
  // Step: When Admin clicks on the delete icon and click yes button
  // From: tests/features/03_batch.feature:119:6
});

Then('Admin should see the successful message and the batch should be deleted', async ({}) => {
  // Step: Then Admin should see the successful message and the batch should be deleted
  // From: tests/features/03_batch.feature:120:6
});

When('Admin clicks on the delete icon and click no button', async ({}) => {
  // Step: When Admin clicks on the delete icon and click no button
  // From: tests/features/03_batch.feature:124:6
});

Then('Admin should see the alert box closed and the batch is not deleted', async ({}) => {
  // Step: Then Admin should see the alert box closed and the batch is not deleted
  // From: tests/features/03_batch.feature:125:6
});

Then('Admin should see the alert box closed', async ({}) => {
  // Step: Then Admin should see the alert box closed
  // From: tests/features/03_batch.feature:130:6
});