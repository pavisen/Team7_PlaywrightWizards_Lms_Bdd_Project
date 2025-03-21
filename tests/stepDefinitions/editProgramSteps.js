import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader';
const { Given, When, Then } = createBdd();
When('Admin clicks on Edit option for particular program from {string} and {string}', async ({}, arg, arg1) => {
    // Step: When Admin clicks on Edit option for particular program from "editprogram" and "Program"
    // From: tests\Features\02_program.feature:71:1
  });
  
  Then('Admin lands on Program details form', async ({}) => {
    // Step: Then Admin lands on Program details form
    // From: tests\Features\02_program.feature:72:1
  });
  
  Then('Admin should see window title as {string}', async ({}, arg) => {
    // Step: Then Admin should see window title as "Program Details"
    // From: tests\Features\02_program.feature:79:1
  });
  
  Then('Admin should see red {string} mark beside mandatory field {string}', async ({}, arg, arg1) => {
    // Step: Then Admin should see red "*" mark beside mandatory field "Name"
    // From: tests\Features\02_program.feature:86:1
  });
  
  When('Admin edits the program name and click on save button from {string} and {string}', async ({}, arg, arg1) => {
    // Step: When Admin edits the program name and click on save button from "editprogram" and "Program"
    // From: tests\Features\02_program.feature:92:1
  });
  
  Then('Updated program name is seen by the Admin', async ({}) => {
    // Step: Then Updated program name is seen by the Admin
    // From: tests\Features\02_program.feature:93:1
  });
  
  When('Admin edits the description text and click on save button from {string} and {string}', async ({}, arg, arg1) => {
    // Step: When Admin edits the description text and click on save button from "editprogram" and "Program"
    // From: tests\Features\02_program.feature:100:1
  });
  
  Then('Admin can see the description is updated', async ({}) => {
    // Step: Then Admin can see the description is updated
    // From: tests\Features\02_program.feature:101:1
  });
  
  When('Admin can change the status of the program from {string} and {string} and click on save button', async ({}, arg, arg1) => {
    // Step: When Admin can change the status of the program from "editprogram" and "Program" and click on save button
    // From: tests\Features\02_program.feature:107:1
  });
  
  Then('Status updated can be viewed by the Admin', async ({}) => {
    // Step: Then Status updated can be viewed by the Admin
    // From: tests\Features\02_program.feature:108:1
  });

  
When('Admin click on save button of the updated program from {string} and {string}', async ({}, arg, arg1) => {
    // Step: When Admin click on save button of the updated program from "editprogram" and "Program"
    // From: tests\Features\02_program.feature:115:1
  });
  
  Then('Admin can see the updated program details', async ({}) => {
    // Step: Then Admin can see the updated program details
    // From: tests\Features\02_program.feature:116:1
  });
  
  When('Admin click on cancel button of the updated program from {string} and {string}', async ({}, arg, arg1) => {
    // Step: When Admin click on cancel button of the updated program from "editprogram" and "Program"
    // From: tests\Features\02_program.feature:123:1
  });
  
  Then('Admin can see the Program details form disappears', async ({}) => {
    // Step: Then Admin can see the Program details form disappears
    // From: tests\Features\02_program.feature:124:1
  });
  
  When('Admin searches with newly updated Program Name from {string} and {string}', async ({}, arg, arg1) => {
    // Step: When Admin searches with newly updated Program Name from "editprogram" and "Program"
    // From: tests\Features\02_program.feature:130:1
  });
  
  Then('Admin verifies that the details are correctly updated from {string} and {string}', async ({}, arg, arg1) => {
    // Step: Then Admin verifies that the details are correctly updated from "editprogram" and "Program"
    // From: tests\Features\02_program.feature:131:1
  });
  
  When('Admin Click on X button of the updated program from {string} and {string}', async ({}, arg, arg1) => {
    // Step: When Admin Click on X button of the updated program from "editprogram" and "Program"
    // From: tests\Features\02_program.feature:137:1
  });
  
  Then('Admin can see Program Details form disappears', async ({}) => {
    // Step: Then Admin can see Program Details form disappears
    // From: tests\Features\02_program.feature:138:1
  });