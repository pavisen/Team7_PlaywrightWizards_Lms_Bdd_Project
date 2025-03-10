import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import dotenv from "dotenv";
import LoginPage from "../pages/loginPage.js";
import BatchPage from '../pages/batchPage.js'; 
import CommonFunctions from '../utils/commonFunctions.js';  
//const CommonFunctions = require('../utils/commonFunctions.js');  

// Load environment variables
dotenv.config();

//const readXlsxFile = require('read-excel-file');
//console.log("Excel Reader is installed and working!");

Given("Admin is on the home Page",async function () {
    const loginPage = new LoginPage(this.page);
    await loginPage.navigateToLoginPage(process.env.LOGIN_URL);
    await this.page.waitForLoadState('load');
    
    await loginPage.enterUsername(process.env.USERNAME);
    await loginPage.enterPassword(process.env.PASSWORD);
    await loginPage.submitLogin();
   // await this.page.waitForTimeout(500); 


});

When("Admin Clicks on the Batch menu from the header",async function () {
    const commonFunctions=new CommonFunctions(this.page,"batch");
    //const batchPage = new BatchPage(this.page);

     await this.page.waitForTimeout(500);
    await commonFunctions.clickMenu();
});

Then("Admin should be in the Manage Batch Page", async function () {
    const commonFunctions=new CommonFunctions(this.page,"batch");
    const manageText = await commonFunctions.getManageText();
    expect(manageText.trim()).toBe("Manage Batch");

});