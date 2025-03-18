
import { expect } from "@playwright/test";
import LoginPage from "../tests/pages/loginPage.js";
import  BatchPage from "../tests/pages/batchPage.js";
import { getTestData } from '../tests/utils/excelReader.js';

import CommonFunctions from '../tests/utils/commonFunctions.js';  

Given('Admin is on the Batch Page', async function ({page}) {
    this.loginPage = new LoginPage(page);
    await this.loginPage.navigateToLoginPage(process.env.LOGIN_URL);
    await this.loginPage.waitForLoadState('load');
    
    await this.loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    await this.loginPage.submitLogin();
   
});

When('Admin Clicks on the Add Batch button and fill the required fields',async function ({page}) {
    const ProgramName = getTestData('Batch', 'valid', 'ProgramName');
    const BatchName = getTestData('Batch', 'valid', 'BatchName');
    const Description = getTestData('Batch', 'valid', 'Description');
    //this.batchStatus=page.locator('.p-radiobutton-box').first();
    const NoOfClasses = getTestData('Batch', 'valid', 'NoOfClasses');
    console.log(`programName: ${ProgramName}`);
    console.log(`BatchName: ${BatchName}`);
    console.log(`Description: ${Description}`);
    console.log(`NoOfClasses: ${NoOfClasses}`);
    await page.enterBatchDetails(ProgramName, BatchName, Description, NoOfClasses); 
});
    


Then('Admin should create a {string}', async function ({page},arg ){
    this.batchPage = new BatchPage(page);
    const successMessage = await this.batchPage.batchCreatedSuccess.textContent();
    expect(successMessage.trim()).toBe("Batch Created Successfully");
})



// const ExcelDataProvider = readDataFromExcelFile('TestData.xlsx');

    // test.BeforeAll(async ({ page }) => {
    // console.log(ExcelDataProvider);
    // });
    
    // for(const data of ExcelDataProvider) {
    //     test(`Add New Batch : ${data.ProgramName}, BatchName: ${data.BatchName}, Description: ${data.Description}, NoOfClasses: ${data.NoOfClasses}`, async ({ page }) => {
    //     const programName = data.ProgramName;
    //     const batchName = data.BatchName;   
    //     const description = data.Description;
    //     const noOfClasses = data.NoOfClasses;
    //     this.commonFunctions = new CommonFunctions(page, 'batch');
    //     await this.commonFunctions.clickMenu();
    //     this.batchPage = new BatchPage(page);
    //     await this.batchPage.addNewBatch();
    //     await this.batchPage.enterBatchDetails(programName,batchName,description,noOfClasses);
    //     await this.batchPage.saveBatch();
        
    //     });
    // }