import { test } from "../fixtures/fixture.js";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { getTestData } from "../utils/excelReader.js";
import { CommonFunctions } from "../utils/commonFunctions.js";
import logger from "../utils/logger.js";
import { saveTestData, loadTestData } from "../utils/testDataHelper.js";
const { Given, When, Then } = createBdd();
const sheetName = "batch";

When(
  "Admin clicks the edit icon	in Batch Page",
  async ({ commonFunctions, batchPage }) => {
    const storedData = loadTestData();
    const storedbatchNameForBatch = storedData.batchNameForBatch;
    console.log("Retrieved Batch Name: ", storedbatchNameForBatch);
    await commonFunctions.search(storedbatchNameForBatch);
    await batchPage.clickEdit(storedbatchNameForBatch);
  },
);
Then(
  "Admin should see the Batch details pop up window",
  async ({ commonFunctions, batchPage }) => {
    const actualTitle = await batchPage.editPageTitle.textContent();
    console.log(actualTitle);
    const expectedTitle = "Batch Details";
    expect(actualTitle).toBe(expectedTitle);
    logger.info("Admin opens Edit Batch Page");
  },
);

When(
  "Admin enters the valid data in edit Batch pop up and click save button",
  async ({ batchPage, commonFunctions }) => {
    const storedData = loadTestData();
    const storedbatchNameForBatch = storedData.batchNameForBatch;
    console.log("Retrieved Batch Name: ", storedbatchNameForBatch);
    await commonFunctions.search(storedbatchNameForBatch);
    await batchPage.clickEdit(storedbatchNameForBatch);

    // Get the data from the excel file
    const Description = getTestData(sheetName, "editvaliddata", "Description");
    const NoOfClasses = getTestData(
      sheetName,
      "editvaliddata",
      "NumberOfClasses",
    );
    console.log(`Description: ${Description}`);
    console.log(`NoOfClasses: ${NoOfClasses}`);
    await batchPage.updateBatchDetails(Description, NoOfClasses);
    await batchPage.clickSave();
  },
);

When(
  "Admin clicks the edit icon for program name",
  async ({ batchPage, commonFunctions }) => {
    await batchPage.clickEditFirstRow();
  },
);

When(
  "Admin clicks the edit icon for batch name",
  async ({ batchPage, commonFunctions }) => {
    await batchPage.clickEditFirstRow();
  },
);

When(
  "Admin edits the valid data in edit Batch pop up and click cancel button",
  async ({ batchPage, commonFunctions }) => {
    await batchPage.clickEditFirstRow();
    // Get the data from the excel file
    const Description = getTestData(
      sheetName,
      "editvaliddatacancel",
      "Description",
    );
    const NoOfClasses = getTestData(
      sheetName,
      "editvaliddatacancel",
      "NumberOfClasses",
    );
    console.log(`Description: ${Description}`);
    console.log(`NoOfClasses: ${NoOfClasses}`);
    await batchPage.updateBatchDetails(Description, NoOfClasses);
    await batchPage.clickCancel();
  },
);

Then(
  "Admin should see Program name value field is disabled for editing",
  async ({ batchPage }) => {
    const isprgDisabled = await batchPage.verifyProgramNameFieldIsDisabled();
    expect(isprgDisabled).toBe(true);
  },
);

Then(
  "Admin should see batch name value field is disabled for editing",
  async ({ batchPage }) => {
    const isDisabled = await batchPage.verifyBatchNameFieldIsDisabled();
    expect(isDisabled).toBe(true);
  },
);

Given("Admin is on the Batch Details Page", async ({ commonFunctions }) => {
  await commonFunctions.clickMenu("batch");
  await commonFunctions.clickAnywhere();
});

When(
  "Admin Updates any fields with invalid data and click save button",
  async ({ batchPage, commonFunctions }) => {
    await batchPage.clickEditFirstRow();
    // Get the data from the excel file
    const Description = getTestData(
      sheetName,
      "editinvaliddata",
      "Description",
    );
    const NoOfClasses = getTestData(
      sheetName,
      "editinvaliddata",
      "NumberOfClasses",
    );
    console.log(`Description: ${Description}`);
    console.log(`NoOfClasses: ${NoOfClasses}`);
    await batchPage.updateInvalidBatchDetails(Description, NoOfClasses);
    await batchPage.clickSave();
  },
);

Then(
  "Admin should get a error message under the respective field",
  async ({ batchPage }) => {
    const errorMessages = await batchPage.getAllErrorMessages();
    console.log("Actual error messages:", errorMessages);
    const expectedErrors = [
      "This field should start with an alphabet and min 2 character.",
      "No of classes should be a 1 digit or 2 digit number. Cannot exceed 2 digits",
    ];
    console.log("Expected error messages:", expectedErrors);
    // Validate each expected error is found in actual error messages
    expectedErrors.forEach((expectedText) => {
      const matchFound = errorMessages.some((error) =>
        error.trim().toLowerCase().includes(expectedText.toLowerCase()),
      );
      expect(matchFound).toBeTruthy();
      if (!matchFound) {
        console.error(`Expected error not found: "${expectedText}"`);
      }
    });
  
  },
);

Then(
  "Admin should get a {string} for editing the batch",
  async ({ batchPage }, arg) => {
    const successMessage = await batchPage.batchUpdatedSuccess.textContent();
    logger.info(`Batch update message: ${successMessage}`);
    expect(successMessage.trim()).toBe("batch Updated");
  },
);

Then(
  "Admin can see the batch details popup closes without editing the batch",
  async ({ batchPage, commonFunctions }) => {
    const expectedText = " Manage Batch";
    const actualText =
      await commonFunctions.moduleSelectors.batch.manage_text.textContent();
    expect(actualText).toBe(expectedText);
  },
);
