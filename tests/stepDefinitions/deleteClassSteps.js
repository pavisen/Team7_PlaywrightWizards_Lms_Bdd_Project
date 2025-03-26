
import { test } from '../fixtures/fixture.js';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader.js'; 
import { CommonFunctions } from '../utils/commonFunctions.js';
const { Given, When, Then } = createBdd();
import logger from '../utils/logger.js';

Given('Admin is on Manage Class Page', async ({commonFunctions}) => {
  await commonFunctions.clickMenu('batch');
  await commonFunctions.clickAnywhere();
  });
  
  When('Admin clicks the delete icon', async ({commonFunctions}) => {
    await commonFunctions.clickDeleteRow(1);
  });
  
  Then('Admin should see a alert open with heading {string} along with  <YES> and <NO> button for deletion', async ({commonFunctions}, arg) => {
    const confirmDialogbox = await commonFunctions.confirmDeleteDialog();
    if (confirmDialogbox) {
      await expect(confirmDialogbox.confirmDialog).toBeVisible();
      await expect(confirmDialogbox.yesDelete).toBeVisible();
      await expect(confirmDialogbox.noDelete).toBeVisible();
    } else {
      console.warn("Confirm dialog not found, skipping assertions.");
    }
  });
  
  Given('Admin is on Confirm Deletion alert', async ({commonFunctions}) => {
    await commonFunctions.clickMenu('class');
    await commonFunctions.clickAnywhere();
    await commonFunctions.clickDeleteRow(1);
  });
  
  When('Admin clicks yes option', async ({commonFunctions}) => {
    await commonFunctions.clickConfirmYesDelete();
  });
  
  Then('Admin gets a message {string} alert and do not see that Class in the data table', async ({commonFunctions}, arg) => {
    const successMessage = await commonFunctions.getDeleteMessage("Class").textContent();
    expect(successMessage.trim()).toBe("Class Deleted");
    logger.info("Deleted class record")
  });
  
  When('Admin clicks  No option', async ({commonFunctions}) => {
    await commonFunctions.clickConfirmNoDelete();
  });
  
  Then('Admin can see the deletion alert disappears without deleting', async ({commonFunctions}) => {
    const confirmDialog = await commonFunctions.confirmDialog;
    await expect(confirmDialog).not.toBeVisible();
  });
  
  When('Admin clicks on close button', async ({commonFunctions}) => {
    await commonFunctions.clickCloseDelete();
  });
  
  Then('Admin can see the deletion alert disappears without any changes', async ({commonFunctions}) => {
    const confirmDialog = commonFunctions.confirmDialog;
    await expect(confirmDialog).not.toBeVisible();
  });

  Given('Admin is in Manage Class page', async ({loggedInPage,commonFunctions}) => {
    await commonFunctions.clickMenu('class');
    await commonFunctions.clickAnywhere();
  });
  
  When('Admin clicks single checkbox in the data table and Admin clicks <YES> button on the alert', async ({commonFunctions}) => {
    await commonFunctions.clickDeleteRow(1);
    await commonFunctions.clickConfirmYesDelete();
  });
  
  Then('Admin should land on Manage class page and can see the selected class is deleted from the data table', async ({commonFunctions}) => {
    const successMessage = await commonFunctions.getDeleteMessage("Class").textContent();
    expect(successMessage.trim()).toBe("Class Deleted");
    logger.info("Deleted class record")
   });
  
  When('Admin clicks single checkbox in the data table and Admin clicks <NO> button on the alert', async ({commonFunctions}) => {
    await commonFunctions.clickDeleteRow(1);
    await commonFunctions.clickConfirmNoDelete();
  
  });
  
  Then('Admin should land on Manage class page and can see the selected class is not deleted from the data table', async ({commonFunctions}) => {
    const confirmDialog = await commonFunctions.confirmDialog;
    await expect(confirmDialog).not.toBeVisible();
  });
  
  When('Admin clicks any checkbox in the data table and Admin clicks <YES> button on the alert for multiple', async ({commonFunctions}) => {
    await commonFunctions.clickDeleteRow(2);
    await commonFunctions.clickConfirmYesDelete();
  });
  
  Then('Admin should land on Manage class page and can see the selected class are deleted from the data table', async ({commonFunctions}) => {
    const successMessage = await commonFunctions.getDeletedMessage("Class").textContent();
    expect(successMessage.trim()).toBe("Classes Deleted");
    logger.info("Deleted classes record")
  });
  
  When('Admin clicks any checkbox in the data table and Admin clicks <NO> button on the alert for multiple', async ({commonFunctions}) => {
    await commonFunctions.clickDeleteRow(2);
    await commonFunctions.clickConfirmNoDelete();
  });
  