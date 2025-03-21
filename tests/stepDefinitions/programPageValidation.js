
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from '../fixtures/fixture';
import { getTestData } from '../utils/excelReader.js';

const { Given, When, Then } = createBdd();



Given('Admin is on the program Page', async function ({loggedInPage}) {  
});


When('Admin Clicks on the program menu from the header', async function ({commonFunctions}) {
    await commonFunctions.clickMenu('program');
    
  });

 Then('Admin should be in the {string} Page for managing program', async function ({commonFunctions},expectedText) {
    const actualText = await commonFunctions.moduleSelectors.program.manage_text.textContent();
    expect(actualText.trim()).toBe(expectedText);
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
  const actual_modules = await programPage.modulenames();
  const expected_modulenames = ['Home', 'Program', 'Batch', 'Class'];
  expect(await actual_modules).toBe(expected_modulenames);
  
});

Then('Admin should see sub menu in menu bar as Add New Program', async ({programPage}) => {
    await programPage.validate_addNewProgram();
  
 
});

Then('Admin should able to see Program name, description, and status for each program', async ({}) => {
    
});

Then('Admin should see a Delete button in left top is disabled', async ({commonFunctions}) => {
  await expect(commonFunctions.deleteButton).toBeVisible();
});

Then('Admin should see Search bar with text as {string}', async ({commonFunctions}, Search) => {
  await expect(commonFunctions.searchBar).toBeVisible();
    const actualText = await commonFunctions.searchBar.textContent();
    expect(actualText.trim()).toBe(Search);
  
});

Then('Admin should see data table with column header on the Manage Program Page as  Program Name, Program Description, Program Status, Edit\\/Delete', async ({commonFunctions}) => {
  const expectedHeaders = [
    "Program Name",
    "Program Description",
    "Program Status",
    "Edit / Delete",
  ];
  const isHeaderCorrect =
    await commonFunctions.verifyTableHeaders(expectedHeaders);
  expect(isHeaderCorrect).toEqual(true);
});

Then('Admin should see checkbox default state as unchecked beside Program Name column as header', async ({}) => {
        
});

Then('Admin should see check box default state as unchecked on the left side in all rows against program name', async ({}) => {

});

Then('Admin should see the sort arrow icon beside to each column header except Edit and Delete', async ({commonFunctions}) => {
  const isSortIconPresent = await commonFunctions.isElementPresent(
    "sortIcon",
    "header",
  );
  expect(isSortIconPresent).toBe(true);
});

Then('Admin should see the Edit and Delete buttons on each row of the data table', async ({}) => {

});

Then('Admin should see the text as {string} along with Pagination icon below the table. x- starting record number on that page y-ending record number on that page z-Total number of records', async ({}, arg) => {

});
Then('Admin should see the footer as In total there are z programs.', async ({}) => {
 
});

 
  


