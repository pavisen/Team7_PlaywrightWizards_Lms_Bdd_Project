import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from '../fixtures/fixture';
import { getTestData } from '../utils/excelReader.js';
import { CommonFunctions } from '../utils/commonFunctions';
import { loadTestData } from "../utils/testDataHelper.js";

const { Given, When, Then } = createBdd();
const sheetName = "program";
const storedData = loadTestData(); // Retrieve stored data
// When('Admin enter the program to search By program name', async ({programPage}) => {
//     programPage.searchProgramByName();
//   });
  
//   Then('Admin should able to see Program name, description, and status for searched program name', async ({programPage}) => {
//     programPage.verifySearchedProgram();
//   });
  
//   When('Admin enter the program to search By program description', async ({programPage}) => {
//     programPage.searchProgramByDescription();
//   });
  
//   Then('Admin should able to see Program name, description, and status for searched program description', async ({programPage}) => {     
//     programPage.verifySearchedProgram();
//   });
  
//   When('Admin enter the program to search By program name that does not exist', async ({programPage}) => {
//     programPage.searchProgramByName();
//   });
  
//   When('Admin enter the program to search By partial name of program', async ({programPage}) => {
//     programPage.searchProgramByPartialName();
//   });
  
//   Then('Admin should able to see Program name, description, and status for searched program name for partial search', async ({programPage}) => {
//     programPage.verifySearchedProgram();
//   });
  

  
Given('Admin is on the program page', async ({commonFunctions}) => {
  await commonFunctions.clickMenu('program');
  await commonFunctions.clickAnywhere();
});

When('Admin enters the program name in the search text box', async ({commonFunctions}) => {
  const storedData = loadTestData();
     const storedprogramNameForProgram = storedData.programNameForProgram; 
     console.log("Retrieved program Name: ", storedprogramNameForProgram);
     await commonFunctions.search(storedprogramNameForProgram);
   
});

Then('Admin should see the filtered programs in the data table', async ({commonFunctions}) => {
 const storedData = loadTestData();
     const storedprogramNameForProgram = storedData.programNameForProgram;
     console.log("Retrieved Program Name: ", storedprogramNameForProgram);
     await commonFunctions.verifySearch(storedprogramNameForProgram);
});