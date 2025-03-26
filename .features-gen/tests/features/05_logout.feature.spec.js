// Generated from: tests\features\05_logout.feature
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

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\05_logout.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given Admin is on Program module","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When Admin clicks on delete button for a program","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Admin will get confirm deletion popup","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm deletion form","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Yes\" button","stepMatchArguments":[{"group":{"start":16,"value":"\"Yes\"","children":[{"start":17,"value":"Yes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Admin can see 'Successful Program Deleted' message","stepMatchArguments":[{"group":{"start":14,"value":"'Successful Program Deleted'","children":[{"children":[{"children":[]}]},{"start":15,"value":"Successful Program Deleted","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given Admin is on Program Confirm Deletion Page after selecting a program to delete","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When Admin clicks on No button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin can see Confirmation form disappears","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given Admin is on Program Confirm Deletion Page after selecting a program to delete","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When Admin Click on X button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin can see Confirm Deletion form disappear","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":35,"tags":["@Deletion"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given Admin is on the program page for delete","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage program header","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then The respective row in the program table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":40,"tags":["@Deletion"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given Admin is on the program page for delete","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage program header for multiple rows","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then The respective multiple rows in the program table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":47,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":48,"keywordType":"Context","textWithKeyword":"Given Admin is in home page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When Admin clicks on the logout in the menu bar","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then Admin should be redirected to login page","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":52,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given Admin is logged out of the application","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin is in login page and clicks browser back button","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive error message","stepMatchArguments":[]}]},
]; // bdd-data-end