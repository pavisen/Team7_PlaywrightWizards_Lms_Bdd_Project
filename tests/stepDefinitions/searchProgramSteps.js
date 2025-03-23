import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from '../fixtures/fixture';
import { getTestData } from '../utils/excelReader.js';
import { CommonFunctions } from '../utils/commonFunctions';

const { Given, When, Then } = createBdd();
When('Admin enter the program to search By program name', async ({programPage}) => {
    programPage.searchProgramByName();
  });
  
  Then('Admin should able to see Program name, description, and status for searched program name', async ({programPage}) => {
    programPage.verifySearchedProgram();
  });
  
  When('Admin enter the program to search By program description', async ({programPage}) => {
    programPage.searchProgramByDescription();
  });
  
  Then('Admin should able to see Program name, description, and status for searched program description', async ({programPage}) => {     
    programPage.verifySearchedProgram();
  });
  
  When('Admin enter the program to search By program name that does not exist', async ({programPage}) => {
    programPage.searchProgramByName();
  });
  
  When('Admin enter the program to search By partial name of program', async ({programPage}) => {
    programPage.searchProgramByPartialName();
  });
  
  Then('Admin should able to see Program name, description, and status for searched program name for partial search', async ({programPage}) => {
    programPage.verifySearchedProgram();
  });
  