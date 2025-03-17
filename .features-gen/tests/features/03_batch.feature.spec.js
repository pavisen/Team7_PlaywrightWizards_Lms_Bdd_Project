// Generated from: tests\features\03_batch.feature
import { test } from "playwright-bdd";

test.describe('Batch Module -Batch Page Navigation', () => {

  test('Verify Admin Navigate to Batch page successfully', async ({ Given, When, Then }) => { 
    await Given('Admin is on the home Page'); 
    await When('Admin Clicks on the Batch menu from the header'); 
    await Then('Admin should be in the Manage Batch Page'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\03_batch.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the home Page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should be in the Manage Batch Page","stepMatchArguments":[]}]},
]; // bdd-data-end