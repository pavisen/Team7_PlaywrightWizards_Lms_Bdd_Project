
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
 
  


