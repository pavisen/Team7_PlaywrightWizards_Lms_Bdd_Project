
import { test } from '../fixtures/fixture.js';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader.js'; 
import { CommonFunctions } from '../utils/commonFunctions.js';
const { Given, When, Then } = createBdd();
import logger from '../utils/logger.js';

Given('Admin is on Manage Class Page', async ({}) => {
    // Step: Given Admin is on Manage Class Page
    // From: tests/features/04_class.feature:205:1
  });
  
  When('Admin clicks the delete icon', async ({}) => {
    // Step: When Admin clicks the delete icon
    // From: tests/features/04_class.feature:206:1
  });
  
  Then('Admin should see a alert open with heading {string} along with  <YES> and <NO> button for deletion', async ({}, arg) => {
    // Step: Then Admin should see a alert open with heading "Confirm" along with  <YES> and <NO> button for deletion
    // From: tests/features/04_class.feature:207:1
  });
  
  Given('Admin is on Confirm Deletion alert', async ({}) => {
    // Step: Given Admin is on Confirm Deletion alert
    // From: tests/features/04_class.feature:210:1
  });
  
  When('Admin clicks yes option', async ({}) => {
    // Step: When Admin clicks yes option
    // From: tests/features/04_class.feature:211:1
  });
  
  Then('Admin gets a message {string} alert and do not see that Class in the data table', async ({}, arg) => {
    // Step: Then Admin gets a message "Successful Class Deleted" alert and do not see that Class in the data table
    // From: tests/features/04_class.feature:212:1
  });
  
  When('Admin clicks  No option', async ({}) => {
    // Step: When Admin clicks  No option
    // From: tests/features/04_class.feature:216:1
  });
  
  Then('Admin can see the deletion alert disappears without deleting', async ({}) => {
    // Step: Then Admin can see the deletion alert disappears without deleting
    // From: tests/features/04_class.feature:217:1
  });
  
  When('Admin clicks on close button', async ({}) => {
    // Step: When Admin clicks on close button
    // From: tests/features/04_class.feature:221:1
  });
  
  Then('Admin can see the deletion alert disappears without any changes', async ({}) => {
    // Step: Then Admin can see the deletion alert disappears without any changes
    // From: tests/features/04_class.feature:222:1
  });

  Given('Admin is in Manage Class page', async ({}) => {
    // Step: Given Admin is in Manage Class page
    // From: tests/features/04_class.feature:225:1
  });
  
  When('Admin clicks any checkbox in the data table and Admin clicks <YES> button on the alert', async ({}) => {
    // Step: When Admin clicks any checkbox in the data table and Admin clicks <YES> button on the alert
    // From: tests/features/04_class.feature:226:1
  });
  
  Then('Admin should land on Manage class page and can see the selected class is deleted from the data table', async ({}) => {
    // Step: Then Admin should land on Manage class page and can see the selected class is deleted from the data table
    // From: tests/features/04_class.feature:227:1
  });
  
  When('Admin clicks any checkbox in the data table and Admin clicks <NO> button on the alert', async ({}) => {
    // Step: When Admin clicks any checkbox in the data table and Admin clicks <NO> button on the alert
    // From: tests/features/04_class.feature:231:1
  });
  
  Then('Admin should land on Manage class page and can see the selected class is not deleted from the data table', async ({}) => {
    // Step: Then Admin should land on Manage class page and can see the selected class is not deleted from the data table
    // From: tests/features/04_class.feature:232:1
  });
  
  When('Admin clicks any checkbox in the data table and Admin clicks <YES> button on the alert for multiple', async ({}) => {
    // Step: When Admin clicks any checkbox in the data table and Admin clicks <YES> button on the alert for multiple
    // From: tests/features/04_class.feature:236:1
  });
  
  Then('Admin should land on Manage class page and can see the selected class are deleted from the data table', async ({}) => {
    // Step: Then Admin should land on Manage class page and can see the selected class are deleted from the data table
    // From: tests/features/04_class.feature:237:1
  });
  
  When('Admin clicks any checkbox in the data table and Admin clicks <NO> button on the alert for multiple', async ({}) => {
    // Step: When Admin clicks any checkbox in the data table and Admin clicks <NO> button on the alert for multiple
    // From: tests/features/04_class.feature:241:1
  });
  