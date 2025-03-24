import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader';
const { Given, When, Then } = createBdd();
When('Admin clicks on Edit option for particular program from {string} and {string}', async ({programPage}, arg, arg1) => {
    programPage.editProgram();
     
  });
  
  Then('Admin lands on Program details form', async ({programPage}) => {
    programPage.Validate_programDetails();

       
  });
  
  Then('Admin should see window title as {string}', async ({programPage}, arg) => {
       programPage.Validate_programDetails();
  });
  
  Then('Admin should see red {string} mark beside mandatory field {string}', async ({programPage}, arg, arg1) => {
        programPage.VerifyMandatoryFields();

  });
  
  When('Admin edits the program name and click on save button from {string} and {string}', async ({programPage}, arg, arg1) => {
        programPage.editProgramName();

  });
  
  Then('Updated program name is seen by the Admin', async ({programPage}) => {
    programPage.verifyProgramName();
  });
  
  When('Admin edits the description text and click on save button from {string} and {string}', async ({programPage}, arg, arg1) => {
    programPage.editDescription();
  });
  
  Then('Admin can see the description is updated', async ({programPage}) => {
    programPage.verifyDescription();
  });
  
  When('Admin can change the status of the program from {string} and {string} and click on save button', async ({programPage}, arg, arg1) => {
    programPage.changeStatus();
  });
  
  Then('Status updated can be viewed by the Admin', async ({programPage}) => {
    programPage.verifyStatus();
  });

  
When('Admin click on save button of the updated program from {string} and {string}', async ({programPage}, arg, arg1) => {
    programPage.clickSave();

  });
  
  Then('Admin can see the updated program details', async ({programPage}) => {
    programPage.verifyUpdatedProgram();
  });
  
  When('Admin click on cancel button of the updated program from {string} and {string}', async ({programPage}, arg, arg1) => {
    programPage.clickCancel();
  });
  
  Then('Admin can see the Program details form disappears', async ({commonFunctions}) => {
    await commonFunctions.toBeVisible('program');
  });
  
  When('Admin searches with newly updated Program Name from {string} and {string}', async ({programPage}, arg, arg1) => {
    programPage.searchProgram();
  });
  
  Then('Admin verifies that the details are correctly updated from {string} and {string}', async ({programPage}, arg, arg1) => {
    programPage.verifyUpdatedProgram();
  });
  
  When('Admin Click on X button of the updated program from {string} and {string}', async ({programPage}, arg, arg1) => {
    programPage.clickClose();
  });
  
  Then('Admin can see Program Details form disappears', async ({commonFunctions}) => {
    await commonFunctions.toBeVisible('program');
  });