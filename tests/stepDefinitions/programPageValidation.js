
// import { expect } from "@playwright/test";
// import { createBdd } from "playwright-bdd";
// import { test } from '../fixtures/fixture';
// import { getTestData } from '../utils/excelReader.js';

// const { Given, When, Then } = createBdd();
// const sheetName = 'program';


// Given('Admin is on the program Page', async function ({loggedInPage}) {  
// });

// When('Admin clicks on the Add program button and fill the required fields',async function ({programPage}) {
//     const ProgramName = getTestData('Program', 'valid', 'ProgramName');
  
//     const Description = getTestData('Program', 'valid', 'Description');
//     //this.programStatus=page.locator('.p-radiobutton-box').first();
//     const NoOfClasses = getTestData('Program', 'valid', 'NoOfClasses');
//     console.log(`programName: ${ProgramName}`);
//     console.log(`Description: ${Description}`);
    
//     await page.enterProgramDetails(ProgramName, Description); 
// });
    


// Then('Admin should get a message {string}', async function ({page},arg ){
//     this.programPage = new ProgramPage(page);
//     const successMessage = await this.programPage.programCreatedSuccess.textContent();
//     expect(successMessage.trim()).toBe("Program Created Successfully");
// })

// When('Admin Clicks on the program menu from the header', async function ({commonFunctions}) {
//     // Initialize CommonFunctions for Program module
//     await commonFunctions.clickMenu('program');
    
//   });

//   Then('Admin should be in the {string} Page for managing program', async function ({commonFunctions},expectedText) {
//     const actualText = await commonFunctions.moduleSelectors.program.manage_text.textContent();
//     expect(actualText.trim()).toBe(expectedText);
//   });

//   Then('Admin should see the {string} title in the Program Page', async function ({commonFunctions},expectedTitle) {
//     const actualTitle = await commonFunctions.getHeaderText();
//     expect(actualTitle).toBe(expectedTitle);
//   });
 
  
//   // Then('Admin should see the {string} title in the program Page', async ({}, arg) => {
//   //   // Step: Then Admin should see the "LMS - Learning Management System" title in the program Page
//   //   // From: tests\features\02_program.feature:14:5
//   // });
  