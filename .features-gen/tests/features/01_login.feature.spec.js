// Generated from: tests/features/01_login.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Login functionality', () => {

  test('Validate login with valid data in all field', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is on login Page', null, { loginPage }); 
    await When('Admin enter valid data in all field and clicks login button', null, { loginPage }); 
    await Then('Admin should land on home page', null, { loginPage }); 
  });

  test('Validate login with invalid data', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is on login Page', null, { loginPage }); 
    await When('Admin enter invalid data and clicks login button', null, { loginPage }); 
    await Then('Error message "Invalid username and password Please try again"', null, { loginPage }); 
  });

  test('Validate login credentials with null user name', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is on login Page', null, { loginPage }); 
    await When('Admin enter value only in password and clicks login button', null, { loginPage }); 
    await Then('Error message "Please enter your user name" for null user name', null, { loginPage }); 
  });

  test('Validate login credentials with null password', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is on login Page', null, { loginPage }); 
    await When('Admin enter value only in user name and clicks login button', null, { loginPage }); 
    await Then('Error message "Please enter your password" for null password', null, { loginPage }); 
  });

  test('verify login button action through keyboard', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is on login Page', null, { loginPage }); 
    await When('Admin enter valid credentials  and clicks login button through keyboard', null, { loginPage }); 
    await Then('Admin should land on home page', null, { loginPage }); 
  });

  test('verify login button action through mouse', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is on login Page', null, { loginPage }); 
    await When('Admin enter valid credentials  and clicks login button through mouse', null, { loginPage }); 
    await Then('Admin should land on home page', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/01_login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Admin enter valid data in all field and clicks login button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When Admin enter invalid data and clicks login button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Invalid username and password Please try again\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Invalid username and password Please try again\"","children":[{"start":15,"value":"Invalid username and password Please try again","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When Admin enter value only in password and clicks login button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Please enter your user name\" for null user name","stepMatchArguments":[{"group":{"start":14,"value":"\"Please enter your user name\"","children":[{"start":15,"value":"Please enter your user name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When Admin enter value only in user name and clicks login button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Please enter your password\" for null password","stepMatchArguments":[{"group":{"start":14,"value":"\"Please enter your password\"","children":[{"start":15,"value":"Please enter your password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When Admin enter valid credentials  and clicks login button through keyboard","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When Admin enter valid credentials  and clicks login button through mouse","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
]; // bdd-data-end