/*
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import LoginPage from "../pages/loginPage.js";
import  BatchPage from "../pages/batchPage.js";
import CommonFunctions from '../utils/commonFunctions.js';  
//import readXlsxFile from '../utils/excelReader.js';
import readXlsxFile from 'read-excel-file/node';



import dotenv from "dotenv";
// Load environment variables
dotenv.config();

import fs from 'fs';
import readXlsxFile from 'read-excel-file/node';

async function readExcelData(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        const rows = await readXlsxFile(filePath);
        rows.forEach((row) => {
            console.log(row);
        });

        return rows;
    } catch (error) {
        console.error("Error reading Excel file:", error);
        return [];
    }
}

// Use __dirname to get absolute path
const filePath = `${process.cwd()}/tests/TestData/TestData.xlsx`;
console.log(`Reading file: ${filePath}`);

readExcelData(filePath);
Given('Admin is on the Batch Page', async function () {
    const loginPage = new LoginPage(this.page);
    await loginPage.navigateToLoginPage(process.env.LOGIN_URL);
    await this.page.waitForLoadState('load');
    
    await loginPage.enterUsername(process.env.USERNAME);
    await loginPage.enterPassword(process.env.PASSWORD);
    await loginPage.submitLogin();
    
    const commonFunctions = new CommonFunctions(this.page, "batch");
    await commonFunctions.clickMenu();
});
When('Admin Clicks on the Add Batch button and fill the required fields as {string}, {string} ,{string} ,{string}', async function (ProgramName,batchName,description,noOfClasses) {
//When('Admin Clicks on the Add Batch button and fill the required fields', async function (ProgramName,batchName,description,noOfClasses) {
    const batchPage = new BatchPage(this.page);
    await batchPage.addNewBatch();
    await batchPage.enterBatchDetails(ProgramName,batchName,description,noOfClasses);
    await batchPage.saveBatch();
});

Then('Admin should create a new Batch successfully', async function () {
    const batchPage = new BatchPage(this.page);
    const successMessage = await batchPage.batchCreatedSuccess.textContent();
    expect(successMessage.trim()).toBe("Batch Created Successfully");
});*/