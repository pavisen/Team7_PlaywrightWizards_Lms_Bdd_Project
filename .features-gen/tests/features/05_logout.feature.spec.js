// Generated from: tests/Features/05_logout.feature
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

  test('Verify back button function', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is logged out of the application', null, { loginPage }); 
    await When('Admin is in login page and clicks browser back button', null, { loginPage }); 
    await Then('Admin should receive error message', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/Features/05_logout.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given Admin is in home page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Admin clicks on the logout in the menu bar","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should be redirected to login page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given Admin is logged out of the application","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Admin is in login page and clicks browser back button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive error message","stepMatchArguments":[]}]},
]; // bdd-data-end