import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader';
 
const { Given, When, Then } = createBdd();

const sheetName = 'program';
Given('Admin is on the program Page.', async function ({loggedInPage}) {  
});

When('Admin Clicks on the Add program button and fill the required fields',async function ({programPage,commonFunctions}) {
    await commonFunctions.clickMenu('program');
    await commonFunctions.clickSubMenu('program');
    // Get the data from the excel file
    const ProgramName = getTestData(sheetName, 'valid', 'ProgramName');
    const Description = getTestData(sheetName, 'valid', 'Description');
    console.log(`programName: ${ProgramName}`);
    console.log(`Description: ${Description}`);
    await programPage.enterProgramDetails(ProgramName,  Description); 
});


Then('Admin should get a message {string}', async function ({page},arg ){
    this.programPage = new ProgramPage(page);
    const successMessage = await this.programPage.programCreatedSuccess.textContent();
    expect(successMessage.trim()).toBe("Program Created Successfully");
})
    


 

