// Generated from: tests/features/05_logout.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Logout functionality', () => {

  test.beforeEach('Background', async ({ Given, loginPage }) => {
    await Given('Admin is logged into the application', null, { loginPage }); 
  });
  
  test('Verify delete feature', async ({ Given, loggedInPage, paginationPage, commonFunctions, When, Then }) => { 
    await Given('Admin is on Program module', null, { loggedInPage, paginationPage, commonFunctions }); 
    await When('Admin clicks on delete button for a program', null, { commonFunctions }); 
    await Then('Admin will get confirm deletion popup', null, { commonFunctions }); 
  });

  test('Verify Admin is able to click \'Yes\'', async ({ Given, commonFunctions, When, Then, programPage }) => { 
    await Given('Admin is on Confirm deletion form', null, { commonFunctions }); 
    await When('Admin clicks on "Yes" button', null, { commonFunctions }); 
    await Then('Admin can see \'Successful Program Deleted\' message', null, { programPage }); 
  });

  test('Verify Admin is able to click \'No\'', async ({ Given, programPage, When, commonFunctions, Then }) => { 
    await Given('Admin is on Program Confirm Deletion Page after selecting a program to delete', null, { programPage }); 
    await When('Admin clicks on No button', null, { commonFunctions }); 
    await Then('Admin can see Confirmation form disappears', null, { commonFunctions }); 
  });

  test('Verify Admin is able to close the window with "X"', async ({ Given, programPage, When, commonFunctions, Then }) => { 
    await Given('Admin is on Program Confirm Deletion Page after selecting a program to delete', null, { programPage }); 
    await When('Admin Click on X button', null, { commonFunctions }); 
    await Then('Admin can see Confirm Deletion form disappear', null, { commonFunctions }); 
  });

  test('Validate single row delete with checkbox', { tag: ['@Deletion'] }, async ({ Given, loggedInPage, commonFunctions, When, programPage, Then }) => { 
    await Given('Admin is on the program page for delete', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage program header', null, { programPage, commonFunctions }); 
    await Then('The respective row in the program table should be deleted', null, { programPage, commonFunctions }); 
  });

  test('Validate multiple row delete with checkbox', { tag: ['@Deletion'] }, async ({ Given, loggedInPage, commonFunctions, When, programPage, Then }) => { 
    await Given('Admin is on the program page for delete', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage program header for multiple rows', null, { programPage, commonFunctions }); 
    await Then('The respective multiple rows in the program table should be deleted', null, { programPage, commonFunctions }); 
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

  test('Validate yes button on the confirm alert box', { tag: ['@DeleteBatch'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch confirm popup page', null, { commonFunctions }); 
    await When('Admin clicks on the delete icon and click yes button', null, { commonFunctions }); 
    await Then('Admin should see the successful message and the batch should be deleted', null, { commonFunctions }); 
  });

  test('Validate single row delete with checkbox for batch', { tag: ['@Deletion'] }, async ({ Given, paginationPage, commonFunctions, When, Then, batchPage }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage batch header', null, { commonFunctions }); 
    await Then('The respective row in the table should be deleted', null, { batchPage, commonFunctions }); 
  });

  test('Validate multiple row delete with checkbox for batch', { tag: ['@Deletion'] }, async ({ Given, paginationPage, commonFunctions, When, Then, batchPage }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage batch header for multiple rows', null, { commonFunctions }); 
    await Then('The respective multiple rows in the table should be deleted', null, { batchPage, commonFunctions }); 
  });

  

  test('Validate single row delete with checkbox for program', { tag: ['@Deletion'] }, async ({ Given, loggedInPage, commonFunctions, When, programPage, Then }) => { 
    await Given('Admin is on the program page for delete', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage program header', null, { programPage, commonFunctions }); 
    await Then('The respective row in the program table should be deleted', null, { programPage, commonFunctions }); 
  });

  test('Validate multiple row delete with checkbox for program', { tag: ['@Deletion'] }, async ({ Given, loggedInPage, commonFunctions, When, programPage, Then }) => { 
    await Given('Admin is on the program page for delete', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage program header for multiple rows', null, { programPage, commonFunctions }); 
    await Then('The respective multiple rows in the program table should be deleted', null, { programPage, commonFunctions }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/05_logout.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is in home page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Admin clicks on the logout in the menu bar","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should be redirected to login page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given Admin is logged out of the application","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When Admin is in login page and clicks browser back button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive error message","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":18,"tags":["@DeleteBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon and click yes button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the successful message and the batch should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":28,"tags":["@Deletion"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage batch header","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then The respective row in the table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":33,"tags":["@Deletion"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage batch header for multiple rows","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then The respective multiple rows in the table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm deletion form","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Yes\" button","stepMatchArguments":[{"group":{"start":16,"value":"\"Yes\"","children":[{"start":17,"value":"Yes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then Admin can see 'Successful Program Deleted' message","stepMatchArguments":[{"group":{"start":14,"value":"'Successful Program Deleted'","children":[{"children":[{"children":[]}]},{"start":15,"value":"Successful Program Deleted","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":50,"tags":["@Deletion"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given Admin is on the program page for delete","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage program header","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then The respective row in the program table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":55,"tags":["@Deletion"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":56,"keywordType":"Context","textWithKeyword":"Given Admin is on the program page for delete","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":57,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage program header for multiple rows","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then The respective multiple rows in the program table should be deleted","stepMatchArguments":[]}]},
]; // bdd-data-end