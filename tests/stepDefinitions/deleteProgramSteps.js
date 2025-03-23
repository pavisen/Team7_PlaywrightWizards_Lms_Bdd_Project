import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from '../fixtures/fixture';
import { getTestData } from '../utils/excelReader.js';
import { CommonFunctions } from '../utils/commonFunctions';

const { Given, When, Then } = createBdd();
When('Admin clicks on delete button for a program', async ({programPage}) => {
    await programPage.clickDelete();
  });
  
  Then('Admin will get confirm deletion popup', async ({programPage}) => {
    await programPage.confirmDeletion();
  });
  
  Given('Admin is on Confirm deletion form', async ({programPage}) => {
    await programPage.confirmDeletion();
  });
  
  When('Admin clicks on {string} button', async ({programPage}, arg) => {
    await programPage.clickYes();
  });
  
  Then('Admin can see {string} message', async ({programPage}, arg) => {
    await programPage.confirmationMessage();
  });
  
  When('Admin Searches for {string}', async ({programPage}, arg) => {
    await programPage.searchProgram();
  });
  
  Then('There should be zero results.', async ({programPage}) => {
    await programPage.noResults();
  });
  
  Given('Admin is on Program Confirm Deletion Page after selecting a program to delete', async ({programPage}) => {
    await programPage.confirmDeletion();
  });
  
  When('Admin clicks on No button', async ({programPage}) => {
    await programPage.clickNo();
  });
  
  Then('Admin can see Confirmation form disappears', async ({programPage}) => {
    await programPage.confirmationMessage();
  });
  When('Admin Click on X button', async ({programPage}) => {
    await programPage.clickX();
  });
  
  Then('Admin can see Confirm Deletion form disappear', async ({programPage}) => {
    await programPage.confirmationMessage();
  });
  