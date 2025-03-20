
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from '../fixtures/fixture';
import { getTestData } from '../utils/excelReader.js';

const { Given, When, Then } = createBdd();



Given('Admin is on the program Page', async function ({loggedInPage}) {  
});


When('Admin Clicks on the program menu from the header', async function ({commonFunctions}) {
    // Initialize CommonFunctions for Program module
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
 
  



  
//   When('Admin Clicks on the program menu from the header', async ({}) => {
//     // Step: When Admin Clicks on the program menu from the header
//     // From: tests\features\02_program.feature:8:5
//   });
   
  
//   Then('Admin should be in the {string} Page for managing program', async ({}, arg) => {
//     // Step: Then Admin should be in the "Manage Program" Page for managing program
//     // From: tests\Features\02_program.feature:9:5
//   });
  
//   Then('Admin should see the {string} title in the Program Page', async ({}, arg) => {
//     // Step: Then Admin should see the "LMS - Learning Management System" title in the Program Page
//     // From: tests\Features\02_program.feature:14:5
//   });
  
  