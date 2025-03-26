import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { getTestData } from "../utils/excelReader";
import logger, { attachLogsAfterEachTest } from "../utils/logger.js";
import { saveTestData, loadTestData } from "../utils/testDataHelper.js";

// Create BDD steps
const { Given, When, Then } = createBdd();

Given("Admin is on the batch page", async ({ commonFunctions }) => {
  await commonFunctions.clickMenu("batch");
  await commonFunctions.clickAnywhere();
});

When(
  "Admin enters the batch name in the search text box",
  async ({ commonFunctions }) => {
    const storedData = loadTestData();
    const storedbatchNameForBatch = storedData.batchNameForBatch;
    console.log("Retrieved Batch Name: ", storedbatchNameForBatch);
    await commonFunctions.search(storedbatchNameForBatch);
  },
);

Then(
  "Admin should see the filtered batches in the data table",
  async ({ commonFunctions }) => {
    const storedData = loadTestData();
    const storedbatchNameForBatch = storedData.batchNameForBatch;
    console.log("Retrieved Batch Name: ", storedbatchNameForBatch);
    await commonFunctions.verifySearch(storedbatchNameForBatch);
  },
);
