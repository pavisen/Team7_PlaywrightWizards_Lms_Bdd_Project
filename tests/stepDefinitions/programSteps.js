import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import {test} from '../fixtures/fixture';
import { readDataFromExcelFile } from "../utils/excelReader";

// Create BDD steps
const { Given, When, Then } = createBdd();
 
Given(`Admin is on home page page after Login`, async function({loggedInPage}) {
    const currentURL = this.page.url();
    console.log(`Current URL: ${currentURL}`);
     
});

When(`Admin clicks Program on the navigation bar`, async function({programPage}) {
   
    await programPage.click_program();
});

Then(`Admin should be navigated to Program Page`,  async function({programPage}) {
    const currentURL = programPage.url();
    console.log(`Current URL: ${currentURL}`);
    expect(currentURL).toContain('program');
       
});


When(`Admin clicks program on the menu bar`, async function({programPage}) {
    await programPage.click_program();
    
});

Then(`Admin should see Logout option`, async function ({programPage}) {
    expect(await programPage.logout_menubar()).toBeTruthy();
    
    
});

Then(`Admin should see the heading LMS - Learning Management System`, async function({programPage}) {
    const actual_text = programPage.validate_headerLms();
    expect(actual_text.trim()).toBe('LMS - Learning Management System');
});

Then(`Admin should see the page names as in order Home Program Batch Class`, () => {
    console.log('Home Program Batch Class');
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Admin should see sub menu in menu bar as Add New Program`, async function({programPage}){

 
    await programPage.validate_addNewProgram();

    
 
  
   
});

Then(`Admin should see the heading Manage Program`, async function({programPage}) {
    const actual_text = await programPage.validate_manageprogram();
    expect(actual_text.trim()).toBe('Manage Program');
    
});