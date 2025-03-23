import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { getTestData } from "../utils/excelReader";
import logger, { attachLogsAfterEachTest } from '../utils/logger.js';
import { saveTestData, loadTestData } from "../utils/testDataHelper.js";

// Create BDD steps
const { Given, When, Then } = createBdd();
const sheetName = "class";
const storedData = loadTestData(); // Retrieve stored data

Given('Admin is on the Manage class page for search', async ({commonFunctions}) => {
    await commonFunctions.clickMenu("class");
    await commonFunctions.clickAnywhere();
});

When('Admin enter the Batch Name in search textbox', async ({commonFunctions}) => {
    const storedBatchName = storedData.batchName;
    console.log("Retrieved Batch Name: ", storedBatchName);
    await commonFunctions.search(storedBatchName);
  });
  
  Then('Admin should see Class details are searched by Batch Name', async ({commonFunctions}) => {
    const storedBatchName = storedData.batchName;
    console.log("Retrieved Batch Name: ", storedBatchName);
    await commonFunctions.verifySearch(storedBatchName);
  });
  
  When('Admin enter the Class topic in search textbox', async ({commonFunctions}) => {
      // Retrieving the stored test data
    const storedClassTopic = storedData.classTopic;
    console.log("Retrieved Class Topic: ", storedClassTopic);
    await commonFunctions.search(storedClassTopic);
  });
  
  Then('Admin should see Class details are searched by Class topic', async ({commonFunctions}) => {
    const storedClassTopic = storedData.classTopic;
    console.log("Retrieved Class Topic: ", storedClassTopic);
    await commonFunctions.verifySearch(storedClassTopic);
  });
  
  When('Admin enter the Staff Name in search textbox', async ({commonFunctions}) => {
    const storedStaffName = storedData.staffName;
    console.log("Retrieved Staff Name: ", storedStaffName);
    await commonFunctions.search(storedStaffName);
  });
  
  Then('Admin should see Class details are searched by Staff name', async ({commonFunctions}) => {
    const storedStaffName = storedData.staffName;
    console.log("Retrieved Staff Name: ", storedStaffName);
    await commonFunctions.verifySearch(storedStaffName);
  });
