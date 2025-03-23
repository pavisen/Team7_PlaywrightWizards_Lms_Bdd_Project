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

  Then('Admin should see the program details entered', async ({programPage}) => {
   programPage.verifyPopupFieldsEnabled();
  });
  
Then('Admin should get a message {string}', async function ({programPage},arg ){
    
    const successMessage = await programPage.programCreatedSuccess().textContent();
    expect(successMessage.trim()).toBe("Program Created Successfully");
})
    


When('Admin clicks on New Program under the Program menu bar', async ({programPage}) => {
  
    await programPage.click_addNewProgram();
});

Then('Admin should see pop up window for program details', async ({programPage}) => {
                          
     programPage.verifyPopupFieldsEnabled();                  
});

Then('Admin should see window title as Program Details', async ({programPage}) => {
  const programDetails = await programPage.Validate_programDetails().textContent();
  expect(programDetails.trim()).toBe("Program Details");               
});


Given('Admin is on Program details form', async ({}) => {
  // Step: Given Admin is on Program details form
  // From: tests\Features\02_program.feature:73:9
});

Then('Admin should see red {string} mark beside mandatory field {string} in program details form', async ({programPage}, arg, arg1) => {
        
  await (arg1);
});

When('Admin clicks save button without entering mandatory', async ({commonFunctions}) => {
  await commonFunctions.clickSave();
});

Then('Admin gets message field is required', async ({commonFunctions}) => {
  await commonFunctions.verifyFieldIsRequired();
});

When('Admin clicks Cancel button', async ({commonFunctions}) => {
  await commonFunctions.clickCancel();
});

Then('Admin can see Program Details form disappears.', async ({commonFunctions}) => {
  await commonFunctions.verifyFormDisappears();
});

When('Admin Click on X button.', async ({commonFunctions}) => {
  await commonFunctions.clickClose();
}); 

