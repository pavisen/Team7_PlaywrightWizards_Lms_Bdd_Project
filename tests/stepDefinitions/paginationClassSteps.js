import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { getTestData } from "../utils/excelReader";
import logger, { attachLogsAfterEachTest } from '../utils/logger.js';

// Create BDD steps
const { Given, When, Then } = createBdd();

Given('Admin is on Manage class page', async ({paginationPage,commonFunctions}) => {
    await commonFunctions.clickMenu('class');
  await commonFunctions.clickAnywhere();
  });
  
  When('Admin clicks Next page link on the class table', async ({commonFunctions}) => {
 
    await commonFunctions.arePaginationButtonsVisible();
    await commonFunctions.goToNextPage();
  });
  
  Then('Admin should see the next page record on the table  with Pagination has next active link enabled', async ({commonFunctions}) => {
    await commonFunctions.verifyNextPageEnabled();
  });
  
  When('Admin clicks Last page link', async ({commonFunctions}) => {
    await commonFunctions.arePaginationButtonsVisible();
    await commonFunctions.goToLastPage();
  });
  
  Then('Admin should see the last page record on the table with Next page link are disabled', async ({commonFunctions}) => {
    await commonFunctions.verifyLastPage();
  });
  
  Given('Admin is on next page of class table', async ({commonFunctions}) => {
    await commonFunctions.clickMenu('class');
    await commonFunctions.clickAnywhere();
    await commonFunctions.arePaginationButtonsVisible();
    await commonFunctions.goToNextPage();
  });
  
  When('Admin clicks previous page link', async ({commonFunctions}) => {
     await commonFunctions.goToPreviousPage();
  });
  
  Then('Admin should see the previous page record on the table with pagination has previous page link enabled', async ({commonFunctions}) => {
    await commonFunctions.verifyPreviousPage();
  });
  
  Given('Admin is on last class page', async ({commonFunctions}) => {
    await commonFunctions.clickMenu('class');
    await commonFunctions.clickAnywhere();
    await commonFunctions.arePaginationButtonsVisible();
    await commonFunctions.goToLastPage();
  });
  
  When('Admin clicks first page link', async ({commonFunctions}) => {
    await commonFunctions.goToFirstPage();
  });


Then('Admin should see the very first page record on the table with Previous page link are disabled', async ({commonFunctions}) => {
    await commonFunctions.verifyFirstPage();
  });
