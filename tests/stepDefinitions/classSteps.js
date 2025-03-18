
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';


// Create BDD steps
const { Given, When, Then } = createBdd();

Given('Admin is on the home page after login', async function ({loggedInPage}){
  });
  
  When('Admin clicks the Class Navigation bar in the Header', async function ({commonFunctions}){
    await commonFunctions.clickMenu();
  });
  
  Then('Admin should see the {string} Title', async function({commonFunctions},expectedTitle){
    const actualTitle = await commonFunctions.getHeaderText();
    expect(actualTitle).toBe(expectedTitle);
  });

  Then('Admin should see the {string} Header', async function ({commonFunctions}, expectedText) {
    const actualText = await commonFunctions.moduleSelectors.class.manage_text.textContent();
    expect(actualText).toBe(expectedText);
  });
















  export { Given, When, Then };
  