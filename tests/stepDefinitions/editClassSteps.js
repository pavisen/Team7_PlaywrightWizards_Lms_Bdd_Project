import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { getTestData } from "../utils/excelReader";

// Create BDD steps
const { Given, When, Then } = createBdd();
const sheetName = "class";


Given('Admin is on the Manage Class page', async ({}) => {
    // Step: Given Admin is on the Manage Class page
    // From: tests/Features/04_class.feature:102:1
  });
  
  When('Admin clicks on the edit icon', async ({}) => {
    // Step: When Admin clicks on the edit icon
    // From: tests/Features/04_class.feature:103:1
  });
  
  Then('A new pop up with class details appears', async ({}) => {
    // Step: Then A new pop up with class details appears
    // From: tests/Features/04_class.feature:104:1
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

  