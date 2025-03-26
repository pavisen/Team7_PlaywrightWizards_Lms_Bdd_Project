import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { getTestData } from "../utils/excelReader";
import logger, { attachLogsAfterEachTest } from '../utils/logger.js';
import { saveTestData, loadTestData } from "../utils/testDataHelper.js";

// Create BDD steps
const { Given, When, Then } = createBdd();
const sheetName = "class";
const storedData = loadTestData(); // Retrieve stored data


Given('Admin is on the Manage Class page', async ({loggedInPage,commonFunctions}) => {  
  await commonFunctions.clickMenu("class");
  await commonFunctions.clickAnywhere();
});
  
  When('Admin clicks on the edit icon', async ({commonFunctions,classPage}) => {
    await commonFunctions.search("mathumathiab");
   await classPage.clickEdit("Java Batch 01 mathumathiab");
  });
  
  Then('A new pop up with class details appears', async ({classPage}) => {
    const actualTitle = await classPage.editPageTitle.textContent();
    const expectedTitle = "Class Details";
    expect(actualTitle).toBe(expectedTitle);
    logger.info('Admin opens Edit Class Page');
  });
  
  Then('Admin should see batch name field is disabled', async ({classPage}) => {
    const isDisabled = await classPage.isBatchNameFieldDisabled();
    console.log(isDisabled);
    expect(isDisabled).toBe(true);
  });
  
  Then('Admin should see class topic field is disabled', async ({classPage}) => {
    const isDisabled = await classPage.isClassTopicFieldDisabled();
    console.log(isDisabled);
    expect(isDisabled).toBe(true);
  });
  
  Given('Admin is on the Edit Class Popup window', async ({commonFunctions,classPage}) => {
    await commonFunctions.clickMenu("class");
    await commonFunctions.clickAnywhere();

  });
  
  When('Update the fields with valid data and click save', async ({classPage, commonFunctions, testData,page}) => {
    await commonFunctions.search("Java Batch 01");
    await classPage.clickEdit("Java Batch 01");
        const classDescription = getTestData(
          sheetName,
          "editAll",
          "classDescription",
        );
        const classDate = getTestData(sheetName, "editAll", "classDate");
        const staffName = getTestData(sheetName, "editAll", "staffName");
        const comments = getTestData(sheetName, "editAll", "comments");
        const notes = getTestData(sheetName, "editAll", "notes");
        const recording = getTestData(sheetName, "editAll", "recording");
        console.log(`classDescription: ${classDescription}`);
        console.log(`classDate: ${classDate}`);
        console.log(`staffName: ${staffName}`);
        console.log(`comments: ${comments}`);
        console.log(`notes: ${notes}`);
        console.log(`recording: ${recording}`);
    
        await classPage.editEnterClassDetails(
          "",
          "",
          classDescription,
          classDate,
          "",
          comments,
          notes,
          recording,
          commonFunctions,
        );
    
        await classPage.clickSave();

  });
  
  Then('Admin gets message class details updated Successfully', async ({classPage}) => {
    const successMessage = await classPage.getClassUpdatedSuccessMessage();
    expect(successMessage.trim()).toBe("Class Updated");
    logger.info('Class updated successfully');
  });

  When('Update the fields with invalid values and click save', async ({classPage, commonFunctions, testData,page}) => {
    await commonFunctions.search("vlad");
    await classPage.clickEdit("Java Batch 01 vlad");
        const classDescription = getTestData(
          sheetName,
          "editInvalidData",
          "classDescription",
        );
        const classDate = getTestData(sheetName, "editInvalidData", "classDate");
        const comments = getTestData(sheetName, "editInvalidData", "comments");
        const notes = getTestData(sheetName, "editInvalidData", "notes");
        const recording = getTestData(sheetName, "editInvalidData", "recording");
        console.log(`classDescription: ${classDescription}`);
        console.log(`classDate: ${classDate}`);
        console.log(`comments: ${comments}`);
        console.log(`notes: ${notes}`);
        console.log(`recording: ${recording}`);
    
        await classPage.editEnterClassDetails(
          "",
          "",
          classDescription,
          classDate,
          "",
          comments,
          notes,
          recording,
          commonFunctions,
        );
    
        await classPage.clickSave();

  });
  
  Then('Admin should get Error message', async ({classPage}) => {
    const errorMessages = await classPage.getAllErrorMessages();
    const expectedErrors = [
     "Class Date is required.",
     "No. of Classes is required.",
     "Staff Name is required.",
     "Status is required."
  ];
    for (let i = 0; i < errorMessages.length; i++) {
     expect(errorMessages[i].trim()).toBe(expectedErrors[i]);}
  });

  When('Update the mandatory fields with valid values and click save', async ({classPage, commonFunctions, testData,page}) => {
    await commonFunctions.search("Java Batch 01");
    await classPage.clickEdit("Java Batch 01");
        const classDescription = getTestData(
          sheetName,
          "editMandatory",
          "classDescription",
        );
        const classDate = getTestData(sheetName, "editMandatory", "classDate");
        const staffName = getTestData(sheetName, "editMandatory", "staffName");
        console.log(`classDate: ${classDate}`);
        console.log(`staffName: ${staffName}`);
    
        await classPage.editEnterClassDetails(
          "",
          "",
          "",
          classDate,
          "",
          "",
          "",
          "",
          commonFunctions,
        );
    
        await classPage.clickSave();

  });
  
  When('Update the optional fields with valid values and click save', async ({classPage, commonFunctions, testData,page}) => {
    await commonFunctions.search("Java Batch 01");
    await classPage.clickEdit("Java Batch 01");
    const comments = getTestData(sheetName, "editOptional", "comments");
    const notes = getTestData(sheetName, "editOptional", "notes");
    const recording = getTestData(sheetName, "editOptional", "recording");
    
        await classPage.editEnterClassDetails(
          "",
          "",
          "",
          "",
          "",
          comments,
          notes,
          recording,
          commonFunctions,
        );
    
        await classPage.clickSave();
  });
  
  When('Admin clicks Cancel button on edit popup', async ({classPage,commonFunctions}) => {
    await commonFunctions.search("Java Batch 01");
    await classPage.clickEdit("Java Batch 01");
        const classDescription = getTestData(
          sheetName,
          "editAll",
          "classDescription",
        );
        const classDate = getTestData(sheetName, "editAll", "classDate");
        const staffName = getTestData(sheetName, "editAll", "staffName");
        const comments = getTestData(sheetName, "editAll", "comments");
        const notes = getTestData(sheetName, "editAll", "notes");
        const recording = getTestData(sheetName, "editAll", "recording");
        console.log(`classDescription: ${classDescription}`);
        console.log(`classDate: ${classDate}`);
        console.log(`staffName: ${staffName}`);
        console.log(`comments: ${comments}`);
        console.log(`notes: ${notes}`);
        console.log(`recording: ${recording}`);
    
        await classPage.editEnterClassDetails(
          "",
          "",
          classDescription,
          classDate,
          "",
          comments,
          notes,
          recording,
          commonFunctions,
        );
    
        await classPage.clickCancel();
  });
  
  Then('Admin can see the class details popup disappears and can see nothing changed for particular Class', async ({commonFunctions}) => {
    
    const expectedText = " Manage Class";
    const actualText = await commonFunctions.moduleSelectors.class.manage_text.textContent();
     expect(actualText).toBe(expectedText);
  });

  