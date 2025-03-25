
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from '../fixtures/fixture';
import { getTestData } from '../utils/excelReader.js';
import { CommonFunctions } from '../utils/commonFunctions';

const { Given, When, Then } = createBdd();
Given('Admin is on Program module', async ({loggedInPage,paginationPage,commonFunctions}) => {
  await commonFunctions.clickMenu('program');
  await commonFunctions.escape();
  });
  
  When('Admin clicks Next page link on the program table', async ({commonFunctions}) => {
    await commonFunctions.arePaginationButtonsVisible();
    await commonFunctions.goToNextPage();
  });
  
  Then('Admin should see the Pagination has {string} active link', async ({commonFunctions}, next) => {
    await commonFunctions.verifyNextPageEnabled();
  });



  When('Admin clicks Last page link in program table', async ({commonFunctions}) => {
    await commonFunctions.arePaginationButtonsVisible();
      await commonFunctions.goToLastPage();
  });

  
Then('Admin should see the last page record on the program table with Next page link are disabled', async ({commonFunctions}) => {
  await commonFunctions.verifyLastPage();
});
  
Given('Admin is on last page of Program module table', async ({commonFunctions}) => {
  await commonFunctions.clickMenu('program');
  await commonFunctions.escape();
  await commonFunctions.arePaginationButtonsVisible();
  await commonFunctions.goToLastPage();
});




  When('Admin clicks Previous page link', async ({commonFunctions}) => {
    await commonFunctions.arePaginationButtonsVisible();
    await commonFunctions.goToFirstPage();
  });
  
  Then('Admin should see the previous page record on the table with pagination has previous page link', async ({commonFunctions}) => {
    await commonFunctions.verifyNextPageEnabled();
  });
  
  Given('Admin is on Previous Program page', async ({commonFunctions}) => {
  
    await commonFunctions.arePaginationButtonsVisible();
    await commonFunctions.goToPreviousPage();
      
  });

  Given('Admin is on Next Program page', async ({commonFunctions}) => {
    await commonFunctions.clickMenu('program');
    await commonFunctions.escape();
    await commonFunctions.arePaginationButtonsVisible();
    await commonFunctions.goToNextPage();
  });

  When('Admin clicks First page link', async ({commonFunctions}) => {
    await commonFunctions.goToFirstPage();
  });

Then('Admin should see the very first page record on the program table with Previous page link are disabled', async ({commonFunctions}) => {      
  await commonFunctions.verifyFirstPage();
});




  

