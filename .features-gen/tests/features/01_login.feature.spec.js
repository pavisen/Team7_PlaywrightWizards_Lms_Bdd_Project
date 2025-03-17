// Generated from: tests\features\01_login.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test('Valid login with correct credentials', async ({ Given, page, When, Then }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I enter valid credentials', null, { page }); 
    await Then('I should be logged in successfully', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\01_login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I enter valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully","stepMatchArguments":[]}]},
]; // bdd-data-end