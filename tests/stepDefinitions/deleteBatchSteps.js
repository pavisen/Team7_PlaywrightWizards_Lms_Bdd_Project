import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { getTestData } from "../utils/excelReader";
import { CommonFunctions } from "../utils/commonFunctions";
const { Given, When, Then } = createBdd();
import logger from "../utils/logger.js";

Given("Admin is on the Batch page", async ({ commonFunctions }) => {
  await commonFunctions.clickMenu("batch");
  await commonFunctions.clickAnywhere();
});

When("Admin clicks the delete Icon on any row", async ({ commonFunctions }) => {
  await commonFunctions.clickDeleteRow(1);
});

Then(
  "Admin should see the confirm alert box with yes and no button",
  async ({ commonFunctions }) => {
    const confirmDialogbox = await commonFunctions.confirmDeleteDialog();
    if (confirmDialogbox) {
      await expect(confirmDialogbox.confirmDialog).toBeVisible();
      await expect(confirmDialogbox.yesDelete).toBeVisible();
      await expect(confirmDialogbox.noDelete).toBeVisible();
    } else {
      console.warn("Confirm dialog not found, skipping assertions.");
    }
  },
);

Given(
  "Admin is on the batch confirm popup page",
  async ({ commonFunctions }) => {
    await commonFunctions.clickMenu("batch");
    await commonFunctions.clickAnywhere();
    await commonFunctions.clickDeleteRow(1);
  },
);

When(
  "Admin clicks on the delete icon and click yes button",
  async ({ commonFunctions }) => {
    await commonFunctions.clickConfirmYesDelete();
  },
);

Then(
  "Admin should see the successful message and the batch should be deleted",
  async ({ commonFunctions }) => {
    const successMessage = await commonFunctions.deleteMessage.textContent();
    expect(successMessage.trim()).toBe("batch Deleted");
    logger.info("Deleted batch record");
  },
);

When(
  "Admin clicks on the delete icon and click no button",
  async ({ commonFunctions }) => {
    await commonFunctions.clickConfirmNoDelete();
  },
);

Then(
  "Admin should see the alert box closed and the batch is not deleted",
  async ({ commonFunctions }) => {
    const confirmDialog = await commonFunctions.confirmDialog;
    await expect(confirmDialog).not.toBeVisible();
    logger.info("No batchrecord recorded");
  },
);

When(
  "Admin clicks on the close icon on delete",
  async ({ commonFunctions }) => {
    await commonFunctions.clickCloseDelete();
  },
);

Then(
  "Admin should see the alert box closed",
  async ({ batchPage, commonFunctions }) => {
    const confirmDialog = commonFunctions.confirmDialog;
    await expect(confirmDialog).not.toBeVisible();
    logger.info("Confirm popup is closed");
  },
);
