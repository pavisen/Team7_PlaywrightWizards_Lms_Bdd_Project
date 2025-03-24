import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader';
import { saveTestData, loadTestData } from "../utils/testDataHelper.js";

const { Given, When, Then } = createBdd();

const sheetName = 'batch';
Given('Admin is on the Batch Page', async function ({loggedInPage}) {  
   
});

When('Admin Clicks on the Add Batch button and fill the required fields',async function ({batchPage,commonFunctions,testData}) {
    await commonFunctions.clickMenu('batch');
    await commonFunctions.clickSubMenu('batch');
    // Get the data from the excel file
    const ProgramName = getTestData(sheetName, 'valid', 'ProgramName');
    const BatchName = getTestData(sheetName, 'valid', 'BatchName')+getRandomNumberString(1);
    const Description = getTestData(sheetName, 'valid', 'Description');
    const NoOfClasses = getTestData(sheetName, 'valid', 'NumberOfClasses');
    console.log(`programName: ${ProgramName}`);
    console.log(`BatchName: ${BatchName}`);
    console.log(`Description: ${Description}`);
    console.log(`NoOfClasses: ${NoOfClasses}`);
    await batchPage.enterBatchDetails(ProgramName, BatchName, Description, NoOfClasses); 
    await batchPage.clickSave();

    //storing variables for chaining
      const batchNameForBatch=ProgramName+BatchName;
       console.log(batchNameForBatch);
        testData.batchNameForBatch = batchNameForBatch;
        saveTestData(testData); // Store data in file
        console.log(`Storing batchName: ${testData.batchNameForBatch}`);
});
function getRandomNumberString(length) {
  const numbers = '0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return result;
}
    
When('Admin leaves blank one of the mandatory fields', async function ({batchPage}) {
   
    // await commonFunctions.clickMenu('batch');
    // await commonFunctions.clickSubMenu('batch');
    // Get the data from the excel file
    const ProgramName = getTestData(sheetName, 'missingmandatory', 'ProgramName');
    const Description = getTestData(sheetName, 'missingmandatory', 'Description');
    const NoOfClasses = getTestData(sheetName, 'missingmandatory', 'NumberOfClasses');
    console.log(`programName: ${ProgramName}`);
    console.log(`Description: ${Description}`);
    console.log(`NoOfClasses: ${NoOfClasses}`);
    await batchPage.enterBatchDetails(ProgramName, "", Description, NoOfClasses);

    await batchPage.clickSave();

});
Then('Admin should get a error message on the respective mandatory field', async function ({batchPage}) {
    const errorMessages = await batchPage.getAllErrorMessages();
    const expectedErrors = [
     "Batch Name is required.",
     "Program Name is required.",
     "Batch Description is required.",
     "Status is required.",
     "Number of classes is required.",
 ];
 console.log("Actual error messages:", errorMessages);
 console.log("Expected error messages:", expectedErrors);
    for (let i = 0; i < errorMessages.length; i++) {
     expect(errorMessages[i]?.trim()).toBe(expectedErrors[i]);
 }
});
  
When('Admin enters the valid data to all the mandatory fields and click save button', async function ({batchPage}) {
    // await commonFunctions.clickMenu('batch');
    // await commonFunctions.clickSubMenu('batch');
    // Get the data from the excel file
    const ProgramName = getTestData(sheetName, 'validmandatesave', 'ProgramName');
    const BatchName = getTestData(sheetName, 'validmandatesave', 'BatchName');
    const Description = getTestData(sheetName, 'validmandatesave', 'Description');
    const NoOfClasses = getTestData(sheetName, 'validmandatesave', 'NumberOfClasses');
    console.log(`programName: ${ProgramName}`);
    console.log(`BatchName: ${BatchName}`);
    console.log(`Description: ${Description}`);
    console.log(`NoOfClasses: ${NoOfClasses}`);
    await batchPage.enterBatchDetails(ProgramName, BatchName, Description, NoOfClasses); 
    await batchPage.clickSave();
  });


  
When('Admin enters the valid data to all the mandatory fields and click cancel button', async function ({batchPage,commonFunctions}) {
    // await commonFunctions.clickMenu('batch');
    // await commonFunctions.clickSubMenu('batch');
    // Get the data from the excel file
    const ProgramName = getTestData(sheetName, 'cancel', 'ProgramName');
    const BatchName = getTestData(sheetName, 'cancel', 'BatchName');
    const Description = getTestData(sheetName, 'cancel', 'Description');
    const NoOfClasses = getTestData(sheetName, 'cancel', 'NumberOfClasses');
    console.log(`programName: ${ProgramName}`);
    console.log(`BatchName: ${BatchName}`);
    console.log(`Description: ${Description}`);
    console.log(`NoOfClasses: ${NoOfClasses}`);
    await batchPage.enterBatchDetails(ProgramName, BatchName, Description, NoOfClasses); 
    await batchPage.clickCancel();
});

Then('Admin can see the batch details popup closes without creating any batch', async function ({commonFunctions}) {
    const expectedText = " Manage Batch";
    const actualText = await commonFunctions.moduleSelectors.batch.manage_text.textContent();
     expect(actualText).toBe(expectedText);
});

Then('Admin should get a {string} message', async ({batchPage}, arg) => {
    const successMessage = await batchPage.batchCreatedSuccess.textContent();
    expect(successMessage.trim()).toBe("Batch Created Successfully");
  });

Then('Admin should create a {string}', async function ({batchPage},arg ){
    //this.batchPage = new BatchPage(batchpage);
    const successMessage = await batchPage.batchCreatedSuccess.textContent();
    expect(successMessage.trim()).toBe("Batch Created Successfully");
});

When('Admin clicks on the close icon', async function ({batchPage,commonFunctions}) {
    // await commonFunctions.clickMenu('batch');
    // await commonFunctions.clickSubMenu('batch');
    // Get the data from the excel file
    const ProgramName = getTestData(sheetName, 'valid', 'ProgramName');
    const BatchName = getTestData(sheetName, 'valid', 'BatchName');
    const Description = getTestData(sheetName, 'valid', 'Description');
    const NoOfClasses = getTestData(sheetName, 'valid', 'NumberOfClasses');
    console.log(`programName: ${ProgramName}`);
    console.log(`BatchName: ${BatchName}`);
    console.log(`Description: ${Description}`);
    console.log(`NoOfClasses: ${NoOfClasses}`);
    await batchPage.enterBatchDetails(ProgramName, BatchName, Description, NoOfClasses); 
    await batchPage.clickClose(); 

  });   
  
  Then('batch details pop up closes', async ({commonFunctions}) => {
    const expectedText = " Manage Batch";
    const actualText = await commonFunctions.moduleSelectors.batch.manage_text.textContent();
     expect(actualText).toBe(expectedText);
  });
  
  
