import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { getTestData } from "../utils/excelReader";
import logger, { attachLogsAfterEachTest } from '../utils/logger.js';

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
    logger.info('Navigated to Add Class Popup');
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
    const batchName = getTestData(sheetName, "onlyMandatory", "batchName") ;
    const classTopic = getTestData(sheetName, "onlyMandatory", "classTopic");
    const classDate = getTestData(sheetName, "onlyMandatory", "classDate") ;
    const staffName = getTestData(sheetName, "onlyMandatory", "staffName");
    console.log(`batchName: ${batchName}`);
    console.log(`classTopic: ${classTopic}`);
    console.log(`classDate: ${classDate}`);
    console.log(`staffName: ${staffName}`);
    await classPage.enterClassDetails(
      batchName,
      classTopic,
      "",
      classDate,
      staffName,
      "",
      "",
      "",
      commonFunctions,
    );
    await classPage.clickSave();
  },
);

Then("Admin gets message Class added Successfully", async ({ classPage }) => {
  const successMessage = await classPage.getClassCreatedSuccessMessage();
  expect(successMessage.trim()).toBe("Class Created");
  logger.info('Class created successfully');
  //await classPage.page.pause();
 // await classPage.classSearch();
});

When('Admin selects class date in date picker', async ({ classPage, commonFunctions }) => {
   
    const classDate = getTestData(sheetName, "onlyMandatory", "classDate") || "";
    const staffName = getTestData(sheetName, "onlyMandatory", "staffName") || "";
    await classPage.enterClassDetails(
      "",
      "",
      "",
      classDate,
      staffName,
      "",
      "",
      "",
      commonFunctions
    );
  //  await classPage.clickSave();

});

Then('Admin should see no of class value is added automatically', async ({classPage}) => {
    const modelValue = await classPage.getNgReflectModelValue();
    expect(modelValue).not.toBeNull();
    expect(modelValue.trim()).not.toBe('');
});

When('Admin clicks date picker', async ({classPage}) => {
  await classPage.classDate.click();
});

Then('Admin should see weekends dates are disabled to select', async ({classPage}) => {
  const areDatesDisabled = await classPage.verifyWeekendsAndPastDatesDisabled();

    // Assert that weekends & past dates are disabled
    expect(areDatesDisabled).toBe(true);
});

When('Admin skips to add value in mandatory field and enter only the optional field', async ({classPage,commonFunctions}) => {
  const classDescription = getTestData(sheetName, "onlyOptional", "classDescription");
  const comments = getTestData(sheetName, "onlyOptional", "classDescription");
  const notes = getTestData(sheetName, "onlyOptional", "notes");
  const recording = getTestData(sheetName, "onlyOptional", "recording");

    // Fill only optional fields (Skipping batchName, classTopic, classDescription, classDate, staffName)
    await classPage.enterClassDetails(
        "", 
        "", 
        classDescription, 
        "", 
        "", 
        comments, 
        notes, 
        recording,
        commonFunctions
    );

    // Click Save Button
    await classPage.clickSave();
});

Then('Admin should see error message below the test field and the field will be highlighted in red color', async ({classPage}) => {
   const errorMessages = await classPage.getAllErrorMessages();
   const expectedErrors = [
    "Batch Name is required.",
    "Class Topic is required.",
    "Class Date is required.",
    "No. of Classes is required.",
    "Staff Name is required.",
    "Status is required."
];
   for (let i = 0; i < errorMessages.length; i++) {
    expect(errorMessages[i].trim()).toBe(expectedErrors[i]);
}

});

When('Admin enters invalid data in all of the  fields in the form and clicks on save button', async ({classPage,commonFunctions}) => {
  
  async ({ classPage, commonFunctions }) => {
    const classTopic = getTestData(sheetName, "invalidData", "classTopic");
    const classDescription = getTestData(
      sheetName,
      "invalidData",
      "classDescription",
    );
    const classDate = getTestData(sheetName, "invalidData", "classDate");
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
      "",
      classTopic,
      classDescription,
      classDate,
      "",
      comments,
      notes,
      recording,
      commonFunctions,
    );
    await classPage.clickSave();
  }
});

Then('Admin gets error message and class is not created', async ({classPage}) => {
  const errorMessages = await classPage.getAllErrorMessages();
  const expectedErrors = [
   "Batch Name is required.",
   "Class Topic is required.",
   "Class Date is required.",
   "No. of Classes is required.",
   "Staff Name is required.",
   "Status is required."
];
  for (let i = 0; i < errorMessages.length; i++) {
   expect(errorMessages[0].trim()).toBe(expectedErrors[i]);
}

});

When('Admin clicks on save button without entering data', async ({classPage}) => {
  await classPage.clickSave();

});

Then('class won\'t be created and Admin gets error message', async ({classPage}) => {
  const errorMessages = await classPage.getAllErrorMessages();
  const expectedErrors = [
   "Batch Name is required.",
   "Class Topic is required.",
   "Class Date is required.",
   "No. of Classes is required.",
   "Staff Name is required.",
   "Status is required."
];
  for (let i = 0; i < errorMessages.length; i++) {
   expect(errorMessages[i].trim()).toBe(expectedErrors[i]);
}

});

When('Admin clicks Cancel button on Admin Details form',  async ({ classPage, commonFunctions }) => {
    const batchName = getTestData(sheetName, "onlyMandatory", "batchName") ;
    const classTopic = getTestData(sheetName, "onlyMandatory", "classTopic");
    const classDate = getTestData(sheetName, "onlyMandatory", "classDate") ;
    const staffName = getTestData(sheetName, "onlyMandatory", "staffName");
    console.log(`batchName: ${batchName}`);
    console.log(`classTopic: ${classTopic}`);
    console.log(`classDate: ${classDate}`);
    console.log(`staffName: ${staffName}`);
    await classPage.enterClassDetails(
      batchName,
      classTopic,
      "",
      classDate,
      staffName,
      "",
      "",
      "",
      commonFunctions,
    );
    await classPage.clickCancel();
});

Then('Class Details popup window should be closed without saving',  async function ({ commonFunctions }) {
  const expectedText = " Manage Class";
const actualText = await commonFunctions.moduleSelectors.class.manage_text.textContent();
 expect(actualText).toBe(expectedText);

});

When('Admin clicks Close Icon on Admin Details form',  async ({ classPage, commonFunctions }) => {
  const batchName = getTestData(sheetName, "onlyMandatory", "batchName") ;
  const classTopic = getTestData(sheetName, "onlyMandatory", "classTopic");
  const classDate = getTestData(sheetName, "onlyMandatory", "classDate") ;
  const staffName = getTestData(sheetName, "onlyMandatory", "staffName");
  console.log(`batchName: ${batchName}`);
  console.log(`classTopic: ${classTopic}`);
  console.log(`classDate: ${classDate}`);
  console.log(`staffName: ${staffName}`);
  await classPage.enterClassDetails(
    batchName,
    classTopic,
    "",
    classDate,
    staffName,
    "",
    "",
    "",
    commonFunctions,
  );
  await classPage.clickClose();
});

