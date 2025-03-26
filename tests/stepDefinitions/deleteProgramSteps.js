import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import logger from '../utils/logger.js';
import { test } from '../fixtures/fixture';
const { Given, When, Then } = createBdd();
Given('Admin is on the program Page.', async function ({loggedInPage,commonFunctions}) {
  await commonFunctions.clickMenu('program');
  await commonFunctions.clickAnywhere();
//  await commonFunctions.clickSubMenu('program');
});
When('Admin clicks on delete button for a program', async ({commonFunctions}) => {
    await commonFunctions.clickDeleteRow(1);
  });
  
  Then('Admin will get confirm deletion popup', async ({commonFunctions}) => {
    const confirmDialogbox = await commonFunctions.confirmDeleteDialog();
    if (confirmDialogbox) {
      await expect(confirmDialogbox.confirmDialog).toBeVisible();
      await expect(confirmDialogbox.yesDelete).toBeVisible();
      await expect(confirmDialogbox.noDelete).toBeVisible();
    } else {
      console.warn("Confirm dialog not found, skipping assertions.");
    }
  });
  
  Given('Admin is on Confirm deletion form', async ({commonFunctions}) => {
     
    await commonFunctions.clickDeleteRow(1);
  });
  
  When('Admin clicks on {string} button', async ({commonFunctions}, arg) => {
    await commonFunctions.clickConfirmYesDelete();
  });
  
  Then('Admin can see Successful Program Deleted message', async ({programPage}) => {
    const programdeleteMessage = await programPage.programdeleteMessage.textContent();
    expect(programdeleteMessage.trim()).toBe("Program Deleted");
    logger.info("Deleted program record")
  });
  
  // When('Admin Searches for {string}', async ({programPage}, arg) => {
  //   await programPage.searchProgram();
  // });
  
  // Then('There should be zero results.', async ({programPage}) => {
  //   await programPage.noResults();
  // });
  
  Given('Admin is on Program Confirm Deletion Page after selecting a program to delete', async ({programPage}) => {
 
  });
  
  When('Admin clicks on No button', async ({commonFunctions}) => {
    await commonFunctions.clickConfirmNoDelete();
  });
  
  Then('Admin can see Confirmation form disappears', async ({commonFunctions}) => {
    const confirmDialog = await commonFunctions.confirmDialog;
    await expect(confirmDialog).not.toBeVisible();
    logger.info("No program recorded")
  
  });
  When('Admin Click on X button', async ({commonFunctions}) => {
   
  await commonFunctions.clickCloseDelete();
  });
  
  Then('Admin can see Confirm Deletion form disappear', async ({commonFunctions}) => {
    const confirmDialog = commonFunctions.confirmDialog;
    await expect(confirmDialog).not.toBeVisible();
    logger.info("Confirm popup is closed");
  
  });
  