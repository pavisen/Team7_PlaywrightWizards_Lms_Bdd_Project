// Generated from: tests/features/03_batch.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Batch Module -Batch Page Navigation', () => {

  test.beforeEach('Background', async ({ Given, loggedInPage }) => {
    await Given('Admin is on the home Page', null, { loggedInPage }); 
  });
  
  test('Verify Admin Navigate to Batch page successfully', async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should be in the " Manage Batch" Page', null, { commonFunctions }); 
  });

  test('Validate "Title" in Batch Page', async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the " LMS - Learning Management System " Title in the Batch Page', null, { commonFunctions }); 
  });

  test('Verify Admin Add Batch successfully', async ({ When, batchPage, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Add Batch button and fill the required fields', null, { batchPage, commonFunctions }); 
    await Then('Admin should create a "new Batch successfully"', null, { batchPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/03_batch.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Admin should be in the \" Manage Batch\" Page","stepMatchArguments":[{"group":{"start":23,"value":"\" Manage Batch\"","children":[{"start":24,"value":" Manage Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" LMS - Learning Management System \" Title in the Batch Page","stepMatchArguments":[{"group":{"start":21,"value":"\" LMS - Learning Management System \"","children":[{"start":22,"value":" LMS - Learning Management System ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Add Batch button and fill the required fields","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Admin should create a \"new Batch successfully\"","stepMatchArguments":[{"group":{"start":22,"value":"\"new Batch successfully\"","children":[{"start":23,"value":"new Batch successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end