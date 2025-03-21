import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from '../fixtures/fixture';
import { getTestData } from '../utils/excelReader.js';
import { CommonFunctions } from '../utils/commonFunctions';

const { Given, When, Then } = createBdd();
When('Admin clicks on delete button for a program', async ({}) => {
    // Step: When Admin clicks on delete button for a program
    // From: tests\Features\02_program.feature:138:1
  });
  
  Then('Admin will get confirm deletion popup', async ({}) => {
    // Step: Then Admin will get confirm deletion popup
    // From: tests\Features\02_program.feature:139:1
  });
  
  Given('Admin is on Confirm deletion form', async ({}) => {
    // Step: Given Admin is on Confirm deletion form
    // From: tests\Features\02_program.feature:143:1
  });
  
  When('Admin clicks on {string} button', async ({}, arg) => {
    // Step: When Admin clicks on "Yes" button
    // From: tests\Features\02_program.feature:144:1
  });
  
  Then('Admin can see {string} message', async ({}, arg) => {
    // Step: Then Admin can see 'Successful Program Deleted' message
    // From: tests\Features\02_program.feature:145:1
  });
  
  When('Admin Searches for {string}', async ({}, arg) => {
    // Step: When Admin Searches for "Deleted Program name"
    // From: tests\Features\02_program.feature:150:1
  });
  
  Then('There should be zero results.', async ({}) => {
    // Step: Then There should be zero results.
    // From: tests\Features\02_program.feature:151:1
  });
  
  Given('Admin is on Program Confirm Deletion Page after selecting a program to delete', async ({}) => {
    // Step: Given Admin is on Program Confirm Deletion Page after selecting a program to delete
    // From: tests\Features\02_program.feature:155:1
  });
  
  When('Admin clicks on No button', async ({}) => {
    // Step: When Admin clicks on No button
    // From: tests\Features\02_program.feature:156:1
  });
  
  Then('Admin can see Confirmation form disappears', async ({}) => {
    // Step: Then Admin can see Confirmation form disappears
    // From: tests\Features\02_program.feature:157:1
  });
  When('Admin Click on X button', async ({}) => {
    // Step: When Admin Click on X button
    // From: tests\Features\02_program.feature:162:1
  });
  
  Then('Admin can see Confirm Deletion form disappear', async ({}) => {
    // Step: Then Admin can see Confirm Deletion form disappear
    // From: tests\Features\02_program.feature:163:1
  });
  