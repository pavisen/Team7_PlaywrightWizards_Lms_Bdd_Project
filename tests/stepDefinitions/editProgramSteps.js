import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { getTestData } from "../utils/excelReader";
import { send } from "process";
import { loadTestData, saveTestData } from "../utils/testDataHelper.js";
import logger from "../utils/logger.js";
import { CommonFunctions } from "../utils/commonFunctions.js";
const { Given, When, Then } = createBdd();
const sheetName = "program";

Given(
  "Admin is on Program module for editing",
  async ({ programPage, commonFunctions }) => {
    await commonFunctions.clickMenu("program");

    await commonFunctions.clickAnywhere();
  },
);
When(
  "Admin clicks on Edit option for particular program from {string} and {string}",
  async ({ programPage, commonFunctions }, arg, arg1) => {
    const storedData = loadTestData();
    await commonFunctions.search(storedData.programNameForProgram);
    await programPage.clickEdit(storedData.programNameForProgram);
  },
);

Then("Admin lands on Program details form", async ({ programPage }) => {
  const actualTitle = await programPage.editPageTitle.textContent();
  const expectedTitle = "Program Details";
  expect(actualTitle).toBe(expectedTitle);
  logger.info("Admin opens Edit Program Page");
});

Then(
  "Admin should see window title as {string}",
  async ({ programPage }, arg) => {
    const actualTitle = await programPage.editPageTitle.textContent();
    const expectedTitle = "Program Details";
    expect(actualTitle).toBe(expectedTitle);
    logger.info("Admin opens Edit Program Page");
  },
);

Then(
  "Admin should see red {string} mark beside mandatory field {string}",
  async ({ programPage }, arg, arg1) => {
    programPage.VerifyMandatoryFields();
  },
);

When(
  "Admin edits the program name and click on save button from {string} and {string}",
  async ({ programPage, commonFunctions }, arg, arg1) => {
    const programName =
      getTestData(sheetName, "edit_Pname", "ProgramName") +
      CommonFunctions.getRandomAlphabet(3);
    const Description = getTestData(sheetName, "edit_Pname", "Description");
    console.log(`programName: ${programName}`);
    console.log(`Description: ${Description}`);
    await programPage.enterProgramDetails(programName, Description);
    const testData = {};
    testData.programNameForProgram = programName;
    saveTestData(testData);
  },
);

Then(
  "Updated program name is seen by the Admin",
  async ({ programPage, commonFunctions }) => {
    const storedData = loadTestData();
    const programName = storedData.programNameForProgram;
    await commonFunctions.search(programName);
    await programPage.verifyProgramName(programName);
  },
);

When(
  "Admin edits the description text and click on save button from {string} and {string}",
  async ({ programPage }, arg, arg1) => {
    const storedData = loadTestData();
    const programName =
      getTestData(sheetName, "edit_Pname", "ProgramName") +
      CommonFunctions.getRandomAlphabet(3);
    const Description = getTestData(sheetName, "edit_Pname", "Description");
    console.log(`programName: ${programName}`);
    console.log(`Description: ${Description}`);
    await programPage.clickEdit(storedData.programNameForProgram);
    await programPage.enterProgramDetails(programName, Description);
    const testData = {};
    // testData.descriptionForProgram = Description;
    // saveTestData(testData);
    storedData.descriptionForProgram = Description;
    saveTestData(storedData);
  },
);

Then(
  "Admin can see the description is updated",
  async ({ programPage, commonFunctions }) => {
    const storedData = loadTestData();
    const programName = storedData.programNameForProgram;
    await commonFunctions.search(programName);
    programPage.verifyDescription(
      programName,
      storedData.descriptionForProgram,
    );
  },
);

When(
  "Admin can change the status of the program from {string} and {string} and click on save button",
  async ({ programPage, commonFunctions }, arg, arg1) => {
    // await commonFunctions.clickMenu('program');

    // await commonFunctions.clickAnywhere();
    await commonFunctions.click(commonFunctions.editIcon);
    await programPage.changeStatus();
    await programPage.saveProgram();
  },
);

Then("Status updated can be viewed by the Admin", async ({ programPage }) => {
  programPage.verifyStatus();
});

When(
  "Admin click on save button of the updated program from {string} and {string}",
  async ({ programPage }, arg, arg1) => {
    programPage.saveProgram();
  },
);

Then("Admin can see the updated program details", async ({ programPage }) => {
  programPage.verifyUpdatedProgram();
});

When(
  "Admin click on cancel button of the updated program from {string} and {string}",
  async ({ programPage, commonFunctions }, arg, arg1) => {
    await commonFunctions.click(commonFunctions.editIcon);

    await programPage.clickCancel();
  },
);

Then(
  "Admin can see the Program details form disappears",
  async ({ commonFunctions }) => {
    const expectedText = "Manage Program";
    const actualText =
      await commonFunctions.moduleSelectors.program.manage_text.textContent();
    expect(actualText).toContain(expectedText);
  },
);

When(
  "Admin searches with newly updated Program Name from {string} and {string}",
  async ({ programPage }, arg, arg1) => {
    programPage.searchProgram();
  },
);

Then(
  "Admin verifies that the details are correctly updated from {string} and {string}",
  async ({ programPage }, arg, arg1) => {
    programPage.verifyUpdatedProgram();
  },
);

When(
  "Admin Click on X button of the updated program from {string} and {string}",
  async ({ programPage, commonFunctions }, arg, arg1) => {
    await commonFunctions.click(commonFunctions.editIcon);
    await programPage.clickClose();
  },
);

Then(
  "Admin can see Program Details form disappears",
  async ({ commonFunctions }) => {
    const expectedText = "Manage Program";
    const actualText =
      await commonFunctions.moduleSelectors.program.manage_text.textContent();
    expect(actualText.trim()).toBe(expectedText);
  },
);
