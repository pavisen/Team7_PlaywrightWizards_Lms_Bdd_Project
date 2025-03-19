
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader'; // Importing the getTestData function


// Create BDD steps
const { Given, When, Then } = createBdd();

Given('Admin is on the home page after login', async function ({loggedInPage}){
  
  });
  
  When('Admin clicks the Class Navigation bar in the Header', async function ({commonFunctions}){
    await commonFunctions.clickMenu('class');
  });
  
  Then('Admin should see the {string} Title', async function({commonFunctions},expectedTitle){
    const actualTitle = await commonFunctions.getHeaderText();
    expect(actualTitle).toBe(expectedTitle);
  });

  Then('Admin should see the {string} Header', async function ({commonFunctions}, expectedText) {
    const actualText = await commonFunctions.moduleSelectors.class.manage_text.textContent();
    expect(actualText).toBe(expectedText);
  });


  Then('Admin should see the Search Bar in Manage class page', async ({commonFunctions}) => {
    await expect(commonFunctions.searchBar).toBeVisible(); 
  });
  
  Then('Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit\\/Delete', async ({commonFunctions}) => {
    const expectedHeaders = ['Batch Name', 'Class Topic', 'Class Description', 'Status', 'Class Date','Staff Name','Edit / Delete']; 
    const isHeaderCorrect = await commonFunctions.verifyTableHeaders(expectedHeaders);
    expect(isHeaderCorrect).toEqual(true);

  });
  
  Then('Admin should see the {string} and enabled pagination controls under the data table', async ({commonFunctions}, arg) => {
    const showingText = await commonFunctions.getPaginationText();
    const expectedTextPattern = /Showing (\d+) to (\d+) of (\d+) entries/;
    const match = showingText.match(expectedTextPattern);
    if (!match) {
      throw new Error(`The pagination text does not match the expected format: ${showingText}`);
  }
  const areButtonsVisible = await commonFunctions.arePaginationButtonsVisible();
    expect(areButtonsVisible).toBe(true); 

  });
  
  Then('Admin should see the Sort icon of all the field in the datatable.', async ({commonFunctions}) => {
    const isSortIconPresent = await commonFunctions.isElementPresent('sortIcon', 'header');
    expect(isSortIconPresent).toBe(true);
    
  });
  
  Then('Admin should see the Delete button under the Manage class page header.', async ({commonFunctions}) => {
    await expect(commonFunctions.deleteButton).toBeVisible(); 
  });
  
  Then('Admin should see Total no of classes in below of the data table.', async ({commonFunctions}) => {
    await expect(commonFunctions.totalClassesText).toBeVisible();
    const totalClasses = await commonFunctions.getTotalClasses();  // Get total count
  expect(totalClasses).toBeGreaterThanOrEqual(1);
  });












  export { Given, When, Then };
  