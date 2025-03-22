import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from '../fixtures/fixture';
import { getTestData } from '../utils/excelReader.js';
import { CommonFunctions } from '../utils/commonFunctions';

const { Given, When, Then } = createBdd();
When('Admin enter the program to search By program name', async ({}) => {
    // Step: When Admin enter the program to search By program name
    // From: tests\Features\02_program.feature:209:17
  });
  
  Then('Admin should able to see Program name, description, and status for searched program name', async ({}) => {
    // Step: Then Admin should able to see Program name, description, and status for searched program name
    // From: tests\Features\02_program.feature:210:17
  });
  
  When('Admin enter the program to search By program description', async ({}) => {
    // Step: When Admin enter the program to search By program description
    // From: tests\Features\02_program.feature:215:17
  });
  
  Then('Admin should able to see Program name, description, and status for searched program description', async ({}) => {     
    // Step: Then Admin should able to see Program name, description, and status for searched program description
    // From: tests\Features\02_program.feature:216:17
  });
  
  When('Admin enter the program to search By program name that does not exist', async ({}) => {
    // Step: When Admin enter the program to search By program name that does not exist
    // From: tests\Features\02_program.feature:221:17
  });
  
  When('Admin enter the program to search By partial name of program', async ({}) => {
    // Step: When Admin enter the program to search By partial name of program
    // From: tests\Features\02_program.feature:226:17
  });
  
  Then('Admin should able to see Program name, description, and status for searched program name for partial search', async ({}) => {
    // Step: Then Admin should able to see Program name, description, and status for searched program name for partial search 
    // From: tests\Features\02_program.feature:227:17
  });
  