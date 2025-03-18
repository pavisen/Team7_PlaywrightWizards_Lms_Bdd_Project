// Generated from: tests/features/04_class.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Class Page Validation', () => {

  test.beforeEach('Background', async ({ Given, loggedInPage }) => {
    await Given('Admin is on the home page after login', null, { loggedInPage }); 
  });
  
  test('Validating the class manage page', async ({ When, commonFunctions, Then }) => { 
    await When('Admin clicks the Class Navigation bar in the Header', null, { commonFunctions }); 
    await Then('Admin should see the " LMS - Learning Management System " Title', null, { commonFunctions }); 
  });

<<<<<<< HEAD
  test('Validating the Header in the Manage class page', async ({ When, page, Then }) => { 
    await When('Admin clicks the Class Navigation bar in the Header', null, { page }); 
    await Then('Admin should see the " Manage Class" Header', null, { page }); 
=======
  test('Validating the Header in the Manage class page', async ({ When, commonFunctions, Then }) => { 
    await When('Admin clicks the Class Navigation bar in the Header', null, { commonFunctions }); 
    await Then('Admin should see the " Manage Class" Header', null, { commonFunctions }); 
>>>>>>> 280ea59326630fbac344cbc6234beed2d26cfb27
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/04_class.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" LMS - Learning Management System \" Title","stepMatchArguments":[{"group":{"start":21,"value":"\" LMS - Learning Management System \"","children":[{"start":22,"value":" LMS - Learning Management System ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" Manage Class\" Header","stepMatchArguments":[{"group":{"start":21,"value":"\" Manage Class\"","children":[{"start":22,"value":" Manage Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end