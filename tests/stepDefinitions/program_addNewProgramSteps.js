import { test } from "../fixtures/fixture.js";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { getTestData } from "../utils/excelReader.js";
import { saveTestData, loadTestData } from "../utils/testDataHelper.js";
const { Given, When, Then } = createBdd();

const sheetName = "program";

When(
  "Admin Clicks on the Add program button and fill the required fields",
  async function ({ programPage, commonFunctions, testData }) {
    await commonFunctions.clickMenu("program");
    await commonFunctions.clickSubMenu("program");
    // Get the data from the excel file
    const programName =
      getTestData(sheetName, "valid", "ProgramName") + getRandomAlphabet(3);
    const description = getTestData(sheetName, "valid", "Description");
    console.log(`programName: ${programName}`);
    console.log(`Description: ${description}`);
    await programPage.enterProgramDetails(programName, description);

    //storing variables for chaining
    const programNameForProgram = programName;
    console.log(programNameForProgram);
    testData.programNameForProgram = programNameForProgram;
    saveTestData(testData); // Store data in file
    console.log(`Storing programName: ${testData.programNameForProgram}`);
  },
);
function getRandomAlphabet(length) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  return result;
}

Then(
  "Admin should see the program details entered",
  async ({ commonFunctions, programPage }) => {
    await commonFunctions.clickMenu("program");
    await programPage.click_addNewProgram();
    await programPage.verifyPopupFieldsEnabled();
  },
);

Then(
  "Admin should get a message {string}",
  async function ({ programPage }, arg) {
    const successMessage = await (
      await programPage.programCreatedSuccess()
    ).textContent();
    expect(successMessage.trim()).toBe("Program Created Successfully");
  },
);

When(
  "Admin enters the program name with numbers",
  async ({ programPage, commonFunctions }) => {
    await commonFunctions.clickMenu("program");
    await commonFunctions.clickSubMenu("program");
    // Get the data from the excel file
    const programName =
      getTestData(sheetName, "invalidPName", "ProgramName") +
      getRandomAlphabet(3);
    const Description = getTestData(sheetName, "invalidPName", "Description");
    console.log(`programName: ${programName}`);
    console.log(`Description: ${Description}`);
    await programPage.enterProgramDetails(programName, Description);
  },
);
Then(
  "Admin should get a message programName Must contain only letters and sometimes hyphens",
  async ({ programPage }) => {
    const failureMessage = await (
      await programPage.programCreationFailure()
    ).textContent();
    expect(failureMessage.trim()).toBe(
      "programName Must contain only letters and sometimes hyphens",
    );
  },
);

When(
  "Admin Clicks on the Add program button and fill the required fields for chaining",
  async ({ programPage, commonFunctions }) => {
    await commonFunctions.clickMenu("program");
    await commonFunctions.clickSubMenu("program");
    // Get the data from the excel file
    const programName =
      getTestData(sheetName, "valid for chaining", "ProgramName") +
      getRandomAlphabet(3);
    const description = getTestData(
      sheetName,
      "valid for chaining",
      "Description",
    );
    console.log(`programName: ${programName}`);
    console.log(`Description: ${description}`);
    await programPage.enterProgramDetails(programName, description);

    //storing variables for chaining
    const programNameForChaining = programName;
    console.log(programNameForChaining);
    let testData = loadTestData() || {};
    testData.programNameForChaining = programNameForChaining;
    saveTestData(testData); // Store data in file
    console.log(
      `Storing programName for chaining: ${testData.programNameForChaining}`,
    );
  },
);

