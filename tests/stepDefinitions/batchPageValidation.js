
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader'; 
import { CommonFunctions } from '../utils/commonFunctions';
const { Given, When, Then } = createBdd();



Given('Admin is on the home page after Login', async ({loggedInPage}) => {

});

When('Admin Clicks on the Batch menu from the header', async function ({commonFunctions}) {
  // Initialize CommonFunctions for Batch module
  await commonFunctions.clickMenu('batch');
  
});

Then('Admin should be in the {string} Page', async function ({commonFunctions},expectedText) {
  const actualText = await commonFunctions.moduleSelectors.batch.manage_text.textContent();
  expect(actualText).toBe(expectedText);
});

Then('Admin should see the {string} Title in the Batch Page', async function ({commonFunctions},expectedTitle) {
  const actualTitle = await commonFunctions.getHeaderText();
  expect(actualTitle).toBe(expectedTitle);
});

// Given('Admin is on the home page', async ({commonFunctions},expectedTitle) => {
//   const actualTitle = await commonFunctions.getHeaderText();
//   expect(actualTitle).toBe(expectedTitle);
// });

Then('Admin should see the {string} Heading', async ({commonFunctions},expectedTexts) => {
  const actualTexts = await commonFunctions.moduleSelectors.batch.manage_text.textContent();
  expect(actualTexts).toBe(expectedTexts);

});

Then('Admin should see the disabled Delete Icon under the header', async ({commonFunctions}) => {
  await expect(commonFunctions.deleteButton).toBeVisible(); 
 // expect(actual).toBe(expected);
});

Then('Admin should see the enabled pagination controls under the data table', async ({commonFunctions}) => {
  await commonFunctions.arePaginationButtonsVisible();
});

Then('Admin should see the edit icon in each row', async ({commonFunctions}) => {
  await (commonFunctions.editButtoneachRowBatch.first()).waitFor({ state: 'visible' });
});

Then('Admin should see the delete icon in each row', async ({commonFunctions}) => {
  await commonFunctions.deleteButtoneachRowBatch.waitFor({ state: 'visible' });
});

Then('Admin should see the checkbox in each row', async ({commonFunctions}) => {
  await (commonFunctions.checkboxEachRowbatch.first()).waitFor({ state: 'visible' });

});

Then('Admin should see the datatable headers Batch name, Batch Description,Batch Status, No Of Classes, Program Name, Edit\\/Delete', async ({commonFunctions}) => {
  const expectedHeaders = ['Batch Name', 'Batch Description', 'Batch Status', 'No Of Classes', 'Program Name', 'Edit / Delete'];
    const isHeaderCorrect = await commonFunctions.verifyTableHeaders(expectedHeaders);
    expect(isHeaderCorrect).toEqual(true);
});

Then('Admin should see the checkbox  in the datatable header row', async ({commonFunctions}) => {
  await expect(commonFunctions.checkboxHeaderTableBatch).toBeVisible();
 
});

Then('Admin should see the sort icon next to all Datatable headers', async ({commonFunctions}) => {
  //await commonFunctions.sortIcon.waitFor({ state: 'visible' });
  const isSortIconPresent = await commonFunctions.isElementPresent('sortIcon', 'header');
    expect(isSortIconPresent).toBe(true);
});

Given('Admin is on the batch Page', async function ({paginationPage,commonFunctions}) {  
  await commonFunctions.clickMenu('batch');
  await commonFunctions.clickAnywhere();
});


When('Admin clicks on the delete icon under the Manage batch header', async ({commonFunctions}) => {
  
  await commonFunctions.deleteSelectedBatches(1);

});

When('Admin clicks on the delete icon under the Manage batch header for multiple rows', async ({commonFunctions}) => {
  
  await commonFunctions.deleteSelectedBatches(2);

});

Then('The respective row in the table should be deleted', async ({batchPage,commonFunctions}) => {
  // const successMessage = await (batchPage.batchDeletedSuccess).textContent();
  // expect(successMessage.trim()).toBe("batch Deleted");

  const successMessage = await commonFunctions.deletedMessage.textContent();
  expect(successMessage.trim()).toBe("Batches Deleted");
  //await commonFunctions.verifyBatchDeletion();
});

When('Admin clicks next page link on the data table', async ({commonFunctions}) => {
  
  await commonFunctions.arePaginationButtonsVisible();
  await commonFunctions.goToNextPage();
});

Then('Admin should see the Next enabled link', async ({commonFunctions}) => {
     await commonFunctions.verifyNextPageEnabled();

});

When('Admin clicks last page link on the data table', async ({commonFunctions}) => {
  
  await commonFunctions.arePaginationButtonsVisible();
  await commonFunctions.goToLastPage();
});

Then('Admin should see the last page link with next page link disabled on the table', async ({commonFunctions}) => {
  await commonFunctions.verifyLastPage();
});

When('Admin clicks previous page link on the data table', async ({commonFunctions}) => {

  await commonFunctions.arePaginationButtonsVisible();
  await commonFunctions.goToNextPage();
  await commonFunctions.goToPreviousPage();

});

Then('Admin should see the previous page on the table', async ({commonFunctions}) => {
  await commonFunctions.verifyPreviousPage();

});

When('Admin clicks first page link on the data table', async ({commonFunctions}) => {
 
  await commonFunctions.arePaginationButtonsVisible();
  await commonFunctions.goToLastPage();
  await commonFunctions.goToFirstPage();
});
Then('Admin should see the very first page on the data table', async ({commonFunctions}) => {
  await commonFunctions.verifyFirstPage();
});

