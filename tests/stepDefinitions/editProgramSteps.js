import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader';
import { send } from 'process';
import { loadTestData } from "../utils/testDataHelper.js";
const { Given, When, Then } = createBdd();
const sheetName = 'program';

Given('Admin is on Program module for editing', async ({ programPage, commonFunctions }) => {
  await commonFunctions.clickMenu('program');
  await commonFunctions.clickSubMenu('program');


});
When('Admin clicks on Edit option for particular program from {string} and {string}', async ({ programPage, commonFunctions }, arg, arg1) => {
  const storedData = loadTestData();
  console.log("Retrieved program Name: ", storedData.programNameForProgram);
  await commonFunctions.clickMenu('program');
  await commonFunctions.clickSubMenu('program');
  await commonFunctions.clickAnywhere();
  await commonFunctions.search(storedData.programNameForProgram);
  await commonFunctions.clickEdit();
});

Then('Admin lands on Program details form', async ({ programPage }) => {
  programPage.Validate_programDetails();

});

Then('Admin should see window title as {string}', async ({ programPage }, arg) => {
  programPage.Validate_programDetails();
});

Then('Admin should see red {string} mark beside mandatory field {string}', async ({ programPage }, arg, arg1) => {
  programPage.VerifyMandatoryFields();

});

When('Admin edits the program name and click on save button from {string} and {string}', async ({ programPage, commonFunctions }, arg, arg1) => {
  const programName = getTestData(sheetName, 'edit_Pname', 'ProgramName') + commonFunctions.getRandomAlphabet(3);
  const Description = getTestData(sheetName, 'edit_Pname', 'Description');
  console.log(`programName: ${programName}`);
  console.log(`Description: ${Description}`);
  await programPage.enterProgramDetails(programName, Description);

});



Then('Updated program name is seen by the Admin', async ({ programPage }) => {
  programPage.verifyProgramName();
});

When('Admin edits the description text and click on save button from {string} and {string}', async ({ programPage }, arg, arg1) => {
  programPage.editDescription();
});

Then('Admin can see the description is updated', async ({ programPage }) => {
  programPage.verifyDescription();
});

When('Admin can change the status of the program from {string} and {string} and click on save button', async ({ programPage }, arg, arg1) => {
  programPage.changeStatus();
});

Then('Status updated can be viewed by the Admin', async ({ programPage }) => {
  programPage.verifyStatus();
});


When('Admin click on save button of the updated program from {string} and {string}', async ({ programPage }, arg, arg1) => {
  programPage.saveProgram();

});

Then('Admin can see the updated program details', async ({ programPage }) => {
  programPage.verifyUpdatedProgram();
});

When('Admin click on cancel button of the updated program from {string} and {string}', async ({ programPage }, arg, arg1) => {
  programPage.clickCancel();
});

Then('Admin can see the Program details form disappears', async ({ commonFunctions }) => {
  await commonFunctions.toBeVisible('program');
});

When('Admin searches with newly updated Program Name from {string} and {string}', async ({ programPage }, arg, arg1) => {
  programPage.searchProgram();
});

Then('Admin verifies that the details are correctly updated from {string} and {string}', async ({ programPage }, arg, arg1) => {
  programPage.verifyUpdatedProgram();
});

When('Admin Click on X button of the updated program from {string} and {string}', async ({ programPage }, arg, arg1) => {
  await programPage.clickClose();
});

Then('Admin can see Program Details form disappears', async ({ commonFunctions }) => {
  await commonFunctions.toBeVisible('program');
});