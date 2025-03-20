import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { getTestData } from "../utils/excelReader";

// Create BDD steps
const { Given, When, Then } = createBdd();
const sheetName = "class";

Given("Admin is on the Manage class page", async ({ loggedInPage }) => {});

When(
  "Admin clicks a add new class under the class menu bar",
  async ({ commonFunctions }) => {
    await commonFunctions.clickMenu("class");
    await commonFunctions.clickSubMenu("class");
  },
);

Then(
  "Admin should see a popup open for class details with empty form along with save and cancel button and Close Icon on the top right corner of the window",
  async ({ classPage }) => {
    await expect(classPage.saveButton).toBeVisible();
    await expect(classPage.cancelButton).toBeVisible();
    await expect(classPage.closeBatchpop).toBeVisible();
  },
);

Then(
  "Admin should see few input fields and their respective text boxes in the class details window",
  async ({ classPage }) => {
    await expect(classPage.batchName).toBeVisible();
    await expect(classPage.classTopic).toBeVisible();
    await expect(classPage.classDescription).toBeVisible();
    await expect(classPage.classDate).toBeVisible();
    await expect(classPage.noOfClasses).toBeVisible();
    await expect(classPage.staffName).toBeVisible();
    await expect(classPage.activeStatus).toBeVisible();
    await expect(classPage.inactiveStatus).toBeVisible();
    await expect(classPage.comments).toBeVisible();
    await expect(classPage.notes).toBeVisible();
  },
);

Given(
  "Admin is on the Class Popup window",
  async ({ loggedInPage, commonFunctions }) => {
    await commonFunctions.clickMenu("class");
    await commonFunctions.clickSubMenu("class");
  },
);

When(
  "Admin enters all fields in the form and clicks on save button",
  async ({ classPage, commonFunctions }) => {
    const batchName = getTestData(sheetName, "validAll", "batchName");
    const classTopic = getTestData(sheetName, "validAll", "classTopic");
    const classDescription = getTestData(
      sheetName,
      "validAll",
      "classDescription",
    );
    const classDate = getTestData(sheetName, "validAll", "classDate");
    console.log(`Converted classDate: ${classDate}`);
    const staffName = getTestData(sheetName, "validAll", "staffName");
    const comments = getTestData(sheetName, "validAll", "comments");
    const notes = getTestData(sheetName, "validAll", "notes");
    const recording = getTestData(sheetName, "validAll", "recording");
    console.log(`batchName: ${batchName}`);
    console.log(`classTopic: ${classTopic}`);
    console.log(`classDescription: ${classDescription}`);
    console.log(`classDate: ${classDate}`);
    console.log(`staffName: ${staffName}`);
    console.log(`comments: ${comments}`);
    console.log(`notes: ${notes}`);
    console.log(`recording: ${recording}`);
    await classPage.enterClassDetails(
      batchName,
      classTopic,
      classDescription,
      classDate,
      staffName,
      comments,
      notes,
      recording,
      commonFunctions,
    );
    await classPage.clickSave();
  },
);

When(
  "Admin enters mandatory fields in the form and clicks on save button",
  async ({ classPage, commonFunctions }) => {
    const batchName = getTestData(sheetName, "onlyMandatory", "batchName") || "";
    const classTopic = getTestData(sheetName, "onlyMandatory", "classTopic") || "";
    const classDescription = getTestData(sheetName, "onlyMandatory", "classDescription") || "";

    const classDate = getTestData(sheetName, "onlyMandatory", "classDate") || "";
    console.log(`Converted classDate: ${classDate}`);

    const staffName = getTestData(sheetName, "onlyMandatory", "staffName") || "";
    const comments = getTestData(sheetName, "onlyMandatory", "comments") || "";
    const notes = getTestData(sheetName, "onlyMandatory", "notes") || "";
    const recording = getTestData(sheetName, "onlyMandatory", "recording") || "";
    
    console.log(`batchName: ${batchName}`);
    console.log(`classTopic: ${classTopic}`);
    console.log(`classDescription: ${classDescription}`);
    console.log(`classDate: ${classDate}`);
    console.log(`staffName: ${staffName}`);
    console.log(`comments: ${comments}`);
    console.log(`notes: ${notes}`);
    console.log(`recording: ${recording}`);
    await classPage.enterClassDetails(
      batchName,
      classTopic,
      classDescription,
      classDate,
      staffName,
      comments,
      notes,
      recording,
      commonFunctions,
    );
    await classPage.clickSave();
  },
);

Then("Admin gets message Class added Successfully", async ({ classPage }) => {
  const successMessage = await classPage.getClassCreatedSuccessMessage();
  expect(successMessage.trim()).toBe("Class Created");
  //await classPage.page.pause();
 // await classPage.classSearch();
});
