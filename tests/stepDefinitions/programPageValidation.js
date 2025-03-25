
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from '../fixtures/fixture';
import { getTestData } from '../utils/excelReader.js';
import logger, { attachLogsAfterEachTest } from '../utils/logger.js';
const { Given, When, Then } = createBdd();



Given('Admin is on the program Page', async function ({loggedInPage}) {  
});


When('Admin Clicks on the program menu from the header', async function ({commonFunctions}) {
    await commonFunctions.clickMenu('program');
    
  });

 Then('Admin should be in the {string} Page for managing program', async function ({commonFunctions},expectedText) {
    const actualText = await commonFunctions.moduleSelectors.program.manage_text.textContent();
    expect(actualText.trim()).toBe(expectedText);
    logger.info('Navigated to Manage Program Page');
  });

  Then('Admin should see the {string} title in the Program Page', async function ({commonFunctions},expectedTitle) {
    const actualTitle = await commonFunctions.getHeaderText();
    expect(actualTitle.trim()).toBe(expectedTitle);
  });

Then('Admin should see Logout option', async ({commonFunctions}) => {
    await commonFunctions.logout.isVisible();
    
  }
 
);


Then('Admin should see the page names as in order Home Program Batch Class', async ({programPage}) => {
  await programPage.click_program();
  const actual_modules = await programPage.modulenames();
  const expected_modulenames = ['Home', 'Program', 'Batch', 'Class','Logout'];
  expect(await actual_modules).toBe(expected_modulenames);
  
});

Then('Admin should see sub menu in menu bar as Add New Program', async ({programPage}) => {
    await programPage.validate_addNewProgram();
  
 
});

Then('Admin should able to see Program name, description, and status for each program', async ({ commonFunctions}) => {
 
  await commonFunctions.clickMenu('program');
  await commonFunctions.escape();
  const expectedHeaders = ['', 'Program Name','Program Description', 'Program Status', 'Edit / Delete'];
  const headerCells = (await commonFunctions.tableHeader.allTextContents()).map((header) => header.trim());
  expect(headerCells).toEqual(expectedHeaders); 
});

Then('Admin should see a Delete button in left top is disabled', async ({commonFunctions}) => {
  await commonFunctions.clickMenu('program');
  await commonFunctions.escape();
  await expect(commonFunctions.deleteButton).toBeVisible();
});

Then('Admin should see Search bar with text as {string}', async ({commonFunctions}, arg) => {
  await commonFunctions.clickMenu('program');
  await commonFunctions.escape();
  await expect(commonFunctions.searchBar).toBeVisible();
    const actualText = await commonFunctions.searchBarByPlaceholder.getAttribute('placeholder');
    expect(actualText.trim()).toBe(arg);
  
});
 
Then('Admin should see checkbox default state as unchecked beside Program Name column as header', async ({commonFunctions}) => {
  await commonFunctions.clickMenu('program');
  await commonFunctions.escape();
   await expect(commonFunctions.checkboxHeaderTableBatch).toBeVisible();
 
});

Then('Admin should see check box default state as unchecked on the left side in all rows against program name', async ({commonFunctions}) => {
  await commonFunctions.clickMenu('program');
  await commonFunctions.escape();
    await expect(commonFunctions.checkboxHeaderTableBatch).toBeVisible();
 
});

Then('Admin should see the sort arrow icon beside to each column header except Edit and Delete', async ({commonFunctions}) => {
  await commonFunctions.clickMenu('program');
  await commonFunctions.escape();
    const isSortIconPresent = await commonFunctions.isElementPresent('sortIcon', 'header');
  expect(isSortIconPresent).toBe(true);
  
  
});

Then('Admin should see the Edit and Delete buttons on each row of the data table', async ({commonFunctions}) => {
  await commonFunctions.clickMenu('program');
  await commonFunctions.escape();
  const isEditPresent = await commonFunctions.isElementPresent(
    "editIcon",
    
    "row",
  );
  const isDeletePresent = await commonFunctions.isElementPresent(
    "deleteIcon",
    "row",
  );
  expect(isEditPresent).toBe(true);
  expect(isDeletePresent).toBe(true);
});

 

Then('Admin should see the text as {string} where \\\\d+ is a number', async ({commonFunctions}, expectedText) => {
  await commonFunctions.clickMenu('program');
  await commonFunctions.escape();
   const actualText = await commonFunctions.paginationText.textContent();
  
  expect(new RegExp(expectedText).test(actualText)).toBe(true);
});
Then('Admin should see the footer as In total there are z programs.', async ({commonFunctions}) => {
  await commonFunctions.clickMenu('program');
  await commonFunctions.escape();
   await commonFunctions.getTotalPrograms();
});

 
  


