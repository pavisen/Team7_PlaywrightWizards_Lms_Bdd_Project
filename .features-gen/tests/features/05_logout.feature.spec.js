// Generated from: tests\features\05_logout.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Logout functionality', () => {

  test.beforeEach('Background', async ({ Given, loginPage }) => {
    await Given('Admin is logged into the application', null, { loginPage }); 
  });
  
  test('Verify logout function', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is in home page', null, { loginPage }); 
    await When('Admin clicks on the logout in the menu bar', null, { loginPage }); 
    await Then('Admin should be redirected to login page', null, { loginPage }); 
  });

  test('Verify back button function 	--fail case', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is logged out of the application', null, { loginPage }); 
    await When('Admin is in login page and clicks browser back button', null, { loginPage }); 
    await Then('Admin should receive error message', null, { loginPage }); 
  });

  test('validate delete Icon on any row', { tag: ['@DeleteBatch'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the Batch page', null, { commonFunctions }); 
    await When('Admin clicks the delete Icon on any row', null, { commonFunctions }); 
    await Then('Admin should see the confirm alert box with yes and no button', null, { commonFunctions }); 
  });

  test('Validate yes button on the confirm alert box', { tag: ['@DeleteBatch'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch confirm popup page', null, { commonFunctions }); 
    await When('Admin clicks on the delete icon and click yes button', null, { commonFunctions }); 
    await Then('Admin should see the successful message and the batch should be deleted', null, { commonFunctions }); 
  });

  test('validate no button on the confirm alert box', { tag: ['@DeleteBatch'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch confirm popup page', null, { commonFunctions }); 
    await When('Admin clicks on the delete icon and click no button', null, { commonFunctions }); 
    await Then('Admin should see the alert box closed and the batch is not deleted', null, { commonFunctions }); 
  });

  test('validate close Icon on the alert box', { tag: ['@DeleteBatch'] }, async ({ Given, commonFunctions, When, Then, batchPage }) => { 
    await Given('Admin is on the batch confirm popup page', null, { commonFunctions }); 
    await When('Admin clicks on the close icon on delete', null, { commonFunctions }); 
    await Then('Admin should see the alert box closed', null, { batchPage, commonFunctions }); 
  });

  test('Validate single row delete with checkbox', { tag: ['@Deletion'] }, async ({ Given, paginationPage, commonFunctions, When, Then, batchPage }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage batch header', null, { commonFunctions }); 
    await Then('The respective row in the table should be deleted', null, { batchPage, commonFunctions }); 
  });

  test('Validate multiple row delete with checkbox', { tag: ['@Deletion'] }, async ({ Given, paginationPage, commonFunctions, When, Then, batchPage }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage batch header for multiple rows', null, { commonFunctions }); 
    await Then('The respective multiple rows in the table should be deleted', null, { batchPage, commonFunctions }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\05_logout.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given Admin is in home page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Admin clicks on the logout in the menu bar","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should be redirected to login page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given Admin is logged out of the application","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Admin is in login page and clicks browser back button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive error message","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":["@DeleteBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete Icon on any row","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the confirm alert box with yes and no button","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":24,"tags":["@DeleteBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon and click yes button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the successful message and the batch should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":29,"tags":["@DeleteBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon and click no button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed and the batch is not deleted","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":34,"tags":["@DeleteBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When Admin clicks on the close icon on delete","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":43,"tags":["@Deletion"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage batch header","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then The respective row in the table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":48,"tags":["@Deletion"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":49,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage batch header for multiple rows","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then The respective multiple rows in the table should be deleted","stepMatchArguments":[]}]},
]; // bdd-data-end