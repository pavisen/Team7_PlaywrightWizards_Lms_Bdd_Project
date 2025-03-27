import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixture.js";
import { getTestData } from "../utils/excelReader.js";
import { CommonFunctions } from "../utils/commonFunctions.js";
import { loadTestData } from "../utils/testDataHelper.js";

const { Given, When, Then } = createBdd();
const sheetName = "program";
const storedData = loadTestData(); // Retrieve stored data

Given("Admin is on the program page", async ({ commonFunctions }) => {
  await commonFunctions.clickMenu("program");
  await commonFunctions.clickAnywhere();
});

When(
  "Admin enters the program name in the search text box",
  async ({ commonFunctions }) => {
    const storedData = loadTestData();
    const programNameForProgram = storedData.programNameForProgram;
    console.log("Retrieved Program Name in batch: ", programNameForProgram);
    await commonFunctions.search(programNameForProgram);
  },
);

Then(
  "Admin should see the filtered programs in the data table",
  async ({ commonFunctions }) => {
    const storedData = loadTestData();
    const programNameForProgram = storedData.programNameForProgram;
    console.log("Retrieved Program Name in batch: ", programNameForProgram);
    await commonFunctions.verifySearch(programNameForProgram);
  },
);