When(
  "Admin enters the program name with special characters",
  async ({ programPage, commonFunctions }) => {
    await commonFunctions.clickMenu("program");
    await commonFunctions.clickSubMenu("program");
    // Get the data from the excel file
    const programName =
      getTestData(sheetName, "specialChar", "ProgramName") +
      getRandomAlphabet(3);
    const Description = getTestData(sheetName, "specialChar", "Description");
    console.log(`programName: ${programName}`);
    console.log(`Description: ${Description}`);
    await programPage.enterProgramDetails(programName, Description);
  },
);
Then(
  "Admin should get a message This field should start with an alphabet, no special char and min {int} char",
  async ({ programPage }, arg) => {
    const failuremsg = await (
      await programPage.programNameWith2Char()
    ).textContent();
    expect(failuremsg.trim()).toBe(
      "This field should start with an alphabet, no special char and min 2 char.",
    );
  },
);

When(
  "Admin enters the program name with minimum {int} characters",
  async ({ programPage, commonFunctions }, arg) => {
    await commonFunctions.clickMenu("program");
    await commonFunctions.clickSubMenu("program");
    // Get the data from the excel file
    const programName = getTestData(sheetName, "min2Char", "ProgramName");
    const Description = getTestData(sheetName, "min2Char", "Description");
    console.log(`programName: ${programName}`);
    console.log(`Description: ${Description}`);
    await programPage.enterProgramDetails(programName, Description);
  },
);

Then(
  "Admin should get a message programName created successfully",
  async ({ programPage }) => {
    const successMessage = await (
      await programPage.programCreatedSuccess()
    ).textContent();
    expect(successMessage.trim()).toBe("Program Created Successfully");
  },
);

When(
  "Admin enters the program name with missing description",
  async ({ programPage, commonFunctions }) => {
    await commonFunctions.clickMenu("program");
    await commonFunctions.clickSubMenu("program");
    // Get the data from the excel file
    const programName = getTestData(sheetName, "emptyDes", "ProgramName");
    const description = getTestData(sheetName, "emptyDes", "Description");
    console.log(`programName: ${programName}`);
    console.log(`Description: ${description}`);
    await programPage.enterProgramDetails(programName, description || "");
  },
);

Then(
  "Admin should get a message description is required",
  async ({ programPage }) => {
    const descRequired = await (await programPage.requiredDesc()).textContent();
    expect(descRequired.trim()).toBe("Description is required.");
  },
);

When(
  "Admin clicks on New Program under the Program menu bar",
  async ({ programPage, commonFunctions }) => {
    await commonFunctions.clickMenu("program");
    await programPage.click_addNewProgram();
  },
);

Then(
  "Admin should see pop up window for program details",
  async ({ programPage }) => {
    await programPage.verifyPopupFieldsEnabled();
  },
);

Then(
  "Admin should see window title as Program Details",
  async ({ programPage }) => {
    const programDetails = await (
      await programPage.Validate_programDetails()
    ).textContent();
    expect(programDetails.trim()).toBe("Program Details");
  },
);

Given("Admin is on Program details form", async ({}) => {
  // Step: Given Admin is on Program details form
  // From: tests\Features\02_program.feature:73:9
});

Then(
  "Admin should see red {string} mark beside mandatory field {string} in program details form",
  async ({ programPage }, arg, arg1) => {
    await arg1;
    await programPage.VerifyMandatoryFields();
  },
);

When(
  "Admin clicks save button without entering mandatory",
  async ({ commonFunctions, programPage }) => {
    await commonFunctions.clickMenu("program");
    await programPage.click_addNewProgram();
    await programPage.saveProgram();
  },
);

Then("Admin gets message field is required", async ({ programPage }) => {
  await programPage.verifyFieldRequired();
});

When("Admin clicks Cancel button", async ({ commonFunctions, programPage }) => {
  await commonFunctions.clickMenu("program");
  await programPage.click_addNewProgram();
  await programPage.clickClose();
});

Then(
  "Admin can see Program Details form disappears.",
  async ({ commonFunctions }) => {
    await commonFunctions.toBeVisible("program");
  },
);

When("Admin Click on X button.", async ({ commonFunctions, programPage }) => {
  await commonFunctions.clickMenu("program");
  await programPage.click_addNewProgram();
  await programPage.clickClose();
});
