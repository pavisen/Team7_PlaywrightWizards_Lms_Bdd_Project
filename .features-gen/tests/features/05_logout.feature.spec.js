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

  test('Validate multiple class deletion by selecting Single checkbox and Yes Button', { tag: ['@smoke'] }, async ({ Given, loggedInPage, commonFunctions, When, Then }) => { 
    await Given('Admin is in Manage Class page', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks single checkbox in the data table and Admin clicks <YES> button on the alert', null, { commonFunctions }); 
    await Then('Admin should land on Manage class page and can see the selected class is deleted from the data table', null, { commonFunctions }); 
  });

  test('Validate multiple class deletion by selecting multiple check boxes with YES button', async ({ Given, loggedInPage, commonFunctions, When, Then }) => { 
    await Given('Admin is in Manage Class page', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks any checkbox in the data table and Admin clicks <YES> button on the alert for multiple', null, { commonFunctions }); 
    await Then('Admin should land on Manage class page and can see the selected class are deleted from the data table', null, { commonFunctions }); 
  });

  test('Validate yes button on the confirm alert box', { tag: ['@DeleteBatch'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch confirm popup page', null, { commonFunctions }); 
    await When('Admin clicks on the delete icon and click yes button', null, { commonFunctions }); 
    await Then('Admin should see the successful message and the batch should be deleted', null, { commonFunctions }); 
  });

  test('Validate single row delete with checkbox for batch', { tag: ['@smoke'] }, async ({ Given, commonFunctions, When, Then, batchPage }) => { 
    await Given('Admin is on the batch Page', null, { commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage batch header', null, { commonFunctions }); 
    await Then('The respective row in the table should be deleted', null, { batchPage, commonFunctions }); 
  });

  test('Validate multiple row delete with checkbox for batch', { tag: ['@Deletion'] }, async ({ Given, commonFunctions, When, Then, batchPage }) => { 
    await Given('Admin is on the batch Page', null, { commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage batch header for multiple rows', null, { commonFunctions }); 
    await Then('The respective multiple rows in the table should be deleted', null, { batchPage, commonFunctions }); 
  });

  test('Verify Admin is able to click \'Yes\'', async ({ Given, commonFunctions, When, Then, programPage }) => { 
    await Given('Admin is on Confirm deletion form', null, { commonFunctions }); 
    await When('Admin clicks on "Yes" button', null, { commonFunctions }); 
    await Then('Admin can see Successful Program Deleted message', null, { programPage }); 
  });

  test('Validate single row delete with checkbox for program', { tag: ['@smoke'] }, async ({ Given, loggedInPage, commonFunctions, When, programPage, Then }) => { 
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
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm Deletion alert","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When Admin clicks yes option","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Admin gets a message \"Successful Class Deleted\" alert and do not see that Class in the data table","stepMatchArguments":[{"group":{"start":21,"value":"\"Successful Class Deleted\"","children":[{"start":22,"value":"Successful Class Deleted","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":21,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given Admin is in Manage Class page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When Admin clicks single checkbox in the data table and Admin clicks <YES> button on the alert","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on Manage class page and can see the selected class is deleted from the data table","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given Admin is in Manage Class page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Admin clicks any checkbox in the data table and Admin clicks <YES> button on the alert for multiple","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on Manage class page and can see the selected class are deleted from the data table","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":33,"tags":["@DeleteBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon and click yes button","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the successful message and the batch should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":38,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage batch header","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then The respective row in the table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":43,"tags":["@Deletion"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage batch header for multiple rows","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then The respective multiple rows in the table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":50,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm deletion form","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Yes\" button","stepMatchArguments":[{"group":{"start":16,"value":"\"Yes\"","children":[{"start":17,"value":"Yes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":61,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin can see Successful Program Deleted message","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":55,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":56,"keywordType":"Context","textWithKeyword":"Given Admin is on the program page for delete","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":57,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage program header","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then The respective row in the program table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":60,"tags":["@Deletion"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":61,"keywordType":"Context","textWithKeyword":"Given Admin is on the program page for delete","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":62,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage program header for multiple rows","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then The respective multiple rows in the program table should be deleted","stepMatchArguments":[]}]},
]; // bdd-data-end