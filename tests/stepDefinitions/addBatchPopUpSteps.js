import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { getTestData } from "../utils/excelReader";
import { CommonFunctions } from "../utils/commonFunctions";
const { Given, When, Then } = createBdd();
import logger from "../utils/logger.js";

Given(
  "Admin is on the Batch Details Pop Up WIndow",
  async ({ commonFunctions }) => {
    await commonFunctions.clickMenu("batch");
    await commonFunctions.clickSubMenu("batch");
  },
);

When("Admin checks all the fields are enabled", async ({ batchPage }) => {
  await batchPage.verifyPopupFieldsEnabled();
});

Then(
  "The pop up should include the fields Batch Name,Number of classes and Description as text box,Program Name as dropdown Status as radio button",
  async ({ batchPage }) => {
    await expect(batchPage.programName).toBeVisible();
    await expect(batchPage.batchName2).toBeVisible();
    await expect(batchPage.description).toBeVisible();
    await expect(batchPage.batchStatus).toBeVisible();
    await expect(batchPage.noOfClasses).toBeVisible();
  },
);

When(
  "Admin selects program name present in the dropdown",
  async ({ batchPage }) => {
    await batchPage.selectProgramFromDropdown();
  },
);

Then(
  "Admin should see selected program name in the batch name prefix box",
  async ({ batchPage }) => {
    await batchPage.verifyBatchNamePrefix();
  },
);
When(
  "Admin enters alphabets in batch name suffix box",
  async ({ batchPage }) => {
    await batchPage.enterBatchSuffix();
  },
);
Then(
  "Admin should get error message below the text box of respective field",
  async ({ batchPage }) => {
    const errorMessageText = await batchPage.inlineforbatchname.textContent();
    expect(errorMessageText.trim()).toContain(
      "This field accept only numbers and max 5 count.",
    );
  },
);

When(
  "Admin enters alphabets in batch name prefix box",
  async ({ batchPage }) => {
    await batchPage.enterBatchPrefix();
  },
);

Then("Admin should see empty text box", async ({ batchPage }) => {
  const batchNamePrefixValue = await batchPage.batchnamefirst.inputValue(); // Update with actual selector
  expect(batchNamePrefixValue).toBe("");
});
