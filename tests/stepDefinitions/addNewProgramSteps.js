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
    const programName = getTestData(sheetName, 'valid', 'ProgramName') +getRandomAlphabet(3);
    const Description = getTestData(sheetName, 'valid', 'Description');
    console.log(`programName: ${programName}`);
    console.log(`Description: ${Description}`);
    await programPage.enterProgramDetails(programName,  Description); 
});
function getRandomAlphabet(length) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return result;
  }

Then('Admin should get a message {string}', async function ({programPage},arg ){
    
    const successMessage = await programPage.programCreatedSuccess().textContent();
    expect(successMessage.trim()).toBe("Program Created Successfully");
})
    


 

