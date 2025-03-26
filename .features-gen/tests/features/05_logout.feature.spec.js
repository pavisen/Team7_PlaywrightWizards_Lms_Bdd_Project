// Generated from: tests/features/05_logout.feature
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

  test('Click Yes on deletion window', async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on Confirm Deletion alert', null, { commonFunctions }); 
    await When('Admin clicks yes option', null, { commonFunctions }); 
    await Then('Admin gets a message "Successful Class Deleted" alert and do not see that Class in the data table', null, { commonFunctions }); 
  });

  test('Validate multiple class deletion by selecting Single checkbox and Yes Button', async ({ Given, loggedInPage, commonFunctions, When, Then }) => { 
    await Given('Admin is in Manage Class page', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks single checkbox in the data table and Admin clicks <YES> button on the alert', null, { commonFunctions }); 
    await Then('Admin should land on Manage class page and can see the selected class is deleted from the data table', null, { commonFunctions }); 
  });

  test('Validate multiple class deletion by selecting multiple check boxes with YES button', async ({ Given, loggedInPage, commonFunctions, When, Then }) => { 
    await Given('Admin is in Manage Class page', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks any checkbox in the data table and Admin clicks <YES> button on the alert for multiple', null, { commonFunctions }); 
    await Then('Admin should land on Manage class page and can see the selected class are deleted from the data table', null, { commonFunctions }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/05_logout.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given Admin is in home page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Admin clicks on the logout in the menu bar","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should be redirected to login page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given Admin is logged out of the application","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Admin is in login page and clicks browser back button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive error message","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm Deletion alert","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When Admin clicks yes option","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Admin gets a message \"Successful Class Deleted\" alert and do not see that Class in the data table","stepMatchArguments":[{"group":{"start":21,"value":"\"Successful Class Deleted\"","children":[{"start":22,"value":"Successful Class Deleted","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given Admin is in Manage Class page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When Admin clicks single checkbox in the data table and Admin clicks <YES> button on the alert","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on Manage class page and can see the selected class is deleted from the data table","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given Admin is in Manage Class page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When Admin clicks any checkbox in the data table and Admin clicks <YES> button on the alert for multiple","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on Manage class page and can see the selected class are deleted from the data table","stepMatchArguments":[]}]},
]; // bdd-data-end