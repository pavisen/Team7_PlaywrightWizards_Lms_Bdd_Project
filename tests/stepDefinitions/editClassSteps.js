import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { getTestData } from "../utils/excelReader";
import { saveTestData, loadTestData } from "../utils/testDataHelper.js";

// Create BDD steps
const { Given, When, Then } = createBdd();
const sheetName = "class";
const storedData = loadTestData(); // Retrieve stored data


Given('Admin is on the Manage Class page', async ({loggedInPage}) => {  });
  
  When('Admin clicks on the edit icon', async ({classPage}) => {
    console.log("Edit Class Topic: ", storedData.classTopic);
    classPage.clickEdit(storedData.classTopic);

  });
  
  Then('A new pop up with class details appears', async ({classPage}) => {
    const actualTitle = await classPage.editPageTitle.textContent();
    const expectedTitle = "Class Details";
    expect(actualTitle).toBe(expectedTitle);
    logger.info('Admin opens Edit Class Page');
  });
  
  Then('Admin should see batch name field is disabled', async ({}) => {
    // Step: Then Admin should see batch name field is disabled
    // From: tests/Features/04_class.feature:109:1
  });
  
  Then('Admin should see class topic field is disabled', async ({}) => {
    // Step: Then Admin should see class topic field is disabled
    // From: tests/Features/04_class.feature:114:1
  });
  
  Given('Admin is on the Edit Class Popup window', async ({}) => {
    // Step: Given Admin is on the Edit Class Popup window
    // From: tests/Features/04_class.feature:117:1
  });
  
  When('Update the fields with valid data and click save', async ({}) => {
    // Step: When Update the fields with valid data and click save
    // From: tests/Features/04_class.feature:118:1
  });
  
  Then('Admin gets message {string} and see the updated values in data table', async ({}, arg) => {
    // Step: Then Admin gets message "class details updated Successfully " and see the updated values in data table
    // From: tests/Features/04_class.feature:119:1
  });
  
  When('Update the fields with invalid values and click save', async ({}) => {
    // Step: When Update the fields with invalid values and click save
    // From: tests/Features/04_class.feature:123:1
  });
  
  Then('Admin should get Error message', async ({}) => {
    // Step: Then Admin should get Error message
    // From: tests/Features/04_class.feature:124:1
  });

  When('Update the mandatory fields with valid values and click save', async ({}) => {
    // Step: When Update the mandatory fields with valid values and click save
    // From: tests/Features/04_class.feature:128:1
  });
  
  Given('Admin is on the Edit  Class Popup window', async ({}) => {
    // Step: Given Admin is on the Edit  Class Popup window
    // From: tests/Features/04_class.feature:132:1
  });
  
  When('Update the optional fields with valid values and click save', async ({}) => {
    // Step: When Update the optional fields with valid values and click save
    // From: tests/Features/04_class.feature:133:1
  });
  
  When('Admin enters only numbers or special char in the text fields', async ({}) => {
    // Step: When Admin enters only numbers or special char in the text fields
    // From: tests/Features/04_class.feature:138:1
  });
  
  When('Admin clicks Cancel button on edit popup', async ({}) => {
    // Step: When Admin clicks Cancel button on edit popup
    // From: tests/Features/04_class.feature:143:1
  });
  
  Then('Admin can see the class details popup disappears and can see nothing changed for particular Class', async ({}) => {
    // Step: Then Admin can see the class details popup disappears and can see nothing changed for particular Class
    // From: tests/Features/04_class.feature:144:1
  });

  