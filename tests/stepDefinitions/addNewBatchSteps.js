import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader';
 
const { Given, When, Then } = createBdd();

const sheetName = 'batch';
Given('Admin is on the Batch Page', async function ({loggedInPage}) {  
});

When('Admin Clicks on the Add Batch button and fill the required fields',async function ({batchPage,commonFunctions}) {
    await commonFunctions.clickMenu('batch');
    await commonFunctions.clickSubMenu('batch');
    // Get the data from the excel file
    const ProgramName = getTestData(sheetName, 'valid', 'ProgramName');
    const BatchName = getTestData(sheetName, 'valid', 'BatchName');
    const Description = getTestData(sheetName, 'valid', 'Description');
    //this.batchStatus=page.locator('.p-radiobutton-box').first();
    const NoOfClasses = getTestData('batch', 'valid', 'NumberOfClasses');
    console.log(`programName: ${ProgramName}`);
    console.log(`BatchName: ${BatchName}`);
    console.log(`Description: ${Description}`);
    console.log(`NoOfClasses: ${NoOfClasses}`);
    await batchPage.enterBatchDetails(ProgramName, BatchName, Description, NoOfClasses); 
});
    


Then('Admin should create a {string}', async function ({batchPage},arg ){
    //this.batchPage = new BatchPage(batchpage);
    const successMessage = await batchPage.batchCreatedSuccess.textContent();
    expect(successMessage.trim()).toBe("Batch Created Successfully");
})
