
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


  Then('Admin should see the Search Bar in Manage class page', async ({}) => {
    // Step: Then Admin should see the Search Bar in Manage class page
    // From: tests/features/04_class.feature:18:1
  });
  
  Then('Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit\\/Delete', async ({}) => {
    // Step: Then Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit/Delete
    // From: tests/features/04_class.feature:22:1
  });
  
  Then('Admin should see the {string} and enabled pagination controls under the data table', async ({}, arg) => {
    // Step: Then Admin should see the " showing x to y of  z entries" and enabled pagination controls under the data table
    // From: tests/features/04_class.feature:26:1
  });
  
  Then('Admin should see the Sort icon of all the field in the datatable.', async ({}) => {
    // Step: Then Admin should see the Sort icon of all the field in the datatable.
    // From: tests/features/04_class.feature:30:1
  });
  
  Then('Admin should see the Delete button under the Manage class page header.', async ({}) => {
    // Step: Then Admin should see the Delete button under the Manage class page header.
    // From: tests/features/04_class.feature:34:1
  });
  
  Then('Admin should see Total no of classes in below of the data table.', async ({}) => {
    // Step: Then Admin should see Total no of classes in below of the data table.
    // From: tests/features/04_class.feature:38:1
  });












  export { Given, When, Then };
  