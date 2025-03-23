// Generated from: tests/features/03_batch.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Batch Module -Batch Page Navigation', () => {

  test.beforeEach('Background', async ({ Given, loggedInPage }) => {
    await Given('Admin is on the home page after Login', null, { loggedInPage }); 
  });
  
  test('Verify Admin Navigate to Batch page successfully', async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should be in the " Manage Batch" Page', null, { commonFunctions }); 
  });

  test('Validate "Title" in Batch Page', async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the " LMS - Learning Management System " Title in the Batch Page', null, { commonFunctions }); 
  });

  test('Validate "heading" in the Batch Page', async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the " Manage Batch" Heading', null, { commonFunctions }); 
  });

  test('Validate disabled "Delete Icon" under the header in the Batch Page', async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the disabled Delete Icon under the header', null, { commonFunctions }); 
  });

  test('Validate pagination in the Batch Page', async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the enabled pagination controls under the data table', null, { commonFunctions }); 
  });

  test('Validate edit icon in each data rows', async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the edit icon in each row', null, { commonFunctions }); 
  });

  test('Validate delete icon in each data rows', async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the delete icon in each row', null, { commonFunctions }); 
  });

  test('Validate checkbox in each data rows', async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the checkbox in each row', null, { commonFunctions }); 
  });

  test('Validate Datatable headers', async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the datatable headers Batch name, Batch Description,Batch Status, No Of Classes, Program Name, Edit/Delete', null, { commonFunctions }); 
  });

  test('Validate "Checkbox" in the Datatable header row', async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the checkbox  in the datatable header row', null, { commonFunctions }); 
  });

  test('Validate "sort icon" next to all the datatable header', async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the sort icon next to all Datatable headers', null, { commonFunctions }); 
  });

  test('', async ({  }) => { 
  });

  test('Validate single row delete with checkbox', { tag: ['@Delete'] }, async ({ Given, paginationPage, commonFunctions, When, Then, batchPage }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage batch header', null, { commonFunctions }); 
    await Then('The respective row in the table should be deleted', null, { batchPage, commonFunctions }); 
  });

  test('Validate multiple row delete with checkbox', { tag: ['@Delete'] }, async ({ Given, paginationPage, commonFunctions, When, Then, batchPage }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage batch header for multiple rows', null, { commonFunctions }); 
    await Then('The respective row in the table should be deleted', null, { batchPage, commonFunctions }); 
  });

  test('Validate next page link', { tag: ['@pagination'] }, async ({ Given, paginationPage, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks next page link on the data table', null, { commonFunctions }); 
    await Then('Admin should see the Next enabled link', null, { commonFunctions }); 
  });

  test('validate last page link', { tag: ['@pagination'] }, async ({ Given, paginationPage, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks last page link on the data table', null, { commonFunctions }); 
    await Then('Admin should see the last page link with next page link disabled on the table', null, { commonFunctions }); 
  });

  test('validate the previous page link', { tag: ['@pagination'] }, async ({ Given, paginationPage, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks previous page link on the data table', null, { commonFunctions }); 
    await Then('Admin should see the previous page on the table', null, { commonFunctions }); 
  });

  test('validate the first page link', { tag: ['@pagination'] }, async ({ Given, paginationPage, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks first page link on the data table', null, { commonFunctions }); 
    await Then('Admin should see the very first page on the data table', null, { commonFunctions }); 
  });

  test('Verify Admin Add Batch successfully', async ({ Given, loggedInPage, When, batchPage, commonFunctions, Then }) => { 
    await Given('Admin is on the Batch Page', null, { loggedInPage }); 
    await When('Admin Clicks on the Add Batch button and fill the required fields', null, { batchPage, commonFunctions }); 
    await Then('Admin should create a "new Batch successfully"', null, { batchPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/03_batch.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Admin should be in the \" Manage Batch\" Page","stepMatchArguments":[{"group":{"start":23,"value":"\" Manage Batch\"","children":[{"start":24,"value":" Manage Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" LMS - Learning Management System \" Title in the Batch Page","stepMatchArguments":[{"group":{"start":21,"value":"\" LMS - Learning Management System \"","children":[{"start":22,"value":" LMS - Learning Management System ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" Manage Batch\" Heading","stepMatchArguments":[{"group":{"start":21,"value":"\" Manage Batch\"","children":[{"start":22,"value":" Manage Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the disabled Delete Icon under the header","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the enabled pagination controls under the data table","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the edit icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":42,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the delete icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":47,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox in each row","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":52,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable headers Batch name, Batch Description,Batch Status, No Of Classes, Program Name, Edit/Delete","stepMatchArguments":[]}]},
  {"pwTestLine":55,"pickleLine":57,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox  in the datatable header row","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":62,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort icon next to all Datatable headers","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":70,"tags":[],"steps":[]},
  {"pwTestLine":68,"pickleLine":75,"tags":["@Delete"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":76,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":77,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage batch header","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":78,"keywordType":"Outcome","textWithKeyword":"Then The respective row in the table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":74,"pickleLine":80,"tags":["@Delete"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage batch header for multiple rows","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then The respective row in the table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":80,"pickleLine":90,"tags":["@pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":91,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":92,"keywordType":"Action","textWithKeyword":"When Admin clicks next page link on the data table","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":93,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Next enabled link","stepMatchArguments":[]}]},
  {"pwTestLine":86,"pickleLine":95,"tags":["@pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":96,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":97,"keywordType":"Action","textWithKeyword":"When Admin clicks last page link on the data table","stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":98,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the last page link with next page link disabled on the table","stepMatchArguments":[]}]},
  {"pwTestLine":92,"pickleLine":100,"tags":["@pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":101,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":102,"keywordType":"Action","textWithKeyword":"When Admin clicks previous page link on the data table","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":103,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the previous page on the table","stepMatchArguments":[]}]},
  {"pwTestLine":98,"pickleLine":105,"tags":["@pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":106,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":107,"keywordType":"Action","textWithKeyword":"When Admin clicks first page link on the data table","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":108,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the very first page on the data table","stepMatchArguments":[]}]},
  {"pwTestLine":104,"pickleLine":111,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":112,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Page","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":113,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Add Batch button and fill the required fields","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":114,"keywordType":"Outcome","textWithKeyword":"Then Admin should create a \"new Batch successfully\"","stepMatchArguments":[{"group":{"start":22,"value":"\"new Batch successfully\"","children":[{"start":23,"value":"new Batch successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end