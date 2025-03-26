
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader'; 
import { CommonFunctions } from '../utils/commonFunctions';
const { Given, When, Then } = createBdd();
import logger from '../utils/logger.js';

Given('Admin is on the program page for delete', async ({loggedInPage,commonFunctions}) => {
 await commonFunctions.clickMenu('program');
 await commonFunctions.clickAnywhere();
  });
  
  When('Admin clicks on the delete icon under the Manage program header', async ({programPage,commonFunctions}) => {
    await commonFunctions.deleteSelectedBatches(1);
  });
  
  When('Admin clicks on the delete icon under the Manage program header for multiple rows', async ({programPage,commonFunctions}) => {      
   
  await commonFunctions.deleteSelectedBatches(2);
  });
  
  
Then('The respective row in the program table should be deleted', async ({programPage,commonFunctions}) => {
    const successMessage = await programPage.programdeleteMessage.textContent();
  expect(successMessage.trim()).toBe("Program Deleted");
  });
  
  Then('The respective multiple rows in the program table should be deleted', async ({programPage,commonFunctions}) => {
    const successMessage = await programPage.programdeletedMessage.textContent();
  expect(successMessage.trim()).toBe("Programs Deleted");
  });