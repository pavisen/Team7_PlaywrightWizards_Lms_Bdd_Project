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

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/03_batch.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Admin should be in the \" Manage Batch\" Page","stepMatchArguments":[{"group":{"start":23,"value":"\" Manage Batch\"","children":[{"start":24,"value":" Manage Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end